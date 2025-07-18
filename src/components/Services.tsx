import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageCircle, Rocket, Zap, TrendingUp } from "lucide-react";

const Services = () => {
  const openWhatsApp = (service: string) => {
    window.open(`https://wa.me/2349110387813?text=WhatsApp 'LAUNCH' - Start Now - ${service}`, '_blank');
  };

  const services = [
    {
      title: "Side Hustle Starter",
      price: "₦400,000",
      icon: <Rocket className="h-8 w-8" />,
      description: "Perfect for launching your first income stream",
      features: [
        "Mobile-optimized website",
        "Payment integration (Stripe/PayPal)",
        "Lead capture system",
        "2 training sessions",
        "30-day support",
        "SEO optimization"
      ],
      popular: false
    },
    {
      title: "Solopreneur Pro",
      price: "₦650,000",
      icon: <Zap className="h-8 w-8" />,
      description: "Scale your business with advanced features",
      features: [
        "Everything in Starter",
        "Advanced booking system",
        "Email automation setup",
        "4 training sessions",
        "60-day support",
        "Google Ads integration",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      title: "E-Commerce Accelerator",
      price: "₦850,000",
      icon: <TrendingUp className="h-8 w-8" />,
      description: "Complete online store for maximum revenue",
      features: [
        "Everything in Pro",
        "Full e-commerce store",
        "Inventory management",
        "Multiple payment gateways",
        "6 training sessions",
        "90-day support",
        "Conversion optimization",
        "Revenue tracking"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Premium Side Hustle Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-ticket services for serious entrepreneurs ready to invest in their success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`relative shadow-card hover:shadow-hero transition-all duration-300 ${service.popular ? 'border-primary border-2' : ''}`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full text-primary">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <div className="text-3xl font-black text-primary mb-2">{service.price}</div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => openWhatsApp(service.title)}
                  className={`w-full py-6 text-lg font-semibold ${service.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp 'LAUNCH' - Start Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Project Inquiry */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
              <p className="text-muted-foreground mb-6">
                Enterprise solutions and custom development for unique business needs
              </p>
              <Button 
                onClick={() => openWhatsApp('Custom Project')}
                variant="outline" 
                size="lg"
                className="px-8 py-4"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp 'LAUNCH' - Start Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;