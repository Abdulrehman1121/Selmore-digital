import {
  Activity,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  ChartNoAxesCombined,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  HeartPulse,
  LineChart,
  Megaphone,
  Palette,
  Rocket,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import { navLinks, footerColumns } from "./navigationData.js";
import { growthSystemsOverview, growthSystemsData } from "./systemsData.js";
import { projectsData } from "./projectsData.js";
import { creativeOverview, creativeData } from "./creativeData.js";
import { journalOverview, journalData } from "./journalData.js";
import { libraryOverview, libraryData } from "./libraryData.js";
import { imageManifest } from "./imageManifest.js";
import { defaultSEO } from "./seoData.js";

// Export new modular datasets
export {
  navLinks,
  footerColumns,
  growthSystemsOverview,
  growthSystemsData,
  projectsData,
  creativeOverview,
  creativeData,
  journalOverview,
  journalData,
  libraryOverview,
  libraryData,
  imageManifest,
  defaultSEO
};

// Legacy visual branding assets
export const brandAssets = {
  logo: "/assets/selmore-digital-logo.png",
  mark: "/assets/Selmore Final Logo.png",
  markAlt: "Selmore Digital official logo",
  heroVisual: "/assets/direct/cta-dashboard.png",
  contactVisual: "/images/contact/contact-crm-direct.png"
};

export const contactDetails = {
  email: "info@selmoredigital.com",
  phone: "+92 300 0669541",
  whatsapp: "+92 300 0669541",
  location: "Serving Pakistan, UAE, UK, and USA markets"
};

// Core layout lists for existing components
export const tagline = "Digital Growth • AI Automation • Technology";

export const trustIndicators = ["Digital Growth", "AI Automation", "SEO", "Performance", "Automation"];

export const stats = [
  { value: "8+", label: "Growth Services" },
  { value: "5+", label: "Core Markets" },
  { value: "24/7", label: "Automation Mindset" },
  { value: "100%", label: "Growth-Focused Delivery" },
];

export const problems = [
  "Customers expect seamless digital experiences",
  "Search visibility changes every quarter",
  "Advertising costs rise while conversions stall",
  "AI is reshaping customer journeys and operations",
  "Disconnected systems slow the business down",
  "Growth demands a connected strategy",
];

export const growthSystems = [
  {
    title: "Website Design & Development",
    icon: Code2,
    description: "Create beautiful, high-performing websites engineered for conversions, accessibility, and long-term scalability.",
  },
  {
    title: "Search Engine Optimization",
    icon: Search,
    description: "Increase visibility through technical SEO, strategic content, and sustainable organic growth.",
  },
  {
    title: "Performance Marketing",
    icon: Target,
    description: "Generate measurable results with Google Ads, Meta Ads, LinkedIn campaigns, and landing page optimization.",
  },
  {
    title: "Social Media Marketing",
    icon: Megaphone,
    description: "Build meaningful relationships through strategic content, storytelling, and community engagement.",
  },
  {
    title: "AI Solutions & Automation",
    icon: Bot,
    description: "Automate repetitive work, improve efficiency, and unlock new business opportunities through AI.",
  },
  {
    title: "Mobile Apps & Booking Systems",
    icon: Smartphone,
    description: "Deliver seamless customer experiences through modern applications and intelligent booking platforms.",
  },
];

export const industries = [
  {
    title: "Healthcare",
    icon: HeartPulse,
    description: "Patient-first digital journeys and clinic visibility.",
    image: "/assets/direct/industry-healthcare.png",
    alt: "Healthcare digital growth visual"
  },
  {
    title: "Technology",
    icon: Cpu,
    description: "SaaS websites, campaigns, and AI tools built to scale.",
    image: "/assets/direct/portfolio-automation.png",
    alt: "Technology growth visual"
  },
  {
    title: "Construction",
    icon: Building2,
    description: "Project pipelines, lead gen, and local reputation.",
    image: "/assets/direct/portfolio-real-estate.png",
    alt: "Construction growth visual"
  },
  {
    title: "Hospitality",
    icon: Store,
    description: "Booking platforms and customer experience funnels.",
    image: "/assets/direct/about-team.jpg",
    alt: "Hospitality growth visual"
  },
  {
    title: "Retail",
    icon: ShoppingBag,
    description: "Multi-channel retail systems and buyer loops.",
    image: "/assets/direct/industry-ecommerce.png",
    alt: "Retail growth visual"
  },
  {
    title: "Corporate",
    icon: BriefcaseBusiness,
    description: "Enterprise sites, SEO clusters, and brand identity.",
    image: "/assets/direct/growth-systems-meeting.jpg",
    alt: "Corporate growth visual"
  },
  {
    title: "Manufacturing",
    icon: Cpu,
    description: "B2B visibility and international inquiry engines.",
    image: "/assets/direct/industry-manufacturing.png",
    alt: "Manufacturing digital growth visual"
  },
  {
    title: "Restaurants",
    icon: Store,
    description: "Local growth, menu systems, and customer engagement.",
    image: "/assets/direct/industry-restaurants.png",
    alt: "Restaurants digital growth visual"
  },
  {
    title: "Beauty",
    icon: Sparkles,
    description: "Premium cosmetic brand and booking journeys.",
    image: "/assets/direct/industry-wellness.png",
    alt: "Beauty digital growth visual"
  },
  {
    title: "Education",
    icon: GraduationCap,
    description: "Enrollment-focused systems and course pathways.",
    image: "/assets/direct/industry-education.png",
    alt: "Education digital growth visual"
  },
  {
    title: "Professional Services",
    icon: BriefcaseBusiness,
    description: "Authority-led growth and lead qualification.",
    image: "/assets/direct/industry-services.png",
    alt: "Professional Services digital growth visual"
  },
  {
    title: "Law Firms",
    icon: BriefcaseBusiness,
    description: "Secure lead intake and visibility campaigns.",
    image: "/assets/direct/contact-crm-direct.png",
    alt: "Law firm growth visual"
  },
  {
    title: "Real Estate",
    icon: Building2,
    description: "Lead systems built for property sales and agency growth.",
    image: "/assets/direct/industry-real-estate.png",
    alt: "Real Estate digital growth visual"
  },
  {
    title: "E-commerce",
    icon: ShoppingBag,
    description: "Revenue-first storefronts and checkout flows.",
    image: "/assets/direct/industry-ecommerce.png",
    alt: "Ecommerce digital growth visual"
  }
];

export const automationHighlights = [
  { title: "AI Chatbots", icon: Bot },
  { title: "AI Assistants", icon: BrainCircuit },
  { title: "WhatsApp Automation", icon: Workflow },
  { title: "CRM Automation", icon: Users },
  { title: "Lead Qualification", icon: Target },
  { title: "Customer Support Automation", icon: HeartPulse },
];

export const values = [
  { title: "Confidence", description: "Clear digital direction that helps teams move forward with certainty." },
  { title: "Clarity", description: "No scattered marketing or confusing systems. Just focused growth direction." },
  { title: "Progress", description: "Every project moves the business closer to measurable results." },
];

export const processSteps = [
  "Discovery",
  "Strategy",
  "Experience Design",
  "Build & Integrate",
  "Launch",
  "Measure & Optimize",
];

export const testimonials = [
  {
    name: "Ayesha Malik",
    role: "Founder, Wellness Brand",
    quote: "Selmore Digital brought structure to our digital growth. The new journey feels premium, fast, and much easier for customers to act on."
  },
  {
    name: "Hamza Rafiq",
    role: "Director, Property Advisory",
    quote: "The strategy-first approach changed the conversation. We stopped chasing random posts and started building a real lead system."
  },
  {
    name: "Mariam Khan",
    role: "Operations Lead, Education Group",
    quote: "Their automation thinking helped us respond faster and keep every inquiry moving. It immediately reduced pressure on our team."
  }
];

export const quickHighlights = [
  { title: "Growth-first strategy", icon: ChartNoAxesCombined },
  { title: "Premium design and development", icon: Code2 },
  { title: "AI-powered automation", icon: Cpu },
  { title: "Transparent reporting", icon: ChartNoAxesCombined },
  { title: "Long-term partnership", icon: Users },
  { title: "Business-focused execution", icon: BadgeCheck },
];

export const consultationBenefits = [
  { title: "Clarity", icon: CheckCircle2, description: "Understand which digital moves matter most right now." },
  { title: "Priorities", icon: Target, description: "Identify the highest-impact website, marketing, or automation opportunities." },
  { title: "Roadmap", icon: Rocket, description: "Leave with a practical next-step direction for growth." },
  { title: "Timeline", icon: CalendarCheck, description: "Discuss scope, timing, and the resources needed to move forward." },
];

export const blogCategories = [
  "All",
  "SEO",
  "Digital Marketing",
  "Web Development",
  "AI Automation",
  "Business Growth",
  "Case Studies",
  "Industry Insights",
];
