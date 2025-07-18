import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, ExternalLink, MessageCircle } from "lucide-react";
import preshyScentsPreview from "@/assets/preshy-scents-website.png";
import everythingAccessoriesPreview from "@/assets/everything-accessories-website.png";

const VisualPreview = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2349110387813?text=WhatsApp \'LAUNCH\' - Start Now', '_blank');
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Side Hustles That Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real revenue-generating websites built for ambitious entrepreneurs
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
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Preshy Scents</h3>
                  <Badge className="bg-success text-success-foreground px-3 py-1 text-sm font-bold">
                    ₦800K Monthly
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Luxury fragrance business generating consistent monthly revenue with seamless payment integration and premium positioning</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="flex-1"
                  >
                    <a 
                      href="https://dynamic-unicorn-bd00dc.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      View Live
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="mr-1 h-3 w-3" />
                    WhatsApp 'LAUNCH' – Start Now
                  </Button>
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
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Everything Accessories</h3>
                  <Badge className="bg-success text-success-foreground px-3 py-1 text-sm font-bold">
                    ₦2.5M Monthly
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Fashion accessories store scaling to 6-figure monthly earnings with advanced e-commerce features and premium customer experience</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="flex-1"
                  >
                    <a 
                      href="https://fastidious-fairy-cd41ad.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      View Live
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="mr-1 h-3 w-3" />
                    WhatsApp 'LAUNCH' – Start Now
                  </Button>
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