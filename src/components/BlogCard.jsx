import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn.jsx";
import VisualImage from "./VisualImage.jsx";

export default function BlogCard({ post, delay = 0 }) {
  const image = post.image || post.featured_image || "/assets/direct/blog-editorial-direct.png";

  return (
    <FadeIn delay={delay} className="group h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
      <VisualImage
        src={image}
        alt={post.imageAlt || `${post.title} article visual`}
        className="aspect-[4/3] rounded-none"
        imgClassName="transition duration-500 group-hover:scale-105"
      />
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue">{post.category}</p>
        <h3 className="mt-3 font-display text-2xl font-extrabold tracking-normal text-navy">{post.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-darkGray">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-green">
          Read more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </FadeIn>
  );
}
