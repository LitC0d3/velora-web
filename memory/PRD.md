# Velora Landing Page — PRD

## Original Problem Statement
Create a landing page for the adult-oriented (18+) app "Velora". Page must feature an APK download button and explain app features: ad-free content, content downloading, upload-your-own-content / become a creator, integrated short-form videos, and a premium mode ($9.99) with 4K content, exclusive perks, premium community badge, premium-only content. Planned features: private chats with creators (premium-only), automatic in-app updates, reporting system, chat functionality.

## User Choices (confirmed)
- Bilingual toggle: visitor switches ES/EN
- APK is served as a real file from the landing page (user uploads the APK to the project)
- Brand: "Velora", dark purple theme matching app icon/screenshots
- No third-party integrations

## User Personas
- Adult content consumer wanting ad-free, high-quality, discreet mobile viewing
- Independent creator wanting to upload and monetize content
- Premium user wanting 4K, exclusive vaults, gold badge, future private creator chats

## Architecture
- Frontend: React (CRA + craco), Tailwind, framer-motion (scroll reveals, kinetic masked hero), lenis (smooth scroll). Single-page landing, all components in /app/frontend/src/components/. i18n via React context (/app/frontend/src/i18n.js), persisted in localStorage. Age gate (18+) persisted in localStorage.
- Backend: FastAPI, no database needed. Endpoints:
  - GET /api/ — health
  - GET /api/download/status — {available, version, size_bytes, sha256}
  - GET /api/download/apk — FileResponse of /app/backend/apk/velora.apk (404 until uploaded)
- APK drop location: /app/backend/apk/velora.apk (user must provide the real file)

## Implemented (2026-10-01)
- Award-style dark velvet/violet landing: kinetic masked hero headline (fluid clamp sizing, verified no clipping at 375/768/1366), mouse-parallax 3D phone mockups using the user's real app screenshots, grain overlay, slow editorial marquee
- Sticky frosted navbar with original SVG Velora mark (also favicon), ES/EN toggle
- Bento features grid: ad-free, offline downloads, creator hub (image tile), shorts, discreet mode, Android
- Premium VIP spotlight: $9.99, 4K, exclusive vaults, gold community badge, priority perks
- Roadmap: private creator chats (Q3 2026), auto in-app updates (Q4 2026), reporting system (Q4 2026), live community chat (Q1 2027)
- Download modal: live status check, SHA-256 + size when APK present, 3-step Android install guide, "pending" state until APK is uploaded
- 18+ age gate + discretion footer

## Verification done
- curl: /api/ 200, /api/download/status 200 (available:false until upload), /api/download/apk 404 (by design, no APK yet)
- Playwright screenshots: age gate, hero, features, premium, roadmap, modal, ES toggle, 375/768/1366 layouts

## Implemented (2026-10-02) — Mockup fix + longer page
- Fixed phone mockup cropping: new shared `PhoneFrame.jsx` sizes the frame to the real screenshot ratio (800x1280 = 5:8) with object-contain; hero phones now visible on all breakpoints (side phone hidden <sm)
- New bilingual sections (components + EN/ES dictionaries in i18n.js): Stats band, "Inside the app" screens gallery (uses both user screenshots) + 6-tab nav strip, How it works (3 steps), Creator hub (85% payout), Free vs Premium comparison table (9 rows), Safety & Privacy (6 items), FAQ accordion (6 Qs), Final CTA banner
- Shared `SectionHead.jsx`; Navbar + Footer gained FAQ link; Creators nav link → #creator-hub
- Brand mark replaced with the user's original Velora logo (/frontend/public/velora-logo.png, cropped from upload); `VeloraMark` now renders it everywhere (navbar, footer, age gate, CTA); favicon.png updated
- Page height now ~10,800px (was ~4,500px). Tested by testing agent: /app/test_reports/iteration_1.json (100% pass, 375/768/1920)

## Implemented (2026-10-02) — GitHub Pages (static hosting, zero cost)
- User has no hosting budget → landing made fully static. Backend is NO LONGER used by the frontend (kept only for the preview env; may be deleted).
- `DownloadModal.jsx` now fetches `${PUBLIC_URL}/apk/release.json` (static manifest: available, version, size_bytes, sha256, url). Download link = manifest `url` (relative to site or absolute e.g. GitHub Releases).
- `frontend/scripts/release-apk.js <apk> [--version] [--url]`: computes size/SHA-256, copies APK to `public/apk/velora.apk` (if <100MB and no --url) and writes release.json.
- `package.json` `"homepage": "."` → relative asset paths, works at `user.github.io/repo/` and custom domains. `public/.nojekyll` added.
- `.github/workflows/deploy-pages.yml`: on push to main → yarn build (CI=false, DISABLE_EMERGENT_OVERLAY=true) → deploy to GitHub Pages (Source must be "GitHub Actions").
- Spanish step-by-step guide: `/app/DEPLOY_GITHUB_PAGES.md`.
- Verified: production build served from a subpath (`/velora-repo/`) loads, modal shows version/size/SHA from manifest and href `./apk/velora.apk`.
- Logo fix (inner color) was already done in a prior commit (91ae596) — verified image is intact.

## Implemented (2026-10-02) — Logo path fix + real APK registered
- `Logo.jsx` now uses `${PUBLIC_URL}/velora-logo.png` (absolute `/velora-logo.png` 404'd on GitHub Pages subpath `/velora-web/`).
- `public/apk/release.json` points to the user's real APK: Supabase URL `.../updates/velora_v0.10.0.apk`, v0.10.0, 25.6 MB, SHA-256 computed. Hero badge version updated to v0.10.0 (i18n.js EN/ES).
- Live site: https://litc0d3.github.io/velora-web/ (repo LitC0d3/velora-web). Workflow no longer uses yarn cache / frozen-lockfile (yarn.lock not committed).

## Backlog
- P1: Optionally delete `backend/` once published on GitHub Pages
- P2: Legal pages (Terms, Privacy, 2257-style compliance statement)
- P2: OG/social share meta images
- P2: Analytics + download counter (MongoDB available via env if wanted)
- P2: Split i18n.js into en.js / es.js (528 lines)

## Test Credentials
No authentication in this app. See /app/memory/test_credentials.md.
