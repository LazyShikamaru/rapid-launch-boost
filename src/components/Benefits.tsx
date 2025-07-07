import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MapPin, MessageCircle, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Get found on Google Maps via LocalBusiness SEO",
      description: "Your website will be optimized with proper LocalBusiness schema markup, making you eligible for Google Maps listings and local search results."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Capture new leads instantly with WhatsApp integration",
      description: "Every visitor can contact you directly through WhatsApp with pre-filled messages, turning browsers into customers immediately."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Live within 72 hours—or it's free",
      description: "Your professional website will be completely finished and live within 72 hours, guaranteed. If not, you don't pay a single naira."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Our 72-Hour Website Service?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built specifically for Nigerian micro-businesses who need results fast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-hero transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;