import { motion } from "framer-motion";

export default function IndustryCard({ industry }) {
  const Icon = industry.icon;

  return (
    <motion.article
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-navy shadow-soft h-[360px] flex flex-col justify-end"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={industry.image}
          alt={industry.alt || `${industry.title} digital growth visual`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Dark gradient overlay from bottom to top */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/95 via-navy/55 to-transparent transition duration-300 group-hover:from-navy/95 group-hover:via-navy/45" />

      {/* Card Content */}
      <div className="relative z-20 p-6 flex flex-col items-start text-left">
        {/* Icon container */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-cyan backdrop-blur mb-4 transition duration-300 group-hover:border-cyan/30 group-hover:bg-white/15">
          <Icon className="h-5 w-5" />
        </div>
        
        {/* Title */}
        <h3 className="font-display text-xl font-extrabold tracking-normal text-white mb-2">
          {industry.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-slate-300 font-light leading-relaxed">
          {industry.description}
        </p>
      </div>
    </motion.article>
  );
}
