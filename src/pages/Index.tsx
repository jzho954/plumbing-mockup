
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactUs from '@/components/ContactUs';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Ecosystem from '@/components/Ecosystem';
import Projects from '@/components/Projects';

const Index = () => {
  // Add scroll reveal animation for sections
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-cosmic-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Ecosystem />
      <Projects />
      <ContactUs />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
