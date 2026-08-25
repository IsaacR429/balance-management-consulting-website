# Balance Management Consulting Website

Official frontend implementation of the Balance Management Consulting corporate website.

The website presents Balance's consulting capabilities, financial-services focus, measurable business impact, corporate presence, thought leadership, and the Northframe operational assurance platform.

## Live Website

Production:

https://balance-management-consulting-website.vercel.app

Source repository:

https://github.com/IsaacR429/balance-management-consulting-website

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

The application uses a page-oriented React architecture.

Main source directories:

    src/
    |
    |-- app/
    |   |-- App.jsx
    |   `-- router.jsx
    |
    |-- assets/
    |   |-- branding/
    |   |-- images/
    |   `-- video/
    |
    |-- components/
    |   |-- layout/
    |   `-- ui/
    |
    |-- data/
    |   |-- navigation.js
    |   `-- testimonials.js
    |
    |-- pages/
    |   |-- about/
    |   |-- case-studies/
    |   |-- contact/
    |   |-- expertise/
    |   |-- home/
    |   |-- impact/
    |   |-- product/
    |   |   `-- northframe/
    |   `-- whitepapers/
    |
    |-- styles/
    |   `-- index.css
    |
    `-- main.jsx

Each major page is organized as an independent feature area containing its page component, page-specific data, and section components.

Shared navigation, testimonials, layout components, and reusable UI primitives remain outside individual pages.

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

The locations section can also be accessed directly using:

    /about#locations

## Requirements

The project currently targets:

- Node.js >= 24.15.0 and < 25
- npm >= 11.17.0 and < 12

An `.nvmrc` file is included for Node version management.

## Local Development

Clone the repository:

    git clone https://github.com/IsaacR429/balance-management-consulting-website.git

Enter the project directory:

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

The generated production files are created in:

    dist/

## Code Quality

Run linting with:

    npm run lint

Before deployment or handoff, the following commands should complete successfully:

    npm run lint
    npm run build

The current handoff version passes both linting and production build validation.

## Responsive Design

The website is designed for desktop, tablet, and mobile viewport sizes.

Responsive behavior includes:

- Desktop and mobile navigation
- Responsive typography
- Adaptive grid layouts
- Mobile content stacking
- Mobile-friendly call-to-action components
- Responsive service catalogues
- Responsive business-impact metrics
- Optimized location cards
- Responsive Northframe presentation

Responsive behavior is based on CSS viewport breakpoints rather than device-specific detection.

## Navigation and Scroll Behavior

Client-side navigation is handled with React Router.

The global `ScrollManager` component ensures that:

- Standard route changes open at the top of the destination page
- Hash navigation such as `/about#locations` scrolls directly to the requested section

## Content Organization

Shared website content is maintained under:

    src/data/

Examples include:

    src/data/navigation.js
    src/data/testimonials.js

Page-specific content is maintained alongside its corresponding page.

Examples include:

    src/pages/expertise/expertiseData.js
    src/pages/impact/impactData.js
    src/pages/case-studies/caseStudiesData.js
    src/pages/whitepapers/whitepapersData.js

This structure allows business content to be updated without restructuring the application.

## Branding

Balance branding assets are stored under:

    src/assets/branding/

Primary Balance logo:

    src/assets/branding/balance-logo.svg

Northframe-specific assets are maintained separately under:

    src/assets/images/northframe/

This preserves the distinction between the Balance corporate identity and the Northframe product identity.

## Media and Image Optimization

Production media assets are stored under:

    src/assets/images/
    src/assets/video/

The project includes image optimization tooling using Sharp.

Run:

    npm run optimize:images

High-resolution design source assets may be retained locally under:

    assets-source/

The `assets-source/` directory is intentionally excluded from Git and is not required to build or run the website.

## Deployment

The application is deployed through Vercel.

Production URL:

https://balance-management-consulting-website.vercel.app

The project includes:

    vercel.json

This configuration contains the SPA rewrite required for React Router so that direct route access and browser refreshes work correctly.

Production deployments are connected to the repository's `main` branch.

Updates pushed to `main` can trigger a new Vercel production deployment through the configured Git integration.

## Current Integration Status

### Contact Form

The Contact page interface is currently frontend-only.

It is not yet connected to a production:

- Email service
- CRM
- Backend API
- Database
- Form-processing provider

A production integration must be configured before submitted inquiries can be processed.

### White Papers

The White Papers page currently presents publication titles and editorial information.

Downloadable PDF files or external publication URLs can be connected when final publication assets are available.

### Case Studies

Case studies are currently presented as a curated website library.

Individual case-study detail routes have not been implemented.

## Maintenance Guidelines

When extending or maintaining the application:

1. Keep reusable global components inside `src/components`.
2. Keep page-specific components inside their associated page directory.
3. Keep shared content inside `src/data`.
4. Keep page-specific data alongside the relevant page.
5. Use optimized web assets for production content.
6. Preserve the established responsive design system.
7. Run linting before deployment.
8. Run a production build before deployment.
9. Test significant visual changes across desktop, tablet, and mobile viewport sizes.
10. Verify direct route refreshes after routing changes.

## Available Commands

Start development:

    npm run dev

Run linting:

    npm run lint

Create a production build:

    npm run build

Preview the production build:

    npm run preview

Optimize images:

    npm run optimize:images

## Project Status

Version 1.0.0

The current implementation includes:

- Complete Balance corporate website redesign
- Responsive desktop, tablet, and mobile layouts
- Eight core consulting capabilities
- Financial Services positioning
- Banking, Insurance, and Capital Markets focus
- Northframe product experience
- Business impact presentation
- Case studies
- White papers
- Corporate locations
- Contact interface
- Responsive navigation
- Route scroll management
- Vercel deployment configuration
- Professional repository documentation

Future development is expected to focus primarily on business-content updates and external service integrations rather than foundational frontend restructuring.