import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Professional Service Schema
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Joshua Nwabunwanne - Web Developer for Creators",
      "description": "72-hour website guarantee for international creators, coaches, and solopreneurs. Professional websites with payment integration and lead capture.",
      "url": "https://joshua-nwabunwanne.vercel.app",
      "telephone": "+234-801-234-5678",
      "email": "joshua@example.com",
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "$500 - $2000",
      "areaServed": [
        {"@type": "Country", "name": "United Kingdom"},
        {"@type": "Country", "name": "United States"},
        {"@type": "Place", "name": "European Union"},
        {"@type": "Country", "name": "Nigeria"}
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website Development Services for Creators",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "72-Hour Website Launch",
              "description": "Professional website with payment integration, lead capture, and WhatsApp integration"
            },
            "price": "500",
            "priceCurrency": "USD"
          }
        ]
      }
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What do I need to provide?", 
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Just your business details, logo (if you have one), content/copy, and any specific requirements. I'll handle the rest - design, development, payment setup, and deployment."
          }
        },
        {
          "@type": "Question",
          "name": "How do I pay?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "I accept USD/EUR payments via Stripe, PayPal, or bank transfer. Payment is due 50% upfront to start, 50% on delivery. All pricing is transparent with no hidden fees."
          }
        },
        {
          "@type": "Question",
          "name": "Is the 72-hour guarantee real?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Your site will be live and fully functional within 72 hours of receiving all materials. If I don't deliver on time, you get it completely free - no questions asked."
          }
        },
        {
          "@type": "Question", 
          "name": "Will it include WhatsApp lead capture?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every site includes WhatsApp integration, contact forms, and payment buttons (Stripe/PayPal) so you can start capturing leads and processing payments immediately."
          }
        }
      ]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "72-Hour Website Development for Creators and Coaches",
      "description": "Professional website development service for international creators, coaches, and solopreneurs. Includes payment integration, lead capture, WhatsApp integration, and SEO optimization.",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Joshua Nwabunwanne - Web Developer for Creators"
      },
      "areaServed": ["United Kingdom", "United States", "European Union", "Nigeria"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Creator Website Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "72-Hour Creator Website Launch",
            "price": "500",
            "priceCurrency": "USD",
            "description": "Professional website with payment integration, lead capture, and guaranteed 72-hour delivery"
          }
        ]
      }
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Joshua Nwabunwanne - Web Developer for Creators",
      "url": "https://joshua-nwabunwanne.vercel.app",
      "logo": "https://joshua-nwabunwanne.vercel.app/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-801-234-5678",
        "contactType": "customer service",
        "availableLanguage": ["English"],
        "areaServed": ["UK", "US", "EU", "Nigeria"]
      },
      "sameAs": [
        "https://wa.me/2348012345678"
      ]
    };

    // Insert schemas into head
    const schemas = [professionalServiceSchema, faqSchema, serviceSchema, organizationSchema];
    
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const existingScript = document.getElementById(`structured-data-${index}`);
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default StructuredData;