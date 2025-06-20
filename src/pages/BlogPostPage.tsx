import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchEntries } from '@/lib/contentfulClient';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HolographicBackground } from '@/components/HolographicBackground';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    async function getPost() {
      try {
        const data = await fetchEntries('blogPost');
        const matched = data.items.find(
          (item: any) => item.fields.slug === slug
        );

        if (matched) {
          const { title, content, image } = matched.fields;
          const author = matched.fields['اسم المؤلف'];
          const date = matched.sys.updatedAt;
          const imageUrl = image?.fields?.file?.url
            ? 'https:' + image.fields.file.url
            : '/placeholder.svg';

          setPost({
            title,
            content,
            image: imageUrl,
            author,
            date,
          });
        }
      } catch (err) {
        console.error('❌ خطأ في تحميل المقال:', err);
      }
    }

    getPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white font-cairo flex items-center justify-center">
        <p>جارٍ تحميل المقال...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-cairo">
      <HolographicBackground />
      <Header />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <article className="max-w-3xl mx-auto bg-black rounded-xl p-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-gray-400 mb-6">
            ✍️ {post.author} – 🗓️{' '}
            {new Date(post.date).toLocaleDateString('ar-EG')}
          </p>

          <div className="text-lg leading-loose whitespace-pre-line">
            {post.content}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
