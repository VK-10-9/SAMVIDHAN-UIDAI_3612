# 🚀 SAMVIDHAN UIDAI - Getting Started Guide

Welcome to **SAMVIDHAN UIDAI**! This comprehensive guide will have you up and running in just 5 minutes.

> **What you'll build:** A fully functional government analytics platform with 6 AI frameworks, interactive dashboards, and 40+ API endpoints.

**Table of Contents:**
- [⚡ Quick Start (5 min)](#quick-start-5-minutes)
- [📁 Project Structure](#project-structure)
- [🔧 System Requirements](#system-requirements)
- [🐛 Troubleshooting](#troubleshooting)
- [📚 Next Steps](#next-steps)

---

## ⚡ Quick Start (5 Minutes)

### Prerequisites
✅ **Node.js** 18+ installed  
✅ **Python** 3.11+ installed  
✅ **Git** installed

### Step 1: Clone Repository (1 min)
```bash
git clone https://github.com/VK-10-9/SAMVIDHAN-UIDAI_3612.git
cd SAMVIDHAN-UIDAI_3612
```

### Step 2: Install Dependencies (2 min)
```bash
# Frontend dependencies
npm install

# Backend dependencies (in new terminal)
cd backend
pip install -r requirements.txt
```

### Step 3: Start Services (2 min)
**Terminal 1 - Backend:**
```bash
cd backend
python main.py
# ✅ API running at http://localhost:8000
```

**Terminal 2 - Frontend:**
```bash
npm run dev
# ✅ Dashboard at http://localhost:3000
```

### Step 4: Verify & Explore
- 🎨 **Dashboard:** http://localhost:3000
- 📚 **API Docs:** http://localhost:8000/docs
- 🔍 **API Explorer:** http://localhost:8000/redoc

---

## 📁 Project Structure

```
SAMVIDHAN-UIDAI_3612/
├── 📖 README.md                      # Project overview
├── 📖 README_PROFESSIONAL.md         # Enterprise version
├── 🚀 GETTING_STARTED.md             # This file
├── 📊 CodeBase of dashBorad/
│   ├── app/                          # Next.js frontend pages
│   ├── backend/                      # FastAPI server
│   ├── components/                   # React components
│   ├── dataset/                      # Sample datasets
│   └── 📚 DOCUMENTATION_INDEX.md     # All docs directory
└── 📚 Full docs in CodeBase folder
```
├── app/                       ← Frontend (Next.js)
│   ├── page.tsx              ← Home page
│   ├── overview/             ← Overview dashboard
│   ├── data-explorer/        ← Data browsing
│   ├── state-analytics/      ← State comparison
│   ├── policy/               ← Policy tracking
│   ├── anomalies/            ← Anomaly detection
│   └── mobility/             ← Mobility tracking
│
├── backend/                  ← Backend (FastAPI)
│   ├── main.py              ← API server
│   ├── requirements.txt      ← Python dependencies
│   ├── frameworks/           ← 6 Intelligence frameworks
│   ├── services/             ← Business logic
│   └── utils/                ← Helper functions
│
├── components/              ← Reusable React components
├── lib/                      ← Utility libraries
├── public/                   ← Static files
└── dataset/                  ← Sample data
```

---

## 🎯 Core Features at a Glance

### 1. 📊 Dashboard (`/overview`)
- Executive summary
- Key metrics
- State distribution
- Enrollment trends

### 2. 🔍 Data Explorer (`/data-explorer`)
- Browse all data
- Filter & search
- Export to CSV/Excel
- Custom views

### 3. 📈 State Analytics (`/state-analytics`)
- Compare states
- District breakdown
- Trend analysis
- Performance ranking

### 4. 🏛️ Policy (`/policy`)
- Policy tracking
- Implementation status
- Compliance metrics
- Impact assessment

### 5. ⚠️ Anomalies (`/anomalies`)
- Detect issues
- Investigate records
- Track resolution
- Generate reports

### 6. 🚗 Mobility (`/mobility`)
- Track movement
- Migration analysis
- Cross-state patterns
- Geofencing data

---

## 🔗 API Quick Reference

### Get National Stats
```bash
curl http://localhost:8000/api/national-overview
```

### Get State Data
```bash
curl http://localhost:8000/api/analytics/states/DL
```

### Get Anomalies
```bash
curl http://localhost:8000/api/anomalies/list
```

### Get Enrollment Trends
```bash
curl http://localhost:8000/api/enrollment-timeline
```

**Full API Docs:** http://localhost:8000/docs

---

## 💡 First Things to Try

### 1. Explore the Overview Dashboard
1. Open http://localhost:3000
2. View national statistics
3. Click on a state to see details
4. Adjust date range filters

### 2. Browse Data
1. Go to Data Explorer
2. Search for specific records
3. Apply filters (state, age, status)
4. Try exporting to CSV

### 3. Compare States
1. Navigate to State Analytics
2. Select 2-3 states
3. Compare metrics side-by-side
4. View district breakdown

### 4. Check for Anomalies
1. Click Anomalies tab
2. Filter by severity
3. Click on an anomaly to investigate
4. Review related records

### 5. Test the API
1. Open http://localhost:8000/docs
2. Try "Try it out" on endpoints
3. View request/response
4. Copy curl examples

---

## ⚙️ Configuration

### Environment Variables
Create `.env.local` in root directory:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
DATABASE_URL=file:./dataset/clean/
ANALYTICS_CACHE_TTL=300
```

### Backend Config
Modify `backend/main.py` to change:
- Server port (default: 8000)
- Data cache time
- Log level
- Allowed origins (CORS)

---

## 🐛 Troubleshooting

### Dashboard won't load?
```bash
# Check if backend is running
curl http://localhost:8000/api/national-overview

# If error, restart backend
cd backend && python main.py
```

### API returns 404?
- Verify backend is running on port 8000
- Check API endpoint spelling
- See docs at http://localhost:8000/docs

### Data not showing?
- Check `dataset/clean/` has CSV files
- Restart backend to reload cache
- Check browser console for errors

### Slow performance?
- Use filters to reduce data
- Check browser DevTools (Network tab)
- Restart services
- Close other tabs/apps

---

## 📚 Learn More

| Resource | Link |
|----------|------|
| Full README | [README.md](README.md) |
| Dashboard Guide | [DASHBOARD_GUIDE.md](DASHBOARD_GUIDE.md) |
| Code Examples | [CODEBOOK.ipynb](CODEBOOK.ipynb) |
| API Docs | http://localhost:8000/docs |
| Framework Details | [Framework_Analysis.ipynb](Framework_Analysis.ipynb) |

---

## 🤝 Need Help?

### Check These First:
1. **Docs:** Read DASHBOARD_GUIDE.md
2. **API Docs:** Visit http://localhost:8000/docs
3. **Examples:** See CODEBOOK.ipynb
4. **Issues:** Check GitHub Issues

### Common Commands:
```bash
# Start frontend
npm run dev

# Start backend
python backend/main.py

# Build for production
npm run build

# Run backend tests
cd backend && pytest

# Install new dependency
npm install <package-name>
```

---

## 🎓 Next Steps

After getting started:

1. **Explore Data** - Use Data Explorer to familiarize yourself
2. **Review Dashboards** - Check each section's features
3. **Read Code Examples** - See CODEBOOK.ipynb for API usage
4. **Build Custom Views** - Create filtered exports
5. **Integrate with Tools** - Use APIs for external dashboards
6. **Deploy** - Follow production deployment guide

---

## 📈 Performance Monitoring

Monitor your instance:
- **Dashboard Response:** Should be <1 second
- **API Response:** Should be <500ms
- **Page Load:** Should be <3 seconds
- **Export Time:** Should be <5 seconds for 1M records

If slower, check:
- Browser DevTools Network tab
- Backend server logs
- System resource usage
- Data size and filters

---

## 🔒 Security Reminders

- ✅ Always use HTTPS in production
- ✅ Never commit secrets to git
- ✅ Use environment variables for config
- ✅ Enable authentication before deployment
- ✅ Keep dependencies updated: `npm audit`, `pip audit`

---

## 🚀 You're Ready!

Your SAMVIDHAN UIDAI instance is now running. Start by:

1. ➡️ Opening http://localhost:3000
2. ➡️ Exploring the Overview Dashboard
3. ➡️ Checking API at http://localhost:8000/docs
4. ➡️ Reading detailed guides in this repo

**Happy analyzing! 🎉**

---

**Need updates?** Check back to this guide periodically for new features!

**Last Updated:** January 25, 2026  
**Version:** 1.0.0
