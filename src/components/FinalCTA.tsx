import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Clock, Users } from "lucide-react";

const FinalCTA = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2348012345678?text=LAUNCH', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center">
        {/* Limited Spots Warning */}
        <Badge className="mb-6 bg-accent text-accent-foreground px-6 py-3 text-lg font-bold">
          <Users className="mr-2 h-5 w-5" />
          Only 3 Spots Available This Week
        </Badge>

        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Go Live in 72 Hours?
        </h2>

        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Don't let another week pass without your professional online presence. 
          <span className="font-semibold"> Join creators worldwide who trust me to deliver.</span>
        </p>

        {/* Urgency Elements */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="secondary" className="px-6 py-3 text-base">
            <Clock className="mr-2 h-4 w-4" />
            72-Hour Guarantee
          </Badge>
          <Badge variant="secondary" className="px-6 py-3 text-base">
            <MessageCircle className="mr-2 h-4 w-4" />
            Payment Ready (USD/EUR)
          </Badge>
        </div>

        {/* Final CTA */}
        <Button 
          size="lg" 
          onClick={openWhatsApp}
          className="px-12 py-6 text-xl font-bold shadow-button bg-success hover:bg-success/90 text-success-foreground"
        >
          <MessageCircle className="mr-3 h-6 w-6" />
          DM Me 'LAUNCH' Now
        </Button>

        <p className="text-primary-foreground/70 mt-4">
          Limited spots • First come, first served
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;