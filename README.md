# Pokemu

**Restore color. Reclaim memory. Become a Ranger.**

Pokemu is a cultural-artifact guessing game built for the **Cursor 2.5 Hackathon**. After the fictional *Great Wipe*, Earth lost its color — your job as a Scavenger Ranger is to identify museum artifacts from pixelated clues, unlock them in your collection, and push back against DoomGPT’s grayscale regime.

The vibe is Pokémon-inspired (trainer identity, hearts/lives), but every item is a real-world cultural artifact — not creatures.

---

## Play the loop

| Mode | What you do |
|------|-------------|
| **Play** | Guess artifact names before time runs out; wrong answers cost hearts |
| **Explore** | Browse countries and track regional restoration progress |
| **Collection** | View restored artifacts and optional AI “resistance briefings” |
| **Room** | Decorate your ranger HQ and visit other players’ rooms |
| **Profile** | Set your username, track hearts, and see world progress |

Hearts refill over time (1 per 24h), or via reward video / Stripe purchase when you’re out of lives.

---

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Mantine 9** — UI, notifications, dark/light theme
- **Redux Toolkit** — auth, profile, collection state
- **Supabase** — auth, Postgres, storage
- **Stripe** — one-time heart refill checkout
- **Google Gemini** — extra artifact facts in collection (upcoming)
- **Three.js** — 3D profile globe (upcoming)

---

## Getting started

### Prerequisites

- Node.js 20+
- A [Supabase](https://supabase.com) project with `profiles`, `artifacts`, `user_collections`, and related tables
- (Optional) Stripe + Gemini keys for payments and AI facts

### Install & run

```bash
git clone https://github.com/kevicebryan/cursor-2.5-hackathon.git
cd cursor-2.5-hackathon
npm install
cp .env.example .env.local
```

Fill in `.env.local` (see below), then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` | Yes | Supabase anon/publishable key |
| `NEXT_PUBLIC_SITE_URL` | Yes | App URL for Stripe redirects (e.g. `http://localhost:3000`) |
| `GEMINI_API_KEY` | For AI facts | Google AI Studio key |
| `STRIPE_SECRET_KEY` | For payments | Stripe secret key |
| `STRIPE_PRICE_ID_HEART_REFILL` | For payments | One-time Price ID for full heart refill |
| `STRIPE_WEBHOOK_SECRET` | For payments | Stripe webhook signing secret |
| `SUPABASE_SERVICE_ROLE_KEY` | For webhooks | Service role key (server-only) |

---

## Project structure

```
app/
  (auth)/login, register     # Supabase email auth
  dashboard/                 # Authenticated game shell
    play, explore, profile, collection, room
  api/                       # Checkout, webhooks, Gemini (upcoming)
components/
  sections/                  # Feature UI (auth, dashboard, profile, …)
redux/                       # auth, profile, collection slices
lib/supabase/                # Client + admin helpers
util/                        # Constants, heart captions, storage helpers
```

Agent-oriented docs: [CLAUDE.md](./CLAUDE.md) (build plan + architecture), [AGENTS.md](./AGENTS.md) (Next.js 16 notes).

---

## Hackathon build progress

This repo is built **commit-by-commit** to mirror a live one-hour hackathon:

| Step | Status | Feature |
|------|--------|---------|
| 0 | Done | Repo init + vision doc |
| 1 | Done | Next.js + Mantine + Redux scaffold |
| 2 | Done | Landing + backstory dialogue |
| 3 | Done | Login / register |
| 4 | Done | Dashboard shell (nav, hearts, theme) |
| 5 | Done | Profile (username, stats, refill caption) |
| 6 | — | Play (guessing game MVP) |
| 7 | — | Explore |
| 8 | — | Collection |
| 9–13 | — | Hearts economy APIs, Stripe, rooms, atlas, polish |

---

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

---

## License

Built for the Cursor 2.5 Hackathon. Use and adapt as you like for demos and learning.

**Repository:** https://github.com/kevicebryan/cursor-2.5-hackathon
