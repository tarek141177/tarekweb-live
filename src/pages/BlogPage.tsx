
import { useEffect, useState } from 'react';
import { fetchEntries } from '@/lib/contentfulClient';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HolographicBackground } from '@/components/HolographicBackground';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', 'تصميم المواقع', 'SEO', 'التسويق الرقمي', 'البرمجة', 'نصائح تقنية'];

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await fetchEntries('blogPost'); // اسم الـ Content Type
        const mappedPosts = data.items.map((item: any) => {
          const { title, slug, content, image, author } = item.fields;
          return {
            id: item.sys.id,
            title,
            slug,
            author: author?.fields?.name || 'بدون اسم',
            date: item.sys.updatedAt,
            image: image?.fields?.file?.url ? 'https:' + image.fields.file.url : '/placeholder.svg',
          };
        });
        setPosts(mappedPosts);
      } catch (error) {
        console.error('خطأ في جلب المقالات:', error);
      }
    }

    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white font-cairo relative overflow-x-hidden">
      <HolographicBackground />
      <Header />

      {/* بقية التصميم + استخدام filteredPosts لعرض البيانات الفعلية */}
      {/* ... نفس الشكل السابق للمقالة لكن اعتمد على post.title, post.slug, post.image, post.author ... إلخ */}
      
      <Footer />
    </div>
  );
};

export default BlogPage;
