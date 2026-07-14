import { ArrowRight, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { contactDetails, navLinks, services, tagline } from "../data/siteData.js";
import BrandLogo from "./BrandLogo.jsx";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-navy px-4 pt-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <BrandLogo />
            </Link>
            <p className="mt-5 max-w-sm text-base leading-8 text-slate-300">Building Connected Digital Growth Systems For Businesses Worldwide.</p>
            <div className="mt-6 flex gap-3">
              {[
                ["LinkedIn", Linkedin],
                ["Facebook", Facebook],
                ["Instagram", Instagram],
              ].map(([label, Icon]) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-cyan hover:text-cyan"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-extrabold tracking-normal">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-slate-300 transition hover:text-cyan">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-extrabold tracking-normal">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-sm text-slate-300 transition hover:text-cyan">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-extrabold tracking-normal">Stay Ahead</h3>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Receive practical growth, marketing, website, and automation ideas.
            </p>
            <form
              className="mt-5 flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                setSubscribed(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Email address"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/8 px-3 py-3 text-sm text-white placeholder:text-slate-400"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                title="Subscribe"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-green text-navy transition hover:bg-cyan"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            {subscribed && <p className="mt-3 text-sm font-semibold text-green">Thank you. You are on the list.</p>}
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan" />
                {contactDetails.email}
              </p>
              <p>{contactDetails.phone}</p>
              <p>{contactDetails.location}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Selmore Digital. All rights reserved.</p>
          <p>{contactDetails.location}</p>
        </div>
      </div>
    </footer>
  );
}
