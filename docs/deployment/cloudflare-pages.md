# Cloudflare Pages build settings

Framework preset: **None** (static export)

- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/` (repo root is `augova-frontend`)
- Node version: 20 (set `NODE_VERSION=20` as an environment variable in the Pages project settings)

No Cloudflare adapter, Workers, or `wrangler.toml` is required — this is a plain static export.

Next.js 16's static export emits flat route files (e.g. `out/about.html`, `out/contact.html`) rather than
`route/index.html`. Cloudflare Pages resolves clean URLs (`/about`) to these `.html` files automatically, so no
additional redirects/rewrites config is needed.
