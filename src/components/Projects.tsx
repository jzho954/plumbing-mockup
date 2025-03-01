
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, delay }) => {
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
    <Card 
      ref={cardRef}
      className="cosmic-card opacity-0 translate-y-10 transition-all duration-500 overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-cosmic-white/70">{description}</p>
      </CardContent>
    </Card>
  );
};

const Projects: React.FC = () => {
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
  
  const projects = [
    {
      title: "Luxury Home Bathroom Renovation",
      description: "Complete transformation of an outdated bathroom into a modern spa-like retreat with eco-friendly fixtures.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Commercial Building Plumbing",
      description: "Installation of a comprehensive plumbing system for a new commercial office building in downtown Auckland.",
      image: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Solar Water Heating Installation",
      description: "Custom solar water heating system designed and installed for a family home, reducing energy costs by 70%.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Hotel Plumbing Upgrade",
      description: "Complete overhaul of outdated plumbing infrastructure for a 20-room boutique hotel while maintaining operations.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000"
    },
  ];
  
  return (
    <section id="projects" className="py-24">
      <div className="cosmic-container">
        <div 
          ref={titleRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-500"
        >
          <h2 className="cosmic-title">Our Recent Projects</h2>
          <p className="mt-4 text-lg text-cosmic-white/70 max-w-2xl mx-auto">
            Explore some of our recent plumbing projects that showcase our commitment to quality and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
