# Pregnancy Guide

A beautiful, mobile-responsive pregnancy guide website that provides month-by-month information for expecting parents.

## About This Project

This site was **vibe coded** using [Claude Opus 4.5](https://www.anthropic.com/claude) — an experiment in building a complete, functional website through natural conversation with AI. The entire codebase, from design decisions to implementation details, was generated collaboratively through prompts and iteration.

**Created by:** Leon Marbukh

## Features

- **Month-by-Month Guide** — Detailed information for all 9 months of pregnancy
- **Baby's Development** — Track your baby's growth with size comparisons and key milestones
- **Body Changes** — Understand the symptoms and changes happening throughout pregnancy
- **Care & Wellness Tips** — Practical advice for staying healthy
- **Medical Checkups** — Know what tests and appointments to expect
- **Things to Avoid** — Important safety information for each stage
- **Partner Support** — Tips for partners on how to help and be supportive
- **Mobile-First Design** — Fully responsive with a slide-out navigation menu
- **Beautiful UI** — Warm, welcoming color palette with a distinctive design
- **View Transitions** — Smooth page navigation with Astro's View Transitions API
- **Smart Prefetching** — Links are prefetched for instant navigation

## Tech Stack

- [Astro 5](https://astro.build) — Next-gen static site generator with View Transitions
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- Node.js 22+ (see `.nvmrc`)

## Getting Started

```bash
# Use correct Node version (if using nvm)
nvm use

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs at `http://localhost:4321`

## Project Structure

```
src/
├── components/
│   └── Sidebar.astro        # Navigation sidebar
├── data/
│   └── months.ts            # Pregnancy data for all 9 months
├── layouts/
│   └── Layout.astro         # Main layout with View Transitions
├── pages/
│   ├── index.astro          # Homepage
│   └── month/
│       └── [month].astro    # Dynamic month pages
├── styles/
│   └── global.css           # Global styles and custom fonts
public/
├── favicon.svg
└── pregnancy-illustration.svg
```

## Path Aliases

This project uses TypeScript path aliases for cleaner imports:

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@data/*` → `src/data/*`

## Astro 5 Features Used

- **View Transitions** — Smooth, SPA-like navigation between pages
- **`transition:persist`** — Keep sidebar and image stable across navigations
- **Prefetching** — Automatic link prefetching for instant page loads
- **TypeScript Path Aliases** — Clean, maintainable imports
- **Typed `getStaticPaths`** — Full type safety for dynamic routes

## License

MIT

---

Built with ❤️ by Leon Marbukh
