import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQAccordion({ faqs = [] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div key={faq.question} className="rounded-lg border border-slate-200 bg-white shadow-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-navy"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              {faq.question}
              <ChevronDown className={`h-5 w-5 flex-none transition ${isOpen ? "rotate-180 text-blue" : "text-slate-500"}`} />
            </button>
            {isOpen && <p className="px-5 pb-5 leading-7 text-darkGray">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
