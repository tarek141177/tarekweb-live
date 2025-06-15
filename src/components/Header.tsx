
import { useState, useEffect } from 'react';
import { Menu, X, Globe, Code, BookOpen, Phone, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // إذا لم نكن في الصفحة الرئيسية، انتقل إليها أولاً
      window.location.href = `/#${sectionId}`;
      return;
    }
    
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
          <Link to="/" className="text-2xl font-bold holographic-text">
            طارق ويب
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link 
              to="/"
              className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>الرئيسية</span>
            </Link>
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
            <Link 
              to="/about"
              className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
            >
              <User className="w-4 h-4" />
              <span>من نحن</span>
            </Link>
            <Link 
              to="/blog"
              className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>المدونة</span>
            </Link>
            <Link 
              to="/contact"
              className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>تواصل معنا</span>
            </Link>
          </nav>

          <Link to="/contact">
            <Button className="hidden md:block holographic-border bg-transparent text-white hover:bg-holographic-primary/20 transition-all duration-300">
              احصل على عرض سعر
            </Button>
          </Link>

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
              <Link 
                to="/"
                className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Globe className="w-4 h-4" />
                <span>الرئيسية</span>
              </Link>
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
              <Link 
                to="/about"
                className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                <span>من نحن</span>
              </Link>
              <Link 
                to="/blog"
                className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="w-4 h-4" />
                <span>المدونة</span>
              </Link>
              <Link 
                to="/contact"
                className="flex items-center space-x-2 space-x-reverse text-white hover:text-holographic-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>تواصل معنا</span>
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full holographic-border bg-transparent text-white hover:bg-holographic-primary/20 transition-all duration-300">
                  احصل على عرض سعر
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
