
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
          alt="Fashion model" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto z-10 px-6">
        <div className="max-w-lg text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 leading-tight">Redefine Your Style</h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Discover our new collection that blends timeless elegance with modern trends for the conscious fashion enthusiast.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Collections
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
