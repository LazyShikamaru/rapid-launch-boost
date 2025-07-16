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
      question: "What do I need to provide?",
      answer: "Just your business details, logo (if you have one), content/copy, and any specific requirements. I'll handle the rest - design, development, payment setup, and deployment."
    },
    {
      question: "How do I pay?",
      answer: "I accept USD/EUR payments via Stripe, PayPal, or bank transfer. Payment is due 50% upfront to start, 50% on delivery. All pricing is transparent with no hidden fees."
    },
    {
      question: "Do I own the site after delivery?",
      answer: "Absolutely! You get full ownership of your website, including all source code, hosting setup instructions, and login credentials. It's 100% yours."
    },
    {
      question: "What if I'm not happy?",
      answer: "I offer unlimited revisions during the 72-hour build period. Plus, I include 7 days of post-launch tweaks to ensure everything is perfect. Your satisfaction is guaranteed."
    },
    {
      question: "Is the 72-hour guarantee real?",
      answer: "Yes! Your site will be live and fully functional within 72 hours of receiving all materials. If I don't deliver on time, you get it completely free - no questions asked."
    },
    {
      question: "Will it include WhatsApp lead capture?",
      answer: "Every site includes WhatsApp integration, contact forms, and payment buttons (Stripe/PayPal) so you can start capturing leads and processing payments immediately."
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about launching your site in 72 hours
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