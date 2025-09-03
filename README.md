# Users Dashboard (Next.js + TypeScript)

A responsive dashboard that lists users from **JSONPlaceholder**, with **search** (by name/email), **pagination**, and a **user details** page. Built using **Next.js App Router**, **TailwindCSS**, **Framer Motion** (animations), and a subtle **3D background** via `@react-three/fiber`.

Live Data: https://jsonplaceholder.typicode.com/
Check out the live project here:  
[https://dashboard-users-nextjs-1.vercel.app/users](https://dashboard-users-nextjs-1.vercel.app/users)


## Quickstart

```bash
# 1) Install deps
pnpm install   # or: npm install / yarn

# 2) Run dev server
pnpm dev       # or: npm run dev
```

Then open http://localhost:3000

## Deploy (Vercel)

1. Push this folder to a new GitHub repo (e.g., `dashboard-users-nextjs`).
2. Create a project on https://vercel.com → "Add New…" → "Project" → Import your repo.
3. Use defaults; no env vars needed. Deploy.
4. Set the project's timezone to **Asia/Dhaka** under Settings if you care about logs/time.

## Features Checklist

- [x] User List Page (`/users`)
- [x] Fetch users from JSONPlaceholder (server-side)
- [x] Search by name or email (debounced, URL-synced)
- [x] Pagination (5 per page, URL param `?page=`)
- [x] User Details Page (`/users/[id]`)
- [x] Navigation between list and details
- [x] Responsive (Tailwind grid, fluid layout)
- [x] Animations (Framer Motion: list/card transitions)
- [x] 3D element (react-three-fiber torus knot background)

## Tech

- **Next.js 14 (App Router) + TypeScript**
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **@react-three/fiber** + **three** for a tiny, perf-friendly 3D background
- **lucide-react** icons

## Notes

- All data is public fake data; no API keys.
- Search and pagination are **URL-driven**, enabling shareable state and server-rendered results.
- The 3D canvas is non-interactive (`pointer-events: none`) and light to keep UX snappy.
- To change page size: edit `PAGE_SIZE` in `app/users/page.tsx`.

## Remix?

Prefer Remix? Porting is straightforward—fetch in loader, use route modules for `/users` and `/users/:id`, and carry over the same components.
