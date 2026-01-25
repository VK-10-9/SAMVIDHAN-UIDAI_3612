# 📂 SAMVIDHAN UIDAI - Codebase Structure

Complete overview of the project's folder organization and file structure.

---

## 🏗️ Overall Architecture

```
SAMVIDHAN-UIDAI_3612/
│
├── 📚 DOCUMENTATION FILES (8 files)
│   ├── README.md
│   ├── PROJECT_EVALUATION.md
│   ├── FOR_JUDGES.md
│   ├── DASHBOARD_GUIDE.md
│   ├── GETTING_STARTED.md
│   ├── DOCUMENTATION_INDEX.md
│   ├── CONTRIBUTORS.md
│   └── UI_DOCUMENTATION.md
│
├── 🎨 FRONTEND (Next.js + React + TypeScript)
│   └── app/
│       ├── page.tsx (Landing page)
│       ├── layout.tsx (Root layout)
│       ├── globals.css (Global styles)
│       ├── 📁 anomalies/
│       │   ├── page.tsx
│       │   └── layout.tsx
│       ├── 📁 data-explorer/
│       │   ├── page.tsx
│       │   └── layout.tsx
│       ├── 📁 state-analytics/
│       │   ├── page.tsx
│       │   └── layout.tsx
│       ├── 📁 policy/
│       │   ├── page.tsx
│       │   └── layout.tsx
│       ├── 📁 mobility/
│       │   ├── page.tsx
│       │   └── layout.tsx
│       ├── 📁 overview/
│       │   ├── page.tsx
│       │   └── layout.tsx
│       ├── 📁 infographic/
│       │   ├── page.tsx
│       │   └── layout.tsx
│       └── 📁 api/
│           └── explorer/
│
├── 🔧 BACKEND (FastAPI + Python)
│   └── backend/
│       ├── main.py (40+ API endpoints)
│       ├── requirements.txt (Dependencies)
│       ├── requirements-dev.txt (Dev dependencies)
│       ├── run_server.py (Server runner)
│       ├── backend.log (Logs)
│       │
│       ├── 📁 frameworks/ (6 Intelligence Systems)
│       │   ├── __init__.py
│       │   ├── adif.py (Data Integrity Framework)
│       │   ├── irf.py (Identity Resilience Framework)
│       │   ├── afif.py (Forensic Intelligence Framework)
│       │   ├── prof.py (Resource Optimization Framework)
│       │   ├── amf.py (Mobility Framework)
│       │   └── ppaf.py (Privacy-Preserving Framework)
│       │
│       ├── 📁 services/ (27 Business Logic Services)
│       │   ├── __init__.py
│       │   ├── address_leasing.py
│       │   ├── anomaly_detector.py
│       │   ├── biometric_aging.py
│       │   ├── cross_state_lock.py
│       │   ├── demand_forecasting.py
│       │   ├── differential_privacy.py
│       │   ├── dual_address.py
│       │   ├── duplicate_detector.py
│       │   ├── expiry_alerts.py
│       │   ├── federated_analytics.py
│       │   ├── feedback_loop.py
│       │   ├── g2b_verification.py
│       │   ├── geo_fencing.py
│       │   ├── hashed_identity_signals.py
│       │   ├── hub_detector.py
│       │   ├── migration_pressure_index.py
│       │   ├── mobility_tier_classifier.py
│       │   ├── risk_alerting.py
│       │   ├── state_comparison.py
│       │   └── ... (more services)
│       │
│       ├── 📁 models/ (6 Data Models)
│       │   ├── __init__.py
│       │   ├── adif_normalizer.py
│       │   ├── audit_logs.py
│       │   ├── confidence.py
│       │   ├── escalation.py
│       │   ├── risk_alerting.py
│       │   └── ... (more models)
│       │
│       ├── 📁 core/ (7 Core Utilities)
│       │   ├── __init__.py
│       │   ├── async_io_handler.py
│       │   ├── csv_db.py
│       │   ├── mock_data.py
│       │   └── ... (more core files)
│       │
│       ├── 📁 analytics/ (Analytics Engine)
│       │   ├── __init__.py
│       │   └── ... (analytics modules)
│       │
│       ├── 📁 security/ (Security & Privacy)
│       │   ├── __init__.py
│       │   └── ... (security modules)
│       │
│       ├── 📁 utils/ (Helper Functions)
│       │   ├── __init__.py
│       │   └── ... (utility functions)
│       │
│       └── 📁 __pycache__/ (Python cache)
│
├── ⚛️ REACT COMPONENTS (components/)
│   ├── 📁 ui/ (60 files - Shadcn UI Components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── alert.tsx
│   │   ├── badge.tsx
│   │   ├── calendar.tsx
│   │   ├── chart.tsx
│   │   ├── date-picker.tsx
│   │   ├── drawer.tsx
│   │   ├── form.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── scroll-area.tsx
│   │   ├── separator.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── switch.tsx
│   │   ├── toast.tsx
│   │   ├── tooltip.tsx
│   │   └── ... (40+ more UI components)
│   │
│   ├── 📁 dashboard/ (18 files - Dashboard Components)
│   │   ├── dashboard-header.tsx
│   │   ├── dashboard-layout.tsx
│   │   ├── dashboard-sidebar.tsx
│   │   ├── overview-cards.tsx
│   │   ├── chart-container.tsx
│   │   ├── data-table.tsx
│   │   ├── filters.tsx
│   │   └── ... (more dashboard components)
│   │
│   ├── 📁 charts/ (Chart Components)
│   │   ├── bar-chart.tsx
│   │   ├── line-chart.tsx
│   │   ├── pie-chart.tsx
│   │   ├── area-chart.tsx
│   │   └── ... (more chart types)
│   │
│   ├── 📁 maps/ (3 files - Map Components)
│   │   ├── state-map.tsx
│   │   ├── district-map.tsx
│   │   └── geofence-map.tsx
│   │
│   ├── 📁 sections/ (2 files - Section Components)
│   │   ├── header.tsx
│   │   └── footer.tsx
│   │
│   └── 📁 common/ (3 files - Common Components)
│       ├── navbar.tsx
│       ├── sidebar.tsx
│       └── breadcrumb.tsx
│
├── 🎣 CUSTOM HOOKS (hooks/)
│   ├── use-dashboard-data.ts
│   ├── use-debounce.ts
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── 📦 UTILITIES (lib/)
│   ├── api.ts (API client)
│   ├── utils.ts (Helper utilities)
│   ├── constants.ts (Constants)
│   └── ... (more utilities)
│
├── 📊 STYLES (styles/)
│   ├── globals.css (Global styles)
│   └── ... (component styles)
│
├── 📁 PUBLIC (public/)
│   ├── manifest.json
│   └── ... (static assets)
│
├── 📁 DATASET (dataset/)
│   ├── 📁 clean/ (Processed CSVs)
│   │   └── ... (clean data files)
│   └── 📁 raw/ (Raw data)
│       └── ... (raw data files)
│
├── 📁 SCRIPTS (scripts/)
│   ├── 01-init-schema.sql
│   ├── 02-seed-states-districts.sql
│   ├── 03-generate-mock-data.py
│   ├── 04-parse-csv-data.py
│   ├── load_csvs.sql
│   ├── load_dataset.py
│   └── validate_load.py
│
├── 📁 SAMVIDHAN-UI (samvidhan-ui/)
│   ├── app/ (Duplicate app structure)
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── public/
│   ├── styles/
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── ⚙️ CONFIGURATION FILES
│   ├── package.json (Dependencies)
│   ├── package-lock.json (Lock file)
│   ├── tsconfig.json (TypeScript config)
│   ├── tailwind.config.ts (Tailwind config)
│   ├── postcss.config.mjs (PostCSS config)
│   ├── next.config.mjs (Next.js config)
│   ├── components.json (Components config)
│   ├── .eslintrc.json (ESLint config)
│   ├── .editorconfig (Editor config)
│   ├── pyproject.toml (Python project config)
│   ├── .env.example (Env template)
│   ├── .env.local (Local env - excluded from git)
│   └── .gitignore (Git ignore rules)
│
└── 📄 OTHER FILES
    ├── LICENSE (MIT License)
    ├── next-env.d.ts (Next.js types)
    └── robots.ts (SEO robots file)
```

---

## 📊 Statistics

| Component | Count | Details |
|-----------|-------|---------|
| **Dashboard Pages** | 6 | Overview, Data Explorer, State Analytics, Policy, Anomalies, Mobility |
| **API Endpoints** | 40+ | Full REST API coverage |
| **Intelligence Frameworks** | 6 | ADIF, IRF, AFIF, PROF, AMF, PPAF |
| **Backend Services** | 27 | Business logic implementations |
| **Data Models** | 6+ | Pydantic models for validation |
| **React Components** | 100+ | UI components + dashboard components |
| **UI Components** | 60+ | Shadcn UI library |
| **Custom Hooks** | 4 | React custom hooks |
| **Documentation Files** | 8 | Markdown guides + notebooks |

---

## 🔄 Data Flow

```
USER INTERFACE (React/Next.js)
         ↓
    COMPONENTS
    (UI, Charts, Maps)
         ↓
    CUSTOM HOOKS
    (API calls, state management)
         ↓
    API CLIENT (lib/api.ts)
         ↓
    FASTAPI BACKEND
    (40+ endpoints)
         ↓
    BUSINESS LOGIC
    (27 services)
         ↓
    INTELLIGENCE FRAMEWORKS
    (6 frameworks)
         ↓
    DATA LAYER
    (CSV Database + Caching)
```

---

## 🎯 Frontend Architecture

```
Next.js Pages (app/)
├── Page 1: Overview Dashboard
├── Page 2: Data Explorer
├── Page 3: State Analytics
├── Page 4: Policy Tracking
├── Page 5: Anomaly Detection
└── Page 6: Mobility Tracking
         ↓
    Reusable Components
    ├── UI Components (60+ from Shadcn)
    ├── Dashboard Components (18)
    ├── Chart Components (5+)
    ├── Map Components (3)
    └── Common Components (3)
         ↓
    Custom React Hooks
    └── API data fetching
         ↓
    TypeScript + Tailwind CSS
```

---

## 🔧 Backend Architecture

```
FastAPI Server (main.py - 40+ endpoints)
         ↓
    REQUEST ROUTING
         ↓
    BUSINESS LOGIC LAYER
    ├── 27 Services
    │   ├── Anomaly detection
    │   ├── Risk alerting
    │   ├── Duplicate detection
    │   ├── Mobility classification
    │   ├── Demand forecasting
    │   ├── Privacy computation
    │   └── ... (more services)
         ↓
    INTELLIGENCE FRAMEWORKS
    ├── ADIF (Data Integrity)
    ├── IRF (Identity Resilience)
    ├── AFIF (Forensic Intelligence)
    ├── PROF (Resource Optimization)
    ├── AMF (Mobility Framework)
    └── PPAF (Privacy-Preserving)
         ↓
    DATA MODELS
    ├── Data validation (Pydantic)
    ├── Response schemas
    └── Data transformations
         ↓
    DATA ACCESS
    ├── CSV Database (core/csv_db.py)
    ├── Caching layer
    └── Query optimization
```

---

## 🗂️ Key Files by Function

### Frontend Entry Points
- `app/page.tsx` - Home/landing page
- `app/overview/page.tsx` - Executive dashboard
- `app/data-explorer/page.tsx` - Data browsing interface
- `app/state-analytics/page.tsx` - State comparison
- `app/policy/page.tsx` - Policy tracking
- `app/anomalies/page.tsx` - Anomaly detection
- `app/mobility/page.tsx` - Mobility analysis

### Backend Entry Points
- `backend/main.py` - FastAPI server with 40+ endpoints
- `backend/frameworks/*` - Intelligence systems
- `backend/services/*` - Business logic (27 services)
- `backend/models/*` - Data models and validators
- `backend/core/csv_db.py` - Data storage and querying

### Utilities
- `lib/api.ts` - API client for frontend
- `lib/utils.ts` - Helper functions
- `lib/constants.ts` - Application constants
- `hooks/*.ts` - Custom React hooks

### Configuration
- `next.config.mjs` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS setup
- `package.json` - Dependencies and scripts

---

## 📈 Codebase Metrics

- **Total TypeScript/JavaScript**: ~15,000 lines
- **Total Python**: ~10,000 lines
- **Documentation**: 20,000+ words
- **Code Examples**: 25+
- **Git Commits**: 15+
- **Components**: 100+
- **API Endpoints**: 40+
- **Frameworks**: 6
- **Services**: 27+
- **Data Models**: 6+

---

## 🚀 Development Setup

The codebase is organized for:
- **Easy navigation** - Clear folder structure
- **Scalability** - Modular components and services
- **Maintainability** - Separation of concerns
- **Testing** - Organized test-ready architecture
- **Deployment** - Docker and production-ready config

---

**Repository:** https://github.com/VK-10-9/SAMVIDHAN-UIDAI_3612

