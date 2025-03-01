
import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface EcoFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const EcoFeature: React.FC<EcoFeatureProps> = ({ title, description, icon, delay }) => {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (featureRef.current) {
                featureRef.current.classList.add('opacity-100');
                featureRef.current.classList.remove('opacity-0', 'translate-y-10');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={featureRef}
      className={cn(
        "glass rounded-2xl p-6 opacity-0 translate-y-10 transition-all duration-500",
        "border border-cosmic-purple/20"
      )}
    >
      <div className="h-12 w-12 mb-4 bg-cosmic-purple/20 rounded-full flex items-center justify-center text-cosmic-purple">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-cosmic-white/70">{description}</p>
    </div>
  );
};

const Ecosystem: React.FC = () => {
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
  
  const features = [
    {
      title: "Water-Saving Fixtures",
      description: "We install eco-friendly fixtures that reduce water consumption while maintaining performance.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Solar Hot Water",
      description: "Harness the power of the sun with our solar hot water systems that reduce energy costs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.313-5.313l-.707-.707M17.415 6.687l.707-.707M5.93 17.415l-.707.707M18.121 17.414l.707.707" />
        </svg>
      )
    },
    {
      title: "Rainwater Harvesting",
      description: "Collect and reuse rainwater with our custom harvesting systems for sustainable water usage.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Energy-Efficient Heating",
      description: "Our heating solutions maximize energy efficiency to reduce environmental impact and costs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];
  
  return (
    <section id="ecosystem" className="py-24 relative">
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic-blue/20 via-transparent to-transparent opacity-80 -z-10"
      ></div>
      
      <div className="cosmic-container">
        <div 
          ref={titleRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-500"
        >
          <h2 className="cosmic-title">Our Eco-Friendly Approach</h2>
          <p className="mt-4 text-lg text-cosmic-white/70 max-w-2xl mx-auto">
            We're committed to sustainable plumbing solutions that protect our planet while providing exceptional service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <EcoFeature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
