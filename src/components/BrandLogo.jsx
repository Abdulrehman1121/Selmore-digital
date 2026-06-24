import { brandAssets } from "../data/siteData.js";

export default function BrandLogo({ compact = false, className = "" }) {
  return (
    <span className={`flex items-center ${className}`}>
      <img
        src={brandAssets.logo}
        alt={brandAssets.markAlt}
        className={`${compact ? "h-14 w-auto" : "h-20 w-auto"} object-contain`}
      />
      {!compact && (
        <span className="ml-3">
          <span className="block font-display text-lg font-extrabold tracking-normal text-white">
            Selmore Digital
          </span>
          <span className="block text-xs font-medium text-slate-400">Growth & AI Automation</span>
        </span>
      )}
    </span>
  );
}
