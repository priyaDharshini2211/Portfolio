export const profile = {
  name: 'Priyadharshini',
  title: 'Python Full Stack Developer',
  roles: ['Python Full Stack Developer', 'Django & React Developer', 'Ruby on Rails Developer'],
  tagline:
    'Full Stack Developer with 2+ years of experience building web applications and secure RESTful APIs using Python (Django), React, and Ruby on Rails.',
  location: 'Mettupalayam, Tamil Nadu, India',
  email: 'priyaselvam100@gmail.com',
  phone: '9751181488',
  resumeFile: '/Priyadharshini_Resume.pdf',
  github: 'https://github.com/priyaDharshini2211',
  githubUsername: 'priyaDharshini2211',
  linkedin: 'https://www.linkedin.com/in/priyadharshini-selvan-185584241',
  summary:
    'Full Stack Developer with 2+ years of experience building web applications and secure RESTful APIs using Python (Django), React, and Ruby on Rails. Skilled in database design, API architecture, JWT/OAuth authentication, background job processing, and AWS deployment in Agile teams. Returned from a career break and completed a Python Full Stack Development course (Mar to Oct 2026), with hands-on projects in Django, React, and Generative AI app development.',
};

export const skillGroups = [
  { title: 'Languages', skills: ['Python', 'JavaScript', 'Ruby', 'SQL'] },
  { title: 'Backend', skills: ['Python', 'Django', 'Ruby on Rails'] },
  { title: 'Frontend', skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
  {
    title: 'API Development',
    skills: ['RESTful APIs', 'JSON', 'API Versioning', 'JWT', 'OAuth', 'Devise', 'CSRF protection'],
  },
  { title: 'Databases', skills: ['PostgreSQL', 'MySQL'] },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'CI/CD', 'AWS', 'Heroku', 'Sidekiq', 'Redis'],
  },
  {
    title: 'Testing, AI & Methodologies',
    skills: ['RSpec', 'Agile', 'Scrum', 'Google AI Studio'],
  },
];

export const experience = [
  {
    company: 'Mallow Technologies Private Ltd',
    role: 'Ruby on Rails Developer',
    dates: '2021 - 2023',
    bullets: [
      'Developed scalable backend services using Ruby on Rails for web and mobile platforms.',
      'Designed and implemented RESTful APIs with secure authentication using Devise, JWT, and OAuth.',
      'Built background processing features using Sidekiq and Redis for asynchronous job handling.',
      'Deployed and maintained applications on AWS and Heroku with CI/CD workflows.',
      'Collaborated in Agile teams through daily stand-ups, sprint planning, and peer code reviews.',
      'Worked on DALink, building REST APIs and web pages for product listings, user profiles, and payments.',
      'Worked on Trygg, building APIs for user registration, incident reporting, and live tracking.',
    ],
  },
  {
    company: 'Pumo Technovation · GUVI-HCL',
    role: 'Career Break (Maternity) & Upskilling',
    dates: '2023 - 2026',
    kind: 'learning',
    bullets: [
      'Completed a Python Full Stack Development course at Pumo Technovation (Mar 2026 - Oct 2026) and built the projects listed below.',
      'Completed "Build & Deploy AI Apps with Google AI Studio" (GUVI-HCL, 2026).',
    ],
  },
];

export const projects = [
  {
    title: 'ShopMart - E-Commerce Platform',
    dates: 'Personal Project',
    bullets: [
      'Built a full-stack e-commerce app with product catalog, cart, checkout, and admin dashboard.',
      'Implemented user authentication, CSRF protection, and Django ORM-based data models.',
    ],
    tech: ['Django', 'Python', 'Bootstrap 5', 'SQLite'],
  },
  {
    title: 'e-Learning Website',
    dates: 'Personal Project',
    bullets: [
      'Built a full-stack e-learning platform with a Django backend and a React frontend.',
      'Implemented course listings, user authentication, and an admin-managed content structure.',
    ],
    tech: ['Python', 'Django', 'React'],
  },
  {
    title: 'Shopping Cart App',
    dates: 'Personal Project',
    bullets: [
      'Built a responsive React frontend with routing for home, product listing, login, and checkout pages.',
      'Structured reusable UI components using a page-based architecture with React Router DOM.',
    ],
    tech: ['React', 'Vite', 'React Router'],
  },
  {
    title: 'Multilingual AI Speech App',
    dates: 'GUVI-HCL Google AI Studio course',
    bullets: [
      'Built a multilingual AI speech application as part of the GUVI-HCL Google AI Studio course.',
    ],
    tech: ['Google AI Studio', 'Python'],
  },
];

export const education = [
  {
    degree: 'Bachelor of Engineering - Computer Science and Engineering',
    institution: 'Sri Ramakrishna Engineering College',
    dates: 'July 2017 - May 2021',
    notes: '75%',
  },
];

export const certifications = [
  {
    title: 'Python Full Stack Development Course',
    issuer: 'Pumo Technovation',
    date: 'Mar 2026 - Oct 2026',
  },
  {
    title: 'Build & Deploy AI Apps with Google AI Studio: Multilingual AI Speech App Development',
    issuer: 'GUVI-HCL',
    date: '2026',
  },
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: 'Certificate of Completion',
    file: '/certificates/Anthropic-AI-Fluency-Framework-and-Foundations.pdf',
  },
];
