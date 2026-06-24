import { CheckCircle2 } from "lucide-react";

export default function PricingOrPackageCard({ title, description, features = [] }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-display text-2xl font-extrabold tracking-normal text-navy">{title}</h3>
      <p className="mt-3 leading-7 text-darkGray">{description}</p>
      <ul className="mt-5 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-slateText">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-green" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
