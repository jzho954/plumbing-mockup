
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen" id="home">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center z-10 relative">
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
      
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-dark bg-opacity-95 z-0"></div>
        <div className="absolute inset-0 bg-star-field bg-[length:200px_200px] opacity-50 z-0"></div>
      </div>
    </div>
  );
};

export default Hero;
