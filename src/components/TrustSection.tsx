import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Testimonial */}
          <Card className="shadow-card mb-12">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Quote className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex gap-1 justify-center md:justify-start mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl italic text-muted-foreground mb-4">
                    "Joshua's site got us our first sale in days! The international payment setup was seamless - PayPal and Stripe working perfectly. Highly recommend!"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-lg">Sarah Chen</p>
                    <p className="text-primary font-medium">Wellness Coach, London</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Who I Am */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Senior full-stack developer with 5+ years building high-converting websites for international creators. 
              <span className="font-semibold text-foreground"> Specialized in fast launches and payment integration.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;