# Outpro.India — Corporate Website

A premium, high-performance corporate website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed for maximum visual impact, SEO performance, and scalability.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS, Custom CSS (animations, effects) |
| Animations | CSS Keyframes + Framer Motion |
| Icons | Lucide React |
| Fonts | Syne (Display), DM Sans (Body), Space Mono |
| Deployment | Vercel / Netlify (recommended) |

---

## 📁 Project Structure

```
outpro-india/
├── public/                  # Static assets (favicon, OG image, etc.)
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Home page
│   │   ├── about/page.tsx   # About Us
│   │   ├── services/page.tsx
│   │   ├── portfolio/page.tsx
│   │   ├── contact/page.tsx
│   │   └── layout.tsx       # Root layout (Navbar + Footer + Cursor)
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Page sections (Hero, Stats, Services...)
│   │   └── ui/              # CustomCursor, reusable components
│   └── styles/
│       └── globals.css      # Global styles + CSS variables
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or unzip the project
cd outpro-india

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design System

### Colors
```css
--brand-dark:   #0A0A0F  /* Background */
--brand-accent: #00D4FF  /* Primary cyan */
--brand-gold:   #FFB800  /* Accent gold */
--brand-violet: #7B2FBE  /* Accent violet */
```

### Typography
- **Display/Headings**: Syne (extrabold, 800 weight)
- **Body**: DM Sans (300–600 weight)
- **Code/Tags**: Space Mono

### Utility Classes (globals.css)
```
.glass          → Glassmorphism card
.gradient-text  → Multi-color gradient text
.btn-primary    → Primary CTA button
.btn-outline    → Outlined button
.tag            → Small badge/chip
.card-hover     → Lift-on-hover card
.glow-cyan      → Cyan glow shadow
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Stats, Services, Portfolio, Testimonials, CTA |
| About | `/about` | Story, Mission/Vision/Values, Team |
| Services | `/services` | All 6 services with deliverables |
| Portfolio | `/portfolio` | 4 case studies with KPIs |
| Contact | `/contact` | Multi-step inquiry form |

---

## 🔧 Customization

### Update Brand Content
Edit `/src/components/sections/HeroSection.tsx` for headline/CTA.

### Add Services
Edit the `services` array in `/src/components/sections/ServicesSection.tsx`.

### Update Team
Edit the `team` array in `/src/app/about/page.tsx`.

### Update Portfolio
Edit the `projects` array in `/src/app/portfolio/page.tsx`.

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload .next/ folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| Load Time | < 2.5 seconds |
| PageSpeed Mobile | 90+ |
| PageSpeed Desktop | 95+ |
| LCP | < 2.5s |
| CLS | < 0.1 |

### Optimizations Implemented
- ✅ Next.js Image optimization
- ✅ Font loading with `display=swap`
- ✅ CSS-only animations (no heavy JS)
- ✅ Lazy loading via Intersection Observer
- ✅ Minimal JS bundle (no heavy libraries)
- ✅ Static generation where possible

---

## 🔗 Integrations Ready

- **Google Analytics 4** — Add `G-XXXXXXXXXX` to layout.tsx
- **Google Search Console** — Add verification meta tag
- **HubSpot / Zoho CRM** — Connect form to webhook
- **Tawk.to Live Chat** — Add script to layout.tsx

---

## 📝 License

Built for Outpro.India. All rights reserved.

---

*Built with ❤️ by the development team | Internship Project Submission*
