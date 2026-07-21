import { CalendarCheck, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/navigationData.js";
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

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile drawer is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] border-b border-white/10 bg-navy/95 shadow-md backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link to="/" onClick={handleHomeClick} className="nav-logo flex items-center gap-3">
          <BrandLogo compact />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => {
            const hasChildren = Array.isArray(link.children) && link.children.length > 0;

            if (!hasChildren) {
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={link.path === "/" ? handleHomeClick : undefined}
                  className={({ isActive }) =>
                    `nav-link text-sm font-semibold transition hover:text-cyan ${
                      isActive ? "text-cyan font-bold" : "text-white/90"
                    }`
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
                  aria-expanded={activeMenu === link.label}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white/90 transition hover:text-cyan focus:outline-none"
                  onClick={() => setActiveMenu((val) => (val === link.label ? null : link.label))}
                >
                  {link.label}
                  <span className="text-xs text-cyan">▾</span>
                </button>

                {/* Hover bridge */}
                <div className="absolute left-0 top-full h-4 w-full" />

                {activeMenu === link.label && (
                  <div className="absolute left-1/2 top-full z-[9999] mt-3 min-w-[18rem] -translate-x-1/2 rounded-2xl border border-white/10 bg-navy/95 p-3 shadow-2xl backdrop-blur-xl">
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
            Book Growth Session
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((val) => !val)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="relative z-[9999] border-t border-white/10 bg-navy px-4 py-5 shadow-glow lg:hidden max-h-[85vh] overflow-y-auto">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => {
              const hasChildren = Array.isArray(link.children) && link.children.length > 0;

              return (
                <div key={link.path} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg px-1 py-2 text-left text-sm font-semibold text-white"
                        onClick={() => setActiveMobileMenu((val) => (val === link.label ? null : link.label))}
                      >
                        <span>{link.label}</span>
                        <span className="text-xs text-cyan">{activeMobileMenu === link.label ? "▲" : "▼"}</span>
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
                      onClick={link.path === "/" ? handleHomeClick : () => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-1 py-2 text-sm font-semibold ${
                          isActive ? "bg-white/10 text-cyan" : "text-slate-300"
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
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-green px-4 py-3 text-sm font-bold text-navy"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Growth Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}