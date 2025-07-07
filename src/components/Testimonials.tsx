import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Joshua's site got us our first sale in days! The WhatsApp integration made it so easy for customers to contact us. Highly recommend!",
      author: "Adunni Okafor",
      business: "Preshy Scents",
      location: "Lagos, Nigeria",
      rating: 5
    },
    {
      quote: "Within a week of launching, we had 12 new bookings through WhatsApp. The 72-hour delivery was real—Joshua delivered exactly on time!",
      author: "Grace Nkema", 
      business: "Gnade Wigs",
      location: "Abuja, Nigeria",
      rating: 5
    },
    {
      quote: "Professional work, fast delivery, and great customer service. My restaurant's online presence has never looked better. Thank you Joshua!",
      author: "Emeka Chioma",
      business: "Lagos Food Hub", 
      location: "Lagos, Nigeria",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real Nigerian businesses who trusted us with their online presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-primary p-2 rounded-full">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>
              
              <CardContent className="p-6 pt-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.business}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">72-Hour Delivery Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;