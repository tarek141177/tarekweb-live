
import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "تصميم مواقع إلكترونية بالإسكندرية",
    "كورسات تعليمية للسيو",
    "إدارة المواقع الاحترافية",
    "حلول تقنية متقدمة"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* 3D Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-16 h-16 bg-holographic-gradient rounded-full opacity-30 animate-glow"></div>
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-holographic-gradient rounded-lg rotate-45 opacity-40 animate-glow"></div>
          </div>
          <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-8 h-8 bg-holographic-gradient rounded-full opacity-50 animate-glow"></div>
          </div>

          {/* Main Content */}
          <div className="glass-effect rounded-3xl p-8 md:p-12 neon-glow">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-holographic-primary mr-2 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold holographic-text">
                طارق ويب
              </h1>
              <Sparkles className="w-8 h-8 text-holographic-secondary ml-2 animate-pulse" />
            </div>

            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                أفضل شركة تصميم المواقع الإلكترونية في الإسكندرية
              </p>
              <div className="h-16 flex items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-holographic-accent animate-pulse">
                  {texts[currentText]}
                </h2>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <Button
                onClick={() => scrollToSection('services')}
                className="holographic-border bg-holographic-primary/20 text-white hover:bg-holographic-primary/40 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                استكشف خدماتنا
              </Button>
              <Button
                onClick={() => scrollToSection('courses')}
                variant="outline"
                className="border-holographic-secondary text-holographic-secondary hover:bg-holographic-secondary/20 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                <Star className="w-5 h-5 mr-2" />
                تعلم معنا
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="glass-effect rounded-xl p-4">
                <div className="text-3xl font-bold holographic-text">500+</div>
                <div className="text-gray-400">موقع مكتمل</div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-3xl font-bold holographic-text">100+</div>
                <div className="text-gray-400">عميل راضي</div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-3xl font-bold holographic-text">5+</div>
                <div className="text-gray-400">سنوات خبرة</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-holographic-primary cursor-pointer" onClick={() => scrollToSection('services')} />
          </div>
        </div>
      </div>
    </section>
  );
};
