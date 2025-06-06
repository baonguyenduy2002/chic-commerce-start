
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Oversized Cotton Shirt",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=500",
    category: "Women",
  },
  {
    id: 2,
    name: "Relaxed Fit Jeans",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=500",
    category: "Men",
  },
  {
    id: 3,
    name: "Cashmere Blend Sweater",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=500",
    category: "Women",
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&q=80&w=500",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Classic Wool Coat",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=500",
    category: "Women",
  },
  {
    id: 6,
    name: "Premium Denim Jacket",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1591047139755-e77ca3be2bd0?auto=format&fit=crop&q=80&w=500",
    category: "Men",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section id="collections" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Featured Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular pieces crafted from premium sustainable materials
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover-lift">
              <div className="h-[300px] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="font-semibold">${product.price}</div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button className="w-full flex items-center justify-center gap-2">
                  <ShoppingBag size={16} />
                  Add to Bag
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
