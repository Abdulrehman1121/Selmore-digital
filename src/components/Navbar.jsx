import { CalendarCheck, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/siteData.js";
import BrandLogo from "./BrandLogo.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
    setActiveMobileMenu(null);
  }, [location.pathname]);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] border-b border-white/10 bg-navy/95 shadow-md backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between overflow-visible px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3">
          <BrandLogo compact />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 lg:flex">
          {navLinks.map((link) => {
            const hasChildren =
              Array.isArray(link.children) && link.children.length > 0;

            if (!hasChildren) {
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={link.path === "/" ? handleHomeClick : undefined}
                  className={({ isActive }) =>
                    `nav-link text-sm font-semibold ${isActive ? "active" : ""}`
                  }
                  end={link.path === "/"}
                >
                  {link.label}
                </NavLink>
              );
            }

            return (
              <div
                key={link.path}
                className="group relative"
                onMouseEnter={() => setActiveMenu(link.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  type="button"
                  className="text-sm font-semibold text-white/90 transition hover:text-cyan"
                  onClick={() =>
                    setActiveMenu((value) =>
                      value === link.label ? null : link.label
                    )
                  }
                >
                  {link.label}
                </button>

                {/* Hover bridge to stop dropdown flicker */}
                <div className="absolute left-0 top-full h-4 w-full" />

                {activeMenu === link.label && (
                  <div className="absolute left-1/2 top-full z-[9999] mt-4 min-w-[18rem] -translate-x-1/2 rounded-2xl border border-white/10 bg-navy/95 p-3 shadow-2xl backdrop-blur-xl">
                    <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
                      {link.label}
                    </div>

                    <div className="space-y-1">
                      {link.children.map((child, idx) => (
                        <Link
                          key={`${link.label}-${idx}`}
                          to={child.path}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                          onClick={() => setActiveMenu(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/book-growth-session"
            className="inline-flex items-center gap-2 rounded-lg bg-green px-4 py-2.5 text-sm font-bold text-navy transition hover:bg-cyan"
          >
            <CalendarCheck className="h-4 w-4" />
            Book a Free Strategy Call
          </Link>
        </div>

        {/* Mobile Toggle */}
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

      {/* Mobile Navigation */}
      {open && (
        <div className="relative z-[9999] border-t border-white/10 bg-navy px-4 py-5 shadow-glow lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="mb-3 rounded-lg border border-white/10 bg-white/[0.04] p-3"
            >
              <BrandLogo />
            </Link>

            {navLinks.map((link) => {
              const hasChildren =
                Array.isArray(link.children) && link.children.length > 0;

              return (
                <div
                  key={link.path}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2"
                >
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        className="block w-full rounded-lg px-1 py-2 text-left text-sm font-semibold text-white"
                        onClick={() =>
                          setActiveMobileMenu((value) =>
                            value === link.label ? null : link.label
                          )
                        }
                      >
                        {link.label}
                      </button>

                      {activeMobileMenu === link.label && (
                        <div className="mt-2 space-y-1 border-t border-white/10 pt-2">
                          {link.children.map((child, idx) => (
                            <Link
                              key={`${link.label}-mobile-${idx}`}
                              to={child.path}
                              className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={link.path === "/" ? handleHomeClick : undefined}
                      className={({ isActive }) =>
                        `block rounded-lg px-1 py-2 text-sm font-semibold ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-slate-300"
                        }`
                      }
                      end={link.path === "/"}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              );
            })}

            <Link
              to="/book-growth-session"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-green px-4 py-3 text-sm font-bold text-navy"
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}