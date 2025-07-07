import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2348012345678?text=Hi Joshua! I need a website for my business. Can we discuss?', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:joshua@example.com?subject=Website Project Inquiry&body=Hi Joshua, I need a website for my business. Can we discuss?', '_blank');
  };

  const processSteps = [
    {
      step: "1",
      title: "WhatsApp Consultation",
      description: "Tell me about your business, goals, and requirements via WhatsApp."
    },
    {
      step: "2", 
      title: "Proposal & Payment",
      description: "Receive detailed proposal with timeline and 50% upfront payment."
    },
    {
      step: "3",
      title: "Design & Development", 
      description: "I create your website with regular updates and previews."
    },
    {
      step: "4",
      title: "Launch & Training",
      description: "Website goes live within 72 hours with basic training included."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2">
            <MessageCircle className="mr-2 h-4 w-4" />
            Get Started Today
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Launch Your
            <span className="text-primary"> Business Online?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact me now and get your professional website live within 72 hours. 
            Let's discuss your project and get started immediately.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Ready to get started? Reach out via WhatsApp for the fastest response, 
                  or use the contact form below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* WhatsApp - Primary */}
                <div className="flex items-start gap-4 p-4 bg-success/10 rounded-lg border border-success/20">
                  <MessageCircle className="h-6 w-6 text-success mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-success">WhatsApp (Recommended)</h4>
                    <p className="text-sm text-muted-foreground mb-2">Fastest response - Usually within 1 hour</p>
                    <Button 
                      onClick={openWhatsApp}
                      className="bg-success hover:bg-success/90 text-success-foreground"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Other Contact Methods */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+234 801 234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <button 
                        onClick={openEmail}
                        className="text-sm text-primary hover:underline"
                      >
                        joshua@example.com
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 1-2 hours (9AM - 9PM WAT)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-6 shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 2 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Business Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your business name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell us about your business and website needs..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-3 shadow-button"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">How It Works</h3>
            {processSteps.map((process, index) => (
              <Card key={index} className="p-4 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">{process.title}</h4>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="inline-block p-8 shadow-hero bg-gradient-card">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">72-Hour Website Guarantee</h3>
              <p className="text-muted-foreground">
                Your website will be live within 72 hours, or you get your money back.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-success">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-success">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">WhatsApp integration included</span>
              </div>
            </div>
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="px-8 py-4 text-lg shadow-button bg-success hover:bg-success/90 text-success-foreground"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start My Website Project Now
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
