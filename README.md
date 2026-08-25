# Balance Management Consulting Website

Official frontend implementation of the Balance Management Consulting corporate website.

The website presents Balance's consulting capabilities, financial-services focus, measurable business impact, corporate presence, thought leadership, and the Northframe operational assurance platform.

## Overview

Balance Management Consulting supports organizations navigating complex technology transformation, operational change, risk, resilience, governance, and automation.

The website is structured around eight core capabilities:

1. Change & Release Management
2. Cybersecurity & Technology Risk
3. Disaster Recovery & Resilience
4. Audit & Regulatory Compliance
5. Technology Transformation
6. AI & Automation
7. Technology Governance
8. Data & Cloud Modernization

The primary industry focus presented on the website is Financial Services:

- Banking
- Insurance
- Capital Markets

Northframe is presented separately as Balance's operational assurance and governance technology platform.

## Technology Stack

- React 19
- React Router
- Vite
- Tailwind CSS 4
- Manrope
- Oxlint
- Sharp
- Vercel

## Project Structure

    src/
    â”œâ”€â”€ app/
    â”‚   â”œâ”€â”€ App.jsx
    â”‚   â””â”€â”€ router.jsx
    â”‚
    â”œâ”€â”€ assets/
    â”‚   â”œâ”€â”€ branding/
    â”‚   â”œâ”€â”€ images/
    â”‚   â””â”€â”€ video/
    â”‚
    â”œâ”€â”€ components/
    â”‚   â”œâ”€â”€ layout/
    â”‚   â””â”€â”€ ui/
    â”‚
    â”œâ”€â”€ data/
    â”‚   â”œâ”€â”€ navigation.js
    â”‚   â””â”€â”€ testimonials.js
    â”‚
    â”œâ”€â”€ pages/
    â”‚   â”œâ”€â”€ about/
    â”‚   â”œâ”€â”€ case-studies/
    â”‚   â”œâ”€â”€ contact/
    â”‚   â”œâ”€â”€ expertise/
    â”‚   â”œâ”€â”€ home/
    â”‚   â”œâ”€â”€ impact/
    â”‚   â”œâ”€â”€ product/
    â”‚   â”‚   â””â”€â”€ northframe/
    â”‚   â””â”€â”€ whitepapers/
    â”‚
    â”œâ”€â”€ styles/
    â”‚   â””â”€â”€ index.css
    â”‚
    â””â”€â”€ main.jsx

Each major page is organized as an independent feature area containing its page component, page-specific data, and section components.

Shared navigation, testimonials, layout components, and UI primitives remain outside individual pages.

## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage |
| `/expertise` | Balance consulting capabilities |
| `/northframe` | Northframe product |
| `/impact` | Business outcomes and selected engagements |
| `/about` | Company profile, principles, and locations |
| `/contact` | Contact information and inquiry form |
| `/case-studies` | Selected Balance engagements |
| `/whitepapers` | Balance perspectives and white papers |

The locations section can be accessed directly using:

`/about#locations`

## Requirements

The project currently targets:

- Node.js `>=24.15.0 <25`
- npm `>=11.17.0 <12`

An `.nvmrc` file is included for Node version management.

## Local Development

Clone the repository:

    git clone https://github.com/IsaacR429/balance-management-consulting-website.git
    cd balance-management-consulting-website

Install dependencies:

    npm install

Start the development server:

    npm run dev

Vite will display the local development URL in the terminal.

## Production Build

Create a production build:

    npm run build

Preview the production build locally:

    npm run preview

## Code Quality

Run linting with:

    npm run lint

Before deployment or handoff, both commands should complete successfully:

    npm run lint
    npm run build

## Responsive Design

The website is designed for desktop, tablet, and mobile viewport sizes.

Responsive behavior includes:

- desktop and mobile navigation
- responsive typography
- adaptive grid layouts
- mobile content stacking
- mobile-friendly call-to-action components
- responsive service catalogues
- responsive business-impact metrics
- optimized location cards
- responsive Northframe presentation

Responsive behavior is based on viewport breakpoints rather than device-specific detection.

## Navigation and Scroll Behavior

Client-side routing is handled with React Router.

The global `ScrollManager` component ensures that:

- normal route changes open at the top of the destination page
- hash navigation such as `/about#locations` scrolls directly to the requested section

## Content Organization

Shared content is stored under:

`src/data/`

Page-specific content is maintained next to the relevant page.

Examples:

- `src/pages/expertise/expertiseData.js`
- `src/pages/impact/impactData.js`
- `src/pages/case-studies/caseStudiesData.js`
- `src/pages/whitepapers/whitepapersData.js`

This structure allows business content to be updated without restructuring the application.

## Branding

Balance branding assets are stored under:

`src/assets/branding/`

Primary logo:

`src/assets/branding/balance-logo.svg`

Northframe-specific assets are maintained separately under:

`src/assets/images/northframe/`

This preserves the visual distinction between the Balance corporate identity and the Northframe product identity.

## Image Optimization

The project includes image optimization tooling using Sharp.

Run:

    npm run optimize:images

High-resolution design source assets may be retained locally under:

`assets-source/`

This directory is intentionally excluded from Git and is not required to build or run the website.

## Deployment

The project is configured for Vercel deployment.

`vercel.json` contains the SPA rewrite configuration required for React Router so that direct navigation and browser refreshes work correctly.

The production build command is:

    npm run build

The generated production output is located in:

`dist/`

## Current Integration Status

### Contact Form

The Contact page interface is currently frontend-only.

It is not yet connected to a production:

- email service
- CRM
- backend API
- database
- form-processing provider

A production integration must be configured before website inquiries can be processed.

### White Papers

The White Papers page currently presents publication titles and editorial metadata.

Downloadable files or external publication URLs can be connected when final publication assets are available.

### Case Studies

Case studies are currently presented as a curated website library.

Individual case-study detail routes have not been implemented.

## Maintenance Guidelines

When extending the application:

1. Keep reusable global components in `src/components`.
2. Keep page-specific components inside their associated page directory.
3. Keep shared content in `src/data`.
4. Keep page-specific data alongside the relevant page.
5. Use optimized web assets for production.
6. Preserve the established responsive design system.
7. Run linting and a production build before deployment.
8. Test significant visual changes across desktop, tablet, and mobile viewport sizes.

## Available Commands

    npm run dev
    npm run lint
    npm run build
    npm run preview
    npm run optimize:images

## Project Status

**Version 1.0.0**

The current implementation includes:

- redesigned Balance corporate website
- responsive desktop, tablet, and mobile layouts
- eight core consulting capabilities
- financial-services positioning
- Northframe product experience
- measurable-impact presentation
- case studies
- white papers
- corporate locations
- contact interface
- React Router navigation
- Vercel deployment configuration

Future development is expected to focus primarily on business-content updates and external service integrations rather than structural architecture.
