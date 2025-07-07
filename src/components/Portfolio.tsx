import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MessageCircle, ShoppingBag, Sparkles, Users } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Preshy Scents",
      category: "E-Commerce", 
      description: "Complete online perfume store with product catalog, WhatsApp ordering system, and customer reviews. Features automated order notifications and inventory tracking.",
      image: "/api/placeholder/400/300",
      features: ["WhatsApp Integration", "Product Catalog", "Order Management", "Mobile Responsive"],
      link: "#",
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      title: "Gnade Wigs",
      category: "Business Website",
      description: "Professional hair and beauty business website with service showcase, appointment booking via WhatsApp, and customer gallery. Optimized for local search.",
      image: "/api/placeholder/400/300", 
      features: ["Service Showcase", "WhatsApp Booking", "Photo Gallery", "Local SEO"],
      link: "#",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Lagos Food Hub",
      category: "Landing Page",
      description: "Single-page restaurant website with menu display, online ordering through WhatsApp, and location details. Built for local food delivery business.",
      image: "/api/placeholder/400/300",
      features: ["Menu Display", "WhatsApp Orders", "Location Map", "Fast Loading"],
      link: "#",
      icon: <ShoppingBag className="h-5 w-5" />
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/2348012345678?text=Hi Joshua! I saw your portfolio and would like to discuss my website project.', '_blank');
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2">
            Recent Work
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Websites That 
            <span className="text-primary"> Convert</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real websites for real Nigerian businesses. Each designed to capture leads, 
            drive sales, and help local businesses grow online.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 transform hover:-translate-y-2">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-2 inline-block">
                      {project.icon}
                    </div>
                    <p className="text-sm text-muted-foreground">Live Website Preview</p>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {project.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* View Project Button */}
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </Button>
                  <Button size="sm" onClick={openWhatsApp}>
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-6 shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Websites Delivered</div>
          </Card>
          <Card className="text-center p-6 shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">72hrs</div>
            <div className="text-muted-foreground">Average Delivery Time</div>
          </Card>
          <Card className="text-center p-6 shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="inline-block p-8 shadow-card">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Your Business Online?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join 50+ successful local businesses with a professional website that actually works.
            </p>
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="px-8 py-4 shadow-button"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Your Project Today
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;