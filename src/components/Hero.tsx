
import React from 'react';
import { HeroSection } from "@/components/blocks/hero-section-dark";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen" id="home">
      <HeroSection
        title="New Zealand's Premium Plumbing Service"
        subtitle={{
          regular: "Cosmic Plumbing - ",
          gradient: "Stellar Service, Galactic Results",
        }}
        description="We're raising the standards of plumbing services across New Zealand with our sky-rocketing commitment to quality and excellence."
        ctaText="Get a Quote"
        ctaHref="#quote"
        gridOptions={{
          angle: 65,
          opacity: 0.3,
          cellSize: 60,
          lightLineColor: "#8B5CF6",
          darkLineColor: "#4a22c0",
        }}
      />
    </div>
  );
};

export default Hero;
