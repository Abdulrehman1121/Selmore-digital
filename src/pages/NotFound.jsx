import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Selmore Digital"
        description="The page you are looking for does not exist or has been moved."
        path="/404"
      />

      <section className="bg-navy px-4 py-32 text-center text-white min-h-[75vh] flex items-center justify-center">
        <div className="mx-auto max-w-2xl">
          <p className="font-display text-8xl font-black text-cyan opacity-80">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold md:text-4xl text-white">
            Page Not Found
          </h1>
          <p className="mt-4 text-base text-slate-300">
            The page or resource you requested could not be found. It may have been moved or the URL might be invalid.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-bold text-navy hover:bg-green transition"
            >
              <Home className="h-4 w-4" />
              Return Home
            </Link>
            <Link
              to="/growth-systems"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
            >
              <Search className="h-4 w-4" />
              Browse Growth Systems
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
