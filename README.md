## Star Estate (star-estate-clone)

Live demo: (Add your Vercel URL here after deployment)

---

## Project summary

Star Estate is a responsive, modern React frontend that replicates the UX and layout of a real estate marketing website. The app includes a full home page with hero, search controls and typed hero words, a rich header with multi-level dropdowns, responsive mobile menu, Insights & Tools cards with Explore Now CTA, Featured Projects carousel-style grid with navigation controls, City grid and full All Cities page, News & Views cards, social feed placeholders and a polished footer. The UI focuses on accessibility, responsiveness and smooth micro-interactions.

---

## Key UX highlights:

- Hero with rotating background images and typed words (VILLA, RENTAL SPACE, OFFICE SPACE, APARTMENT).

- Header with CITY / BUILDER / PROJECTS dropdowns (desktop hover + mobile-appropriate items), animated arrow rotation and popups.

- Mobile menu with slide-in panel and re-ordered links for smaller screens.

- Explore Now buttons centered at the bottom of insight cards; transparent bar overlay.

- Featured Projects cards with background images, bottom white content strip, and clickable plus/action buttons that animate on hover.

- City grid showing a set of main cities and an "Other Cities" link to a dedicated page.

- News & Views cards with top-centered titles, background image, overlay and animated arrow CTA that becomes white background + black text on hover.

- Footer with social icons that change on hover and show label popups.

- Scroll-to-top floating button fixed bottom-right.

---

## Tech stack

- Frontend: React (component-based)

- Styling: Tailwind CSS

- Routing: react-router-dom

- Icons: react-icons (where needed)

- Build & dev: npm (or yarn) and standard React build tooling (CRA or Vite depending on your setup)

- Hosting: Vercel (recommended for React apps)

- Assets: local images placed under src/assets/

---

## Features & pages

# 1. Home page

- Hero section (rotating backgrounds, typed words, underline, centered translucent search card)

- Insights & Tools grid (4 cards on desktop → 2 on tablets → 1 on mobile)

- Featured Projects grid (responsive, background images, + button bottom-right)

- News & Views section (cards with top-centered title and animated arrow CTA)

- Find your dream property (city cards; first 7 shown, 8th redirects to All Cities)

# 2. Header component

- Desktop: CITY, BUILDER, PROJECTS with dropdowns and arrow animations

- Mobile: slide-in menu with reordered links and dropdowns placed inside

# 3. MobileMenu component

- Slide-in panel with primary links, social icons and submenus for media, city/builder/projects (on small screens)

# 4. All Cities page

- Full list of cities (each card with background and a round add button)

# 5. Tools page

- Landing page for Insights & Tools click-through

# 6. News page

- Landing page for News & Views arrow CTA

# 7. Footer

- Multi-column links, follow icons with hover labels, copyright footer

# 8. Global behaviour

- Scroll To Top floating button (green round; fixed bottom-right)

- Accessibility considerations: keyboard focusable CTAs, alt attributes for images

--- 

## Project structure (recommended)

project-root/

- public/

- src/

    - assets/ (all images: hero backgrounds, feature images, icons)

    - components/

        - Header.jsx

        - MobileMenu.jsx

        - CityDropdown.jsx

        - BuilderDropdown.jsx

        - ProjectsDropdown.jsx

        - Hero.jsx

        - InsightsTools.jsx

        - EMIcard.jsx

        - ExploreNowButton.jsx

        - FeaturedProjects.jsx

        - CityGrid.jsx

        - AllCities.jsx (page component)

        - NewsViews.jsx

        - Footer.jsx

        - ScrollToTopButton.jsx

    - data/

        - projects.js

        - cities.js

    - pages/

        - Home.jsx

        - Tools.jsx

        - News.jsx

        - NewLaunches.jsx

        - Commercial.jsx

        - Residential.jsx

    - index.css (Tailwind + custom CSS)

    - App.jsx

    - index.js

- package.json

- tailwind.config.js

- postcss.config.js

- README.md

---

## Assets

Place images in src/assets/; recommended names:

- hero-bg-1.jpg, hero-bg-2.jpg, hero-bg-3.jpg… (for rotating hero)

- insightstools/emi.jpeg, valuation.jpeg, nri.jpeg, reality.jpeg

- feature-project.jpeg

- cities.jpeg

- newsview.jpeg

- logo.png

---

## Setup & local development

1. Clone repository:
   git clone <your-github-repo-url>
   cd <repo-folder>

2. Install dependencies:
    npm install

3. Start dev server:
   npm start
   (or npm run dev if using Vite)

4. Open browser:
   http://localhost:3000

---

## Notes:

- Ensure Tailwind is configured in postcss.config.js and tailwind.config.js.

- Put images in src/assets and reference them via imports in components to avoid build path issues.

---

## Build & deploy

To build a production bundle:

   npm run build

Deploying to Vercel (recommended):

Option A (Vercel web UI): Push repo to GitHub, then connect the repository in Vercel dashboard. Vercel detects React and deploys automatically.

Option B (Vercel CLI): Install Vercel locally if you want CLI-based deploys, then run Vercel deploy steps on your machine (the Vercel UI method is easiest).

After successful deployment, paste the live URL at the top of this README.

---

## Git & common commands

Initialize repo:

   git init

   git add .

   git commit -m "Initial commit"

   git branch -M main

   git remote add origin <your-github-url>

   git push -u origin main

To push further changes:

   git add .

   git commit -m "Describe change"

   git push

---

## Routing & navigation notes

- The App.jsx routes should include all pages (Home, NewLaunches, Commercial, Residential, Tools, News, AllCities).

- The Header component mounts on all pages; mobile menu and dropdowns handle conditional display using React state.

- Explore Now and view links use react-router-dom Link components to navigate to /tools, /new-launches or /news.

---

## Accessibility & responsive behavior

- Dropdowns are keyboard navigable and support hover + focus states.

- All interactive elements include aria-labels where appropriate.

- Responsive breakpoints: desktop (lg+) shows full header, tablet / mobile condense text to icons and use slide-in menu.

- Hero typography is kept to one-line headline; typed words follow inline styling with underline.

---

## Styling & animations

- Tailwind utilities are used across components.

- Animations use Tailwind transition utilities and, where required, small custom keyframes (e.g. slow-bounce).

- Explore Now CTA is a centered transparent bar anchored to the bottom of each insight card. On hover the arrow and label swap position and the text color turns green.

---

## What’s included / delivered

- Complete React component set for the home page and auxiliary pages.

- Tailwind-based styling and utility-first layout.

- Data files for projects and cities.

- Reusable components: Header, Hero, MobileMenu, CityDropdown, EMI card, ExploreNow, FeaturedProjects, CityGrid, AllCities, NewsViews, Footer, ScrollToTopButton.

---

## Future improvements

- Make UI more similar to the website
- Add backend APIs to fetch projects, cities, news and tools data.
- Integrate authentication for partner connections and user accounts.
- Add caching and image optimization for faster loads.
- Add unit and integration tests.
- Add content management (CMS) for News and Projects.
