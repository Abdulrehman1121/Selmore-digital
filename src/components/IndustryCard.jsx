import { ArrowUpRight } from "lucide-react";

export default function IndustryCard({ industry }) {
  const Icon = industry.icon;

  return (
    <article
      className="industry-card group relative overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-soft h-[340px] flex flex-col justify-end text-left cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-glow hover:border-cyan/40"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={industry.image}
          alt={industry.alt || `${industry.title} digital growth visual`}
          loading="lazy"
          className="industry-card-image h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/95 via-navy/55 to-transparent transition-all duration-500 group-hover:from-navy/95 group-hover:via-navy/35" />

      {/* Card Content */}
      <div className="relative z-20 p-6 flex flex-col items-start w-full">
        {/* Icon */}
        {Icon && (
          <div className="industry-card-icon mb-4 rounded-xl bg-white/10 p-2.5 text-cyan backdrop-blur-sm group-hover:bg-cyan group-hover:text-navy transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.4)]">
            <Icon className="h-5 w-5" />
          </div>
        )}
        
        {/* Title */}
        <div className="flex items-center justify-between w-full">
          <h3 className="font-display text-xl font-extrabold tracking-normal text-white">
            {industry.title}
          </h3>
          <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-cyan transition-colors" />
        </div>
        
        {/* Description */}
        <p className="mt-2 text-xs text-slate-300 font-light leading-relaxed">
          {industry.description}
        </p>
      </div>
    </article>
  );
}
