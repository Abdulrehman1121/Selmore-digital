import { Quote } from "lucide-react";
import FadeIn from "./FadeIn.jsx";

export default function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <Quote className="h-8 w-8 text-cyan" />
      <p className="mt-5 text-base leading-8 text-slateText">"{testimonial.quote}"</p>
      <div className="mt-6 border-t border-slate-200 pt-5">
        <p className="font-bold text-navy">{testimonial.name}</p>
        <p className="mt-1 text-sm text-darkGray">{testimonial.role}</p>
      </div>
    </FadeIn>
  );
}
