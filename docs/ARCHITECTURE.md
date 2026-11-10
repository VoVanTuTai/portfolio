# Frontend & Content Architecture

This repository houses the personal portfolio, interactive Business Analysis / Project Management showcase, Knowledge Hub monographs, and printable A4 Curriculum Vitae library for **Võ Văn Tú Tài** (`https://vovantutai-portfolio.vercel.app`).

## 1. Architectural Direction

The codebase is undergoing an incremental migration from a single-file prototype into a **Feature-Based Modular Architecture** optimized for clarity, strict type safety, and route-level code splitting.

### Target Directory Layout

```text
├── .github/workflows/ci.yml     # Automated typecheck, link integrity & build CI
├── docs/ARCHITECTURE.md         # System structure & refactoring guide
├── public/                      # Static A4 HTML & PDF CVs + visual assets
├── scripts/check-assets.mjs     # Zero-dependency CV & media link verifier
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
    ├── components/              # Shared UI primitives (BrandAvatar, RouteLoader)
    ├── features/                # Feature-sliced UI modules loaded via React.lazy
    │   ├── portfolio/           # PortfolioPage + HeroSection, ArchSimulator, ProjectDeck, etc.
    │   ├── project-management/  # Interactive SDLC, WBS/CPM Gantt, CR & Risk Matrix
    │   └── knowledge/           # KnowledgeHubPage + 5 technical monograph lesson pages
    ├── App.tsx                  # Route matcher + React.lazy & Suspense boundary
    ├── main.tsx                 # Minimal (<20 line) entry point mounting App
    └── styles/                  # Modular token & feature stylesheets (Phase 4 target)
```

## 2. Refactoring Roadmap

| Phase | Scope | Status |
|---|---|---|
| **Phase 1: Foundation Setup** | `@/*` path alias in TS & Vite, strict compiler checks (`noUnusedLocals`, `noUnusedParameters`), CI workflow, link verifier script, formatting rules, architecture doc | **Completed** |
| **Phase 2: Type & Data Extraction** | Separate TypeScript domain contracts (`src/types/*`) and static/i18n/PM/lesson datasets (`src/data/*`) from UI rendering | **Completed** |
| **Phase 3: Feature & Route Splitting** | Decompose page views into `src/features/*` with `React.lazy()` + `Suspense`, splitting the >500 KB bundle into on-demand route chunks and shrinking `src/main.tsx` to `< 20` lines | **Completed** |
| **Phase 4: Stylesheet Modularization & Unit Tests** | Split `src/styles.css` into tokens + scoped CSS modules and add Vitest regression checks for interactive simulators | Planned |

## 3. Engineering Guardrails

1. **Strict Type Contracts:** `tsconfig.json` enforces `strict`, `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`. Every UI section consumes explicit interfaces from `@/types/*`.
2. **Separation of Content and Presentation:** Bilingual i18n dictionaries (`vi.tsx`, `en.tsx`), WBS/CPM Gantt data, code lab comparisons, and BA STAR/competency blocks live in `src/data/*` so content updates never risk breaking component logic.
3. **Static Asset & Resume Integrity:** `npm run check:links` validates every HTML/PDF resume and image asset referenced across `src/`, `index.html`, `README.md`, and `public/*.html`, and blocks expired legacy domains.
4. **Light-Mode Executive Design System:** All UI components maintain a high-contrast light visual system aligned with executive documentation and ATS-ready PDF resumes.
