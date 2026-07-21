import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { footerColumns } from "../data/navigationData.js";
import BrandLogo from "./BrandLogo.jsx";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const { col1, col2, col3, col4 } = footerColumns;

  return (
    <footer className="bg-navy px-4 pt-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          {/* Column 1: positioning & socials */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <BrandLogo />
            </Link>
            {/* <p className="mt-5 max-w-sm text-base leading-7 text-slate-300">
              {col1.description}
            </p> */}
            <div className="mt-6 flex gap-3">
              {[
                ["LinkedIn", Linkedin, col1.socials[0].url],
                ["Facebook", Facebook, col1.socials[1].url],
                ["Instagram", Instagram, col1.socials[2].url],
              ].map(([label, Icon, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-cyan hover:text-cyan"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Growth Systems */}
          <div>
            <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-cyan">{col2.title}</h3>
            <ul className="mt-5 space-y-2.5">
              {col2.links.map((link, index) => (
                <li key={`${link.path}-${index}`}>
                  <Link to={link.path} className="text-sm text-slate-300 transition hover:text-cyan">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Work & Creative */}
          <div>
            <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-cyan">{col3.title}</h3>
            <ul className="mt-5 space-y-2.5">
              {col3.links.map((link, index) => (
                <li key={`${link.path}-${index}`}>
                  <Link to={link.path} className="text-sm text-slate-300 transition hover:text-cyan">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-cyan">{col4.title}</h3>
            <div className="mt-5 space-y-2.5 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan" />
                <a href={`mailto:${col4.email}`} className="hover:text-cyan transition">{col4.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan" />
                <a href={`tel:${col4.phone}`} className="hover:text-cyan transition">{col4.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan" />
                <span>{col4.location}</span>
              </p>
            </div>

            <div className="mt-6">
              <Link
                to={col4.ctaPath}
                className="inline-flex w-full items-center justify-center rounded-lg bg-green px-4 py-2.5 text-sm font-bold text-navy transition hover:bg-cyan"
              >
                {col4.ctaLabel}
              </Link>
            </div>

            <div className="mt-6">
              <p className="text-xs text-slate-400">Subscribe for growth updates:</p>
              <form
                className="mt-2 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan text-navy hover:bg-green"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              {subscribed && <p className="mt-2 text-xs text-green">Thank you for subscribing.</p>}
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col gap-3 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Selmore Digital. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/sitemap.xml" target="_blank" className="hover:text-cyan">XML Sitemap</Link>
            <span>•</span>
            <span>{col4.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
