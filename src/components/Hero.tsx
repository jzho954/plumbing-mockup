
import React from 'react';
import { SparklesCore } from '@/components/ui/sparkles';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black" id="home">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center z-10 relative">
        {/* Company Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/2fab90e2-c4c1-4943-9338-b3ad8de7ed9c.png" 
            alt="Cosmic Plumbing Logo" 
            className="h-32 mx-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          New Zealand's Premium Plumbing Service
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-cosmic-white mb-8">
          <span className="font-normal">Cosmic Plumbing - </span>
          <span className="text-cosmic-purple font-semibold">Stellar Service, Galactic Results</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mb-10">
          We're raising the standards of plumbing services across New Zealand with our sky-rocketing commitment to quality and excellence.
        </p>
        <a 
          href="#quote" 
          className="bg-cosmic-orange hover:bg-cosmic-purple text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
        >
          Get a Quote
        </a>
      </div>
      
      {/* Improved sparkles background with more particles and higher visibility */}
      <div className="absolute inset-0 overflow-hidden">
        <SparklesCore
          id="cosmicSparkles"
          background="transparent"
          minSize={1.0}
          maxSize={2.0}
          particleDensity={120}
          className="w-full h-full"
          particleColor="#8B5CF6"
          speed={0.8}
        />
        {/* Changed opacity to make background darker but still show sparkles */}
        <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>
      </div>
    </div>
  );
};

export default Hero;
