
import React, { useRef, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  const faqItems: FAQItem[] = [
    {
      question: "How quickly can you respond to emergency plumbing issues?",
      answer: "We understand that plumbing emergencies can't wait. Our team typically responds within 1-2 hours for emergency situations. We're available 24/7 for urgent plumbing issues throughout New Zealand."
    },
    {
      question: "Do you provide free quotes for plumbing work?",
      answer: "Yes, we provide free, no-obligation quotes for all plumbing services. You can request a quote online or call us directly. Our quotes are transparent with no hidden costs or surprises."
    },
    {
      question: "What areas in New Zealand do you service?",
      answer: "Cosmic Plumbing provides services across major regions in New Zealand including Auckland, Wellington, Christchurch, and surrounding areas. Contact us to confirm if we service your specific location."
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer: "Absolutely. All our plumbers are fully licensed, certified, and insured. We maintain the highest standards of training and stay updated with the latest plumbing technologies and techniques."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, bank transfers, and cash. For larger projects, we also offer flexible payment plans - please ask for details when receiving your quote."
    },
    {
      question: "Do you offer any warranties on your work?",
      answer: "Yes, we stand behind our work with a satisfaction guarantee. We offer warranties on all our plumbing services and installations, with specific warranty periods depending on the type of work done."
    }
  ];
  
  return (
    <section id="faq" className="py-24">
      <div className="cosmic-container max-w-4xl">
        <div 
          ref={containerRef}
          className="opacity-0 translate-y-10 transition-all duration-500"
        >
          <div className="text-center mb-12">
            <h2 className="cosmic-title">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-cosmic-white/70">
              Find answers to common questions about our plumbing services.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="glass rounded-2xl p-6">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-cosmic-purple/20">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-cosmic-purple transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-cosmic-white/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
