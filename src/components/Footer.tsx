import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Code, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2349110387813?text=WhatsApp \'LAUNCH\' - Start Now', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:officialnwabunwanne@gmail.com?subject=Website Project Inquiry', '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-background">Joshua Nwabunwanne</h3>
                <p className="text-background/70">Professional Web Developer</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Helping Nigerian local businesses get online with professional websites 
              that convert visitors into customers. Guaranteed delivery in 72 hours.
            </p>
            
            {/* Quick Contact */}
            <div className="space-y-3">
              <Button 
                onClick={openWhatsApp}
                className="bg-success hover:bg-success/90 text-success-foreground shadow-button"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp 'LAUNCH' - Start Now
              </Button>
              <div className="flex items-center gap-2">
                <Badge className="bg-success text-success-foreground">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  72-Hour Guarantee
                </Badge>
                <Badge variant="outline" className="border-background/20 text-background">
                  50+ Projects Delivered
                </Badge>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Basic Landing Page</li>
              <li>Multi-Page Business Site</li>
              <li>E-Commerce Websites</li>
              <li>WhatsApp Integration</li>
              <li>Mobile Optimization</li>
              <li>SEO Setup</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">WhatsApp Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <button onClick={openEmail} className="text-sm hover:text-primary transition-colors">
                  officialnwabunwanne@gmail.com
                </button>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">9AM - 9PM WAT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © {currentYear} Joshua Nwabunwanne. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-background/60 text-sm">
              <span>Professional Web Development for Nigerian Businesses</span>
              <Badge className="bg-success text-success-foreground px-3 py-1">
                <CheckCircle className="mr-1 h-3 w-3" />
                Guaranteed 72hrs
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Button 
          onClick={openWhatsApp}
          size="lg"
          className="rounded-full w-14 h-14 bg-success hover:bg-success/90 text-success-foreground shadow-hero"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;