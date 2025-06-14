
import { Code, Smartphone, Search, BarChart, Palette, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "تصميم مواقع إلكترونية",
      description: "تصميم مواقع احترافية ومتجاوبة باستخدام أحدث التقنيات",
      features: ["تصميم متجاوب", "سرعة عالية", "تحسين SEO", "لوحة تحكم سهلة"]
    },
    {
      icon: Smartphone,
      title: "تطبيقات الجوال",
      description: "تطوير تطبيقات جوال احترافية للأندرويد و iOS",
      features: ["تطبيقات أصلية", "تجربة مستخدم مميزة", "أداء عالي", "دعم متعدد المنصات"]
    },
    {
      icon: Search,
      title: "تحسين محركات البحث SEO",
      description: "تحسين موقعك ليظهر في المراكز الأولى في جوجل",
      features: ["بحث الكلمات المفتاحية", "تحسين المحتوى", "بناء الروابط", "تحليل المنافسين"]
    },
    {
      icon: BarChart,
      title: "التسويق الرقمي",
      description: "استراتيجيات تسويق متقدمة لزيادة مبيعاتك",
      features: ["إدارة المحتوى", "إعلانات مدفوعة", "تحليل البيانات", "استراتيجية التسويق"]
    },
    {
      icon: Palette,
      title: "التصميم الجرافيكي",
      description: "تصميم هوية بصرية مميزة لعلامتك التجارية",
      features: ["تصميم الشعار", "الهوية البصرية", "المطبوعات", "تصميم الإعلانات"]
    },
    {
      icon: Shield,
      title: "الأمان والحماية",
      description: "حماية موقعك من الهجمات الإلكترونية",
      features: ["شهادات SSL", "نسخ احتياطية", "مراقبة الأمان", "حماية من الفيروسات"]
    }
  ];

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-4">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التقنية المتقدمة لتلبية احتياجات عملك الرقمي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-effect border-holographic-primary/30 hover:border-holographic-primary/60 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-holographic-gradient animate-glow">
                  <service.icon className="w-full h-full text-black" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-holographic-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-holographic-accent rounded-full mr-2 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold holographic-text mb-4">
              لماذا تختار طارق ويب؟
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-holographic-primary">24/7</div>
                <div className="text-gray-300">دعم فني</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-holographic-secondary">100%</div>
                <div className="text-gray-300">ضمان الجودة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-holographic-accent">سريع</div>
                <div className="text-gray-300">التسليم</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-holographic-purple">مميز</div>
                <div className="text-gray-300">التصميم</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
