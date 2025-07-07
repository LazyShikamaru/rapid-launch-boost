import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Joshua Nwabunwanne Web Development",
      "description": "Professional website development for Nigerian local businesses. 72-hour delivery guarantee with WhatsApp integration and SEO optimization.",
      "url": "https://joshua-nwabunwanne.vercel.app",
      "telephone": "+234-801-234-5678",
      "email": "joshua@example.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "Nigeria"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "6.5244",
        "longitude": "3.3792"
      },
      "openingHours": "Mo-Su 09:00-21:00",
      "priceRange": "₦50,000 - ₦200,000",
      "serviceArea": {
        "@type": "Country",
        "name": "Nigeria"
      },
      "areaServed": "Nigeria",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Basic Landing Page",
              "description": "Professional single-page website with WhatsApp integration"
            },
            "price": "50000",
            "priceCurrency": "NGN"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Multi-Page Business Site",
              "description": "Complete business website with multiple pages"
            },
            "price": "120000",
            "priceCurrency": "NGN"
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
          "name": "Is the 72-hour guarantee real?", 
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We guarantee your website will be completely finished and live within 72 hours of project start, or you don't pay. We've delivered on this promise for 50+ Nigerian businesses with a 100% success rate."
          }
        },
        {
          "@type": "Question",
          "name": "Will it include WhatsApp lead capture?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Yes, every website includes full WhatsApp integration. Visitors can contact you instantly with pre-filled messages, and you'll receive notifications for every lead. This feature alone has helped our clients generate hundreds of leads."
          }
        },
        {
          "@type": "Question",
          "name": "What if I need changes after the website is live?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We include 7 days of free minor revisions after launch. For major changes or additional features, we offer affordable maintenance packages starting from ₦10,000/month."
          }
        },
        {
          "@type": "Question", 
          "name": "Do you provide hosting and domain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we handle everything! Your package includes 1 year of premium hosting, SSL certificate, and help with domain registration. No technical hassles for you."
          }
        }
      ]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "72-Hour Website Development for Nigerian Businesses",
      "description": "Professional website development service specifically designed for Nigerian local businesses. Includes WhatsApp integration, SEO optimization, and mobile responsiveness.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Joshua Nwabunwanne Web Development"
      },
      "areaServed": "Nigeria",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Basic Landing Page - 72 Hour Guarantee",
            "price": "50000",
            "priceCurrency": "NGN",
            "description": "Single-page website with WhatsApp integration, guaranteed delivery in 72 hours"
          }
        ]
      }
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Joshua Nwabunwanne Web Development",
      "url": "https://joshua-nwabunwanne.vercel.app",
      "logo": "https://joshua-nwabunwanne.vercel.app/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-801-234-5678",
        "contactType": "customer service",
        "availableLanguage": ["English", "Igbo", "Yoruba"],
        "areaServed": "Nigeria"
      },
      "sameAs": [
        "https://wa.me/2348012345678"
      ]
    };

    // Insert schemas into head
    const schemas = [localBusinessSchema, faqSchema, serviceSchema, organizationSchema];
    
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