import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin, AlertCircle, MessageSquare } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import SEO from "../components/SEO.jsx";
import { contactDetails } from "../data/siteData.js";
import TypingHeading from "../components/TypingHeading.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service_interest: "Website Development",
    budget: "$5,000 - $10,000",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Selmore Digital",
    "url": "https://selmoredigital.com/contact",
    "description": "Get in touch with Selmore Digital for web development, AI automation, SEO, and digital growth strategy."
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // Send POST to verified backend endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source_page: "Contact Page"
        })
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Unable to process message right now.");
      }
    } catch (err) {
      setErrorMsg("Our online server is currently undergoing maintenance. Please reach out directly via WhatsApp or Email below.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Selmore Digital Growth Partner"
        description="Reach out to Selmore Digital for website development, AI automation, SEO, branding, and digital growth systems."
        path="/contact"
        schema={contactSchema}
      />

      {/* Hero */}
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">CONTACT US</p>
          <TypingHeading text="Let's Talk About Your Growth Goals." className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl" />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us about your project, timeline, and goals. We'll respond within 24 business hours.
          </p>
        </div>
      </section>

      {/* Form & Direct Contact Info */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Inquiry Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md text-left">
            <h2 className="font-display text-2xl font-bold text-navy">Project Inquiry Form</h2>
            <p className="mt-2 text-sm text-slate-600">Fill in the details below to request a strategic consultation.</p>

            {success ? (
              <div className="mt-8 rounded-xl bg-green/10 border border-green/30 p-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-green mx-auto mb-3" />
                <h3 className="font-display text-xl font-bold text-navy">Message Received!</h3>
                <p className="mt-2 text-sm text-slate-600">Thank you for reaching out. A growth strategist will review your inquiry and get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Email Address *</label>
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Primary Service Needed</label>
                    <select
                      value={formData.service_interest}
                      onChange={(e) => setFormData({ ...formData, service_interest: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none bg-white"
                    >
                      <option>Digital Growth System</option>
                      <option>Website Development</option>
                      <option>AI & Automation</option>
                      <option>Search Engine Optimization</option>
                      <option>Performance Marketing</option>
                      <option>Social Media Marketing</option>
                      <option>Brand Identity</option>
                      <option>Online Booking Systems</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none bg-white"
                    >
                      <option>&lt; $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Project Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-cyan focus:outline-none"
                    placeholder="Tell us about your goals, current challenges, and target launch timeframe..."
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
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm text-left flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-navy">Direct Contact Info</h3>
              <p className="mt-2 text-sm text-slate-600">Prefer direct communication? Reach us through any channel below.</p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone & WhatsApp</span>
                    <p className="mt-1 text-base font-bold text-navy">
                      <a href={`tel:${contactDetails.phone}`} className="hover:text-cyan">{contactDetails.phone}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</span>
                    <p className="mt-1 text-base font-bold text-navy">
                      <a href={`mailto:${contactDetails.email}`} className="hover:text-cyan">{contactDetails.email}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Service Coverage</span>
                    <p className="mt-1 text-base font-bold text-navy">{contactDetails.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-xl bg-navy p-6 text-white">
              <h4 className="font-display text-lg font-bold text-cyan flex items-center gap-2">
                <MessageSquare className="h-5 w-5" /> Need Quick Answers?
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Connect directly with a growth architect on WhatsApp for rapid response.
              </p>
              <a
                href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green px-4 py-2 text-xs font-bold text-navy hover:bg-cyan transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Schedule a Strategic Growth Session"
        description="Book a dedicated 30-minute consultation with our lead growth architect."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Explore Work"
        secondaryPath="/work"
      />
    </>
  );
}
