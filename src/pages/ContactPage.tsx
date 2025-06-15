
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HolographicBackground } from '@/components/HolographicBackground';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-cairo relative overflow-x-hidden">
      <HolographicBackground />
      <Header />
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold holographic-text mb-6">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نحن هنا لمساعدتك في تحقيق أهدافك الرقمية. تواصل معنا الآن للحصول على استشارة مجانية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* معلومات الاتصال */}
            <div className="space-y-8">
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-3xl font-bold holographic-text mb-8">معلومات الاتصال</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-holographic-gradient rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">الهاتف</h3>
                      <p className="text-gray-300" dir="ltr">+201064412624</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-holographic-gradient rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">البريد الإلكتروني</h3>
                      <p className="text-gray-300" dir="ltr">info@tariqweb.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-holographic-gradient rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">العنوان</h3>
                      <p className="text-gray-300">الإسكندرية، مصر</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-holographic-gradient rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">واتساب</h3>
                      <a 
                        href={`https://wa.me/201064412624`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-holographic-primary hover:text-holographic-secondary transition-colors"
                        dir="ltr"
                      >
                        +201064412624
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-xl font-bold holographic-text mb-4">أوقات العمل</h3>
                <div className="space-y-2 text-gray-300">
                  <p>السبت - الخميس: 9:00 ص - 6:00 م</p>
                  <p>الجمعة: مغلق</p>
                </div>
              </div>
            </div>

            {/* نموذج الاتصال */}
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold holographic-text mb-8">أرسل رسالة</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">الاسم</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-holographic-primary/30 rounded-lg text-white focus:outline-none focus:border-holographic-primary transition-colors"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-semibold mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-holographic-primary/30 rounded-lg text-white focus:outline-none focus:border-holographic-primary transition-colors"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-holographic-primary/30 rounded-lg text-white focus:outline-none focus:border-holographic-primary transition-colors"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-semibold mb-2">الموضوع</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-holographic-primary/30 rounded-lg text-white focus:outline-none focus:border-holographic-primary transition-colors"
                      placeholder="موضوع الرسالة"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">الرسالة</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-holographic-primary/30 rounded-lg text-white focus:outline-none focus:border-holographic-primary transition-colors resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full holographic-border bg-transparent text-white hover:bg-holographic-primary/20 transition-all duration-300 py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
