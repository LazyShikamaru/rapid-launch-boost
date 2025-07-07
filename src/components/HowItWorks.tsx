import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Laptop, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Send your business details",
      description: "Tell us about your business, services, and goals via WhatsApp. We'll gather everything needed in one quick conversation.",
      icon: <MessageCircle className="h-8 w-8" />
    },
    {
      number: "2", 
      title: "We design & launch in 72 hrs",
      description: "Our team creates your professional website with WhatsApp integration, SEO optimization, and mobile responsiveness.",
      icon: <Laptop className="h-8 w-8" />
    },
    {
      number: "3",
      title: "Start capturing leads—guaranteed",
      description: "Your website goes live with built-in lead capture, Google optimization, and WhatsApp integration ready to convert visitors.",
      icon: <Rocket className="h-8 w-8" />
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/2348012345678?text=Hi Joshua! I want to get started with the 72-hour website service. Can you tell me more?', '_blank');
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From business details to live website in just 3 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-hero transition-all duration-300 relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-4 w-8 h-0.5 bg-primary/20 z-10"></div>
              )}
              
              <CardContent className="p-8">
                {/* Step Number */}
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-4 text-primary">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to get your business online in 72 hours?
          </p>
          <Button 
            size="lg" 
            onClick={openWhatsApp}
            className="px-8 py-4 text-lg shadow-button bg-primary hover:bg-primary/90"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Let's Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;