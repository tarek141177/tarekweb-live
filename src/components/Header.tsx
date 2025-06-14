
import { useState, useEffect } from 'react';
import { Menu, X, Globe, Code, BookOpen, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold holographic-text">
            طارق ويب
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>الرئيسية</span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
            >
              <Code className="w-4 h-4" />
              <span>الخدمات</span>
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>الكورسات</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>تواصل معنا</span>
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block holographic-border bg-transparent text-white hover:bg-holographic-primary/20 transition-all duration-300"
          >
            احصل على عرض سعر
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 glass-effect rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>الرئيسية</span>
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
              >
                <Code className="w-4 h-4" />
                <span>الخدمات</span>
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>الكورسات</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>تواصل معنا</span>
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="holographic-border bg-transparent text-white hover:bg-holographic-primary/20 transition-all duration-300"
              >
                احصل على عرض سعر
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
