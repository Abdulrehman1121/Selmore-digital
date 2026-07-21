import { useState } from "react";
import { Calendar, Clock, CheckCircle2, Send, AlertCircle, Phone, Mail } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import SEO from "../components/SEO.jsx";
import { contactDetails } from "../data/siteData.js";
import TypingHeading from "../components/TypingHeading.jsx";

export default function BookGrowthSession() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website_url: "",
    business_type: "B2B / Professional Services",
    required_service: "Digital Growth System",
    preferred_date: "",
    preferred_time: "Morning (9am - 12pm)",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Book a Growth Session",
    "url": "https://selmoredigital.com/book-growth-session",
    "description": "Book a 30-minute growth strategy consultation with Selmore Digital.",
    "potentialAction": {
      "@type": "ScheduleAction",
      "name": "Schedule a Growth Session",
      "target": "https://selmoredigital.com/book-growth-session"
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Unable to process booking request.");
      }
    } catch (err) {
      setErrorMsg("Automated calendar booking server is offline. Please confirm your preferred slot directly via WhatsApp or Email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Book a Growth Session | Selmore Digital Consultation"
        description="Schedule a 30-minute growth strategy session to evaluate your website, AI automation opportunities, SEO, and marketing."
        path="/book-growth-session"
        schema={bookingSchema}
      />

      {/* Hero */}
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">STRATEGY CONSULTATION</p>
          <TypingHeading text="Book Your 30-Minute Growth Session." className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl" />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A focused 1-on-1 strategy call to review your current digital presence, identify friction points, and outline a connected growth plan.
          </p>
        </div>
      </section>

      {/* What Happens & Booking Form */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Expectations */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm text-left">
            <h2 className="font-display text-2xl font-bold text-navy">What We'll Cover</h2>
            <p className="mt-2 text-sm text-slate-600">No high-pressure sales pitches—just actionable business insights.</p>

            <ul className="mt-8 space-y-4">
              {[
                "Current Digital Audit: Website performance & conversion bottlenecks",
                "Automation Potential: Identifying manual tasks for AI workflows",
                "Search & Market Intent: High-value SEO keyword opportunities",
                "Connected Systems Roadmap: Recommended architecture for your budget"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Need Immediate Assistance?</h3>
              <p className="mt-2 text-sm text-slate-700 font-semibold">
                Call or WhatsApp us directly at <a href={`tel:${contactDetails.phone}`} className="text-cyan hover:underline">{contactDetails.phone}</a>
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md text-left">
            <h3 className="font-display text-2xl font-bold text-navy">Select Consultation Details</h3>

            {success ? (
              <div className="mt-8 rounded-xl bg-green/10 border border-green/30 p-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-green mx-auto mb-3" />
                <h4 className="font-display text-xl font-bold text-navy">Session Requested!</h4>
                <p className="mt-2 text-sm text-slate-600">We have logged your preferred time. Our team will send a calendar invite to your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Your Name *</label>
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
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none"
                      placeholder="+92 300 0669541"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Company Website</label>
                    <input
                      type="url"
                      value={formData.website_url}
                      onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none"
                      placeholder="https://yourcompany.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.preferred_date}
                      onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Preferred Time Window *</label>
                    <select
                      value={formData.preferred_time}
                      onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none bg-white"
                    >
                      <option>Morning (9am - 12pm)</option>
                      <option>Afternoon (12pm - 4pm)</option>
                      <option>Evening (4pm - 7pm)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">What is your primary goal for this call?</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none"
                    placeholder="Briefly describe what you would like to discuss..."
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
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-green px-6 py-3.5 text-sm font-bold text-navy hover:bg-cyan transition disabled:opacity-50"
                >
                  <Calendar className="h-4 w-4" />
                  {loading ? "Confirming..." : "Confirm Booking Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer To Send A Message First?"
        description="Fill in our general contact form and we'll reply via email within 24 hours."
        primaryLabel="Go to Contact Form"
        primaryPath="/contact"
        secondaryLabel="Explore Work"
        secondaryPath="/work"
      />
    </>
  );
}
