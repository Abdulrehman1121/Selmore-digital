import { Send } from "lucide-react";
import { useState } from "react";
import { securePost } from "../lib/api.js";
import FormField from "./FormField.jsx";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service_interest: "",
  budget: "",
  message: "",
};

const serviceOptions = [
  "Website Development",
  "Ecommerce Development",
  "SEO Services",
  "Social Media Marketing",
  "Performance Marketing",
  "Branding & Creative",
  "AI Automation",
  "Mobile App Development",
];

const budgetOptions = ["Under $1,000", "$1,000 - $3,000", "$3,000 - $7,500", "$7,500 - $15,000", "$15,000+"];

export default function ContactForm({ sourcePage = "Contact" }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });
    try {
      await securePost("/contact", { ...form, source_page: sourcePage });
      setForm(initialState);
      setStatus({ type: "success", message: "Thank you. Your message has been received and our team will respond shortly." });
    } catch (error) {
      const message = error.response?.data?.message || "We could not send the message right now. Please try again.";
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
        <FormField label="Service Interest" name="service_interest" value={form.service_interest} onChange={update} required options={serviceOptions} />
        <FormField label="Budget" name="budget" value={form.budget} onChange={update} options={budgetOptions} />
      </div>
      <FormField label="Message" name="message" type="textarea" value={form.message} onChange={update} required placeholder="Tell us what you want to grow, fix, or automate." />
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-5 w-5" />
        {status.type === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status.message && (
        <p className={`text-sm font-semibold ${status.type === "success" ? "text-green" : status.type === "error" ? "text-red-600" : "text-darkGray"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
