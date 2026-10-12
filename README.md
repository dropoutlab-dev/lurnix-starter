# Lurnix — Student Starter Template

> **"Learn by Building. Grow by Creating."**  
> The official curriculum starter template for students learning with [Lurnix](https://github.com/dropoutlab-dev/lurnix), an open technology learning platform by [DropOutLab](https://github.com/dropoutlab-dev).

Official Platform: [https://github.com/dropoutlab-dev/lurnix](https://github.com/dropoutlab-dev/lurnix)  
Starter Template: [https://github.com/dropoutlab-dev/lurnix-starter](https://github.com/dropoutlab-dev/lurnix-starter)

---

## 🎯 Welcome, Curious Learner!

This template repository is your canvas for the entire 12-week frontend and web engineering curriculum. Every week you will build real-world, production-ready web applications, track your learning journey with daily logs, deploy live demos to GitHub Pages, and submit your code for senior mentor review and verifiable certificate generation.

---

## 🚀 Quick Start Guide

### Step 1: Use This Template
1. Click the green **"Use this template"** button at the top right of this repository.
2. Select **"Create a new repository"**.
3. Set the repository name to `lurnix-bootcamp` (or your preferred name) and choose **Public**.

### Step 2: Clone to Your Local Environment
```bash
git clone https://github.com/<your-username>/lurnix-bootcamp.git
cd lurnix-bootcamp
```

### Step 3: Git Branching Workflow
The Lurnix platform uses a deterministic branch hierarchy:

```
main (starter template & portfolio index)
  └── week-01 (Week 1 foundation)
        ├── week-01/lesson-01-01 (Lesson 1 project)
        ├── week-01/lesson-01-02 (Lesson 2 project)
        └── ...
```

For each lesson you undertake:
```bash
# 1. Create and switch to your lesson sub-branch
git checkout -b week-01/lesson-01-01

# 2. Build your code in the corresponding week folder
# 3. Stage and commit your changes
git add .
git commit -m "feat(week-01): complete lesson 01-01 portfolio project"

# 4. Push your branch to GitHub
git push -u origin week-01/lesson-01-01
```

---

## 📝 100 Days of Code Learning Journal (`LOG.md`)

Consistent reflection accelerates mastery. After every learning session, update [`LOG.md`](./LOG.md) documenting:
- **What you built today**
- **Key concepts mastered**
- **Obstacles encountered and how you overcame them**
- **Commits and live demo links**

---

## 🌐 GitHub Pages Live Demo Deployment

To showcase your work to mentors and peers:
1. Go to your repository on GitHub.
2. Click **Settings** $\rightarrow$ **Pages** (under Code and automation).
3. Under **Branch**, select `main` (or your active week branch) and folder `/(root)`.
4. Click **Save**.
5. Your live site will be available at:
   `https://<your-username>.github.io/<repo-name>/`

---

## 🗺️ 12-Week Curriculum Roadmap

| Week | Focus Area | Capstone Deliverable |
| :--- | :--- | :--- |
| **Week 01** | HTML5 Semantic Architecture & Standards | Personal Developer Portfolio |
| **Week 02** | Modern CSS3 Layouts, Flexbox & CSS Grid | Responsive Multi-Column Magazine |
| **Week 03** | Mobile-First Design, Media Queries & Animations | High-Performance Landing Page |
| **Week 04** | JavaScript Core, DOM API & Event Architecture | Interactive Task & Workflow App |
| **Week 05** | Async JS, Fetch API, RESTful Endpoints & JSON | Live Currency & Finance Dashboard |
| **Week 06** | ES Modules, Modern Tooling & Component Design | Modular Web Component Library |
| **Week 07** | React 18 Core, JSX, Components & Props | Dynamic E-Commerce Product Catalog |
| **Week 08** | React Hooks (`useState`, `useEffect`, Custom Hooks) | Multi-Step Interactive Form Engine |
| **Week 09** | Client-Side Routing & Global State Architecture | Streaming Media & Movie Explorer |
| **Week 10** | Full-Stack Integration, Auth & Cloud Databases | Collaborative Real-Time Forum |
| **Week 11** | Performance, WCAG AA Accessibility & Testing | Production-Grade Design System |
| **Week 12** | Production Deployment & Capstone Graduation | Full-Stack Showcase Capstone |

---

## 🏆 Homework Submission & Mentorship

1. Open the [Lurnix Learning Platform](https://github.com/dropoutlab-dev/lurnix).
2. Connect your GitHub account via OAuth.
3. Your student fork will automatically synchronize.
4. When submitting homework:
   - Provide your lesson branch (`week-XX/lesson-XX-YY`)
   - Provide your live demo link (GitHub Pages or Netlify)
   - Attach your updated `LOG.md` reflection
5. An automated review issue is generated on GitHub, and our senior mentors review your code within 24 hours.

---

## 📜 License & Code of Conduct

Distributed under the [MIT License](./LICENSE).  
Maintained by [DropOutLab](https://github.com/dropoutlab-dev).
