# 🚀 ByteSpace — Modern E-Learning & Creator Discovery Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.1.1-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)](https://bytespace-barkat.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A high-performance, responsive e-learning and creator discovery web application built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. ByteSpace connects ambitious learners with top-tier courses, world-class mentors, and interactive learning tools through a modern interface designed for screens ranging from 375px mobile to 2560px 4K displays.

---

## 🔗 Quick Links

* 🌐 **Live Application:** [bytespace-barkat.vercel.app](https://bytespace-barkat.vercel.app/)
* 🎥 **Video Walkthrough:** [AwesomeScreenshot Walkthrough](https://www.awesomescreenshot.com/video/56978179?key=816f66814ea8379a6d4b8083c4dffb88)
* 📂 **GitHub Repository:** [github.com/Barkat-Ullah/bytespace-dointech](https://github.com/Barkat-Ullah/bytespace-dointech)

---

## 📖 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Screenshots & UI Showcase](#-screenshots--ui-showcase)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started & Local Setup](#-getting-started--local-setup)
- [Available Scripts](#-available-scripts)
- [Engineering Highlights & Responsiveness](#-engineering-highlights--responsiveness)
- [Contribution Guidelines](#-contribution-guidelines)
- [Author & Contact](#-author--contact)
- [License](#-license)

---

## 🌟 Project Overview

**ByteSpace** was engineered to deliver a seamless educational marketplace experience. The application features a curated catalog of industry courses, comprehensive instructor/creator discovery, an interactive cart system, and responsive layouts calibrated for all screen sizes.

### Core Objectives:
1. **Recruiter & Production-Grade Code Quality:** Clean component architecture, TypeScript type safety, modular layout systems, and zero-lint-error code.
2. **True Responsive Precision:** Pixel-perfect visual balance from 375px mobile viewports up to 2560px 4K monitors without layout breaks or content overlaps.
3. **Fluid Micro-Interactions:** Smooth Framer Motion transitions, slide-in cart drawer, interactive search inputs, and responsive navigation.

---

## ✨ Key Features

### 1. 🎯 Dynamic Hero Section
- High-fidelity visual composition with custom 3D artwork and brand styling.
- Interactive course search bar that routes queries directly to the courses catalog.
- Fully responsive layout engineered to maintain proportional breathing room and edge-to-edge aesthetics on **both 1440px laptops and 2560px 4K screens**.

### 2. 📚 Course Catalog & Discovery (`/courses`)
- **Real-Time Filtering:** Filter courses by category (Design, Development, Business, Marketing, etc.).
- **Level Filters:** Filter by difficulty level (*All Levels*, *Beginner*, *Intermediate*, *Advanced*).
- **Multi-Criteria Sorting:** Sort by relevance, highest rated, popularity, and price (low to high / high to low).
- **Client-Side Pagination:** Smooth navigation with dynamic item counters and auto-scroll.
- **URL Parameter Sync:** Pre-filters results directly from homepage searches via `?search=` and `?category=`.

### 3. 🧑‍🏫 Creator Discovery Hub (`/creators`)
- Dedicated mentor discovery interface showcasing instructor bios, specialties, follower metrics, and student enrollments.
- Multi-field search querying creator name, handle, role, category, and bio.
- Interactive category tags for quick instructor filtering.

### 4. 🛍️ Smooth Slide-in Cart Sidebar
- Accessible right-side drawer powered by **Framer Motion** for smooth 60fps animations.
- Live badge indicator in the navbar reflecting active cart item count.
- Dynamic cart summary displaying course titles, prices, thumbnails, and checkout CTAs.
- Click-outside and Escape-key backdrop dismissal.

### 5. 🔐 Authentication Experience (`/signin` & `/signup`)
- Split-screen branded authentication layouts with smooth route prefetching.
- Password visibility toggles, form validation, and feedback notifications via **SweetAlert2**.

### 6. 🧩 Modular Landing Page Sections
- **Brand Partners / Sponsors:** Trusted-by logo showcase with responsive flex grid.
- **Featured Courses:** Top-rated course cards with instructor details, lesson counts, ratings, and pricing.
- **Category Explorer:** Interactive category cards with course counters.
- **Statistics Counter:** Highlighting active students, total courses, and mentor milestones.
- **Student Testimonials:** Social proof cards featuring user reviews, avatars, and star ratings.
- **Call-to-Action (CTA):** High-conversion lead generation banner.
- **Footer:** Structured multi-column navigation, newsletter signup, and copyright info.

### 7. 🚫 Custom 404 Experience
- Branded, user-friendly 404 error page with quick-navigation back to the homepage.

---

## 🛠️ Tech Stack & Architecture

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Hybrid SSR/SSG, optimized font loading, dynamic routes |
| **Library** | [React 19](https://react.dev/) | Modern concurrent UI components and state management |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end type safety, interfaces, and strict checking |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS engine with custom design tokens |
| **Animations** | [Framer Motion 13](https://www.framer.com/motion/) | Smooth spring-physics animations and drawer transitions |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible vector icons |
| **Notifications** | [SweetAlert2](https://sweetalert2.github.io/) | Polished, customizable modal and alert dialogs |
| **Utility Libraries**| `clsx`, `tailwind-merge` | Conditional class name resolution |
| **Deployment** | [Vercel](https://vercel.com/) | Edge deployment, CI/CD pipeline, and automatic preview builds |

---

## 📁 Project Directory Structure

```text
bytespace-dointech/
├── public/                     # Static assets (images, icons, vectors)
│   ├── common-bg.png           # Global brand background pattern
│   ├── Hero_Frame.png          # High-resolution hero composition graphic
│   └── Vector.png              # ByteSpace brand logo
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── (authLayout)/       # Route group: Authentication layouts
│   │   │   ├── signin/         # Sign-in page
│   │   │   └── signup/         # Sign-up page
│   │   ├── (layout)/           # Route group: Primary layout with Navbar/Footer
│   │   │   ├── courses/        # Course catalog, search, and filter page
│   │   │   ├── creators/       # Creator & mentor discovery page
│   │   │   └── page.tsx        # Homepage (root landing page)
│   │   ├── components/         # Reusable UI component library
│   │   │   ├── pages/          # Page-specific sections (Hero, Course, Creator, etc.)
│   │   │   ├── shared/         # Cross-page shared components (Navbar, Footer, CartSidebar)
│   │   │   └── ui/             # Atomic design components (Button, Container, Cards)
│   │   ├── globals.css         # Tailwind CSS v4 root styling & custom CSS variables
│   │   ├── layout.tsx          # Root HTML layout with Geist font configuration
│   │   └── not-found.tsx       # Branded 404 fallback page
│   ├── data/
│   │   └── mock-data.ts        # Type-safe datasets for courses, creators, reviews, stats
│   └── lib/
│       ├── alerts.ts           # Centralized SweetAlert2 notification handlers
│       └── utils.ts            # Class merging utility (clsx + twMerge)
├── next.config.ts              # Next.js compiler and build options
├── tsconfig.json               # TypeScript compiler rules
├── eslint.config.mjs           # ESLint configuration
└── package.json                # Project dependencies and script definitions
```

---

## 💻 Getting Started & Local Setup

Follow these instructions to clone the repository and run the application locally on your machine.

### Prerequisites

* **Node.js:** `v18.18.0` or higher (Recommended: `v20+` or `v22+`)
* **Package Manager:** `npm` (bundled with Node.js), `pnpm`, or `yarn`
* **Git:** Installed on your operating system

### 1. Clone the Repository

```bash
git clone https://github.com/Barkat-Ullah/bytespace-dointech.git
cd bytespace-dointech
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Launch Development Server

```bash
npm run dev
```

Open your browser and navigate to:
```text
http://localhost:3000
```

The application will hot-reload automatically as you edit files in `src/`.

---

## 📜 Available Scripts

In the project root, you can run the following commands:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Next.js development server at `http://localhost:3000` |
| `npm run build` | Compiles and builds the production bundle with type checking |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Runs ESLint across all `.ts`, `.tsx`, and `.js` files to ensure clean code |

---

## 🎯 Engineering Highlights & Responsiveness

### 4K (2560px) & Ultra-Wide Monitor Calibration
On large displays, standard layouts often stretch uncontrollably or displace critical artwork. In ByteSpace:
* The Hero Section utilizes a proportional viewport calculation (`2xl:h-[58.333vw]`), maintaining the exact `12:7` aspect ratio reference established on 1440px laptop displays.
* Full-bleed graphic anchoring (`sizes="100vw"` with `object-cover object-bottom`) keeps left and right 3D graphics flush against the viewport perimeter.
* Responsive typography and spacing (`2xl:` scales) prevent content-to-image collisions while preserving breathing room.

### Performance & Web Vitals
* **Next.js Image Optimization:** All raster graphics utilize `next/image` with responsive `sizes` attributes, priority loading for above-the-fold content, and automatic modern image format delivery (`webp`/`avif`).
* **Client-Side Rendering Boundaries:** Server and client components are cleanly separated with minimal client-side JavaScript bundles.
* **Stable Layout Shifts:** Configured `scrollbar-gutter: stable` in `globals.css` to eliminate layout shift when modals or sidebars open.

---

## 🤝 Contribution Guidelines

Contributions are welcome and appreciated! To maintain code cleanliness and consistency, please follow this workflow:

### 1. Fork & Branch
1. **Fork** the repository on GitHub: [Fork ByteSpace](https://github.com/Barkat-Ullah/bytespace-dointech/fork)
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/bytespace-dointech.git
   cd bytespace-dointech
   ```
3. **Create a descriptive feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

### 2. Development Standards
* Ensure your code adheres to TypeScript strict typing (avoid `any`).
* Follow existing component conventions in `src/app/components/ui`.
* Verify that your changes look balanced across mobile (375px), tablet (768px), desktop (1440px), and 4K (2560px).

### 3. Verify Code Quality
Before committing, make sure the project builds without errors:
```bash
npm run lint
npx tsc --noEmit
```

### 4. Commit & Submit
1. Commit your changes using conventional commit messages:
   ```bash
   git commit -m "feat: add category filter count badge"
   ```
2. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
3. Open a **Pull Request (PR)** against the `main` branch of the original repository.
4. Include a clear summary of your changes, along with before/after screenshots if UI elements were modified.

---

## 👨‍💻 Author & Contact

**Barkat Ullah**
* **Portfolio / Live Project:** [bytespace-barkat.vercel.app](https://bytespace-barkat.vercel.app/)
* **GitHub:** [@Barkat-Ullah](https://github.com/Barkat-Ullah)
* **Walkthrough Video:** [AwesomeScreenshot Walkthrough](https://www.awesomescreenshot.com/video/56978179?key=816f66814ea8379a6d4b8083c4dffb88)

Feel free to connect or open an issue on GitHub if you have any questions, feedback, or collaboration opportunities!

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
