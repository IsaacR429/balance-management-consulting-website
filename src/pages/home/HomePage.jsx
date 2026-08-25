import HeroSection from "./sections/HeroSection.jsx";
import BalanceCapabilitiesSection from "./sections/BalanceCapabilitiesSection.jsx";
import IndustriesSection from "./sections/IndustriesSection.jsx";
import NorthframeSpotlightSection from "./sections/NorthframeSpotlightSection.jsx";
import MeasurableImpactSection from "./sections/MeasurableImpactSection.jsx";
import ClientFeedbackSection from "./sections/ClientFeedbackSection.jsx";
import ResourcesSection from "./sections/ResourcesSection.jsx";

function HomePage() {
  return (
    <>
      <HeroSection />
      <BalanceCapabilitiesSection />
      <IndustriesSection />
      <NorthframeSpotlightSection />
      <MeasurableImpactSection />
      <ClientFeedbackSection />
      <ResourcesSection />
    </>
  );
}

export default HomePage;
