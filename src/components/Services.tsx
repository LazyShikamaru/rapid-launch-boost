import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Zap, MessageCircle, Globe, Smartphone, TrendingUp } from "lucide-react";

const Services = () => {
  const openWhatsApp = (service: string) => {
    const message = `Hi Joshua! I'm interested in your ${service} service. Can we discuss my project?`;
    window.open(`https://wa.me/2348012345678?text=${encodeURIComponent(message)}`, '_blank');
  };

  const services = [
    {
      title: "Basic Landing Page",
      price: "₦50,000",
      originalPrice: "₦75,000",
      description: "A professional single-page website that introduces your business and converts visitors into customers.",
      features: [
        "Professional single-page design",
        "Contact form integration", 
        "WhatsApp business integration",
        "Mobile-responsive design",
        "Basic SEO optimization",
        "Google Maps integration",
        "Social media links"
      ],
      guarantee: "Guaranteed LIVE in 72 hours, or it's FREE!",
      popular: true,
      icon: <Globe className="h-8 w-8" />
    },
    {
      title: "Multi-Page Business Site",
      price: "₦120,000",
      originalPrice: "₦150,000", 
      description: "Complete business website with multiple pages to showcase your full service offering.",
      features: [
        "Up to 5 professional pages",
        "Advanced contact forms",
        "WhatsApp & SMS integration",
        "Photo gallery/portfolio",
        "Service/product pages",
        "About & testimonial pages",
        "Advanced SEO optimization"
      ],
      guarantee: "Guaranteed LIVE in 72 hours, or it's FREE!",
      popular: false,
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "E-Commerce Starter",
      price: "₦200,000",
      originalPrice: "₦300,000",
      description: "Start selling online with a complete e-commerce solution for your local business.",
      features: [
        "Product catalog (up to 50 items)",
        "Shopping cart functionality", 
        "Payment integration (Paystack)",
        "Order management system",
        "Customer accounts",
        "Inventory tracking",
        "WhatsApp order notifications"
      ],
      guarantee: "Guaranteed LIVE in 72 hours, or it's FREE!",
      popular: false,
      icon: <Smartphone className="h-8 w-8" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2">
            <Zap className="mr-2 h-4 w-4" />
            72-Hour Website Services
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get Your Business Online 
            <span className="text-primary"> Fast</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional websites designed specifically for local Nigerian businesses. 
            Every website includes WhatsApp integration and is guaranteed to go live within 72 hours.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-3xl font-bold text-primary">{service.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{service.originalPrice}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Guarantee */}
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex items-center gap-2 text-success font-semibold">
                    <Clock className="h-4 w-4" />
                    {service.guarantee}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full py-3 shadow-button"
                  onClick={() => openWhatsApp(service.title)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Order Now - WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <Card className="inline-block p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-2">Need Something Custom?</h3>
            <p className="text-muted-foreground mb-4">
              Have specific requirements? Let's discuss your unique business needs.
            </p>
            <Button 
              variant="outline"
              onClick={() => openWhatsApp("Custom Website Solution")}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Discuss Custom Project
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;