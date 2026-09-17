import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import EditorialSection from "./components/EditorialSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";

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
      </main>
    </>
  );
}

export default App;
