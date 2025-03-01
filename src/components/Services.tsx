
import React, { useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.classList.add('opacity-100');
                cardRef.current.classList.remove('opacity-0', 'translate-y-10');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <Card ref={cardRef} className={cn(
      "cosmic-card opacity-0 translate-y-10 transition-all duration-500 border-cosmic-purple/20",
      "hover:shadow-lg hover:shadow-cosmic-purple/20"
    )}>
      <CardHeader className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-cosmic-purple/20 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-cosmic-white/70 text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const Services: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  
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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  const services = [
    {
      title: "Blocked Drains",
      description: "Fast, effective drain unblocking services for residential and commercial properties. We use the latest technology to clear any blockage.",
      icon: (
        <svg className="w-6 h-6 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14v6m-3-3h6M10 5H5a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-7m-9 3h9m-9-3h9" />
        </svg>
      )
    },
    {
      title: "Hot Water Systems",
      description: "Installation, repair, and maintenance of all types of hot water systems. We ensure reliable hot water for your home or business.",
      icon: (
        <svg className="w-6 h-6 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m-9-9h18" />
        </svg>
      )
    },
    {
      title: "Solar Heating",
      description: "Eco-friendly solar water heating solutions that help reduce your energy bills and carbon footprint. Expert installation and maintenance.",
      icon: (
        <svg className="w-6 h-6 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.313-5.313l-.707-.707M17.415 6.687l.707-.707M5.93 17.415l-.707.707M18.121 17.414l.707.707" />
        </svg>
      )
    },
    {
      title: "Leaking Taps & Pipes",
      description: "Quick and effective repairs for all types of leaks. We fix the problem at its source to prevent future issues and water damage.",
      icon: (
        <svg className="w-6 h-6 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Bathroom Renovations",
      description: "Complete bathroom renovation services. From concept to completion, we handle all aspects of your bathroom transformation.",
      icon: (
        <svg className="w-6 h-6 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Gas Installations",
      description: "Safe and reliable gas installation services. Our certified gas fitters ensure your gas systems meet all safety standards.",
      icon: (
        <svg className="w-6 h-6 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="cosmic-container">
        <div 
          ref={titleRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-500"
        >
          <h2 className="cosmic-title">Our Stellar Services</h2>
          <p className="mt-4 text-lg text-cosmic-white/70 max-w-2xl mx-auto">
            From emergency repairs to complete installations, our expert team delivers quality plumbing solutions that are out of this world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
