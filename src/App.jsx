import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { auditPages } from "./data/siteData.js";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import BookConsultation from "./pages/BookConsultation.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.jsx";
import Contact from "./pages/Contact.jsx";
import ConversionPage from "./pages/ConversionPage.jsx";
import Home from "./pages/Home.jsx";
import Industries from "./pages/Industries.jsx";
import NotFound from "./pages/NotFound.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import PortfolioDetail from "./pages/PortfolioDetail.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Services from "./pages/Services.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function PageFrame({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <PageFrame key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            {auditPages.map((page) => (
              <Route key={page.path} path={page.path} element={<ConversionPage page={page} />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </PageFrame>
      </AnimatePresence>
    </>
  );
}
