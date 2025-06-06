
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const categoryItems = [
  {
    title: "Women's Collection",
    image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&q=80&w=500",
    link: "#women"
  },
  {
    title: "Men's Collection",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80&w=500",
    link: "#men"
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?auto=format&fit=crop&q=80&w=500",
    link: "#accessories"
  },
  {
    title: "New Arrivals",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=500",
    link: "#new"
  }
];

const Categories: React.FC = () => {
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Shop By Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections designed for versatile styling and lasting quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryItems.map((category, index) => (
            <a 
              href={category.link} 
              key={index}
              className="group hover-lift"
            >
              <Card className="overflow-hidden border-0 rounded-md shadow-sm">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10"></div>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h3 className="text-white font-serif text-xl font-medium px-4 py-2 bg-black/30 backdrop-blur-sm rounded">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
