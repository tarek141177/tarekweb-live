
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Courses } from '@/components/Courses';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { HolographicBackground } from '@/components/HolographicBackground';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="holographic-text text-6xl font-bold mb-4 animate-pulse">
            طارق ويب
          </div>
          <div className="text-white text-xl animate-glow">
            جاري التحميل...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-cairo relative overflow-x-hidden">
      <HolographicBackground />
      <Header />
      <Hero />
      <Services />
      <Courses />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
