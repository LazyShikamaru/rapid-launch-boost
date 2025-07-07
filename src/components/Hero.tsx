import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, MessageCircle, CheckCircle, Zap } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2348012345678?text=Hi Joshua! I need a website for my business and saw your 72-hour guarantee. Can we discuss?', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Guarantee Badge */}
        <Badge className="mb-6 bg-success text-success-foreground px-6 py-2 text-lg font-semibold shadow-button">
          <CheckCircle className="mr-2 h-5 w-5" />
          72-Hour Website Guarantee
        </Badge>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Get Your Local Business
          <span className="block bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">
            Online & Found
          </span>
          in 72 Hours
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional websites for local businesses that convert visitors into customers. 
          <span className="font-semibold"> Guaranteed LIVE in 72 hours, or it's FREE!</span>
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            "Get Found on Google",
            "Capture More Leads", 
            "WhatsApp Integration",
            "Mobile Optimized"
          ].map((benefit) => (
            <Badge key={benefit} variant="secondary" className="px-4 py-2 text-base">
              <Zap className="mr-2 h-4 w-4" />
              {benefit}
            </Badge>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={openWhatsApp}
            className="px-8 py-4 text-lg font-semibold shadow-button bg-success hover:bg-success/90 text-success-foreground"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Started - WhatsApp Me
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToServices}
            className="px-8 py-4 text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
          >
            View Services
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Social Proof */}
        <div className="text-primary-foreground/80">
          <p className="text-lg mb-2">Trusted by 50+ Local Businesses</p>
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-accent rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;