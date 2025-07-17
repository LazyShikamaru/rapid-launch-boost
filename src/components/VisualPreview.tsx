import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, ExternalLink } from "lucide-react";
import preshyScentsPreview from "@/assets/preshy-scents-website.png";
import everythingAccessoriesPreview from "@/assets/everything-accessories-website.png";

const VisualPreview = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See What You Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real websites we've built for entrepreneurs. Clean, professional, and optimized for conversions.
          </p>
        </div>

        {/* Real Project Examples */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Preshy Scents */}
          <Card className="shadow-hero overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted p-3 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-background rounded px-3 py-1 text-sm text-muted-foreground">
                    dynamic-unicorn-bd00dc.netlify.app
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={preshyScentsPreview} 
                  alt="Preshy Scents luxury perfume website with WhatsApp ordering"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Preshy Scents</h3>
                <p className="text-muted-foreground text-sm mb-3">Luxury perfume brand with WhatsApp ordering system</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-green-600 font-semibold">+40% sales increase</div>
                  <a 
                    href="https://dynamic-unicorn-bd00dc.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Live
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Everything Accessories */}
          <Card className="shadow-hero overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted p-3 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-background rounded px-3 py-1 text-sm text-muted-foreground">
                    fastidious-fairy-cd41ad.netlify.app
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={everythingAccessoriesPreview} 
                  alt="Everything Accessories fashion website with online shopping"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Everything Accessories</h3>
                <p className="text-muted-foreground text-sm mb-3">Fashion accessories with online shopping & WhatsApp</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-green-600 font-semibold">+60% lead capture</div>
                  <a 
                    href="https://fastidious-fairy-cd41ad.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Live
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <Monitor className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-sm font-semibold">Mobile First</div>
              <div className="text-xs text-muted-foreground">Perfect on all devices</div>
            </div>
            <div className="p-4">
              <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-sm font-semibold">WhatsApp Ready</div>
              <div className="text-xs text-muted-foreground">Direct lead capture</div>
            </div>
            <div className="p-4">
              <ExternalLink className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-sm font-semibold">Payment Ready</div>
              <div className="text-xs text-muted-foreground">Stripe & PayPal</div>
            </div>
            <div className="p-4">
              <div className="h-8 w-8 mx-auto mb-2 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">SEO</span>
              </div>
              <div className="text-sm font-semibold">Google Ready</div>
              <div className="text-xs text-muted-foreground">Optimized for search</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualPreview;