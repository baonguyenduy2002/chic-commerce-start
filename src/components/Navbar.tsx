
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="py-4 px-6 sticky top-0 bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-serif font-semibold tracking-tight">ELEGANTE</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">Home</a>
          <a href="#shop" className="text-sm font-medium hover:text-primary/80 transition-colors">Shop</a>
          <a href="#collections" className="text-sm font-medium hover:text-primary/80 transition-colors">Collections</a>
          <a href="#about" className="text-sm font-medium hover:text-primary/80 transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary/80 transition-colors">Contact</a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="absolute right-0 top-0 flex items-center">
                <Input
                  placeholder="Search..."
                  className="w-48 h-9"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-1"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X size={18} />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search size={18} />
              </Button>
            )}
          </div>

          {/* Shopping bag */}
          <Button variant="ghost" size="icon" aria-label="Shopping bag">
            <ShoppingBag size={18} />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 bg-background border-b py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">Home</a>
            <a href="#shop" className="text-sm font-medium hover:text-primary/80 transition-colors">Shop</a>
            <a href="#collections" className="text-sm font-medium hover:text-primary/80 transition-colors">Collections</a>
            <a href="#about" className="text-sm font-medium hover:text-primary/80 transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary/80 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
