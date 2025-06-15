
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HolographicBackground } from '@/components/HolographicBackground';
import { Target, Eye, Award, Users, Zap, Heart, CheckCircle, Star } from 'lucide-react';

const AboutPage = () => {
  const achievements = [
    { number: '500+', label: 'مشروع مكتمل', icon: Award },
    { number: '2000+', label: 'متدرب', icon: Users },
    { number: '100+', label: 'عميل راضي', icon: Star },
    { number: '5+', label: 'سنوات خبرة', icon: Target }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'الجودة',
      description: 'نلتزم بأعلى معايير الجودة في جميع مشاريعنا'
    },
    {
      icon: Eye,
      title: 'الشفافية',
      description: 'نؤمن بالشفافية الكاملة مع عملائنا في جميع مراحل العمل'
    },
    {
      icon: Zap,
      title: 'الابتكار',
      description: 'نستخدم أحدث التقنيات والحلول المبتكرة'
    },
    {
      icon: Heart,
      title: 'الالتزام',
      description: 'نلتزم بمواعيد التسليم ونحترم ثقة عملائنا'
    }
  ];

  const team = [
    {
      name: 'طارق مصطفى',
      position: 'المؤسس والمدير التنفيذي',
      description: 'خبير في تطوير المواقع والتسويق الرقمي بخبرة تزيد عن 8 سنوات'
    },
    {
      name: 'فريق التطوير',
      position: 'مطورين محترفين',
      description: 'فريق من المطورين المتخصصين في أحدث تقنيات الويب'
    },
    {
      name: 'فريق التسويق',
      position: 'خبراء SEO والتسويق الرقمي',
      description: 'متخصصون في تحسين محركات البحث والتسويق الإلكتروني'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-cairo relative overflow-x-hidden">
      <HolographicBackground />
      <Header />
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* العنوان الرئيسي */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold holographic-text mb-6">
              من نحن
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              طارق ويب - شريكك المثالي في رحلة التحول الرقمي
            </p>
          </div>

          {/* قصتنا */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-3xl font-bold holographic-text mb-6">قصتنا</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  بدأت رحلة طارق ويب في عام 2019 من الإسكندرية، مصر، بحلم بسيط وهو تقديم حلول تقنية مبتكرة 
                  تساعد الشركات والأفراد على النجاح في العالم الرقمي.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  منذ البداية، آمنا بأن التكنولوجيا يجب أن تكون في متناول الجميع، وليس فقط للشركات الكبيرة. 
                  لذلك، ركزنا على تقديم خدمات عالية الجودة بأسعار منافسة.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  اليوم، نفخر بأننا ساعدنا مئات الشركات في تحقيق أهدافها الرقمية، ودربنا آلاف الأشخاص 
                  على مهارات التسويق الرقمي وإدارة المواقع.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-holographic-primary mr-3" />
                  <h3 className="text-2xl font-bold text-white">رسالتنا</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  تمكين الشركات والأفراد من النجاح في العالم الرقمي من خلال تقديم حلول تقنية مبتكرة، 
                  خدمات تسويق رقمي متقدمة، وبرامج تدريبية شاملة تواكب أحدث التطورات التكنولوجية.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-holographic-secondary mr-3" />
                  <h3 className="text-2xl font-bold text-white">رؤيتنا</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  أن نكون الشركة الرائدة في تقديم الحلول التقنية والتعليمية في الشرق الأوسط، 
                  ونساهم في بناء جيل قادر على مواكبة التطور التكنولوجي السريع.
                </p>
              </div>
            </div>
          </div>

          {/* إنجازاتنا */}
          <div className="glass-effect rounded-2xl p-8 mb-20">
            <h2 className="text-3xl font-bold holographic-text text-center mb-12">
              إنجازاتنا في أرقام
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 p-4 rounded-full bg-holographic-gradient animate-glow">
                    <achievement.icon className="w-full h-full text-black" />
                  </div>
                  <div className="text-4xl font-bold holographic-text mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* قيمنا */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold holographic-text text-center mb-12">
              قيمنا ومبادئنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-holographic-gradient">
                    <value.icon className="w-full h-full text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* فريق العمل */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold holographic-text text-center mb-12">
              فريق العمل
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="glass-effect rounded-2xl p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-holographic-gradient p-1">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <Users className="w-12 h-12 text-holographic-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-holographic-secondary font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* لماذا نحن */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold holographic-text text-center mb-8">
              لماذا تختار طارق ويب؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <CheckCircle className="w-6 h-6 text-holographic-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">خبرة عملية</h4>
                  <p className="text-gray-300 text-sm">أكثر من 5 سنوات من الخبرة في السوق المصري</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <CheckCircle className="w-6 h-6 text-holographic-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">أسعار منافسة</h4>
                  <p className="text-gray-300 text-sm">أفضل الأسعار مقابل جودة عالية</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <CheckCircle className="w-6 h-6 text-holographic-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">دعم مستمر</h4>
                  <p className="text-gray-300 text-sm">دعم فني 24/7 لجميع عملائنا</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <CheckCircle className="w-6 h-6 text-holographic-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">تقنيات حديثة</h4>
                  <p className="text-gray-300 text-sm">استخدام أحدث التقنيات والأدوات</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <CheckCircle className="w-6 h-6 text-holographic-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">نتائج مضمونة</h4>
                  <p className="text-gray-300 text-sm">ضمان على جودة العمل والنتائج</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <CheckCircle className="w-6 h-6 text-holographic-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">تدريب شامل</h4>
                  <p className="text-gray-300 text-sm">برامج تدريبية متكاملة لجميع المستويات</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
