
import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const reviews: Review[] = [
    {
      id: 1,
      name: "Mark Johnson",
      rating: 5,
      text: "Cosmic Plumbing fixed our hot water system quickly and efficiently. The technician was professional and explained everything clearly. Would definitely recommend!",
      date: "March 15, 2023"
    },
    {
      id: 2,
      name: "Sarah Williams",
      rating: 5,
      text: "I had a blocked drain that no one else could fix. Cosmic Plumbing came out the same day and solved the problem in under an hour. Stellar service indeed!",
      date: "February 3, 2023"
    },
    {
      id: 3,
      name: "David Thompson",
      rating: 4,
      text: "Great company with excellent customer service. They installed our new bathroom fixtures and everything looks perfect. Only reason for 4 stars is they were a bit late to the appointment.",
      date: "April 22, 2023"
    },
    {
      id: 4,
      name: "Emma Roberts",
      rating: 5,
      text: "We've been using Cosmic Plumbing for all our rental properties for years. They're reliable, honest, and their work is always top quality. Wouldn't go anywhere else!",
      date: "January 17, 2023"
    },
  ];
  
  return (
    <section id="reviews" className="py-24 relative">
      <div className="cosmic-container">
        <div 
          ref={containerRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-500"
        >
          <h2 className="cosmic-title">Customer Reviews</h2>
          <div className="flex justify-center mt-4 mb-8">
            <div className="flex items-center bg-cosmic-purple/20 px-4 py-2 rounded-full">
              <div className="mr-2 text-cosmic-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-cosmic-white font-medium">
                4.9 / 5 - Based on 120+ Google Reviews
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="min-w-full px-4">
                <Card className="cosmic-card">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-between items-center">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg 
                            key={i}
                            className={cn(
                              "w-5 h-5 mr-1", 
                              i < review.rating ? "text-yellow-400" : "text-gray-400"
                            )}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-sm text-cosmic-white/60">
                        {review.date}
                      </div>
                    </div>
                    <p className="text-cosmic-white/90 mb-4">"{review.text}"</p>
                    <div className="font-semibold">- {review.name}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-cosmic-purple w-6" : "bg-cosmic-white/30"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
