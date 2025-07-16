import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone } from "lucide-react";

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

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-hero overflow-hidden">
            <CardContent className="p-0">
              {/* Mockup Container */}
              <div className="relative bg-gradient-to-br from-primary to-accent p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <Monitor className="h-8 w-8 text-primary-foreground" />
                  <Smartphone className="h-8 w-8 text-primary-foreground" />
                  <span className="text-primary-foreground font-semibold">Desktop & Mobile Optimized</span>
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
                  
                  {/* Website Preview */}
                  <div className="bg-background p-6 min-h-[300px]">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex justify-between items-center pb-4 border-b">
                        <div className="w-20 h-8 bg-primary rounded"></div>
                        <div className="flex gap-2">
                          <div className="w-16 h-6 bg-muted rounded"></div>
                          <div className="w-16 h-6 bg-muted rounded"></div>
                        </div>
                      </div>
                      
                      {/* Hero */}
                      <div className="text-center py-8">
                        <div className="w-3/4 h-8 bg-foreground rounded mx-auto mb-3"></div>
                        <div className="w-1/2 h-4 bg-muted rounded mx-auto mb-6"></div>
                        <div className="w-32 h-10 bg-success rounded mx-auto"></div>
                      </div>
                      
                      {/* Features */}
                      <div className="grid grid-cols-3 gap-4">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="text-center space-y-2">
                            <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto"></div>
                            <div className="w-full h-3 bg-muted rounded"></div>
                            <div className="w-3/4 h-2 bg-muted/60 rounded mx-auto"></div>
                          </div>
                        ))}
                      </div>
                    </div>
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