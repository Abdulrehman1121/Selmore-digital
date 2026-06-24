import { CalendarCheck, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/siteData.js";
import BrandLogo from "./BrandLogo.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3">
          <BrandLogo compact />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-link text-sm font-semibold ${isActive ? "active" : ""}`}
              end={link.path === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/book-consultation"
            className="inline-flex items-center gap-2 rounded-lg bg-green px-4 py-2.5 text-sm font-bold text-navy transition hover:bg-cyan"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Free Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="Toggle menu"
          title="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy px-4 py-5 shadow-glow lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <Link to="/" className="mb-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <BrandLogo />
            </Link>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-semibold ${isActive ? "bg-white/10 text-white" : "text-slate-300"}`
                }
                end={link.path === "/"}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/book-consultation"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-green px-4 py-3 text-sm font-bold text-navy"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
