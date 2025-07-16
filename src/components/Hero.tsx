import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, MessageCircle, CheckCircle, Rocket } from "lucide-react";

const Hero = () => {
  const scrollToValue = () => {
    document.getElementById('value-stack')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2348012345678?text=I\'m ready to launch', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* 72-Hour Guarantee Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary text-primary-foreground border-4 border-background shadow-hero">
            <div className="text-center">
              <div className="text-lg font-bold">Go Live in</div>
              <div className="text-2xl font-black">72H</div>
              <div className="text-xs">or It's FREE</div>
            </div>
          </div>
          <Badge className="mt-4 bg-success text-success-foreground px-4 py-2 text-sm font-semibold">
            3 Spots Weekly
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          <Rocket className="inline-block mr-4 h-12 w-12 md:h-16 md:w-16" />
          Go Live in 72 Hours
          <span className="block bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">
            — Or It's FREE
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
          Perfect for <span className="font-semibold text-accent">creators, coaches, and solopreneurs</span> who need a clean, professional online presence — fast.
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <Button 
            size="lg" 
            onClick={openWhatsApp}
            className="px-12 py-6 text-xl font-bold shadow-button bg-success hover:bg-success/90 text-success-foreground"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Start My Launch →
          </Button>
        </div>

        {/* Social Proof */}
        <div className="text-primary-foreground/80">
          <p className="text-lg mb-2">Trusted by creators worldwide • UK • US • EU</p>
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-accent rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" onClick={scrollToValue}>
        <ArrowDown className="h-6 w-6 text-primary-foreground/60 cursor-pointer" />
      </div>
    </section>
  );
};

export default Hero;