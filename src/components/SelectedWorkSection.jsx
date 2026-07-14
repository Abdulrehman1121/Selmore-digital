import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const projects = [
  {
    name: "Aurora Kratom",
    category: "E-commerce & Custom Web",
    image: "/assets/direct/hero-ecommerce-dashboard.png",
    detail: "High-performance subscription store, specialized payment integration, and custom CRM syncing.",
  },
  {
    name: "Creative Circle",
    category: "Branding & Web Platform",
    image: "/assets/direct/portfolio-branding.png",
    detail: "Portfolio display engine, creative assets catalog, and lead routing for international artists.",
  },
  {
    name: "Rustic Bakery",
    category: "Local Marketing & Ordering",
    image: "/assets/direct/industry-restaurants.png",
    detail: "Local visibility campaigns, interactive online ordering menu, and digital retention program.",
  },
  {
    name: "Libermann",
    category: "Corporate Visibility & SEO",
    image: "/assets/direct/about-team.jpg",
    detail: "Authority building, structured service layers, and SEO keyword tracking for corporate advisors.",
  },
  {
    name: "Guardian Family Law",
    category: "Law Firm Platform",
    image: "/assets/direct/contact-crm-direct.png",
    detail: "Secure appointment capture, automated intake questions, and secure database routing.",
  },
  {
    name: "CamiScare",
    category: "Interactive E-commerce",
    image: "/assets/direct/website-growth-laptop.png",
    detail: "Interactive spooky seasonal experience store, custom cart animations, and order optimization.",
  },
  {
    name: "Alibaba Kebabs",
    category: "Restaurant Web & Menu",
    image: "/assets/direct/industry-restaurants.png",
    detail: "Multi-location responsive local site, ordering funnel, and digital loyalty scheme.",
  },
  {
    name: "Ektis",
    category: "AI & Custom Software",
    image: "/assets/direct/portfolio-automation.png",
    detail: "Machine learning analytics board, custom server integration, and client portal.",
  },
];

// Duplicate list for infinite marquee scrolling effect
const marqueeItems = [...projects, ...projects];

export default function SelectedWorkSection() {
  return (
    <section id="featured-works" className="section-pad bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Self-contained CSS for Infinite Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-50% - 12px), 0, 0);
          }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marqueeScroll 65s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header (Centered) */}
        <div className="flex flex-col items-center text-center mb-12 max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Selected Work"
            title="Work That Creates Real Business Value."
            description="Every project begins with understanding the business. Every solution is designed around measurable outcomes. From healthcare and hospitality to technology, construction, retail, and professional services, we've helped businesses build digital experiences that drive growth."
            align="center"
          />
        </div>

        {/* Marquee container aligned within standard max-w-7xl wrapper */}
        <div className="w-full overflow-hidden py-4 select-none relative rounded-3xl">
          {/* Soft edge gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="marquee-container gap-6">
            {marqueeItems.map((project, idx) => (
              <div
                key={`${project.name}-${idx}`}
                className="w-[300px] sm:w-[410px] shrink-0 rounded-3xl border border-slate-200 bg-slate-50 shadow-soft relative group aspect-[4/3] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.08] hover:z-20 hover:shadow-xl hover:border-blue/30"
              >
                {/* Background Project Image */}
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent z-10" />

                {/* Title & Category Display (Always Visible) */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 transition-all duration-300 group-hover:translate-y-[-20px] group-hover:opacity-0 flex flex-col justify-end text-left pointer-events-none">
                  <span className="w-fit rounded-full bg-cyan/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan border border-cyan/20">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-black tracking-tight text-white">
                    {project.name}
                  </h3>
                </div>

                {/* Hover Details Reveal (Apple-style Slide Up) */}
                <div className="absolute inset-0 bg-navy/90 p-8 z-30 transition-all duration-500 ease-out translate-y-full group-hover:translate-y-0 flex flex-col justify-between text-left">
                  <div>
                    <span className="w-fit rounded-full bg-cyan/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan border border-cyan/10">
                      {project.category}
                    </span>
                    <h4 className="mt-3 font-display text-2xl font-black text-white">
                      {project.name}
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {project.detail}
                    </p>
                  </div>

                   <Link
                    to={`/growth-story/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue py-3.5 text-sm font-bold text-white transition hover:bg-cyan hover:text-navy"
                  >
                    <Eye className="h-4 w-4" />
                    View Project Details
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/select-work"
            className="inline-flex items-center gap-2 rounded-lg bg-blue px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
