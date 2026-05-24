# Pokemu — Cursor 2.5 Hackathon Build

> Cultural artifact restoration game. Guess museum artifacts to restore color after the fictional **Great Wipe**. Built live during the hackathon.

## What we're building

**Pokemu** is a Next.js 16 web game where players act as "Rangers" restoring humanity's cultural memory. The vibe is Pokémon-inspired (trainer identity, hearts/lives) but the content is real-world museum artifacts — not Pokémon creatures.

### Core loop

1. **Play** — See a grayscale/mosaic artifact image; guess the name before time runs out.
2. **Win** — Artifact unlocks in your collection; confetti + fact bubbles celebrate the restore.
3. **Lose a heart** — Wrong guesses cost hearts (max 5). Hearts refill over time or via Stripe / reward video.
4. **Explore** — Browse countries and track progress toward restoring each region.
5. **Collect** — Gallery of restored artifacts with optional Gemini "resistance briefing" facts.
6. **Room** — Decorate a personal space with collected artifacts; visit other Rangers' rooms.
7. **Profile** — Username, heart status, and a 3D globe atlas of unlocked countries.

### Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript |
| UI | Mantine 9, Tabler Icons, Framer Motion |
| State | Redux Toolkit |
| Backend | Supabase (Auth + Postgres + Storage) |
| Payments | Stripe Checkout (one-time heart refill) |
| AI | Google Gemini (extra artifact facts in collection) |
| 3D | Three.js + react-three-fiber (profile globe) |

### Routes (target)

```
/                     Landing + backstory onboarding
/login, /register     Supabase email/password auth
/dashboard/play       Main guessing game
/dashboard/explore    Country browser
/dashboard/profile    Username, hearts, 3D atlas
/dashboard/collection Artifact gallery
/dashboard/room       Own room + browse others
/dashboard/room/[id]  Visit another user's room
```

### API routes (target)

```
POST /api/checkout/hearts       Start Stripe checkout for full heart refill
POST /api/checkout/verify         Grant hearts after successful payment
POST /api/webhooks/stripe         Stripe webhook handler
POST /api/profile/video-heart     +1 heart after reward video (at 0 hearts)
POST /api/artifacts/gemini-facts  Gemini-generated resistance facts
```

### Data model (Supabase)

- `profiles` — username, hearts, last_heart_reset, room_bg, progress stats
- `artifacts` — cultural items (name, images, facts, country_code, museum, etc.)
- `user_collections` — user ↔ owned artifacts
- `question_attempts` — play analytics
- `room_decorations` — placed artifacts in rooms (percent positioning)

### Environment variables

See `.env.example`. Required: Supabase URL + anon key, Gemini API key, Stripe keys + price ID, service role key for webhooks.

---

## Hackathon build plan (incremental commits)

Build in this order so each commit is demo-able:

| Step | Commit theme | What ships |
|------|----------------|------------|
| 0 | **Init** | Repo, this doc, `.gitignore` |
| 1 | **Scaffold** | `create-next-app` structure, Mantine theme, providers shell |
| 2 | **Landing** | Home page, backstory dialogue, fonts, globals |
| 3 | **Auth** | Login/register forms, Supabase client, AuthSync → Redux |
| 4 | **Dashboard shell** | Layout, navbar, header, auth guard, theme toggle |
| 5 | **Profile** | Username form, hearts display, basic profile page |
| 6 | **Play (MVP)** | Mosaic image, guess input, hearts deduction, collection unlock |
| 7 | **Explore** | Country cards, progress counts, deep links to play |
| 8 | **Collection** | Searchable gallery, artifact detail modal |
| 9 | **Hearts economy** | Out-of-hearts modal, 24h refill logic, video heart API |
| 10 | **Stripe** | Checkout routes, webhook, buy-hearts hook |
| 11 | **Room** | Decorate own room, drag placement, browse/visit rooms |
| 12 | **Atlas + Gemini** | 3D globe on profile, Gemini facts in collection |
| 13 | **Polish** | Audio, confetti, migrations, final `.env.example` |

---

## Agent notes

- Read `AGENTS.md` for Next.js 16 breaking changes before writing app code.
- Auth is client-guarded in `DashboardShell` (no middleware).
- Max hearts: **5**. Refill: **1 per 24h** from `last_heart_reset`.
- Media paths: `/images/...`, `/audio/...`, and Supabase Storage CDN.

## Reference

Replicating the Pokemu sample from the hackathon workspace. Feature parity is the goal; commits should tell a believable "built in one hour" story.
