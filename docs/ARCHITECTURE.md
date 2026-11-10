# Frontend & Content Architecture

This repository houses the personal portfolio, interactive Business Analysis / Project Management showcase, Knowledge Hub monographs, and printable A4 Curriculum Vitae library for **Võ Văn Tú Tài** (`https://vovantutai-portfolio.vercel.app`).

## 1. Architectural Direction

The codebase is undergoing an incremental migration from a single-file prototype into a **Feature-Based Modular Architecture** optimized for clarity, strict type safety, and route-level code splitting.

### Target Directory Layout

```text
├── .github/workflows/ci.yml     # Automated typecheck, link integrity, Vitest & build CI
├── docs/ARCHITECTURE.md         # System structure & refactoring guide
├── public/                      # Static A4 HTML & PDF CVs + visual assets
├── scripts/
│   ├── check-assets.mjs         # Exported CV, media & canonical URL verifier
│   └── check-assets.d.mts       # TypeScript declaration for Node test consumers
├── tests/                       # Vitest unit & repository integrity suites
│   ├── pm-cpm.test.ts           # WBS DAG validation, CPM forward/backward pass & geometry
│   └── check-links.test.ts      # Repository CV/media link & domain policy verification
└── src/
    ├── types/                   # Canonical domain interfaces & shared utility types
    │   ├── common.types.ts
    │   ├── portfolio.types.ts
    │   ├── pm.types.ts
    │   ├── knowledge.types.ts
    │   └── index.ts
    ├── data/                    # Pure domain content, i18n copy & curriculum specs
    │   ├── i18n/
    │   │   ├── vi.tsx           # Vietnamese portfolio locale copy
    │   │   └── en.tsx           # English portfolio locale copy
    │   ├── lessons/             # Knowledge Hub curriculum datasets
    │   ├── academic.ts          # 4 Academic Pillars & 5 Research Monographs
    │   ├── architecture-steps.ts# 4-Stage OMS Interactive Architecture telemetry
    │   └── pm.data.ts           # SDLC pipeline, WBS Gantt CPM, CR flow & Risk Matrix
    ├── utils/                   # Pure business & scheduling helpers
    │   └── pm-cpm.ts            # CPM forward/backward solver, DAG validator & Gantt math
    ├── components/              # Shared UI primitives & scoped chrome
    │   ├── BrandAvatar.tsx
    │   ├── RouteLoader.tsx
    │   └── Topbar.module.css    # CSS Module for shared top navigation chrome
    ├── features/                # Feature-sliced UI modules loaded via React.lazy
    │   ├── portfolio/           # PortfolioPage + HeroSection, ArchSimulator, ProjectDeck, etc.
    │   │   └── components/      # Modular sections + HeroSection.module.css & Cards.module.css
    │   ├── project-management/  # Interactive SDLC, WBS/CPM Gantt, CR & Risk Matrix
    │   └── knowledge/           # KnowledgeHubPage + 5 technical monograph lesson pages
    ├── App.tsx                  # Route matcher + React.lazy & Suspense boundary
    ├── main.tsx                 # Minimal (<20 line) entry point mounting App
    └── styles/                  # Modular token & route-split CSS architecture
        ├── tokens.css           # Global :root design tokens, base resets, keyframes & utilities
        └── features/            # Scoped feature stylesheets imported per lazy chunk
            ├── portfolio-page.css
            ├── project-management.css
            ├── knowledge-base.css
            ├── programming-languages.css
            ├── business-analysis.css
            ├── data-modeling.css
            └── backend-api.css
```

## 2. Refactoring Roadmap

| Phase | Scope | Status |
|---|---|---|
| **Phase 1: Foundation Setup** | `@/*` path alias in TS & Vite, strict compiler checks (`noUnusedLocals`, `noUnusedParameters`), CI workflow, link verifier script, formatting rules, architecture doc | **Completed** |
| **Phase 2: Type & Data Extraction** | Separate TypeScript domain contracts (`src/types/*`) and static/i18n/PM/lesson datasets (`src/data/*`) from UI rendering | **Completed** |
| **Phase 3: Feature & Route Splitting** | Decompose page views into `src/features/*` with `React.lazy()` + `Suspense`, splitting the >500 KB bundle into on-demand route chunks and shrinking `src/main.tsx` to `< 20` lines | **Completed** |
| **Phase 4: Stylesheet Modularization & Unit Tests** | Split `src/styles.css` into `tokens.css` + CSS Modules (`Topbar`, `HeroSection`, `Cards`) + feature CSS; extract pure CPM logic (`src/utils/pm-cpm.ts`) and add Vitest suites for CPM scheduling & broken-link integrity | **Completed** |

## 3. Engineering Guardrails

1. **Strict Type Contracts:** `tsconfig.json` enforces `strict`, `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch` across `src/`, `tests/`, and declaration files.
2. **Separation of Content, Domain Math & Presentation:** Bilingual i18n dictionaries (`vi.tsx`, `en.tsx`), WBS/CPM datasets (`pm.data.ts`), and pure CPM DAG scheduling math (`src/utils/pm-cpm.ts`) are decoupled from React view components.
3. **Scoped & Route-Split Styling:** Global design tokens live in `src/styles/tokens.css`, shared structural chrome uses hashed **CSS Modules** (`*.module.css`), and route-specific styles live in `src/styles/features/` so Vite splits CSS alongside lazy JS chunks.
4. **Static Asset, CV & Regression Integrity:** `npm test` (Vitest) verifies CPM critical-path/slack mathematics and `npm run check:links` validates every HTML/PDF resume and media reference across `src/`, `index.html`, `README.md`, `docs/`, and `public/*.html` without deprecated domains.
5. **Light-Mode Executive Design System:** All UI components maintain a high-contrast light visual system aligned with executive documentation and ATS-ready PDF resumes.
