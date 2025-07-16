import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, ExternalLink } from "lucide-react";
import designPreview from "@/assets/professional-website-design.jpg";

const VisualPreview = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See What You Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clean, professional designs that convert visitors into paying customers
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="shadow-hero overflow-hidden">
            <CardContent className="p-0">
              {/* Mockup Container */}
              <div className="relative bg-gradient-to-br from-primary to-accent p-8 md:p-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <Monitor className="h-8 w-8 text-primary-foreground" />
                    <Smartphone className="h-8 w-8 text-primary-foreground" />
                    <span className="text-primary-foreground font-semibold">Desktop & Mobile Optimized</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Inspired by top Dribbble designs</span>
                  </div>
                </div>
                
                {/* Browser Mockup */}
                <div className="bg-background rounded-lg shadow-2xl overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-muted p-3 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="bg-background rounded px-3 py-1 text-sm text-muted-foreground">
                        yourname.com
                      </div>
                    </div>
                  </div>
                  
                  {/* Website Preview - Real Dribbble Design */}
                  <div className="bg-background">
                    <img 
                      src={designPreview} 
                      alt="Professional website design preview from Dribbble - modern landing page for creators and coaches"
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: '500px', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* Features Below */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-primary-foreground/90">
                  <div className="text-center">
                    <div className="text-xs font-semibold">Fast Loading</div>
                    <div className="text-xs opacity-75">Under 3 seconds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-semibold">Mobile First</div>
                    <div className="text-xs opacity-75">Perfect on all devices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-semibold">Payment Ready</div>
                    <div className="text-xs opacity-75">Stripe & PayPal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-semibold">SEO Optimized</div>
                    <div className="text-xs opacity-75">Google ready</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisualPreview;