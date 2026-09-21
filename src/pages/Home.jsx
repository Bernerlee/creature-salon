import Hero from "../components/Hero";
import BrandStatement from "../components/BrandStatement";
import EditorialSection from "../components/EditorialSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import SustainabilitySection from "../components/SustainabilitySection";
import GallerySection from "../components/GallerySection";
import BookingCTA from "../components/BokingCTA";
import LocationSection from "../components/Location";

function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <EditorialSection />
      <ServicesSection />
      <TeamSection />
      <SustainabilitySection />
      <GallerySection />
      <BookingCTA />
      <LocationSection />
    </>
  );
}

export default Home;
