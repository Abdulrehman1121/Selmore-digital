import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, Send, AlertCircle, Phone, Mail } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SEO from "../components/SEO.jsx";
import NotFound from "./NotFound.jsx";
import { libraryData } from "../data/libraryData.js";
import { contactDetails } from "../data/siteData.js";

export default function LibraryDetail() {
  const { slug } = useParams();
  const item = libraryData.find((l) => l.slug === slug);

  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!item) {
    return <NotFound />;
  }

  const breadcrumbs = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://selmoredigital.com" },
    { "@type": "ListItem", "position": 2, "name": "Growth Library", "item": "https://selmoredigital.com/growth-library" },
    { "@type": "ListItem", "position": 3, "name": item.title, "item": `https://selmoredigital.com/growth-library/${item.slug}` }
  ];

  const resourceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "DigitalDocument",
      "name": item.title,
      "description": item.summary,
      "publisher": { "@type": "Organization", "name": "Selmore Digital" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // Attempt backend endpoint submission
      const res = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audit_type: item.title,
          name: formData.name,
          email: formData.email,
          phone: "Not provided",
          website_url: "https://selmoredigital.com",
          business_goal: `Requested Resource: ${item.title}`
        })
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        throw new Error("Unable to submit directly to API.");
      }
    } catch (err) {
      // Graceful fallback to direct contact methods
      setErrorMsg("Our automated resource server is temporarily offline. Please request via WhatsApp or Email below.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title={item.seo.title}
        description={item.seo.description}
        path={`/growth-library/${item.slug}`}
        schema={resourceSchema}
      />

      {/* Hero */}
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan mb-4">
            <Link to="/growth-library" className="hover:underline">Growth Library</Link>
            <span>/</span>
            <span>{item.title}</span>
          </div>

          <p className="text-xs font-bold uppercase tracking-wider text-green">{item.format}</p>
          <h1 className="mt-3 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl">
            {item.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {item.summary}
          </p>
        </div>
      </section>

      {/* Preview & Lead Capture Grid */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Resource Preview */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm text-left">
            <h2 className="font-display text-2xl font-bold text-navy flex items-center gap-3">
              <FileText className="h-6 w-6 text-cyan" />
              What This Resource Contains
            </h2>

            <ul className="mt-6 space-y-4">
              {item.includes.map((inc, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <p><strong>Intended Audience:</strong> {item.audience}</p>
              <p className="mt-1"><strong>Format:</strong> {item.format}</p>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md text-left">
            <h3 className="font-display text-2xl font-bold text-navy">{item.ctaLabel}</h3>
            <p className="mt-2 text-sm text-slate-600">Enter your email to receive access to this guide once verified.</p>

            {success ? (
              <div className="mt-6 rounded-xl bg-green/10 border border-green/30 p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-green mx-auto mb-2" />
                <h4 className="font-display text-lg font-bold text-navy">Request Received!</h4>
                <p className="mt-2 text-xs text-slate-600">We have recorded your access request and will send access instructions to your email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none"
                    placeholder="Company Ltd"
                  />
                </div>

                {errorMsg && (
                  <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-xs text-amber-800 flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p>{errorMsg}</p>
                      <div className="mt-2 flex gap-4 font-bold text-navy">
                        <a href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan">WhatsApp Direct</a>
                        <a href={`mailto:${contactDetails.email}`} className="underline hover:text-cyan">Email Direct</a>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3.5 text-sm font-bold text-navy hover:bg-green transition disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {loading ? "Submitting..." : item.ctaLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Need A Direct Consultation?"
        description="Book a Growth Session with our team to discuss your business strategy."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Explore Growth Library"
        secondaryPath="/growth-library"
      />
    </>
  );
}
