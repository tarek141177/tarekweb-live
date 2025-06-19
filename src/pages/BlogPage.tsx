
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
        console.log('💡 Raw Contentful data:', data); // لإزالة الشك

        const mappedPosts = data.items.map((item: any) => {
          const { title, slug, image } = item.fields;
          const author = item.fields['اسم المؤلف'];
          const date = item.sys.updatedAt;

          return {
            id: item.sys.id,
            title,
            slug,
            author,
            date,
            image: image?.fields?.file?.url ? 'https:' + image.fields.file.url : '/placeholder.svg',
          };
        });

        console.log('✅ Mapped Posts:', mappedPosts); // مهم جدًا للمراجعة
        setPosts(mappedPosts);
      } catch (error) {
        console.error('❌ خطأ في جلب المقالات:', error);
      }
    }

    getPosts();
  }, []);
