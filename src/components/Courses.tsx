
import { PlayCircle, Clock, Users, Award, BookOpen, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Courses = () => {
  const courses = [
    {
      title: "كورس SEO الشامل",
      description: "تعلم تحسين محركات البحث من الصفر إلى الاحتراف",
      duration: "40 ساعة",
      students: "1200+ طالب",
      rating: 4.9,
      price: "499 جنيه",
      image: "🎯",
      topics: ["أساسيات SEO", "البحث عن الكلمات المفتاحية", "التحسين التقني", "بناء الروابط"]
    },
    {
      title: "إدارة المواقع الإلكترونية",
      description: "دورة شاملة في إدارة وصيانة المواقع الإلكترونية",
      duration: "30 ساعة",
      students: "800+ طالب",
      rating: 4.8,
      price: "399 جنيه",
      image: "⚙️",
      topics: ["إدارة المحتوى", "النسخ الاحتياطية", "الأمان", "تحسين الأداء"]
    },
    {
      title: "التسويق الرقمي المتقدم",
      description: "استراتيجيات التسويق الرقمي الحديثة",
      duration: "35 ساعة",
      students: "950+ طالب",
      rating: 4.9,
      price: "599 جنيه",
      image: "📈",
      topics: ["وسائل التواصل الاجتماعي", "الإعلانات المدفوعة", "Email Marketing", "تحليل البيانات"]
    },
    {
      title: "تصميم UX/UI",
      description: "تعلم تصميم تجربة المستخدم وواجهات المستخدم",
      duration: "45 ساعة",
      students: "650+ طالب",
      rating: 4.7,
      price: "699 جنيه",
      image: "🎨",
      topics: ["أساسيات UX", "تصميم UI", "Wireframing", "Prototyping"]
    },
    {
      title: "برمجة المواقع بـ React",
      description: "تطوير مواقع تفاعلية باستخدام React",
      duration: "50 ساعة",
      students: "750+ طالب",
      rating: 4.8,
      price: "799 جنيه",
      image: "⚛️",
      topics: ["أساسيات React", "State Management", "API Integration", "Deployment"]
    },
    {
      title: "التجارة الإلكترونية",
      description: "إنشاء وإدارة متجر إلكتروني ناجح",
      duration: "25 ساعة",
      students: "500+ طالب",
      rating: 4.6,
      price: "449 جنيه",
      image: "🛒",
      topics: ["إنشاء المتجر", "إدارة المنتجات", "طرق الدفع", "التسويق للمتجر"]
    }
  ];

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{course.duration}</span>
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
                
                <div className="flex items-center justify-between pt-4 border-t border-holographic-primary/30">
                  <div className="text-2xl font-bold holographic-text">
                    {course.price}
                  </div>
                  <Button 
                    className="holographic-border bg-holographic-primary/20 text-white hover:bg-holographic-primary/40 transition-all duration-300"
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-holographic-gradient animate-glow">
                  <BookOpen className="w-full h-full text-black" />
                </div>
                <h4 className="font-semibold text-white">محتوى شامل</h4>
                <p className="text-gray-300 text-sm mt-2">مناهج مدروسة ومحدثة</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-holographic-gradient animate-glow">
                  <Award className="w-full h-full text-black" />
                </div>
                <h4 className="font-semibold text-white">شهادات معتمدة</h4>
                <p className="text-gray-300 text-sm mt-2">شهادات إنجاز معترف بها</p>
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
                <h4 className="font-semibold text-white">وصول مدى الحياة</h4>
                <p className="text-gray-300 text-sm mt-2">مراجعة المحتوى في أي وقت</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
