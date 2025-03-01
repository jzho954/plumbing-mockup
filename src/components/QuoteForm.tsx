
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const QuoteForm: React.FC = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [showQuote, setShowQuote] = useState(false);
  const [quoteAmount, setQuoteAmount] = useState("$0");
  
  const formRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  
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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!service || !location || !email) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate a random quote based on service
      const baseAmount = {
        'blocked-drains': 150,
        'hot-water': 275,
        'solar-heating': 1500,
        'leaks': 120,
        'renovations': 3000,
        'gas': 450,
      }[service] || 200;
      
      // Add some randomness
      const finalAmount = baseAmount + Math.floor(Math.random() * 50);
      
      setQuoteAmount(`$${finalAmount}`);
      setShowQuote(true);
      setLoading(false);
      
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      
      toast({
        title: "Quote Generated Successfully",
        description: `Your estimated quote is $${finalAmount}. We'll contact you soon!`,
      });
    }, 1500);
  };
  
  return (
    <section id="quote" className="py-24 relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cosmic-blue/10 backdrop-blur-sm -z-10"
      ></div>
      
      <div className="cosmic-container max-w-4xl">
        <div 
          ref={formRef}
          className="opacity-0 translate-y-10 transition-all duration-500"
        >
          <div className="text-center mb-12">
            <h2 className="cosmic-title">Get an Instant Quote</h2>
            <p className="mt-4 text-lg text-cosmic-white/70">
              Fill out the form below and receive an estimated price for your plumbing needs.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8 md:p-10">
            {!showQuote ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Select 
                    value={service} 
                    onValueChange={setService}
                  >
                    <SelectTrigger id="service" className="cosmic-input">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blocked-drains">Blocked Drains</SelectItem>
                      <SelectItem value="hot-water">Hot Water Systems</SelectItem>
                      <SelectItem value="solar-heating">Solar Heating</SelectItem>
                      <SelectItem value="leaks">Leaking Taps & Pipes</SelectItem>
                      <SelectItem value="renovations">Bathroom Renovations</SelectItem>
                      <SelectItem value="gas">Gas Installations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Enter your suburb"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="cosmic-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="cosmic-input"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="cosmic-button w-full"
                  disabled={loading}
                >
                  {loading ? "Generating Quote..." : "Get Your Quote"}
                </Button>
              </form>
            ) : (
              <div 
                ref={resultRef}
                className="text-center space-y-6 animate-fade-in py-8"
              >
                <div className="text-4xl font-bold text-cosmic-white">{quoteAmount}</div>
                <p className="text-cosmic-white/70">
                  This is an estimated quote based on the information provided. 
                  For a more accurate quote, our team will contact you shortly at {email}.
                </p>
                <Button 
                  onClick={() => setShowQuote(false)}
                  variant="outline"
                  className="border-cosmic-purple/50 hover:bg-cosmic-purple/10"
                >
                  Get Another Quote
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
