import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Selmore Digital" path="/404" />
      <section className="flex min-h-screen items-center bg-navy px-4 py-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">404</p>
          <h1 className="mt-5 font-display text-5xl font-extrabold tracking-normal md:text-7xl">This page is not available.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">Return to the Selmore Digital homepage or book a consultation.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="rounded-lg bg-green px-5 py-3 text-sm font-bold text-navy transition hover:bg-cyan">
              Go Home
            </Link>
            <Link to="/book-consultation" className="rounded-lg border border-white/14 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan hover:text-cyan">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
