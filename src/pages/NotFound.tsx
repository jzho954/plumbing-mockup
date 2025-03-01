
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import StarField from "@/components/StarField";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cosmic-dark text-cosmic-white">
      <StarField />
      <div className="text-center z-10 glass p-10 rounded-2xl max-w-md mx-4">
        <div className="text-6xl font-bold font-display mb-4 text-transparent bg-cosmic-gradient bg-clip-text bg-200% animate-background-pan">404</div>
        <h1 className="text-3xl font-bold mb-4 font-display">Lost in Space</h1>
        <p className="text-xl text-cosmic-white/70 mb-8">
          The cosmic route you're looking for seems to have drifted into a black hole.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-cosmic-orange hover:bg-cosmic-orange/90 transition-all duration-300 hover:scale-105 text-white py-3 px-6 rounded-full"
        >
          Return to Earth
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
