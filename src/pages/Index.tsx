import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValueStack from "@/components/Benefits";
import TrustSection from "@/components/TrustSection";
import VisualPreview from "@/components/VisualPreview";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <ValueStack />
        <TrustSection />
        <VisualPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
