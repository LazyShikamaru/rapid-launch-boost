import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Is the 72-hour guarantee real?",
      answer: "Absolutely! We guarantee your website will be completely finished and live within 72 hours of project start, or you don't pay. We've delivered on this promise for 50+ Nigerian businesses with a 100% success rate."
    },
    {
      question: "Will it include WhatsApp lead capture?",
      answer: "Yes, every website includes full WhatsApp integration. Visitors can contact you instantly with pre-filled messages, and you'll receive notifications for every lead. This feature alone has helped our clients generate hundreds of leads."
    },
    {
      question: "What if I need changes after the website is live?",
      answer: "We include 7 days of free minor revisions after launch. For major changes or additional features, we offer affordable maintenance packages starting from ₦10,000/month."
    },
    {
      question: "Do you provide hosting and domain?",
      answer: "Yes, we handle everything! Your package includes 1 year of premium hosting, SSL certificate, and help with domain registration. No technical hassles for you."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Absolutely! Every website we build is fully responsive and optimized for mobile devices. Since most Nigerian internet users browse on phones, mobile optimization is our top priority."
    },
    {
      question: "How do I get started?",
      answer: "Simply click the WhatsApp button and send us your business details. We'll discuss your needs, send you a proposal, and start building your website immediately after payment."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Got Questions? We Have Answers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our 72-hour website service
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-card">
              <CardHeader 
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <CardTitle className="flex items-center justify-between text-left">
                  <span className="text-lg">{faq.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                  )}
                </CardTitle>
              </CardHeader>
              
              {openItems.includes(index) && (
                <CardContent className="pt-0 animate-fade-in">
                  <div className="border-t pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;