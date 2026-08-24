import { createBrowserRouter } from "react-router-dom";

import WebsiteLayout from "../components/layout/WebsiteLayout.jsx";

import HomePage from "../pages/home/HomePage.jsx";
import ExpertisePage from "../pages/expertise/ExpertisePage.jsx";
import NorthframePage from "../pages/product/northframe/NorthframePage.jsx";
import ImpactPage from "../pages/impact/ImpactPage.jsx";
import AboutPage from "../pages/about/AboutPage.jsx";
import ContactPage from "../pages/contact/ContactPage.jsx";
import CaseStudiesPage from "../pages/case-studies/CaseStudiesPage.jsx";
import WhitepapersPage from "../pages/whitepapers/WhitepapersPage.jsx";

export const router = createBrowserRouter([
  {
    element: <WebsiteLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/expertise",
        element: <ExpertisePage />,
      },
      {
        path: "/northframe",
        element: <NorthframePage />,
      },
      {
        path: "/impact",
        element: <ImpactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/case-studies",
        element: <CaseStudiesPage />,
      },
      {
        path: "/whitepapers",
        element: <WhitepapersPage />,
      },
    ],
  },
]);
