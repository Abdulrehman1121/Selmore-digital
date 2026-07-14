import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Preloader from "./components/Preloader.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { auditPages } from "./data/siteData.js";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import BookConsultation from "./pages/BookConsultation.jsx";
import Contact from "./pages/Contact.jsx";
import ConversionPage from "./pages/ConversionPage.jsx";
import DigitalGrowthStrategy from "./pages/DigitalGrowthStrategy.jsx";
import Home from "./pages/Home.jsx";
import Industries from "./pages/Industries.jsx";
import NotFound from "./pages/NotFound.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import PortfolioDetail from "./pages/PortfolioDetail.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";

function GrowthSystemRoute() {
  const { slug } = useParams();
  const slugMap = {
    "website-design-development": "website-development",
    "ai-solutions-automation": "ai-automation",
    "search-engine-optimization": "seo-services",
    "performance-marketing": "performance-marketing",
    "social-media-marketing": "social-media-marketing",
    "brand-identity-digital-experience": "branding-design",
    "selmore-creative": "branding-design",
    "online-booking-systems": "booking-systems",
    "digital-growth-strategy": "website-development",
  };

  const targetSlug = slugMap[slug] ?? "website-development";
  return <ServiceDetail slug={targetSlug} />;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
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
      document.body.classList.add("loading");
      document.body.classList.remove("loaded");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");
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
            
            <Route path="/growth-systems" element={<DigitalGrowthStrategy />} />
            <Route path="/growth-systems/:slug" element={<GrowthSystemRoute />} />
            <Route path="/digital-growth-strategy" element={<DigitalGrowthStrategy />} />
            <Route path="/website-design-development" element={<ServiceDetail slug="website-development" />} />
            <Route path="/ai-solutions-automation" element={<ServiceDetail slug="ai-automation" />} />
            <Route path="/search-engine-optimization" element={<ServiceDetail slug="seo-services" />} />
            <Route path="/performance-marketing" element={<ServiceDetail slug="performance-marketing" />} />
            <Route path="/social-media-marketing" element={<ServiceDetail slug="social-media-marketing" />} />
            <Route path="/brand-identity-digital-experience" element={<ServiceDetail slug="branding-design" />} />
            <Route path="/selmore-creative" element={<ServiceDetail slug="branding-design" />} />
            <Route path="/online-booking-systems" element={<ServiceDetail slug="booking-systems" />} />

            <Route path="/selected-work" element={<Portfolio />} />
            <Route path="/selected-work/growth-stories" element={<Portfolio />} />
            <Route path="/selected-work/projects" element={<Portfolio />} />
            <Route path="/selected-work/case-studies" element={<Portfolio />} />
            <Route path="/growth-story/:slug" element={<PortfolioDetail />} />
            
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<Industries />} />
            
            <Route path="/knowledge" element={<Blog />} />
            <Route path="/knowledge/insights" element={<Blog />} />
            <Route path="/knowledge/resources" element={<Blog />} />
            <Route path="/knowledge/growth-journal" element={<Blog />} />
            <Route path="/insights" element={<Blog />} />
            <Route path="/insights/:slug" element={<BlogDetail />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-growth-session" element={<BookConsultation />} />
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
