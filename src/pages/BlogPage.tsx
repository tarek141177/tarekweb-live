
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HolographicBackground } from '@/components/HolographicBackground';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', 'تصميم المواقع', 'SEO', 'التسويق الرقمي', 'البرمجة', 'نصائح تقنية'];

  const blogPosts = [
    {
      id: 1,
      title: 'كيفية تحسين موقعك لمحركات البحث في 2024',
      excerpt: 'تعلم أحدث استراتيجيات تحسين محركات البحث وكيفية تطبيقها على موقعك الإلكتروني للحصول على ترتيب أفضل في جوجل.',
      category: 'SEO',
      author: 'طارق مصطفى',
      date: '2024-01-15',
      readTime: '8 دقائق',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'أهمية التصميم المتجاوب في عصر الهواتف الذكية',
      excerpt: 'اكتشف لماذا يجب أن يكون موقعك متجاوباً مع جميع الأجهزة وكيف يؤثر ذلك على تجربة المستخدم ومحركات البحث.',
      category: 'تصميم المواقع',
      author: 'فريق طارق ويب',
      date: '2024-01-10',
      readTime: '6 دقائق',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'استراتيجيات التسويق الرقمي الفعالة للشركات الصغيرة',
      excerpt: 'دليل شامل للشركات الصغيرة حول كيفية بناء استراتيجية تسويق رقمي ناجحة بميزانية محدودة.',
      category: 'التسويق الرقمي',
      author: 'طارق مصطفى',
      date: '2024-01-05',
      readTime: '10 دقائق',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'مقدمة في React: البداية الصحيحة لتطوير المواقع الحديثة',
      excerpt: 'تعلم أساسيات React وكيف يمكن أن تساعدك هذه المكتبة القوية في بناء تطبيقات ويب تفاعلية وسريعة.',
      category: 'البرمجة',
      author: 'فريق التطوير',
      date: '2023-12-28',
      readTime: '12 دقيقة',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: '10 نصائح لزيادة سرعة موقعك الإلكتروني',
      excerpt: 'نصائح عملية ومجربة لتحسين سرعة تحميل موقعك وتحسين تجربة المستخدم وترتيب محركات البحث.',
      category: 'نصائح تقنية',
      author: 'طارق مصطفى',
      date: '2023-12-20',
      readTime: '7 دقائق',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'أهمية الأمان في المواقع الإلكترونية وكيفية حماية موقعك',
      excerpt: 'دليل شامل حول أفضل ممارسات الأمان للمواقع الإلكترونية وكيفية حماية موقعك من التهديدات السيبرانية.',
      category: 'نصائح تقنية',
      author: 'فريق الأمان',
      date: '2023-12-15',
      readTime: '9 دقائق',
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white font-cairo relative overflow-x-hidden">
      <HolographicBackground />
      <Header />
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* العنوان الرئيسي */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold holographic-text mb-6">
              المدونة
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              أحدث المقالات والنصائح في عالم تصميم المواقع والتسويق الرقمي
            </p>
          </div>

          {/* البحث والفلترة */}
          <div className="glass-effect rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* شريط البحث */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-holographic-primary/30 rounded-lg text-white focus:outline-none focus:border-holographic-primary transition-colors"
                />
              </div>

              {/* فلترة الفئات */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-holographic-primary text-black font-semibold'
                        : 'bg-black/50 text-gray-300 hover:bg-holographic-primary/20 border border-holographic-primary/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* المقالات */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-holographic-primary/20 to-holographic-secondary/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">📖</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-holographic-primary" />
                    <span className="text-sm text-holographic-primary font-semibold">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('ar-EG')}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button
                    className="w-full holographic-border bg-transparent text-white hover:bg-holographic-primary/20 transition-all duration-300"
                  >
                    اقرأ المقال
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* رسالة عدم وجود نتائج */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 opacity-20">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">لا توجد مقالات</h3>
              <p className="text-gray-300">لم نجد أي مقالات تطابق بحثك. جرب كلمات مختلفة أو اختر فئة أخرى.</p>
            </div>
          )}

          {/* اشتراك في النشرة الإخبارية */}
          <div className="glass-effect rounded-2xl p-8 mt-16 text-center">
            <h3 className="text-3xl font-bold holographic-text mb-4">
              اشترك في نشرتنا الإخبارية
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              احصل على أحدث المقالات والنصائح التقنية مباشرة في بريدك الإلكتروني
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 bg-black/50 border border-holographic-primary/30 rounded-lg text-white focus:outline-none focus:border-holographic-primary transition-colors"
              />
              <Button className="holographic-border bg-transparent text-white hover:bg-holographic-primary/20 transition-all duration-300">
                اشتراك
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
