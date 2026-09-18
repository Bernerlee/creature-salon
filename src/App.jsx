import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import EditorialSection from "./components/EditorialSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import GallerySection from "./components/GallerySection";
import SustainabilitySection from "./components/SustainabilitySection";
import BookingCTA from "./components/BokingCTA";
import LocationSection from "./components/Location";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <BrandStatement />
        <EditorialSection />
        <ServicesSection />
        <TeamSection />
        <SustainabilitySection />
        <GallerySection />
        <BookingCTA />
        <LocationSection />
      </main>
    </>
  );
}

export default App;
