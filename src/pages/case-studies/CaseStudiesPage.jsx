import CaseStudiesIntroSection from "./sections/CaseStudiesIntroSection.jsx";
import FeaturedCaseStudySection from "./sections/FeaturedCaseStudySection.jsx";
import CaseStudiesGridSection from "./sections/CaseStudiesGridSection.jsx";
import CaseStudiesCTASection from "./sections/CaseStudiesCTASection.jsx";

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesIntroSection />
      <FeaturedCaseStudySection />
      <CaseStudiesGridSection />
      <CaseStudiesCTASection />
    </>
  );
}
