import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { securePost } from "../lib/api.js";
import FormField from "./FormField.jsx";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  industry: "",
  goal: "",
  message: "",
  timeline: "",
  budget: "",
  preferred_contact: "",
};

const industryOptions = [
  "Technology",
  "Healthcare",
  "Finance",
  "Retail",
  "Education",
  "Professional Services",
  "Ecommerce",
  "Other",
];

const serviceOptions = [
  "New Website",
  "Website Redesign",
  "Branding",
  "SEO",
  "AI Solutions",
  "Performance Marketing",
  "Social Media",
  "Booking System",
  "Digital Growth Strategy",
  "Not Sure Yet",
];

const timelineOptions = [
  "Immediately",
  "Within 30 Days",
  "1–3 Months",
  "3–6 Months",
  "Just Exploring",
];

const budgetOptions = [
  "Under $2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
];

const contactMethods = ["Email", "Phone", "WhatsApp", "Video Meeting"];

export default function ContactForm({ sourcePage = "Contact" }) {
  const [form, setForm] = useState(() => {
    if (typeof window === "undefined") return initialState;
    const saved = window.localStorage.getItem("selmore-contact-form");
    return saved ? JSON.parse(saved) : initialState;
  });
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("selmore-contact-form", JSON.stringify(form));
    }
  }, [form]);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus({ type: "idle", message: "" });
  }

  const stepOneComplete = form.name && form.email && form.phone && form.industry;
  const stepTwoComplete = form.goal && form.message && form.timeline && form.budget && form.preferred_contact;

  const nextStep = () => {
    if (stepOneComplete) {
      setStep(2);
      setStatus({ type: "idle", message: "" });
    } else {
      setStatus({ type: "error", message: "Please complete the first section before continuing." });
    }
  };

  const prevStep = () => {
    setStep(1);
    setStatus({ type: "idle", message: "" });
  };

  async function submit(event) {
    event.preventDefault();
    if (step === 1) {
      nextStep();
      return;
    }

    if (!stepTwoComplete) {
      setStatus({ type: "error", message: "Please complete all fields before booking your Growth Session." });
      return;
    }

    setStatus({ type: "loading", message: "Submitting your project details..." });
    try {
      await securePost("/contact", { ...form, source_page: sourcePage });
      setForm(initialState);
      setStep(1);
      window.localStorage.removeItem("selmore-contact-form");
      setStatus({ type: "success", message: "Thank you. Your Growth Session request is received and our team will be in touch shortly." });
    } catch (error) {
      const message = error.response?.data?.message || "We could not send the request right now. Please try again.";
      setStatus({ type: "error", message });
    }
  }

  return (
    <form id="contact-form" onSubmit={submit} className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="rounded-3xl bg-slate-100 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Project Form</p>
            <p className="mt-1 text-sm text-slate-600">Step {step} of 2</p>
          </div>
          <div className="min-w-[180px] rounded-full bg-white/80 p-1">
            <div className="h-2 rounded-full bg-blue transition-all" style={{ width: step === 1 ? "50%" : "100%" }} />
          </div>
        </div>
      </div>

      {step === 1 ? (
        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <FormField label="Name" name="name" value={form.name} onChange={update} required placeholder="Your name" />
            <FormField label="Email" name="email" type="email" value={form.email} onChange={update} required placeholder="you@company.com" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <FormField label="Phone" name="phone" type="tel" value={form.phone} onChange={update} required placeholder="+92..." />
            <FormField label="Company (Optional)" name="company" value={form.company} onChange={update} placeholder="Company name" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <FormField label="Website (Optional)" name="website" type="url" value={form.website} onChange={update} placeholder="https://example.com" />
            <FormField label="Industry" name="industry" value={form.industry} onChange={update} required options={industryOptions} />
          </div>
        </div>
      ) : (
        <div className="grid gap-5">
          <FormField label="What are you looking to achieve?" name="goal" value={form.goal} onChange={update} required options={serviceOptions} />
          <FormField
            label="Tell us about your project"
            name="message"
            type="textarea"
            value={form.message}
            onChange={update}
            required
            placeholder="What's your biggest challenge, and what would success look like for your business?"
            rows={5}
          />
          <div className="grid gap-5 md:grid-cols-2">
            <FormField label="Timeline" name="timeline" value={form.timeline} onChange={update} required options={timelineOptions} />
            <FormField label="Estimated Investment" name="budget" value={form.budget} onChange={update} required options={budgetOptions} />
          </div>
          <FormField label="Preferred Contact Method" name="preferred_contact" value={form.preferred_contact} onChange={update} required options={contactMethods} />
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={step === 1 ? nextStep : prevStep}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          {step === 1 ? "Continue" : "Back"}
        </button>
        <button
          type="submit"
          disabled={status.type === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="h-5 w-5" />
          {step === 1 ? "Continue to Project Details" : "Book My Growth Session"}
        </button>
      </div>

      {status.message && (
        <p className={`text-sm font-semibold ${status.type === "success" ? "text-green" : status.type === "error" ? "text-red-600" : "text-slate-600"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
