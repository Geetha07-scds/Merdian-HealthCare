Meridian Clinic — Health Care Website
A responsive, multi-page frontend website for a fictional family & specialist health clinic, built for the MANTRA 2026 Summer School — Frontend Website Assignment.

🌐 Live Demo
Add your Netlify link here after deployment, e.g. https://meridian-clinic.netlify.app

🛠 Tech Stack
HTML5 – semantic page structure across 5 pages
CSS3 – custom design system (no framework), Flexbox + CSS Grid, media queries
JavaScript (Vanilla) – mobile nav toggle, FAQ accordion, appointment form validation
Google Fonts – Sora, Source Sans 3, IBM Plex Mono
GitHub – version control & code hosting
Netlify – live deployment
📄 Pages
Page	File	Purpose
Home	index.html	Hero, live availability card, stats, department preview, health tips, CTA
About	about.html	Clinic story, values, doctor profiles
Departments	services.html	General Medicine / Pediatrics / Cardiology + FAQ accordion
Gallery	gallery.html	6 facility/department images with captions & alt text
Appointment	appointment.html	Appointment request form + emergency contact/map
✅ Assignment Requirements Covered
Responsive layout: mobile, tablet, desktop (flexbox/grid + media queries at 960px & 720px)
Navigation menu with mobile hamburger toggle + persistent emergency contact banner
Basic SEO: <title>, meta description, meta keywords, one <h1> per page, <h2>/<h3> hierarchy, descriptive alt text, semantic file names
JavaScript features: mobile menu toggle, FAQ accordion, full client-side appointment form validation with inline error messages
Consistent color theme, typography system, cards, buttons, footer
📁 Folder Structure
healthcare-meridian/
├── index.html
├── about.html
├── services.html
├── gallery.html
├── appointment.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (6 SVG facility/department illustrations)
└── README.md
▶️ Run Locally
No build step needed — it's a static site.

Download/unzip the folder.
Open index.html directly in a browser, or run a local server:
npx serve .
# or
python -m http.server 8000
🚀 Deploy (GitHub + Netlify)
See the main "Next Steps" instructions provided alongside this project.

✏️ Customize
Replace placeholder phone/email/address with your real (or assignment-provided) contact details.
Swap the SVG illustrations in images/ for real photos (keep alt text updated).
Update the Netlify URL in each page's <link rel="canonical"> tag once deployed.
