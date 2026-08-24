# Priyadharshini | Portfolio

A personal portfolio site for **Priyadharshini**, a Ruby on Rails Developer, built with React, Vite, and Bootstrap 5.

## Tech Stack

- **React 18** — UI components
- **Vite** — dev server & build tool
- **Bootstrap 5** — layout, utilities, and dark/light theming
- **Bootstrap Icons** — icon set
- **AOS (Animate on Scroll)** — scroll-reveal animations

## Features

- Dark/light theme toggle (defaults to dark)
- Sticky glassmorphism navbar with scroll-spy active section highlighting
- Animated hero with typewriter role text and floating skill chips
- Sections: About, Skills, Experience, Projects, Education & Certifications, Contact
- Social links (GitHub, LinkedIn, email, phone) in Hero, Contact, and Footer
- Downloadable resume (PDF)
- Fully responsive, back-to-top button

## Project Structure

```
Portfolio/
├── index.html
├── src/
│   ├── main.jsx            # App entry, global CSS/JS imports
│   ├── App.jsx              # Layout composition, theme + scrollspy logic
│   ├── index.css            # Design tokens & all custom styling
│   ├── data/
│   │   └── profile.js       # All resume content (edit this to update info)
│   └── components/
│       ├── NavBar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Education.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── BackToTop.jsx
└── PRIYADHARSHINI (2) (1).pdf   # Downloadable resume
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Updating Content

Nearly all personal info (name, contact details, skills, experience, projects, education, social links) lives in [`src/data/profile.js`](src/data/profile.js). Edit that file to update the site — no need to touch component code for content changes.

## Deploying

The `npm run build` command outputs a static site to `dist/`, which can be deployed to any static host (Netlify, Vercel, GitHub Pages, etc.).
