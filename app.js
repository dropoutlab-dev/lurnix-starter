const WEEKS_DATA = [
  { id: 1, week: "Week 01", title: "HTML5 Semantic Architecture", desc: "Build standard-compliant accessible semantic web structure.", folder: "weeks/week-01/" },
  { id: 2, week: "Week 02", title: "CSS3 Flexbox & Grid Systems", desc: "Master modern multi-column layouts and responsive positioning.", folder: "weeks/week-02/" },
  { id: 3, week: "Week 03", title: "Responsive & Mobile-First Design", desc: "Implement fluid typography, media queries, and touch-first interactions.", folder: "weeks/week-03/" },
  { id: 4, week: "Week 04", title: "JavaScript Core & DOM API", desc: "Interactive event dispatchers, dynamic DOM manipulation, and state.", folder: "weeks/week-04/" },
  { id: 5, week: "Week 05", title: "Async JavaScript & Fetch API", desc: "Consume RESTful JSON endpoints with async/await error boundaries.", folder: "weeks/week-05/" },
  { id: 6, week: "Week 06", title: "ES Modules & Build Tooling", desc: "Modularize code with native ES modules and lightweight bundling.", folder: "weeks/week-06/" },
  { id: 7, week: "Week 07", title: "React 18 & Component Design", desc: "Declarative UI engineering, JSX, component trees, and props.", folder: "weeks/week-07/" },
  { id: 8, week: "Week 08", title: "React Hooks & State Machines", desc: "State management with useState, useEffect, and custom hooks.", folder: "weeks/week-08/" },
  { id: 9, week: "Week 09", title: "Client Routing & Global State", desc: "Multi-page SPA routing, dynamic route params, and context.", folder: "weeks/week-09/" },
  { id: 10, week: "Week 10", title: "Full-Stack Integration & APIs", desc: "Connect frontend client with Express APIs and persistent databases.", folder: "weeks/week-10/" },
  { id: 11, week: "Week 11", title: "WCAG Accessibility & Testing", desc: "Enforce contrast ratios, keyboard navigation, and automated tests.", folder: "weeks/week-11/" },
  { id: 12, week: "Week 12", title: "Production Capstone & Launch", desc: "Deploy final showcase web application to GitHub Pages / CDN.", folder: "weeks/week-12/" }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("weeksGrid");
  if (!grid) return;

  grid.innerHTML = WEEKS_DATA.map(w => `
    <article class="week-card">
      <div>
        <div class="week-number">${w.week}</div>
        <h3 class="week-title">${w.title}</h3>
        <p class="week-desc">${w.desc}</p>
      </div>
      <div class="week-links">
        <a href="${w.folder}index.html" class="btn btn-primary">Open Project</a>
        <a href="${w.folder}README.md" class="btn btn-secondary">Guide</a>
      </div>
    </article>
  `).join("");
});
