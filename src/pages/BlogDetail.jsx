import { Navigate, useParams } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { blogPosts } from "../data/siteData.js";
import { blogPostingSchema } from "../lib/schema.js";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;
  const image = post.image || post.featured_image || "/assets/direct/blog-editorial-direct.png";

  return (
    <>
      <SEO
        title={`${post.title} | Selmore Digital Blog`}
        description={post.excerpt}
        path={`/blog/${slug}`}
        schema={blogPostingSchema(post)}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{post.category}</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">{post.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{post.excerpt}</p>
          </div>
          <VisualImage src={image} alt={post.imageAlt || `${post.title} visual`} className="aspect-[4/3] border border-white/10 shadow-glow" />
        </div>
      </section>
      <article className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-9 text-slateText">{post.content}</p>
        </div>
      </article>
      <CTASection />
    </>
  );
}
