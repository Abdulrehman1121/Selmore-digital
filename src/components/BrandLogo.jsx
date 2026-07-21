import { brandAssets } from "../data/siteData.js";

export default function BrandLogo({ compact = false, className = "" }) {
  return (
    <span className={`flex items-center ${className}`}>
      <img
        src={compact ? brandAssets.mark : brandAssets.logo}
        alt={brandAssets.markAlt}
        className={`${compact ? "h-14 w-auto" : "h-20 w-auto"} object-contain`}
      />
    </span>
  );
}
