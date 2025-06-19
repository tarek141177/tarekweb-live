
import { useEffect, useState } from 'react';
import { fetchEntries } from '@/lib/contentfulClient';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HolographicBackground } from '@/components/HolographicBackground';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await fetchEntries('blogPost');
        console.log('💡 Raw Contentful data:', data);

        const assets = data.includes?.Asset || [];

const mappedPosts = data.items.map((item: any) => {
  const { title, slug } = item.fields;
  const imageId = item.fields.mainImage?.sys?.id;
  const asset = assets.find((a: any) => a.sys.id === imageId);
  const image = asset?.fields?.file?.url
    ? 'https:' + asset.fields.file.url
    : '/placeholder.svg';

  const author = item.fields['اسم المؤلف'];
  const date = item.sys.updatedAt;

  return {
    id: item.sys.id,
    title,
    slug,
    author,
    date,
    image,
  };
});


        console.log('✅ Mapped Posts:', mappedPosts);
        setPosts(mappedPosts);
      } catch (error) {
        console.error('❌ خطأ في جلب المقالات:', error);
      }
    }

    getPosts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-cairo relative overflow-x-hidden">
      <HolographicBackground />
      <Header />

      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold holographic-text mb-6">المدونة</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              أحدث المقالات والنصائح في عالم تصميم المواقع والتسويق الرقمي
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 opacity-20">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">لا توجد مقالات</h3>
              <p className="text-gray-300">لم يتم العثور على أي مقالات منشورة حالياً.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h2>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('ar-EG')}</span>
                      </div>
                    </div>

                    <a
                      href={`/blog/${post.slug}`}
                      className="w-full block text-center holographic-border bg-transparent text-white hover:bg-holographic-primary/20 transition-all duration-300 py-2 rounded-lg"
                    >
                      اقرأ المقال
                      <ArrowRight className="inline w-4 h-4 mr-2" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
