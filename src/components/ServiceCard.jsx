import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VisualImage from "./VisualImage.jsx";

export default function ServiceCard({ service, dark = false }) {
  const Icon = service.icon;

  return (
    <motion.article
      className={`group h-full overflow-hidden rounded-lg transition ${
        dark
          ? "border border-white/10 bg-white/[0.06] shadow-glow hover:border-cyan/50"
          : "border border-slate-200 bg-white shadow-soft hover:border-blue/30"
      }`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22 }}
    >
      <div className="relative">
        <VisualImage
          src={service.image}
          alt={service.imageAlt}
          className="aspect-[4/3] rounded-none"
          imgClassName="transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
        <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-white/10 text-cyan backdrop-blur">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="p-5">
        <h3 className={`font-display text-2xl font-extrabold tracking-normal ${dark ? "text-white" : "text-navy"}`}>
          {service.title}
        </h3>
        <p className={`mt-2 text-sm leading-6 ${dark ? "text-slate-300" : "text-darkGray"}`}>{service.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {service.benefits.slice(0, 3).map((benefit) => (
            <span
              key={benefit}
              className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold ${
                dark ? "bg-white/8 text-slate-200" : "bg-slate-100 text-slateText"
              }`}
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-green" />
              {benefit}
            </span>
          ))}
        </div>

        <Link
          to={service.path}
          className={`mt-5 inline-flex items-center gap-2 text-sm font-bold ${
            dark ? "text-cyan hover:text-green" : "text-blue hover:text-green"
          }`}
        >
          Explore Service
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
