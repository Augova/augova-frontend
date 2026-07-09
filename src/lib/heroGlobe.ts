// Augova — "Fluffy Globe" hero WebGL mount (M11, extracted from the old React
// component). A noise-displaced wireframe icosahedron lit by a point light
// that follows the pointer. Plain TS, no React — the production hero gates
// this behind a vanilla matchMedia check (src/components/HeroSection.astro)
// so mobile/reduced-motion visitors never pay for the React runtime just to
// decide not to mount WebGL. FluffyGlobeHero.tsx keeps a thin React wrapper
// around this same function for /hero-preview (dev-only comparison tool).
import * as THREE from "three";

// Light grey (token --gray-300 #BCBCBC) so the wireframe glows on --ink.
const WIRE_COLOR = 0xbcbcbc;

const vertexShader = `
  uniform float time;
  varying vec3 vNormal;
  varying vec3 vPosition;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  void main() {
    vNormal = normal;
    vPosition = position;
    float displacement = snoise(position * 2.0 + time * 0.5) * 0.2;
    vec3 newPosition = position + normal * displacement;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 color;
  uniform vec3 pointLightPos;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(pointLightPos - vPosition);
    float diffuse = max(dot(normal, lightDir), 0.0);
    float fresnel = 1.0 - dot(normal, vec3(0.0, 0.0, 1.0));
    fresnel = pow(fresnel, 2.0);
    vec3 finalColor = color * diffuse + color * fresnel * 0.5;
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

/** Mounts the WebGL globe into `mount` and returns a cleanup function. */
export function mountHeroGlobe(mount: HTMLElement): () => void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    mount.clientWidth / mount.clientHeight,
    0.1,
    1000,
  );
  camera.position.z = 3;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(mount.clientWidth, mount.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // perf cap
  mount.appendChild(renderer.domElement);

  const geometry = new THREE.IcosahedronGeometry(1.2, 8);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      pointLightPos: { value: new THREE.Vector3(0, 0, 5) },
      color: { value: new THREE.Color(WIRE_COLOR) },
    },
    vertexShader,
    fragmentShader,
    wireframe: true,
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  let frameId = 0;
  const render = () => renderer.render(scene, camera);

  const animate = (t: number) => {
    material.uniforms.time.value = t * 0.0003;
    mesh.rotation.y += 0.0005;
    mesh.rotation.x += 0.0002;
    render();
    frameId = requestAnimationFrame(animate);
  };

  if (reduced) {
    // Single composed still frame — no motion, no pointer tracking.
    render();
  } else {
    frameId = requestAnimationFrame(animate);
  }

  const handleResize = () => {
    camera.aspect = mount.clientWidth / mount.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    if (reduced) render();
  };

  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    const vec = new THREE.Vector3(x, y, 0.5).unproject(camera);
    const dir = vec.sub(camera.position).normalize();
    const dist = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(dist));
    (material.uniforms.pointLightPos.value as THREE.Vector3).copy(pos);
  };

  // Pause the loop when the tab is hidden (no wasted GPU/CPU).
  const handleVisibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(frameId);
      frameId = 0;
    } else if (!reduced && frameId === 0) {
      frameId = requestAnimationFrame(animate);
    }
  };

  window.addEventListener("resize", handleResize);
  if (!reduced) window.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("visibilitychange", handleVisibility);

  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("visibilitychange", handleVisibility);
    if (renderer.domElement.parentNode === mount) {
      mount.removeChild(renderer.domElement);
    }
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}
