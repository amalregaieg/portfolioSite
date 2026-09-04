# Amal Regaieg — Tech Lead Symfony | Senior PHP Backend Developer Portfolio

A professional, high-performance portfolio website built to showcase **Amal Regaieg**'s career as a **Tech Lead Symfony & Senior PHP Backend Developer**. 

This portfolio strongly communicates senior expertise in **PHP 8.3**, **Symfony 7**, **API Platform**, **RESTful APIs**, **MySQL Database Optimization**, **Symfony Messenger**, **Docker**, **CI/CD**, and **Clean Code / SOLID Architecture**.

---

## 🚀 Key Features & Highlights

- **Strict Senior Backend Positioning**: 100% focused on PHP & Symfony architecture (no generic frontend developer claims).
- **Data-Driven Modular Content**: All bio, experience, project deep-dives, skills, and certifications are stored cleanly in `src/data/`.
- **Interactive Code & Architecture Showcase**: Features real PHP 8.3 attribute-driven code snippets and an interactive backend topology diagram.
- **Deep-Dive Backend Project Case Studies**:
  - *Healthcare Professionals Management Platform* (API Platform, JWT, Security Voters)
  - *Referential / RPPS Platform* (High-throughput, SQL & B-Tree index optimization)
  - *Payment / Stripe Integration* (Idempotent Webhooks & Symfony Messenger Async Queues)
- **Form Integration Ready**: Client-side validated contact form prepared for direct connection to Formspree, EmailJS, or Resend.
- **SEO & Performance**: Open Graph metadata, semantic HTML5 structure, custom dark theme, and mobile responsiveness.

---

## 🛠️ Stack & Technologies

- **Frontend Delivery Engine**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS v3 (Custom Dark SaaS / Developer Theme)
- **Icons & Animations**: Lucide React, Framer Motion
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

---

## 💻 Local Development Setup

### Prerequisites

- **Node.js**: v18.0.0 or later
- **npm**: v9.0.0 or later

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amal-regaieg/portfolioSite.git
   cd portfolioSite
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## 📦 Production Build & Testing

To compile TypeScript and build the optimized static asset bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ⚡ Free Static Deployment

This portfolio generates a 100% static HTML/JS/CSS bundle in the `dist/` directory upon build. **No PHP web server or database server is required to host the portfolio itself.**

### Option A: Deploying on Vercel (Preferred)

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `portfolioSite` repository.
4. Framework Preset: Select **Vite**.
5. Click **Deploy**. Vercel will automatically build and publish your site with free SSL and CDN.

### Option B: Deploying on Netlify

1. Sign in to [Netlify](https://www.netlify.com/).
2. Drag & drop the `dist/` folder after running `npm run build`, OR connect your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## ✏️ How to Modify Your Portfolio Data

All personal content is separated from the UI components. You can update your details directly inside the TypeScript files in `src/data/`:

- `src/data/profile.ts`: Bio, headlines, contact email, social links, and key stats.
- `src/data/skills.ts`: Skill categories and tech tags.
- `src/data/experience.ts`: Work history timeline, companies, dates, responsibilities, and stack.
- `src/data/projects.ts`: Project case studies, technical problems, solutions, and challenges.
- `src/data/education.ts`: Higher education degrees and certifications (ISIMS, Scrum Master).
- `src/data/code-snippets.ts`: PHP 8.3 & Symfony code snippets displayed in the Hero window.

---

## 📜 License

This portfolio source code is open source and available under the [MIT License](LICENSE).
