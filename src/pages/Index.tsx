import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Portfolio from "@/components/Portfolio";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Portfolio />
        <HowItWorks />
        <Testimonials />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
