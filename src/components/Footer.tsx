import { Globe, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 relative z-10 border-t border-holographic-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* معلومات الشركة */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold holographic-text">طارق ويب</h3>
            <p className="text-gray-300 leading-relaxed">
              شركة متخصصة في تصميم المواقع الإلكترونية وتقديم الكورسات التعليمية للسيو وإدارة المواقع في الإسكندرية، مصر.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a 
                href="https://www.facebook.com/profile.php?id=61575776472474" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-holographic-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tarikmostafa-abohagar-8b552b29b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-holographic-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </a>
              <a 
                href="https://youtube.com/@aifreedom-rf4qi?si=884Z8XHV_34MmmdX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-holographic-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Youtube className="w-5 h-5 text-black" />
              </a>
              <a 
                href={`https://wa.me/201064412624`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* الخدمات */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-holographic-primary">خدماتنا</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-holographic-primary transition-colors">تصميم المواقع الإلكترونية</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-holographic-primary transition-colors">تحسين محركات البحث</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-holographic-primary transition-colors">التسويق الرقمي</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-holographic-primary transition-colors">إدارة المواقع</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-holographic-primary transition-colors">صناعة المحتوى</a></li>
            </ul>
          </div>

          {/* الكورسات */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-holographic-secondary">كورساتنا</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-gray-300 hover:text-holographic-secondary transition-colors">كورس SEO الشامل</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-holographic-secondary transition-colors">إدارة مواقع الووردبريس</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-holographic-secondary transition-colors">إعلانات فيسبوك</a></li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-holographic-accent">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-holographic-accent" />
                <span className="text-gray-300">الإسكندرية، مصر</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-holographic-accent" />
                <a 
                  href={`https://wa.me/201064412624`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-holographic-accent transition-colors"
                  dir="ltr"
                >
                  +201064412624
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-holographic-accent" />
                <span className="text-gray-300" dir="ltr">info@tariqweb.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Globe className="w-5 h-5 text-holographic-accent" />
                <span className="text-gray-300" dir="ltr">www.tariqweb.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-holographic-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              © {currentYear} طارق ويب. جميع الحقوق محفوظة.
            </div>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <a href="#" className="text-gray-300 hover:text-holographic-primary transition-colors">سياسة الخصوصية</a>
              <a href="#" className="text-gray-300 hover:text-holographic-primary transition-colors">شروط الاستخدام</a>
              <a href="#" className="text-gray-300 hover:text-holographic-primary transition-colors">الأسئلة الشائعة</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
