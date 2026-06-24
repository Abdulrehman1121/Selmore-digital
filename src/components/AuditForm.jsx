import { Send } from "lucide-react";
import { useState } from "react";
import { securePost } from "../lib/api.js";
import FormField from "./FormField.jsx";

const initialState = {
  name: "",
  email: "",
  phone: "",
  website_url: "",
  business_goal: "",
};

export default function AuditForm({ auditType = "Website Audit" }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Submitting your request..." });
    try {
      await securePost("/audit-request", { ...form, audit_type: auditType });
      setForm(initialState);
      setStatus({ type: "success", message: "Your request has been received. We will review it and respond with the next step." });
    } catch (error) {
      const message = error.response?.data?.message || "We could not submit the request right now. Please try again.";
      setStatus({ type: "error", message });
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <input type="hidden" name="audit_type" value={auditType} />
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Name" name="name" value={form.name} onChange={update} required placeholder="Your name" />
        <FormField label="Email" name="email" type="email" value={form.email} onChange={update} required placeholder="you@company.com" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Phone" name="phone" value={form.phone} onChange={update} required placeholder="+92..." />
        <FormField label="Website URL" name="website_url" type="url" value={form.website_url} onChange={update} required placeholder="https://example.com" />
      </div>
      <FormField label="Business Goal" name="business_goal" type="textarea" value={form.business_goal} onChange={update} required placeholder="What do you want to improve, grow, or automate?" rows={4} />
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-5 w-5" />
        {status.type === "loading" ? "Submitting..." : `Request ${auditType}`}
      </button>
      {status.message && (
        <p className={`text-sm font-semibold ${status.type === "success" ? "text-green" : status.type === "error" ? "text-red-600" : "text-darkGray"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
