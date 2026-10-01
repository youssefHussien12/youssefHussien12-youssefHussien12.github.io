# Youssef Hussien Ahmed — Personal Backend Developer Portfolio

A modern, high-performance developer portfolio built specifically for **Back-End Developer** roles and recruiter engagement, highlighting expertise in **Node.js, Express.js, RESTful APIs, database architectures, and secure server-side applications**.

---

## 🚀 Features & Highlights

- **Backend-First Positioning**: Immediately communicates a pure focus on Backend Development and Node.js rather than generic full-stack templates.
- **Interactive Server & API Simulator**: Real-time simulated Express middleware pipeline showcasing JWT auth, role validation, latency metrics, and JSON payloads.
- **Featured Projects Architecture**: In-depth breakdowns of 4 core projects including the primary featured **E-Commerce Dashboard**, with interactive API specification and endpoint inspectors.
- **Prominent Backend Experience**: Clean timeline emphasizing the **Back-End Internship at IT Gates** (Node.js/Express.js APIs).
- **Recruiter-Friendly Contact**: 1-click clipboard email and phone copying, verified links, and a functional recruiter messaging form.
- **SEO & Social Optimization**: Pre-configured meta tags, OpenGraph attributes, and developer favicon.
- **Ultra-Clean Dark Developer Aesthetic**: Curated slate/zinc palette with electric blue accents, soft borders, and glassmorphism.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations / Effects**: Canvas Confetti, subtle Tailwind keyframes
- **Typography**: Inter (UI) & JetBrains Mono (Code & APIs)

---

## 📁 Project Structure

```text
pro/
├── public/
│   └── Youssef Hussien Ahmed CV.pdf     # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                   # Sticky navigation & mobile drawer
│   │   ├── Hero.jsx                     # Headline, recruiter badges, API simulator
│   │   ├── About.jsx                    # Core introduction & backend pillars
│   │   ├── Skills.jsx                   # 6 categorized skill groupings with filters
│   │   ├── Projects.jsx                 # Featured projects & API modal inspector
│   │   ├── Experience.jsx               # Work history timeline (IT Gates highlighted)
│   │   ├── Education.jsx                # MIS Degree & Route Academy Diploma
│   │   ├── Contact.jsx                  # Direct recruiter channels & message form
│   │   └── Footer.jsx                   # Quick links, copyright & back-to-top
│   ├── data/
│   │   └── portfolioData.js             # Central configuration file for all links & text
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html                           # SEO & OpenGraph meta tags
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚙️ How to Customize Your Links & Data

All personal links, project URLs, and contact info are centralized in **[`src/data/portfolioData.js`](file:///c:/Users/PC/Desktop/pro/src/data/portfolioData.js)**. 

To update your email, phone, GitHub, or LinkedIn, simply edit the `personalInfo` object:

```javascript
export const personalInfo = {
  name: "Youssef Hussien Ahmed",
  role: "Back-End Developer",
  email: "your-email@gmail.com",
  phone: "+20 11 5863 8306",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  cvUrl: "/Youssef Hussien Ahmed CV.pdf",
};
```

---

## 💻 Running Locally

To run the portfolio on your computer:

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Visit `http://localhost:3000/` in your browser.

---

## 📦 Production Build & Deployment

To create an optimized production build:

```bash
npm run build
```

The output will be placed in the `dist/` directory, ready for deployment on **Vercel**, **Render**, **Netlify**, or **GitHub Pages**.
