
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-3 backdrop-blur-lg bg-cosmic-dark/80 shadow-lg" : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 rounded-full bg-cosmic-gradient animate-background-pan bg-200%">
            <div className="absolute inset-1 bg-cosmic-dark rounded-full flex items-center justify-center text-cosmic-white font-bold text-lg">
              C
            </div>
          </div>
          <span className="text-xl font-display font-bold">Cosmic Plumbing</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="text-cosmic-white hover:text-cosmic-purple transition-colors duration-200"
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection('#contact')}
            className="bg-cosmic-orange hover:bg-cosmic-orange/90 transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-cosmic-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-4 px-4 flex flex-col space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="text-cosmic-white hover:text-cosmic-purple transition-colors duration-200 py-2"
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection('#contact')}
            className="bg-cosmic-orange hover:bg-cosmic-orange/90"
          >
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
