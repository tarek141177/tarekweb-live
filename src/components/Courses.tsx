
import { PlayCircle, Users, Star, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Courses = () => {
  const courses = [
    {
      title: "كورس SEO الشامل",
      description: "تعلم تحسين محركات البحث من الصفر إلى الاحتراف",
      students: "1200+ طالب",
      rating: 4.9,
      image: "🎯",
      topics: ["أساسيات SEO", "البحث عن الكلمات المفتاحية", "التحسين التقني", "بناء الروابط"]
    },
    {
      title: "إدارة مواقع الووردبريس",
      description: "دورة شاملة في إدارة وصيانة مواقع الووردبريس",
      students: "800+ طالب",
      rating: 4.8,
      image: "⚙️",
      topics: ["تثبيت الووردبريس", "إدارة المحتوى", "الإضافات الأساسية", "النسخ الاحتياطية"]
    },
    {
      title: "إعلانات فيسبوك الاحترافية",
      description: "احتراف إدارة الحملات الإعلانية على فيسبوك وإنستجرام",
      students: "650+ طالب",
      rating: 4.7,
      image: "📱",
      topics: ["إنشاء الحملات", "استهداف الجمهور", "تحليل النتائج", "تحسين الإعلانات"]
    },
    {
      title: "احتراف التدوين",
      description: "كورس شامل في التدوين الاحترافي وإنشاء مدونة احترافية",
      students: "500+ طالب",
      rating: 4.9,
      image: "✍️",
      topics: ["إنشاء مدونة احترافية", "كتابة المحتوى", "تحسين SEO للمقالات", "استراتيجيات التدوين"]
    }
  ];

  const handleWhatsAppClick = () => {
    const whatsappNumber = "201064412624";
    const message = "مرحباً، أريد الاستفسار عن الكورسات";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="courses" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-4">
            كورساتنا التعليمية
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            تعلم من الخبراء واكتسب المهارات التي تحتاجها لتطوير مسيرتك المهنية
          </p>
          <div className="mt-6 p-4 glass-effect rounded-lg border border-holographic-primary/30 max-w-lg mx-auto">
            <p className="text-holographic-accent font-semibold">
              الكورسات حالياً برايفت في الإسكندرية فقط
            </p>
            <p className="text-gray-300 text-sm mt-1">
              وقريباً جميع كورساتنا أونلاين
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="glass-effect border-holographic-primary/30 hover:border-holographic-primary/60 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <CardHeader className="text-center relative">
                <div className="text-6xl mb-4 animate-float">
                  {course.image}
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-holographic-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {course.description}
                </CardDescription>
                
                <div className="flex justify-center items-center space-x-4 space-x-reverse mt-4">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{course.students}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-holographic-accent">محتوى الكورس:</h4>
                  <ul className="space-y-1">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-holographic-accent rounded-full mr-2 animate-pulse"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-center pt-4 border-t border-holographic-primary/30">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="holographic-border bg-holographic-primary/20 text-white hover:bg-holographic-primary/40 transition-all duration-300 w-full flex items-center justify-center"
                  >
                    <PlayCircle className="w-4 h-4 mr-2" />
                    ابدأ الآن
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold holographic-text mb-6">
              مميزات كورساتنا
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-holographic-gradient animate-glow">
                  <BookOpen className="w-full h-full text-black" />
                </div>
                <h4 className="font-semibold text-white">محتوى شامل</h4>
                <p className="text-gray-300 text-sm mt-2">مناهج مدروسة ومحدثة</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-holographic-gradient animate-glow">
                  <Users className="w-full h-full text-black" />
                </div>
                <h4 className="font-semibold text-white">دعم مباشر</h4>
                <p className="text-gray-300 text-sm mt-2">تفاعل مع المدربين</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-holographic-gradient animate-glow">
                  <PlayCircle className="w-full h-full text-black" />
                </div>
                <h4 className="font-semibold text-white">تدريب عملي</h4>
                <p className="text-gray-300 text-sm mt-2">ورش عمل تطبيقية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
