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

## Backlog
- P0: User uploads real velora.apk → downloads go live automatically (no code change needed)
- P1: Update APP_VERSION in backend/.env when releasing new builds
- P1: FAQ section (install troubleshooting, premium terms)
- P2: Legal pages (Terms, Privacy, 2257-style compliance statement)
- P2: OG/social share meta images
- P2: Analytics + download counter (MongoDB available via env if wanted)

## Test Credentials
No authentication in this app. See /app/memory/test_credentials.md.
