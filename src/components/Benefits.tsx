import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Smartphone, MessageCircle, Search, Globe, Calendar, CreditCard } from "lucide-react";

const ValueStack = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile-Optimized Website"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Lead Capture Form or Booking Link"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "WhatsApp or Messenger Integration"
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Basic SEO Setup"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Google Profile Optimization"
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "7-Day Post-Launch Tweaks"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Payment-ready setup (Stripe/PayPal)"
    }
  ];

  return (
    <section id="value-stack" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What's Included
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to launch your online presence and start capturing leads
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-hero transition-all duration-300 p-6">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg leading-tight">
                  {feature.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStack;