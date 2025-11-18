Star Estate – Frontend (React + TailwindCSS)

A modern, responsive real-estate frontend built with React, TailwindCSS, and React Router.
This project includes a complete homepage UI such as Hero section, Insights & Tools, Featured Projects, City Grid, News & Views, Footer, and multiple internal pages.

📌 Project Overview

Star Estate is a property-discovery UI that includes:

Full responsive layout

Hero banner with background slideshow

Header with dropdown menus (City, Builder, Projects)

Insights & Tools section (EMI Calculator, Property Valuation, NRI Services, Realty)

Featured Projects section with image-background cards

City Grid with 7 main cities + “Other Cities” page

News & Views cards with hover arrow animation

Footer with social icons and scroll-to-top

Internal routing for all pages (News, All Cities, Tools, etc.)

Images used in this project are stored inside the src/assets/ folder.

📁 Folder Structure

The project follows a clean component-driven architecture:

src/assets/ → Images for hero, cards, cities, insights, news

src/components/ → Reusable UI components

src/data/ → Static lists such as cities

src/pages/ → Page-level screens routed via React Router

src/App.jsx → Main routing file

src/index.js → App bootstrap

tailwind.config.cjs → Tailwind setup

postcss.config.cjs → PostCSS plugin configuration

index.css → Tailwind imports

⚙️ Prerequisites

Make sure you have:

Node.js (version 16+ or 18+)

npm

Git

(Optional) Vercel CLI for deployment

🔧 Project Setup Instructions (Windows / PowerShell Friendly)
1. Clone or create your project folder
git clone <repo-url>
cd project-folder

2. Fix installation issues (Windows safe commands)

If the project has errors, remove old modules:

Delete node_modules safely

Delete package-lock.json

Clear npm cache

3. Install all dependencies
npm install

4. Install required missing packages

@babel/runtime

Latest react-router-dom (v6)

Tailwind + PostCSS plugins

5. TailwindCSS Setup Fix

Make sure Tailwind uses the correct PostCSS plugin.
Tailwind styles must be imported in index.css.

🚀 Running the Project
Start Development Server

If using Vite: npm run dev

If using CRA: npm start

Create Production Build
npm run build

🧩 Components Overview

This project includes the following components (all inside src/components/):

Header & Menus

Logo

Search

Partner icons

City / Builder / Projects dropdowns

Mobile hamburger menu

Hero Section

Background slideshow

Centered text with typed-word animation

CTA buttons

Insights & Tools

Four cards

Background image

Title

Explore Now button

Hover animations

Featured Projects

Image-background cards

White description box

“+” button linking to project detail page

City Grid

Seven main cities

One card linking to “All Cities” page

Background image applied to all

News & Views

Four category cards

Background image with dark overlay

Title positioned at top

Hover arrow button

Button redirects to /news

Footer

Social icons

Useful links

Quick links

Scroll-to-top button

📄 Pages Included

Located inside src/pages/:

Home.jsx

News.jsx

AllCities.jsx

Tools.jsx

NewLaunches.jsx

Residential.jsx

Commercial.jsx

These pages are connected via React Router in App.jsx.

🌐 Routing Setup

BrowserRouter wraps the whole app

Routing is configured in App.jsx

All buttons (Explore Now, arrow button, + button) redirect to their proper pages

🔍 Assets Used

Folder: src/assets/

Contains:

Hero background slides

Insights & Tools card images

Featured projects images

Cities grid background

News & Views image

Social icons

📦 Git Commands (Full Workflow)
Initialize Repo
git init

Add Files
git add .

Commit
git commit -m "Star Estate full UI setup"

Create Main Branch
git branch -M main

Add Remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

Push Code
git push -u origin main

☁️ Deploy to Vercel (Simple Steps)
Method 1 — Direct from Vercel Dashboard

Go to https://vercel.com

Import GitHub repo

Framework: React

Build command:

CRA → npm run build (output: build)

Vite → npm run build (output: dist)

Deploy

Method 2 — CLI
npm i -g vercel
vercel login
vercel
vercel --prod

🛠️ Troubleshooting
Tailwind error: “use @tailwindcss/postcss instead”

Install required plugin

Update PostCSS config

React build errors: missing @babel/runtime

Install @babel/runtime package

jsxDEV error

Make sure React 18 & React Router v6 are installed

Delete node_modules and reinstall

Node modules not deleting in PowerShell

Use cmd /c "rmdir /s /q node_modules" workaround

White or broken UI

Check image paths

Ensure assets are inside src/assets

📌 Future Enhancements

Reusable dropdown component

API integration

Search autocomplete

Lazy-load images for performance

Dark mode theme

CMS integration for News & Blogs
