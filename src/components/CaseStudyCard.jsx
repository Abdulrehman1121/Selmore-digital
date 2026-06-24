import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn.jsx";
import VisualImage from "./VisualImage.jsx";

export default function CaseStudyCard({ study, delay = 0 }) {
  const image = study.image || study.featured_image || "/assets/direct/case-results-direct.png";

  return (
    <FadeIn delay={delay} className="group h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
      <div className="relative">
        <VisualImage
          src={image}
          alt={study.imageAlt || `${study.title} case study visual`}
          className="aspect-[4/3] rounded-none"
          imgClassName="transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-lg border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">{study.industry}</span>
          <span className="rounded-lg border border-green/30 bg-green/10 px-3 py-1 text-xs font-bold text-green">{study.service}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-extrabold tracking-normal text-navy">{study.title}</h3>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {["Challenge", "Strategy", "Result"].map((label) => (
            <span key={label} className="rounded-lg bg-slate-100 px-3 py-2 text-center text-xs font-bold text-slateText">
              {label}
            </span>
          ))}
        </div>
        <Link to={`/case-studies/${study.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-green">
          Read case
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </FadeIn>
  );
}
