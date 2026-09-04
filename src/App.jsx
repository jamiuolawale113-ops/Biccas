import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import LogoCloud from './Components/LogoCloud';
import SupportSection from './Components/SupportSection';
import Features from './Components/Features';
import BenefitsSection from './Components/BenefitsSection';
import PricingSection from './Components/PricingSection';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="header-hero-wrapper">
        <Navbar />
        <Hero />
        <LogoCloud />
      </div>
      <SupportSection />
      <Features />
      <BenefitsSection />
      <PricingSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;