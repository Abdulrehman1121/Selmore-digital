import { CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn.jsx";

export default function ProcessTimeline({ steps }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <FadeIn key={step} delay={index * 0.05} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 font-bold text-blue">
              {String(index + 1).padStart(2, "0")}
            </span>
            <CheckCircle2 className="h-5 w-5 text-green" />
          </div>
          <h3 className="font-display text-xl font-extrabold tracking-normal text-navy">{step}</h3>
        </FadeIn>
      ))}
    </div>
  );
}
