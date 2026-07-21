import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";

// Eagerly loaded components for fast entry performance
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

// Lazy-loaded sub-pages with lightweight transition fallback
const About = lazy(() => import("./pages/About.jsx"));
const GrowthSystems = lazy(() => import("./pages/GrowthSystems.jsx"));
const GrowthSystemDetail = lazy(() => import("./pages/GrowthSystemDetail.jsx"));
const Work = lazy(() => import("./pages/Work.jsx"));
const WorkDetail = lazy(() => import("./pages/WorkDetail.jsx"));
const Creative = lazy(() => import("./pages/Creative.jsx"));
const CreativeDetail = lazy(() => import("./pages/CreativeDetail.jsx"));
const GrowthJournal = lazy(() => import("./pages/GrowthJournal.jsx"));
const JournalDetail = lazy(() => import("./pages/JournalDetail.jsx"));
const GrowthLibrary = lazy(() => import("./pages/GrowthLibrary.jsx"));
const LibraryDetail = lazy(() => import("./pages/LibraryDetail.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const BookGrowthSession = lazy(() => import("./pages/BookGrowthSession.jsx"));

// Scroll Restoration Handler
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Lightweight transition loading skeleton
function PageFallback() {
  return (
    <div className="min-h-[70vh] bg-navy pt-32 px-4 flex items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan border-t-transparent" />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-navy text-slate-100 font-sans antialiased selection:bg-cyan selection:text-navy">
        <Navbar />

        <main className="flex-grow">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              {/* Home & About */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              {/* Growth Systems (9 routes) */}
              <Route path="/growth-systems" element={<GrowthSystems />} />
              <Route path="/growth-systems/:slug" element={<GrowthSystemDetail />} />

              {/* Work (17 routes) */}
              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<WorkDetail />} />

              {/* Creative (10 routes) */}
              <Route path="/creative" element={<Creative />} />
              <Route path="/creative/:slug" element={<CreativeDetail />} />

              {/* Growth Journal (5 routes) */}
              <Route path="/growth-journal" element={<GrowthJournal />} />
              <Route path="/growth-journal/:slug" element={<JournalDetail />} />

              {/* Growth Library (5 routes) */}
              <Route path="/growth-library" element={<GrowthLibrary />} />
              <Route path="/growth-library/:slug" element={<LibraryDetail />} />

              {/* Contact & Booking */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-growth-session" element={<BookGrowthSession />} />

              {/* 404 Catch-All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
}
