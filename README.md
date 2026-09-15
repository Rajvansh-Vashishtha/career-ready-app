# 🚀 Career Ready - AI-Powered Career Decision Platform & Product Showcase

> **🌐 Live Interactive App:** [https://career-ready-app.vercel.app](https://career-ready-app.vercel.app)  
> **📄 Interactive PRD Spec:** Available inline in application  
> **🎨 Figma Prototype:** Available inline in application  

**Career Ready** is an AI-powered career decision engine and Product Management (PM) case study application designed for fresh graduates, entry-level job seekers, and career switchers. It helps candidates accurately evaluate role readiness, identify critical skill gaps, optimize resumes for ATS screening, practice AI mock interviews, and execute 30-60-90 day career roadmaps.

---

## 🌟 Key Features & Core AI Modules

1. **Interactive Career Readiness Simulator**:
   - **Score Ring Engine**: Calculates a 0–100% readiness score with SVG animated ring visuals.
   - **Role Competencies**: Custom matching algorithm across 5 target roles (*Associate Product Manager*, *AI PM*, *Software Engineer*, *Data/Product Analyst*, *UX Designer*).
   - **Competency Radar**: Dynamic breakdown of candidate strengths vs industry hiring benchmarks.

2. **AI Recruiter Lens Engine**:
   - Simulates hiring manager and HR candidate screening.
   - Provides instant candidate tiering (*Top 12% Candidate*), key differentiators, and hiring verdicts.

3. **Resume ATS & Skill Gap Optimizer**:
   - Live NLP parsing of resume bullet points.
   - Identifies high-value keywords, evaluates action-verb impact density, and suggests targeted metric fixes to boost callback rates.

4. **AI Mock Interview Practice Engine**:
   - Interactive role-based interview question bank (*Product Strategy*, *Metrics & Telemetry*, *AI System Fallbacks*).
   - Real-time AI evaluation providing scores out of 100, framework verification, and constructive examiner feedback.

5. **Skill ROI & Career Impact Engine**:
   - Calculates career trajectory value, estimated hours to master, and salary uplift percentages per missing skill (e.g. +28% salary boost for mastering PostHog/Amplitude telemetry).

6. **30-60-90 Day Personalized Execution Roadmap**:
   - Actionable timeline breaking down Month 1 (Gap Bridging), Month 2 (Case Study Portfolio), and Month 3 (Placement & Outreach).

7. **Interactive Product Requirements Document (PRD)**:
   - Full PM specification viewer with Table of Contents covering Product Vision, Personas, Jobs-to-be-Done (JTBD), MVP Features, Business Model, and Risk Mitigations.

8. **Figma Wireframes & Prototype Stage**:
   - Interactive screen selector simulating design flows (Onboarding, Assessment, Dashboard, Timeline).

9. **Live PostHog Telemetry Stream**:
   - Real-time log stream tracking user activation rate, feature retention, and event captures.

10. **Assessment Report Exporter**:
    - Generates and downloads structured `.json` / PDF career readiness reports.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core**: HTML5, Vanilla JavaScript (ES6+)
- **Styling**: Vanilla CSS3, Glassmorphism Design System, Custom CSS Variables, Dark Mode Palette
- **Typography**: Google Fonts (*Outfit* + *Inter*)
- **Icons**: Lucide Icons
- **Data & Telemetry**: Native JSON Data Contracts & Client-side Event Log Stream

---

## 🚀 How to Run the Application

### Method 1: Direct Browser Launch
1. Open File Explorer and navigate to:
   `C:\Users\User\.gemini\antigravity\scratch\career-ready-app\`
2. Double-click **`index.html`** to run the app instantly in any modern browser.

### Method 2: Local HTTP Web Server
If you prefer running via a local server (e.g. for testing clean relative paths):
```bash
# Navigate to project folder
cd C:\Users\User\.gemini\antigravity\scratch\career-ready-app

# Start a simple local server with Python
python -m http.server 8080

# Or with Node.js npx
npx serve .
```
Access the application at `http://localhost:8080`.

---

## 💼 Portfolio & Resume Talking Points for Candidates

### Product Management / APM Resume Bullets
- **Engineered Career Ready**, an AI-driven career decision platform that assesses role readiness across 5 tech tracks and reduces applicant drop-off through personalized 90-day roadmaps.
- **Authored comprehensive PRD (v2.4)** incorporating JTBD user personas, product telemetry metrics (North Star: WAER), and AI hallucination risk mitigations.
- **Designed interactive Glassmorphic UI & Figma wireframes** featuring live ATS resume scanning, AI mock interview grading, and PostHog real-time event telemetry logging.
- **Built candidate scoring algorithms** calculating weighted readiness scores and skill ROI salary uplift projections.

---

## 📁 File Structure

```
career-ready-app/
├── index.html       # Main application markup & tab structure
├── styles.css       # Glassmorphism design tokens & responsive CSS
├── app.js           # Interactive AI engines & application logic
└── README.md        # Documentation, setup guide, & portfolio resume points
```
