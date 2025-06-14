
import { Target, Eye, Award, Users, Zap, Heart } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-4">
            من نحن
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            طارق ويب هي شركة رائدة في مجال تصميم المواقع الإلكترونية والتسويق الرقمي في الإسكندرية، مصر
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold holographic-text mb-4">قصتنا</h3>
              <p className="text-gray-300 leading-relaxed">
                بدأت رحلتنا في عام 2019 بهدف تقديم حلول تقنية مبتكرة للشركات والأفراد في الإسكندرية ومصر. 
                نؤمن بأن التكنولوجيا يجب أن تكون في متناول الجميع، ولذلك نسعى لتقديم خدمات عالية الجودة بأسعار منافسة.
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold holographic-text mb-4">خبرتنا</h3>
              <p className="text-gray-300 leading-relaxed">
                مع أكثر من 5 سنوات من الخبرة في المجال، نجحنا في تطوير أكثر من 500 موقع إلكتروني، 
                وتدريب أكثر من 2000 متدرب على أحدث تقنيات التسويق الرقمي وتحسين محركات البحث.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-holographic-primary mr-3" />
                <h4 className="text-xl font-bold text-white">رسالتنا</h4>
              </div>
              <p className="text-gray-300">
                تمكين الشركات من النجاح في العالم الرقمي من خلال حلول تقنية مبتكرة ومتطورة
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-holographic-secondary mr-3" />
                <h4 className="text-xl font-bold text-white">رؤيتنا</h4>
              </div>
              <p className="text-gray-300">
                أن نكون الشركة الرائدة في تقديم الحلول التقنية والتعليمية في الشرق الأوسط
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-holographic-accent mr-3" />
                <h4 className="text-xl font-bold text-white">قيمنا</h4>
              </div>
              <p className="text-gray-300">
                الجودة، الشفافية، الابتكار، والالتزام بمواعيد التسليم
              </p>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-8">
          <h3 className="text-2xl font-bold holographic-text text-center mb-8">
            إنجازاتنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 p-4 rounded-full bg-holographic-gradient animate-glow">
                <Award className="w-full h-full text-black" />
              </div>
              <div className="text-3xl font-bold holographic-text">500+</div>
              <div className="text-gray-300">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 p-4 rounded-full bg-holographic-gradient animate-glow">
                <Users className="w-full h-full text-black" />
              </div>
              <div className="text-3xl font-bold holographic-text">2000+</div>
              <div className="text-gray-300">متدرب</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 p-4 rounded-full bg-holographic-gradient animate-glow">
                <Zap className="w-full h-full text-black" />
              </div>
              <div className="text-3xl font-bold holographic-text">100+</div>
              <div className="text-gray-300">عميل راضي</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 p-4 rounded-full bg-holographic-gradient animate-glow">
                <Target className="w-full h-full text-black" />
              </div>
              <div className="text-3xl font-bold holographic-text">5+</div>
              <div className="text-gray-300">سنوات خبرة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
