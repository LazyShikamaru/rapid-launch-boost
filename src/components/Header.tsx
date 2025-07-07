import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Menu, X, Code, CheckCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2348012345678?text=Hi Joshua! I need a website for my business.', '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <Code className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Joshua Nwabunwanne</h1>
              <p className="text-xs text-muted-foreground">Web Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            
            {/* Guarantee Badge */}
            <Badge className="bg-success text-success-foreground px-3 py-1">
              <CheckCircle className="mr-1 h-3 w-3" />
              72hr Guarantee
            </Badge>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button onClick={openWhatsApp} className="shadow-button">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="p-4 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 border-t border-border space-y-3">
                <Badge className="bg-success text-success-foreground px-3 py-1">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  72hr Guarantee
                </Badge>
                <Button onClick={openWhatsApp} className="w-full shadow-button">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;