import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import EditorialSection from "./components/EditorialSection";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <BrandStatement />
        <EditorialSection />
      </main>
    </>
  );
}

export default App;
