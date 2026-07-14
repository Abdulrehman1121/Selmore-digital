import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

export default function ConnectedGrowthSection() {
  return (
    <section className="section-pad bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          
          {/* Left Column: Eyebrow and Headline Statement */}
          <div className="flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="Connected Growth"
              title={
                <>
                  The <span className="text-blue">businesses</span> that <span className="text-blue">succeed</span> won't simply market better. They'll build smarter <span className="text-blue">digital systems</span>.
                </>
              }
            />
          </div>

          {/* Right Column: Detailed copy and CTA */}
          <div className="flex flex-col items-start text-left mt-4 lg:mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700 font-semibold border-l-4 border-blue pl-4">
              At Selmore Digital, we partner with ambitious businesses to design, develop, market, 
              and automate connected digital ecosystems that create measurable growth.
            </p>
            <p className="text-base leading-relaxed text-slate-500">
              Whether you're launching a startup, modernizing an established business, or preparing for 
              the future with AI, we build digital foundations designed to scale.
            </p>
            <Link
              to="/growth-systems"
              className="inline-flex items-center gap-2 rounded-lg bg-blue px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green"
            >
              Explore Growth Systems
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
