
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would integrate with EmailJS or another email service
      // For now, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      toast.error('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            هل تريد تصميم موقع إلكتروني مميز؟ أو تعلم السيو؟ تواصل معنا الآن للحصول على استشارة مجانية!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* معلومات الاتصال */}
          <div className="space-y-6">
            <Card className="glass-effect border-holographic-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold holographic-text">
                  معلومات الاتصال
                </CardTitle>
                <CardDescription className="text-gray-300">
                  نحن هنا لمساعدتك في تحقيق أهدافك الرقمية
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-holographic-gradient rounded-full flex items-center justify-center animate-glow">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">الهاتف</h4>
                    <p className="text-gray-300" dir="ltr">+20 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-holographic-gradient rounded-full flex items-center justify-center animate-glow">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">البريد الإلكتروني</h4>
                    <p className="text-gray-300" dir="ltr">info@tariqweb.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-holographic-gradient rounded-full flex items-center justify-center animate-glow">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">العنوان</h4>
                    <p className="text-gray-300">الإسكندرية، مصر</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-holographic-gradient rounded-full flex items-center justify-center animate-glow">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">أوقات العمل</h4>
                    <p className="text-gray-300">الأحد - الخميس: 9:00 ص - 6:00 م</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-holographic-secondary/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-holographic-secondary">
                  احصل على عرض سعر مجاني
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <MessageCircle className="w-5 h-5 mr-2 text-holographic-accent" />
                    <span>استشارة مجانية لمشروعك</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MessageCircle className="w-5 h-5 mr-2 text-holographic-accent" />
                    <span>تحليل مجاني لموقعك الحالي</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MessageCircle className="w-5 h-5 mr-2 text-holographic-accent" />
                    <span>خطة عمل مفصلة</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* نموذج الاتصال */}
          <Card className="glass-effect border-holographic-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl font-bold holographic-text">
                أرسل رسالة
              </CardTitle>
              <CardDescription className="text-gray-300">
                املأ النموذج وسنتواصل معك خلال 24 ساعة
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      الاسم الكامل *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-effect border-holographic-primary/30 text-white"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-effect border-holographic-primary/30 text-white"
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      رقم الهاتف
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="glass-effect border-holographic-primary/30 text-white"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      الخدمة المطلوبة
                    </label>
                    <Select value={formData.service} onValueChange={handleServiceChange}>
                      <SelectTrigger className="glass-effect border-holographic-primary/30 text-white bg-black/50">
                        <SelectValue placeholder="اختر الخدمة" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-holographic-primary/30">
                        <SelectItem value="website" className="text-white hover:bg-holographic-primary/20">تصميم موقع إلكتروني</SelectItem>
                        <SelectItem value="seo" className="text-white hover:bg-holographic-primary/20">تحسين محركات البحث</SelectItem>
                        <SelectItem value="marketing" className="text-white hover:bg-holographic-primary/20">التسويق الرقمي</SelectItem>
                        <SelectItem value="course" className="text-white hover:bg-holographic-primary/20">الكورسات التعليمية</SelectItem>
                        <SelectItem value="other" className="text-white hover:bg-holographic-primary/20">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    تفاصيل المشروع *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-effect border-holographic-primary/30 text-white min-h-[120px]"
                    placeholder="أخبرنا المزيد عن مشروعك..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full holographic-border bg-holographic-primary/20 text-white hover:bg-holographic-primary/40 transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isLoading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
