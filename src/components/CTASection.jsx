import { ArrowRight, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn.jsx";
import VisualImage from "./VisualImage.jsx";
import { brandAssets } from "../data/siteData.js";

export default function CTASection({
  eyebrow = "Ready to grow",
  title = "Build your growth system.",
  description = "Modern websites, stronger visibility, and smarter automation.",
  primaryLabel = "Book Free Consultation",
  primaryPath = "/book-consultation",
  secondaryLabel = "Get Free Growth Audit",
  secondaryPath = "/free-website-audit",
}) {
  return (
    <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <FadeIn className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(30,64,175,0.3),rgba(11,18,32,0.94),rgba(0,208,132,0.14))] p-8 shadow-glow md:p-12">
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-normal md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">{description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to={primaryPath}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green px-5 py-3 text-sm font-bold text-navy transition hover:bg-cyan"
              >
                <CalendarCheck className="h-5 w-5" />
                {primaryLabel}
              </Link>
              <Link
                to={secondaryPath}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/14 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan hover:text-cyan"
              >
                {secondaryLabel}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <VisualImage
              src={brandAssets.heroVisual}
              alt="Digital growth dashboard visual"
              className="aspect-[4/3] border border-white/10 shadow-glow"
            />
            <div className="absolute -bottom-4 left-5 right-5 rounded-lg border border-white/10 bg-navy/80 px-4 py-3 text-sm font-bold text-cyan backdrop-blur">
              Strategy. Design. Growth. Automation.
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
