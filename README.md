# 🐾 Relowings – Premium Pet Relocation Website

A world-class, premium-quality pet relocation and logistics website frontend built with **ReactJS**, featuring modern animations, glassmorphism UI, responsive design, and a full set of conversion-focused sections.

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed on your computer:

- **Node.js** v18 or higher → [Download here](https://nodejs.org/)
- **npm** v8 or higher (comes bundled with Node.js)

Check your versions:
```bash
node -v   # Should show v18.x or higher
npm -v    # Should show v8.x or higher
```

---

### Step-by-Step Setup

**1. Extract the ZIP file**

Unzip `relowings.zip` into a folder on your computer.

**2. Open Terminal / Command Prompt**

Navigate into the project folder:
```bash
cd relowings
```

**3. Install dependencies**
```bash
npm install
```
This will install React, Vite, Lucide icons, and all other packages.

**4. Start the development server**
```bash
npm run dev
```

**5. Open in your browser**

The terminal will show a local URL — open it:
```
http://localhost:5173
```

Your Relowings website is now running! 🎉

---

## 📦 Build for Production

To create an optimized production build:
```bash
npm run build
```

The output will be in the `dist/` folder. You can deploy this to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
relowings/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx        ← Sticky glassmorphism navbar with dropdown
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx          ← World-class hero section
│   │   │   └── Hero.css
│   │   ├── TrustStrip/
│   │   │   ├── TrustStrip.jsx    ← Trust indicators below hero
│   │   │   └── TrustStrip.css
│   │   ├── Services/
│   │   │   ├── Services.jsx      ← 6 service cards with hover effects
│   │   │   └── Services.css
│   │   ├── About/
│   │   │   ├── About.jsx         ← About section with stats
│   │   │   └── About.css
│   │   ├── WhyRelowings/
│   │   │   ├── WhyRelowings.jsx  ← 12 reasons grid (dark section)
│   │   │   └── WhyRelowings.css
│   │   ├── Process/
│   │   │   ├── Process.jsx       ← 5-step interactive timeline
│   │   │   └── Process.css
│   │   ├── Stats/
│   │   │   ├── Stats.jsx         ← Animated count-up statistics
│   │   │   └── Stats.css
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.jsx  ← Auto-sliding review carousel
│   │   │   └── Testimonials.css
│   │   ├── Gallery/
│   │   │   ├── Gallery.jsx       ← Masonry gallery with lightbox
│   │   │   └── Gallery.css
│   │   ├── Blog/
│   │   │   ├── Blog.jsx          ← Blog preview cards
│   │   │   └── Blog.css
│   │   ├── CTA/
│   │   │   ├── CTA.jsx           ← Final conversion CTA section
│   │   │   └── CTA.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx       ← Full contact form + info
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx        ← Dark luxury footer
│   │   │   └── Footer.css
│   │   ├── FloatingButtons/
│   │   │   ├── FloatingButtons.jsx ← WhatsApp + Call + Scroll-to-top
│   │   │   └── FloatingButtons.css
│   │   └── LoadingScreen/
│   │       ├── LoadingScreen.jsx ← Animated loading screen
│   │       └── LoadingScreen.css
│   ├── hooks/
│   │   └── useScrollReveal.js    ← Intersection Observer hooks
│   ├── styles/
│   │   ├── variables.css         ← CSS custom properties / design tokens
│   │   ├── globals.css           ← Global resets + utility classes
│   │   └── app.css               ← Shared keyframe animations
│   ├── App.jsx                   ← Root component assembling all sections
│   └── main.jsx                  ← React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## ✨ Features

### Design & UI
- 🎨 **Premium Design System** — CSS variables for colors, spacing, typography
- 🌊 **Glassmorphism** — Navbar, cards, overlays
- 🎭 **Gradient Backgrounds** — Hero, CTA, Stats sections
- 📱 **Fully Responsive** — Mobile, Tablet, Desktop, Large screens
- 🌙 **Dark & Light Sections** — Beautiful contrast between sections

### Navigation
- 📌 **Sticky Navbar** — Transparent → blur on scroll
- 📋 **Services Dropdown** — 6 services with icons
- 🍔 **Mobile Hamburger** — Smooth slide-in menu
- 🔗 **Smooth Scrolling** — All anchor links

### Sections
| Section | Features |
|---------|----------|
| 🦸 Hero | Split layout, floating badges, orbit animation, stats strip |
| ✅ Trust Strip | 5 trust indicators, icon cards |
| 🐾 Services | 6 cards, hover zoom, gradient overlays |
| 📖 About | Split layout, achievement cards, highlights list |
| 💡 Why Relowings | 12-point glassmorphism grid, dark background |
| 🗺️ Process | 5-step timeline, connected lines, icons |
| 📊 Stats | Count-up animations, dark gradient background |
| 💬 Testimonials | Auto-sliding carousel with controls |
| 🖼️ Gallery | Masonry grid with lightbox effect |
| 📰 Blog | 6 premium blog preview cards |
| 📣 CTA | Gradient section with floating pet illustrations |
| 📩 Contact | Full form with validation + info cards |
| 🦶 Footer | Dark luxury footer with newsletter |

### Interactive Features
- ⏳ **Loading Screen** — Animated progress bar
- 💬 **WhatsApp Button** — Floating with pulse animation + tooltip
- 📞 **Call Button** — Quick access floating button
- ⬆️ **Scroll-to-Top** — Appears after scrolling 400px
- 🔍 **Gallery Lightbox** — Click to zoom
- 🔢 **Count-Up Animations** — Triggered on scroll into view
- 👁️ **Scroll Reveal** — Fade-up animations for all sections

---

## 🎨 Customization

### Update Contact Info
Search and replace ` +91 9900028437` and `sales@relowings.com` with your actual details.

### Update WhatsApp Link
In `FloatingButtons.jsx`, update the `href`:
```jsx
href="https://wa.me/91XXXXXXXXXX?text=Hello..."
```

### Change Colors
Edit `src/styles/variables.css`:
```css
:root {
  --primary: #1A6FD4;      /* Main blue */
  --secondary: #0FB8B2;    /* Teal accent */
  --accent: #FF7B4B;       /* Orange accent */
}
```

### Add Real Images
Replace emoji placeholders in components with `<img>` tags pointing to your actual pet photos.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3 | UI framework |
| Vite | 5.4 | Build tool & dev server |
| Lucide React | 0.383 | Professional SVG icons |
| CSS3 | — | Styling, animations, responsive |
| Intersection Observer API | — | Scroll animations |

---

## 🌐 Deployment

### Netlify (Recommended — Free)
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Push dist/ contents to gh-pages branch
```

---

## 📞 Support

For issues or questions about setup, check:
- Node.js is v18+: `node -v`
- Dependencies are installed: run `npm install` again
- Port 5173 is free: kill other processes if needed

---

*Built with ❤️ for Relowings — India's trusted pet relocation partner.*
