import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn.jsx";
import VisualImage from "./VisualImage.jsx";

export default function PortfolioCard({ item, delay = 0 }) {
  const image = item.image?.startsWith("/") ? item.image : "/assets/direct/portfolio-board-direct.png";

  return (
    <FadeIn delay={delay} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
      <div className="relative">
        <VisualImage
          src={image}
          alt={item.imageAlt || `${item.title} project visual`}
          className="aspect-[4/3] rounded-none"
          imgClassName="transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/12 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <span className="w-fit rounded-lg border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">
            {item.category}
          </span>
          <p className="max-w-xs font-display text-2xl font-extrabold tracking-normal text-white">
            {item.visualLabel || item.title}
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm font-semibold text-blue">{item.client_name}</p>
        <h3 className="mt-2 font-display text-2xl font-extrabold tracking-normal text-navy">{item.title}</h3>
        <Link
          to={`/portfolio/${item.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue transition group-hover:text-green"
        >
          View project
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </FadeIn>
  );
}
