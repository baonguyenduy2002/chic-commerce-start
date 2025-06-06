
import React from 'react';

const testimonials = [
  {
    quote: "The quality of the fabrics is exceptional. These pieces have become staples in my wardrobe that I reach for again and again.",
    author: "Emma Johnson",
    title: "Fashion Blogger"
  },
  {
    quote: "Perfect fit, timeless design, and sustainable practices. This brand checks all the boxes for what I look for in my clothing purchases.",
    author: "Michael Chen",
    title: "Designer"
  },
  {
    quote: "I appreciate the attention to detail and ethical production. Knowing the story behind my clothes makes me feel good about my choices.",
    author: "Sarah Williams",
    title: "Sustainable Fashion Advocate"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community of conscious fashion enthusiasts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover-lift">
              <div className="h-28">
                <svg className="h-8 w-8 text-fashion-sage mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.13 4C5.64 4.01 4.01 5.64 4 9.13V14.87C4.01 18.36 5.64 19.99 9.13 20H14.87C18.36 19.99 19.99 18.36 20 14.87V9.13C19.99 5.64 18.36 4.01 14.87 4H9.13ZM9 8C9 7.44772 9.44772 7 10 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H10C9.44772 9 9 8.55228 9 8ZM9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H10C9.44772 13 9 12.5523 9 12ZM9 16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H10C9.44772 17 9 16.5523 9 16Z" fill="currentColor"/>
                </svg>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
              <div className="mt-6">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
