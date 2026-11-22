# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary audience:** recruiters, hiring managers and tech leads at international remote companies (US/EU) who are filling a senior full stack role.
- **How they arrive:** from a LinkedIn profile, an application or a shared link.
- **What they need:** to decide in roughly 30 seconds to 3 minutes whether Luis is worth a conversation. They scan first and read a case study only if the scan convinces them.
- **Secondary audience:** Spanish-speaking recruiters and clients in LATAM. Spanish is the default language; English is one click away.

## Product Purpose

Personal portfolio of Luis Almenarez ("Lucho"). It exists to turn a recruiter's quick scan into a conversation. Success is an email: the visitor understands what Luis does, believes he has shipped it to production, and writes to him.

## Positioning

A full stack engineer who takes critical integrations and automations to production: HubSpot CRM, n8n workflows, payments and AI-agent-assisted delivery, on Next.js, TypeScript, SQL Server and Azure/AWS. He is not presented as a generalist "Senior Full Stack Developer". Seniority is shown through shipped outcomes and the decisions behind them, not claimed through titles.

## Operating Context

- **Where visitors come from:** LinkedIn, job applications and direct links. The page is also opened on phones.
- **Résumé:** a printable résumé is expected. It lives at `/cv/` (and `/en/cv/`) and is generated from the same data as the site.
- **Case studies:** each one lives at its own route (`/proyectos/<slug>`, `/en/proyectos/<slug>`) and follows problem → role and decisions → measurable result.

## Capabilities and Constraints

- **Stack:** Astro 6 static site, Tailwind 4, deployed on Vercel. Requires Node ≥ 22.
- **Content model:** content lives in typed data files (`src/data/*.ts`) and i18n strings (`src/i18n/ui.ts`). Copy changes go through these files.
- **Languages:** Spanish at the root (default), English at `/en`, with a language switch always visible (decided 2026-11-21, reversing the earlier English-first plan). Existing routes stay valid.
- **SEO that must survive the redesign:** schema.org Person JSON-LD, per-locale Open Graph cards, hreflang and canonical tags, and the sitemap.
- **Theme:** decided by the chosen visual direction (dark "Edition" direction under exploration as of 2026-11-21).
- **Contact:**
  - Primary contact is email.
  - LinkedIn and GitHub are secondary.
  - WhatsApp is not shown to the primary audience.

## Brand Commitments

- **Name:** Luis Almenarez. "Lucho" is acceptable as an informal alias.
- **Leadership:** described by scope (leads several teams depending on the project, owns technical decisions, takes systems to production). It is never described as "a team of 5".
- **Voice:** achievements stated plainly in the third person or as outcomes. No first-person bragging, no hype.

## Evidence on Hand

- **HubSpot migration (NGDS, 2026):**
  - Has a full case study in `src/data/projects.ts`.
  - A lease workflow moved from a legacy system to HubSpot and went live on 2026-11-17. It covers filing, online payment, a decision engine, the contract, e-signature and issuance.
  - The client is under NDA and is only ever "a lease-insurance company in Colombia". No client names, domains, repos, IDs, rates, people or screenshots. Figures only from the existing write-up.
- **Commission settlement (PrevalentWare, 2025–2026):** the loans and insurance modules reached production, validated across 7 real biweekly settlement cycles with 60+ versioned business rules. The case study is still to be written.
- **trk (own product):** CLI compiled for Mac, Linux and Windows, a Next.js API on Supabase and a Claude Code skill, in a Bun monorepo. The case study is still to be written.
- **Archive:** Fleet optimizer (demo), CloudFleetExtract, Universidad de los Andes ecosystem, Admin dashboard, Gymplate and the engineering studio site.
- **Career:** about 4 years (Sep 2022 → present) at Coordinadora de Tanques, Esinergia, PrevalentWare and NGDS.
- **Credentials:** SENA software analysis and development technologist; Coderhouse React career.
- **Languages:** Spanish native. English level is not displayed on the site (decided 2026-11-21).
- **Photo:** `src/assets/avatar.jpg`.
- **Must not be fabricated:** testimonials, client logos, metrics beyond the write-ups, or employer endorsements. There are none of any of these.

## Product Principles

1. **Proof over adjectives.** Every claim of seniority is backed by a shipped outcome or a named decision.
2. **One scan, one story.** A 30-second visitor leaves knowing the niche and the strongest case. Depth is there for whoever opens it.
3. **Nothing redundant.** Each section earns its place. Skills and credentials live inside the work rather than as separate lists.
4. **NDA-safe by default.** Professional work is described without anything that identifies a client.
5. **One source of truth.** The site, the case studies and the résumé read from the same data.

## Accessibility & Inclusion

WCAG 2.2 AA:
- Full keyboard navigation.
- `prefers-reduced-motion` respected, including for the signature scroll-drawn line.
- Print styles for the résumé.
