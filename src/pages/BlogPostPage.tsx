import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchEntries } from "@/lib/contentfulClient";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HolographicBackground } from "@/components/HolographicBackground";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    async function getPost() {
      try {
        const data = await fetchEntries("blogPost");
        const matched = data.items.find(
          (item: any) => item.fields.slug === slug
        );

        if (matched) {
          const image = matched.fields["Main Image"];
          const content = matched.fields.Content;

          setPost({
            title: matched.fields.title,
            content: content,
            author: matched.fields["اسم المؤلف"],
            image: image?.fields?.file?.url
              ? "https:" + image.fields.file.url
              : null,
            date: matched.sys.updatedAt,
          });
        } else {
          console.warn("❗ لم يتم العثور على مقال بهذا الرابط:", slug);
        }
      } catch (error) {
        console.error("❌ خطأ في تحميل المقال:", error);
      }
    }

    getPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white font-cairo">
        <Header />
        <main className="pt-40 text-center">
          <h2 className="text-3xl">جاري تحميل المقال...</h2>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-cairo">
      <HolographicBackground />
      <Header />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-4">
          بواسطة {post.author} -{" "}
          {new Date(post.date).toLocaleDateString("ar-EG")}
        </p>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full max-h-[400px] object-cover rounded-lg mb-8"
          />
        )}

        <div className="prose prose-invert max-w-4xl mx-auto leading-loose text-lg">
  {post.content
    ? documentToReactComponents(post.content)
    : <p className="text-gray-400 text-center">لا يوجد محتوى متاح لهذا المقال.</p>}
</div>

      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
