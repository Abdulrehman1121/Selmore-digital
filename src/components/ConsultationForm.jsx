import { CalendarCheck } from "lucide-react";
import { useState } from "react";
import { securePost } from "../lib/api.js";
import FormField from "./FormField.jsx";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website_url: "",
  business_type: "",
  required_service: "",
  preferred_date: "",
  preferred_time: "",
  message: "",
};

const businessTypes = ["Startup", "Small Business", "Growing SME", "Enterprise", "Agency Partner", "Nonprofit"];
const serviceOptions = [
  "Website Development",
  "Ecommerce Development",
  "SEO Services",
  "Social Media Marketing",
  "Performance Marketing",
  "Branding & Creative",
  "AI Automation",
  "Mobile App Development",
  "Full Growth Strategy",
];

export default function ConsultationForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Booking your request..." });
    try {
      await securePost("/book-consultation", form);
      setForm(initialState);
      setStatus({ type: "success", message: "Your consultation request has been received. We will confirm the best time shortly." });
    } catch (error) {
      const message = error.response?.data?.message || "We could not book the consultation right now. Please try again.";
      setStatus({ type: "error", message });
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Name" name="name" value={form.name} onChange={update} required placeholder="Your name" />
        <FormField label="Email" name="email" type="email" value={form.email} onChange={update} required placeholder="you@company.com" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Phone" name="phone" value={form.phone} onChange={update} required placeholder="+92..." />
        <FormField label="Company" name="company" value={form.company} onChange={update} placeholder="Company name" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Website URL" name="website_url" type="url" value={form.website_url} onChange={update} placeholder="https://example.com" />
        <FormField label="Business Type" name="business_type" value={form.business_type} onChange={update} options={businessTypes} />
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <FormField label="Required Service" name="required_service" value={form.required_service} onChange={update} required options={serviceOptions} />
        <FormField label="Preferred Date" name="preferred_date" type="date" value={form.preferred_date} onChange={update} required />
        <FormField label="Preferred Time" name="preferred_time" type="time" value={form.preferred_time} onChange={update} required />
      </div>
      <FormField label="Message" name="message" type="textarea" value={form.message} onChange={update} placeholder="Share your goals, blockers, and current digital setup." />
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-green px-5 py-3 text-sm font-bold text-navy transition hover:bg-cyan disabled:cursor-not-allowed disabled:opacity-70"
      >
        <CalendarCheck className="h-5 w-5" />
        {status.type === "loading" ? "Requesting..." : "Book a Free Strategy Call"}
      </button>
      {status.message && (
        <p className={`text-sm font-semibold ${status.type === "success" ? "text-green" : status.type === "error" ? "text-red-600" : "text-darkGray"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
