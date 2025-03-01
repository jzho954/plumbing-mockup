
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-20" id="home">
      <div 
        ref={heroRef}
        className="cosmic-container flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="cosmic-subtitle mb-4 inline-block glass px-5 py-2 rounded-full">
          New Zealand's Premium Plumbing Service
        </div>
        <h1 className="cosmic-title mb-6 max-w-4xl leading-tight">
          <span className="text-transparent bg-cosmic-gradient bg-clip-text bg-200% animate-background-pan">Cosmic Plumbing</span> – 
          <br />Stellar Service, Galactic Results
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl text-cosmic-white/80">
          We're raising the standards of plumbing services across New Zealand with our sky-rocketing commitment to quality and excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-cosmic-orange hover:bg-cosmic-orange/90 text-white py-6 px-8 rounded-full text-lg shadow-lg shadow-cosmic-orange/20 hover:scale-105 transition-all duration-300"
          >
            Get a Quote
          </Button>
          <Button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple/10 py-6 px-8 rounded-full text-lg transition-all duration-300"
          >
            Explore Services
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-cosmic-purple/20 blur-xl"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full bg-cosmic-blue/20 blur-xl"></div>
    </div>
  );
};

export default Hero;
