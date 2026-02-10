# 🛡️ SAMVIDHAN: Aadhaar Intelligence Platform

> **Enterprise-grade analytics and fraud detection platform for India's Aadhaar identity system**
> Powered by 6 AI frameworks for governance intelligence, citizen privacy, and policy optimization

[![FastAPI](https://img.shields.io/badge/FastAPI-0.104-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=flat-square&logo=python)](https://python.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/VK-10-9/SAMVIDHAN-UIDAI_3612?style=flat-square&label=Stars)](https://github.com/VK-10-9/SAMVIDHAN-UIDAI_3612)

---

## 🎯 Problem Statement

India's Aadhaar system serves **1.4 billion+ citizens**, creating unique challenges:
- ❌ **Fraudulent enrollments** - Detecting duplicate/fake identities
- ❌ **Data integrity issues** - Normalization and verification across distributed systems
- ❌ **Privacy concerns** - Enabling analytics while protecting citizen data
- ❌ **Resource optimization** - Tracking population mobility for better allocation
- ❌ **Identity resilience** - Managing biometric aging and system vulnerabilities

**SAMVIDHAN** leverages 6 advanced AI frameworks to solve these challenges at scale.

---

## ✨ Key Features

### 🔐 Six Intelligence Frameworks

| Framework | Purpose | Key Capabilities |
|-----------|---------|------------------|
| **ADIF** | Data Integrity | Normalization, duplicate detection, multi-factor verification |
| **IRF** | Identity Resilience | Biometric aging, escalation management, fail-safe protocols |
| **AFIF** | Forensic Intelligence | Hub detection, fraud networks, risk alerting |
| **PROF** | Resource Optimization | Migration pressure index, demand forecasting |
| **AMF** | Mobility Framework | 12-component mobility tracking, geofencing |
| **PPAF** | Privacy-Preserving | Differential privacy, federated analytics, role-based access |

### 📊 Dashboard Features
- **National Overview** - Real-time enrollment statistics
- **State Analytics** - State-wise breakdown with coverage gaps
- **Anomaly Detection** - AI-powered fraud detection
- **Data Explorer** - Interactive data table with filters
- **Mobility Analysis** - Population movement patterns
- **Policy Recommendations** - Data-driven insights

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **Python** 3.11+
- **npm** or **pnpm**

### 1️⃣ Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/samvidhan.git
cd samvidhan

# Install frontend dependencies
npm install

# Install backend dependencies
pip install -r backend/requirements.txt
```

### 2️⃣ Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
python main.py
# API running at http://localhost:8000
```

**Terminal 2 - Frontend:**
```bash
npm run dev
# Dashboard at http://localhost:3000
```

### 3️⃣ Explore
- 📊 **Dashboard**: http://localhost:3000
- 📚 **API Docs**: http://localhost:8000/docs
- 🔍 **API Endpoints**: http://localhost:8000/redoc

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        SAMVIDHAN Platform                        │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐          ┌──────────────────────────────┐ │
│  │   Next.js 16     │          │      FastAPI Backend         │ │
│  │   Dashboard      │◄────────►│      (40+ Endpoints)         │ │
│  │   (React 19)     │   REST   │                              │ │
│  └──────────────────┘          └──────────────────────────────┘ │
│                                           │                      │
│                                           ▼                      │
│  ┌──────────────────────────────────────────────────────────────┐│
│  │                  6 Intelligence Frameworks                    ││
│  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐            ││
│  │  │ADIF │ │ IRF │ │AFIF │ │PROF │ │ AMF │ │PPAF │            ││
│  │  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘            ││
│  └──────────────────────────────────────────────────────────────┘│
│                                           │                      │
│                                           ▼                      │
│  ┌──────────────────────────────────────────────────────────────┐│
│  │              CSV Datastore (Optimized with Caching)          ││
│  │         Enrollment | Demographic | Biometric Data            ││
│  └──────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
samvidhan/
├── app/                    # Next.js pages
│   ├── page.tsx           # Landing page
│   ├── overview/          # National dashboard
│   ├── data-explorer/     # Data table view
│   ├── mobility/          # Mobility analysis
│   └── ...
│
├── backend/               # FastAPI server
│   ├── main.py           # 40+ API endpoints
│   ├── csv_db.py         # Optimized CSV datastore
│   ├── frameworks/       # 6 intelligence frameworks
│   ├── utils/            # Helper functions
│   ├── analytics/        # Analysis layer
│   └── security/         # Security & audit
│
├── components/            # React components
│   ├── dashboard/        # Dashboard components
│   └── ui/               # Shadcn UI components
│
├── dataset/              # Sample data
│   ├── clean/            # Processed CSVs
│   └── raw/              # Raw data
│
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

---

## 🔌 API Endpoints

### Core Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/national-overview` | GET | National enrollment statistics |
| `/api/mobility/state-distribution` | GET | State-wise breakdown |
| `/api/enrollment-timeline` | GET | Enrollment trends over time |
| `/api/anomalies/list` | GET | Detected anomalies |

### Framework Endpoints

| Framework | Endpoint | Description |
|-----------|----------|-------------|
| **ADIF** | `/api/signals/duplicates` | Detect duplicate records |
| **IRF** | `/api/irf/multi-factor` | Multi-factor verification |
| **AFIF** | `/api/afif/hub-analysis` | Fraud hub detection |
| **PROF** | `/api/prof/mpi` | Migration pressure index |
| **AMF** | `/api/amf/mobility-tier` | Mobility classification |
| **PPAF** | `/api/ppaf/differential-privacy` | Privacy-preserving queries |

📖 **Full API Documentation**: http://localhost:8000/docs

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS, Shadcn/UI, Recharts |
| **Backend** | FastAPI, Uvicorn, Python 3.11+ |
| **Data** | CSV with TTL-based caching, Index acceleration |

---

## 🔒 Privacy & Security

SAMVIDHAN implements privacy-by-design:

- **Differential Privacy** - Laplace/Gaussian noise mechanisms
- **Federated Analytics** - No central data collection
- **Role-Based Access** - 5-tier access control
- **Identity Hashing** - SHA256 irreversible hashing
- **Audit Logging** - Complete activity trails

---

## 📊 Frameworks Deep Dive

### ADIF - Aadhaar Data Integrity Framework
- Automatic data normalization
- Duplicate detection with confidence scores
- Multi-factor verification (age, biometric consistency)

### IRF - Identity Resilience Framework
- Biometric aging assessment
- Escalation management for anomalies
- Fail-safe response protocols

### AFIF - Aadhaar Forensic Intelligence Framework
- Hub/network detection
- Fraud pattern analysis
- Risk alerting with geospatial analysis

### PROF - Public Resource Optimization Framework
- Migration Pressure Index (MPI)
- Demand forecasting by region
- Outcome feedback loops

### AMF - Aadhaar Mobility Framework
12-component system including:
- Mobility tier classification
- Cross-state verification
- Seasonal migration tracking
- Employer/NGO verification
- Geofencing & dual address support

### PPAF - Privacy-Preserving Analytics Framework
- Differential privacy (ε-δ budgets)
- Federated query execution
- Hamming distance identity matching
- 5 user roles × 4 classification levels

---

## 📝 Adding to Your Resume

Want to showcase this project on your resume, LinkedIn, or portfolio? We've got you covered!

### Quick Start (5 minutes)
📋 **[RESUME_QUICK_REFERENCE.md](RESUME_QUICK_REFERENCE.md)** - Copy-paste bullet points, key metrics, and elevator pitch

### Comprehensive Guide (30 minutes)
📖 **[RESUME_HELPER.md](RESUME_HELPER.md)** - Complete templates for resume, LinkedIn, portfolio, and interviews

### Step-by-Step Instructions
🎓 **[HOW_TO_ADD_TO_RESUME.md](HOW_TO_ADD_TO_RESUME.md)** - Detailed guide with best practices and examples

**Highlights to mention**:
- 🚀 Processes **1.4B+ records** with **<500ms** response times
- 💻 **40+ REST APIs** and **6 interactive dashboards**
- 🤖 **6 AI frameworks** including differential privacy
- 📚 **15,000+ words** of professional documentation
- ✅ Production-ready full-stack application

---

## Team

Team Name: Vidyut

- Vishwanath Koliwad - GitHub: https://github.com/VK-10-9 | LinkedIn: https://www.linkedin.com/in/vishwanath-koliwad/
- Raheel Hosmani - GitHub: https://github.com/Raheel-Techz-Life | LinkedIn: https://www.linkedin.com/in/raheel-hosmani-78ab92315/
- Bhumika Dalabhanjan - GitHub: https://github.com/bhumika0115 | LinkedIn: https://www.linkedin.com/in/bhumika-dalabhanjan-047bbb361/
- Disha Raikar - GitHub: https://github.com/DishaRaikar15 | LinkedIn: https://www.linkedin.com/in/disha-raikar-4b153335a/

---

## 📜 License

MIT License - see [LICENSE](LICENSE) for details.

---

<div align="center">

## 🌟 **Transform Government Analytics Today** 🌟

**[📊 Dashboard](http://localhost:3000)** · **[📚 API Docs](http://localhost:8000/docs)** · **[📖 Getting Started](GETTING_STARTED.md)** · **[💡 Full Docs](CodeBase of dashBorad/DOCUMENTATION_INDEX.md)** · **[📝 Add to Resume](HOW_TO_ADD_TO_RESUME.md)**

---

### Built with ❤️ for India's Digital Future

*Securing identity, empowering governance, protecting citizens*

[⭐ Star us on GitHub](https://github.com/VK-10-9/SAMVIDHAN-UIDAI_3612/stargazers) · [🔗 Join the Community](https://github.com/VK-10-9/SAMVIDHAN-UIDAI_3612/discussions)

</div>
