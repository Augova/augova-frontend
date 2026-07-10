"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";

export default function TorusKnotHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040404);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);

    const clock = new THREE.Clock();

    const ambient = new THREE.AmbientLight(0x7b8b9a, 0.8);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 1.2);
    directional.position.set(3, 4, 5);
    scene.add(directional);
    const fill = new THREE.PointLight(0x6d7dff, 18, 20);
    fill.position.set(-4, 2, -3);
    scene.add(fill);

    const geometry = new THREE.TorusKnotGeometry(1.4, 0.38, 220, 24);
    const material = new THREE.MeshStandardMaterial({
      color: 0xb6a47d,
      roughness: 0.34,
      metalness: 0.18,
      emissive: 0x101010,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(8, 64),
      new THREE.MeshBasicMaterial({ color: 0x0d0d0d, side: THREE.DoubleSide })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.1;
    scene.add(floor);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const effect = new AsciiEffect(renderer, " .:-=+*#%@", {
      invert: true,
      color: false,
      resolution: 0.16,
      scale: 1.0,
      alpha: true,
      block: false,
    });
    effect.setSize(width, height);
    effect.domElement.style.position = "absolute";
    effect.domElement.style.inset = "0";
    effect.domElement.style.width = "100%";
    effect.domElement.style.height = "100%";
    effect.domElement.style.background = "#040404";
    effect.domElement.style.color = "#f3efe8";
    effect.domElement.className = "ascii-output";
    container.appendChild(effect.domElement);

    let frameId: number;
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      mesh.rotation.x = elapsed * 0.8;
      mesh.rotation.y = elapsed * 0.6;
      mesh.rotation.z = elapsed * 0.4;
      renderer.render(scene, camera);
      effect.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      effect.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      container.innerHTML = "";
    };
  }, []);

  return (
    <div id="torus-knot-stage" className="absolute inset-0 w-full h-full z-0 opacity-100">
      <div id="app" ref={containerRef} />
    </div>
  );
}
