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

export const tagline = "Digital Growth • AI Automation • Technology";

export const brandAssets = {
  logo: "/assets/selmore-digital-logo.png",
  mark: "/assets/Selmore Final Logo.png",
  markAlt: "Selmore Digital official logo",
  heroVisual: "/assets/direct/growth-systems-meeting.jpg",
  contactVisual: "/assets/direct/contact-crm-direct.png",
};

export const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "Company Overview", path: "/about" },
      { label: "Why Selmore Digital", path: "/about" },
      { label: "Process / Approach", path: "/about" },
    ],
  },
  {
    label: "Growth Systems",
    path: "/growth-systems",
    children: [
      { label: "Website Design & Development", path: "/growth-systems/website-design-development" },
      { label: "AI Solutions & Automation", path: "/growth-systems/ai-solutions-automation" },
      { label: "Search Engine Optimization", path: "/growth-systems/search-engine-optimization" },
      { label: "Performance Marketing", path: "/growth-systems/performance-marketing" },
      { label: "Social Media Marketing", path: "/growth-systems/social-media-marketing" },
      { label: "Brand Identity & Digital Experience", path: "/growth-systems/brand-identity-digital-experience" },
      { label: "Selmore Creative", path: "/growth-systems/selmore-creative" },
      { label: "Online Booking Systems", path: "/growth-systems/online-booking-systems" },
      { label: "Digital Growth Strategy", path: "/growth-systems/digital-growth-strategy" },
    ],
  },
  {
    label: "Selected Work",
    path: "/selected-work",
    children: [
      { label: "Growth Stories", path: "/selected-work/growth-stories" },
      { label: "Projects", path: "/selected-work/projects" },
      { label: "Case Studies", path: "/selected-work/case-studies" },
    ],
  },
  {
    label: "Industries",
    path: "/industries",
    children: [
      { label: "Healthcare", path: "/industries/healthcare" },
      { label: "Hospitality", path: "/industries/hospitality" },
      { label: "Construction", path: "/industries/construction" },
      { label: "Technology", path: "/industries/technology" },
      { label: "Professional Services", path: "/industries/professional-services" },
      { label: "Retail", path: "/industries/retail" },
      { label: "Beauty", path: "/industries/beauty" },
      { label: "Education", path: "/industries/education" },
      { label: "Manufacturing", path: "/industries/manufacturing" },
    ],
  },
  {
    label: "Knowledge",
    path: "/knowledge",
    children: [
      { label: "Insights", path: "/knowledge/insights" },
      { label: "Resources", path: "/knowledge/resources" },
      { label: "Growth Journal", path: "/knowledge/growth-journal" },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    children: [
      { label: "Contact Page", path: "/contact" },
      { label: "Book Your Growth Session", path: "/book-growth-session" },
    ],
  },
];

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

export const services = [
  {
    title: "Website Design & Development",
    slug: "website-development",
    path: "/website-design-development",
    icon: Code2,
    description: "Digital experiences built for conversion and growth.",
    benefits: ["Conversion UX", "Fast builds", "Lead capture"],
    image: "/assets/direct/website-growth-laptop.png",
    imageAlt: "Modern website dashboard and conversion interface",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    path: "/mobile-app-development",
    icon: Smartphone,
    description: "Mobile products for customers and teams.",
    benefits: ["iOS and Android", "App dashboards", "Customer flows"],
    image: "/assets/direct/mobile-app-screens-direct.png",
    imageAlt: "Mobile app screen mockups and dashboard interface visual",
  },
  {
    title: "Branding & UI/UX",
    slug: "branding-design",
    path: "/branding-ui-ux",
    icon: Palette,
    description: "Premium identities built for trust.",
    benefits: ["Logo systems", "Brand boards", "UI guidelines"],
    image: "/assets/direct/branding-board-direct.png",
    imageAlt: "Premium brand identity board with logo, color palette, and mockups",
  },
  {
    title: "Booking Systems",
    slug: "booking-systems",
    path: "/booking-systems",
    icon: CalendarCheck,
    description: "Intelligent scheduling, calendars, and CRM workflow integrations.",
    benefits: ["Calendar Syncing", "Secure Payment Gates", "Customer reminders"],
    image: "/assets/direct/contact-crm-direct.png",
    imageAlt: "Interactive online calendar booking dashboard visual",
  },
  {
    title: "AI Solutions",
    slug: "ai-automation",
    path: "/ai-solutions",
    icon: Bot,
    description: "Intelligent workflows that scale response.",
    benefits: ["AI chatbots", "Agents", "CRM workflows"],
    image: "/assets/direct/ai-crm-workspace.png",
    imageAlt: "AI chatbot and workflow automation dashboard visual",
    featured: true,
  },
  {
    title: "SEO",
    slug: "seo-services",
    path: "/search-engine-optimization",
    icon: Search,
    description: "Visibility for high-intent search.",
    benefits: ["Local SEO", "Technical fixes", "Keyword growth"],
    image: "/assets/direct/analytics-dashboard-closeup.png",
    imageAlt: "Search ranking and SEO growth dashboard visual",
  },
  {
    title: "Performance Marketing",
    slug: "performance-marketing",
    path: "/performance-marketing",
    icon: Target,
    description: "Paid growth with measurable intent.",
    benefits: ["Ad dashboards", "Funnels", "ROAS tracking"],
    image: "/assets/direct/analytics-dashboard-closeup.png",
    imageAlt: "Paid ads performance and conversion analytics visual",
  },
  {
    title: "Social Media",
    slug: "social-media-marketing",
    path: "/social-media-marketing",
    icon: Megaphone,
    description: "Content systems for trust and reach.",
    benefits: ["Content calendar", "Reels creative", "Engagement data"],
    image: "/assets/direct/social-content-planner.png",
    imageAlt: "Social media calendar and engagement analytics visual",
  },
];

export const serviceDetails = {
  "website-development": {
    title: "Website Development",
    eyebrow: "Conversion websites",
    overview:
      "Fast, premium websites designed to convert.",
    description:
      "Premium websites that combine strategy, UX, speed, persuasive copy, and lead capture systems.",
    hero:
      "Modern websites, clear journeys, stronger leads.",
    image: "/assets/direct/website-growth-laptop.png",
    imageAlt: "Modern website dashboard and responsive landing page visual",
    benefits: [
      "Stronger first impression and brand trust",
      "Clear user journeys built around conversion",
      "Fast, responsive pages for search and mobile users",
      "Integrated forms, tracking, and analytics",
    ],
    sections: [
      { title: "Business Websites", points: ["Corporate sites", "Service websites", "Lead generation pages"] },
      { title: "Landing Pages", points: ["Campaign pages", "Audit funnels", "Consultation booking flows"] },
      { title: "Features", points: ["SEO-ready structure", "CMS-ready content model", "Analytics and conversion events"] },
    ],
    process: ["Discovery", "Messaging", "UX Design", "Development", "Launch", "Optimization"],
    faqs: [
      { question: "Can you redesign an existing website?", answer: "Yes. We audit the current site, preserve what works, and rebuild the experience around better clarity, speed, and lead generation." },
      { question: "Do websites include mobile optimization?", answer: "Every website is designed mobile-first with responsive layouts, accessible forms, and fast-loading pages." },
      { question: "Can you connect the website to CRM tools?", answer: "Yes. Forms can connect to CRMs, email tools, WhatsApp workflows, or custom automation endpoints." },
    ],
  },
  "ecommerce-development": {
    title: "Ecommerce Development",
    eyebrow: "Online revenue systems",
    overview:
      "Stores built for discovery, trust, and sales.",
    description:
      "Shopify, WooCommerce, and custom ecommerce builds for ambitious brands and product-led businesses.",
    hero:
      "Product discovery, checkout clarity, revenue systems.",
    image: "/assets/direct/hero-ecommerce-dashboard.png",
    imageAlt: "Ecommerce storefront and checkout flow visual",
    benefits: [
      "Cleaner product discovery and category structure",
      "Checkout experiences built to reduce friction",
      "Analytics-ready revenue and campaign tracking",
      "Scalable setup for inventory, shipping, and campaigns",
    ],
    sections: [
      { title: "Shopify", points: ["Theme customization", "Store setup", "Conversion improvements"] },
      { title: "WooCommerce", points: ["WordPress commerce", "Payment setup", "Product catalog systems"] },
      { title: "Custom Ecommerce", points: ["Advanced product flows", "Integrations", "Role-based management"] },
    ],
    process: ["Store Strategy", "Catalog Planning", "Design", "Development", "Payment Setup", "Launch"],
    faqs: [
      { question: "Do you support Shopify and WooCommerce?", answer: "Yes. We recommend the platform based on product volume, operations, budget, and growth roadmap." },
      { question: "Can you optimize an existing store?", answer: "Yes. We can improve navigation, product pages, checkout friction, tracking, and promotional flows." },
      { question: "Do you set up payments and shipping?", answer: "We configure common payment, shipping, tax, and notification workflows according to the chosen platform." },
    ],
  },
  "seo-services": {
    title: "SEO Services",
    eyebrow: "Search visibility",
    overview:
      "Search visibility for active buyers.",
    description:
      "Technical, local, on-page, and content SEO shaped around commercial intent and long-term authority.",
    hero:
      "Search visibility for buyers already looking.",
    image: "/assets/direct/analytics-dashboard-closeup.png",
    imageAlt: "SEO ranking and keyword analytics dashboard visual",
    benefits: [
      "Improved discovery for high-intent searches",
      "Technical fixes that support crawlability and speed",
      "Content strategy aligned with buying journeys",
      "Transparent reporting on visibility and opportunities",
    ],
    sections: [
      { title: "Local SEO", points: ["Google Business Profile", "Local landing pages", "Citation consistency"] },
      { title: "Technical SEO", points: ["Site structure", "Core Web Vitals", "Indexing improvements"] },
      { title: "Content SEO", points: ["Keyword strategy", "Topic clusters", "On-page optimization"] },
    ],
    process: ["Audit", "Keyword Mapping", "Technical Fixes", "Content Plan", "Authority Building", "Reporting"],
    faqs: [
      { question: "How long does SEO take?", answer: "Most SEO programs need consistent work over several months. Early technical and local wins can appear sooner depending on the site." },
      { question: "Do you provide reporting?", answer: "Yes. Reports focus on rankings, traffic quality, content progress, technical health, and lead opportunities." },
      { question: "Can you help local businesses?", answer: "Yes. Local SEO is a major focus for service businesses, clinics, restaurants, education providers, and professional firms." },
    ],
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    eyebrow: "Audience growth",
    overview:
      "Content systems for reach and trust.",
    description:
      "Platform-specific planning, content calendars, creative direction, and reporting for modern brands.",
    hero:
      "Content strategy, engagement, and brand presence.",
    image: "/assets/direct/social-content-planner.png",
    imageAlt: "Social media posts and analytics dashboard visual",
    benefits: [
      "Clearer brand presence across platforms",
      "Content designed for engagement and credibility",
      "Creative systems for reels, carousels, and campaigns",
      "Performance reports that guide the next cycle",
    ],
    sections: [
      { title: "Platforms", points: ["Facebook", "Instagram", "LinkedIn", "TikTok", "YouTube"] },
      { title: "Creative", points: ["Content strategy", "Reels", "Carousels", "Campaign creatives"] },
      { title: "Reporting", points: ["Engagement trends", "Audience growth", "Content performance"] },
    ],
    process: ["Brand Review", "Platform Strategy", "Content Calendar", "Creative Production", "Publishing", "Reporting"],
    faqs: [
      { question: "Do you create the content?", answer: "Yes. We plan and create platform-ready content, and can coordinate with your team for raw material when needed." },
      { question: "Which platforms should we use?", answer: "We choose platforms based on where your buyers spend time and what type of content supports your goals." },
      { question: "Can social media support lead generation?", answer: "Yes. Organic content builds trust, while paid campaigns and conversion pages can turn attention into leads." },
    ],
  },
  "performance-marketing": {
    title: "Performance Marketing",
    eyebrow: "Paid growth",
    overview:
      "Paid campaigns built for measurable growth.",
    description:
      "Google Ads, Meta Ads, YouTube Ads, retargeting, and campaign reporting for growth-focused teams.",
    hero:
      "Campaigns built around leads, revenue, and clarity.",
    image: "/assets/direct/analytics-dashboard-closeup.png",
    imageAlt: "Ad campaign performance dashboard visual",
    benefits: [
      "Campaigns mapped to business objectives",
      "Better lead quality through targeting and landing page alignment",
      "Remarketing systems that recover warm demand",
      "Reporting that shows spend, outcomes, and next actions",
    ],
    sections: [
      { title: "Channels", points: ["Google Ads", "Meta Ads", "YouTube Ads"] },
      { title: "Funnels", points: ["Lead generation", "Remarketing", "Request proposal campaigns"] },
      { title: "Measurement", points: ["Conversion tracking", "Campaign reporting", "Budget guidance"] },
    ],
    process: ["Offer Review", "Tracking Setup", "Campaign Build", "Launch", "Optimization", "Reporting"],
    faqs: [
      { question: "Can you manage Google and Meta Ads?", answer: "Yes. We build, launch, optimize, and report on Google, Meta, and YouTube campaigns." },
      { question: "Do ads need landing pages?", answer: "High-converting landing pages are strongly recommended because they improve clarity, relevance, and lead quality." },
      { question: "How is performance measured?", answer: "We track leads, cost per lead, conversion rate, traffic quality, and campaign-specific business outcomes." },
    ],
  },
  "branding-design": {
    title: "Branding & Creative",
    eyebrow: "Premium identity",
    overview:
      "Identity systems that build confidence.",
    description:
      "Logo design, brand identity, packaging, signage, stationery, and marketing collateral for ambitious businesses.",
    hero:
      "Identity systems that raise trust and recognition.",
    image: "/assets/direct/branding-board-direct.png",
    imageAlt: "Brand identity, logo system, and color palette visual",
    benefits: [
      "Sharper brand positioning and visual consistency",
      "Identity assets that work across digital and print",
      "Creative systems for marketing and sales teams",
      "Improved perceived value and customer confidence",
    ],
    sections: [
      { title: "Identity", points: ["Logo design", "Brand identity", "Color and type systems"] },
      { title: "Print", points: ["Stationery", "Packaging", "Signage"] },
      { title: "Campaign Creative", points: ["Marketing collateral", "Social templates", "Ad creatives"] },
    ],
    process: ["Brand Discovery", "Direction", "Identity Design", "System Build", "Asset Delivery", "Rollout"],
    faqs: [
      { question: "Can you refresh an existing brand?", answer: "Yes. We can modernize the identity while preserving recognition where it matters." },
      { question: "Do you provide brand guidelines?", answer: "Yes. Brand identity projects include practical usage guidance for colors, typography, logos, and layouts." },
      { question: "Can you design marketing collateral?", answer: "Yes. We create digital and print assets including stationery, packaging, signage, and campaign creatives." },
    ],
  },
  "ai-automation": {
    title: "AI Automation",
    eyebrow: "High-ticket automation",
    overview:
      "Smart workflows that reduce manual work.",
    description:
      "AI chatbots, AI agents, WhatsApp automation, CRM automation, workflow automation, and business process automation.",
    hero:
      "Automated workflows for faster response and scale.",
    image: "/assets/direct/ai-crm-workspace.png",
    imageAlt: "AI agent and automation workflow interface visual",
    benefits: [
      "Faster customer response and lead qualification",
      "Reduced repetitive manual work",
      "Connected workflows across CRM, WhatsApp, email, and internal tools",
      "Automation roadmap built around business value",
    ],
    sections: [
      { title: "AI Interfaces", points: ["AI chatbots", "AI agents", "Knowledge base assistants"] },
      { title: "Messaging Automation", points: ["WhatsApp automation", "Lead routing", "Follow-up sequences"] },
      { title: "Operations", points: ["CRM automation", "Workflow automation", "Business process automation"] },
    ],
    process: ["Workflow Audit", "Automation Map", "Prototype", "Integration", "Testing", "Optimization"],
    faqs: [
      { question: "Is AI automation only for large companies?", answer: "No. The best automation starts with high-friction workflows, which often exist in growing small and mid-sized businesses." },
      { question: "Can automation connect with WhatsApp?", answer: "Yes. We can design WhatsApp workflows for inquiries, lead qualification, reminders, and support handoffs." },
      { question: "How do you choose what to automate?", answer: "We map repetitive tasks, response delays, data handoffs, and revenue bottlenecks, then prioritize the workflows with the strongest business impact." },
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    eyebrow: "Product experiences",
    overview:
      "Mobile experiences for customers and teams.",
    description:
      "Android, iOS, cross-platform, business, and customer app development with scalable product thinking.",
    hero:
      "Mobile interfaces for better customer and team flows.",
    image: "/assets/direct/mobile-app-screens-direct.png",
    imageAlt: "Mobile app interface and dashboard visual",
    benefits: [
      "Customer and business apps shaped around real use cases",
      "Cross-platform options for faster launch",
      "API-ready architecture for future growth",
      "User journeys designed for retention and clarity",
    ],
    sections: [
      { title: "Platforms", points: ["Android apps", "iOS apps", "Cross-platform apps"] },
      { title: "Use Cases", points: ["Business apps", "Customer apps", "Booking and service apps"] },
      { title: "Product Systems", points: ["Authentication", "Dashboards", "Notifications", "API integrations"] },
    ],
    process: ["Product Discovery", "UX Flows", "Interface Design", "Development", "Testing", "Launch"],
    faqs: [
      { question: "Do you build both Android and iOS apps?", answer: "Yes. We can build native or cross-platform apps depending on the product needs, timeline, and budget." },
      { question: "Can an app connect to an existing website or CRM?", answer: "Yes. Apps can connect to existing APIs, CRMs, booking systems, ecommerce platforms, and custom backend services." },
      { question: "Can you help define the app scope?", answer: "Yes. We help shape the first version around the highest-value workflows so the product launches with focus." },
    ],
  },
  "booking-systems": {
    title: "Booking Systems",
    eyebrow: "Intelligent scheduling",
    overview:
      "Automated appointment scheduling and customer flows.",
    description:
      "Seamless booking setups designed to handle payments, calendars, reminders, and database integration.",
    hero:
      "Customer-facing schedulers, CRM updates, automated loops.",
    image: "/assets/direct/contact-crm-direct.png",
    imageAlt: "Interactive booking system and CRM visual",
    benefits: [
      "Frictionless customer booking pathways",
      "Real-time calendar synchronization",
      "Automated follow-up emails and SMS reminders",
      "Secure pre-payment collection endpoints",
    ],
    sections: [
      { title: "Calendars", points: ["Google Calendar", "Outlook Calendar", "Team schedules"] },
      { title: "Notifications", points: ["SMS reminders", "Email flows", "Intake forms"] },
      { title: "Integrations", points: ["Stripe payments", "CRM updating", "Custom webhooks"] },
    ],
    process: ["Requirements Map", "Portal Setup", "Form Creation", "CRM Syncing", "Reminders Test", "Launch"],
    faqs: [
      { question: "Can you connect bookings to our CRM?", answer: "Yes. Every scheduled meeting can update customer records inside HubSpot, Salesforce, or custom DBs." },
      { question: "Do booking systems prevent double-booking?", answer: "Yes. Systems read real-time availability across team accounts to ensure only free slots are open." },
      { question: "Can we require payment to book?", answer: "Yes. Schedulers can integrate Stripe or PayPal to collect deposits or full fees at the moment of booking." },
    ],
  },
};

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
    image: "/assets/direct/hero-ecommerce-dashboard.png",
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
    quote:
      "Selmore Digital brought structure to our digital growth. The new journey feels premium, fast, and much easier for customers to act on.",
  },
  {
    name: "Hamza Rafiq",
    role: "Director, Property Advisory",
    quote:
      "The strategy-first approach changed the conversation. We stopped chasing random posts and started building a real lead system.",
  },
  {
    name: "Mariam Khan",
    role: "Operations Lead, Education Group",
    quote:
      "Their automation thinking helped us respond faster and keep every inquiry moving. It immediately reduced pressure on our team.",
  },
];

export const portfolioItems = [
  {
    title: "MedNova Clinic Growth Platform",
    slug: "mednova-clinic-growth-platform",
    category: "Websites",
    client_name: "MedNova",
    description: "Healthcare website, appointment capture, and local SEO.",
    image: "/assets/direct/portfolio-healthcare.png",
    imageAlt: "Healthcare website dashboard visual",
    visualLabel: "Healthcare growth dashboard",
    project_url: "#",
  },
  {
    title: "UrbanNest Real Estate Funnel",
    slug: "urbannest-real-estate-funnel",
    category: "Marketing",
    client_name: "UrbanNest",
    description: "Landing pages, paid campaigns, and inquiry routing.",
    image: "/assets/direct/portfolio-real-estate.png",
    imageAlt: "Real estate campaign analytics visual",
    visualLabel: "Real estate campaign system",
    project_url: "#",
  },
  {
    title: "LumaSkin Identity System",
    slug: "lumaskin-identity-system",
    category: "Branding",
    client_name: "LumaSkin",
    description: "Premium identity, packaging direction, and launch creative.",
    image: "/assets/direct/portfolio-branding.png",
    imageAlt: "Beauty brand identity board visual",
    visualLabel: "Beauty brand identity",
    project_url: "#",
  },
  {
    title: "TradeHub Ecommerce Store",
    slug: "tradehub-ecommerce-store",
    category: "Ecommerce",
    client_name: "TradeHub",
    description: "Store architecture, checkout, and campaign tracking.",
    image: "/assets/direct/hero-ecommerce-dashboard.png",
    imageAlt: "Ecommerce revenue interface visual",
    visualLabel: "Ecommerce revenue interface",
    project_url: "#",
  },
  {
    title: "WhatsApp Lead Concierge",
    slug: "whatsapp-lead-concierge",
    category: "AI Automation",
    client_name: "Service Business",
    description: "AI-assisted WhatsApp qualification and follow-up.",
    image: "/assets/direct/portfolio-automation.png",
    imageAlt: "AI automation workflow visual",
    visualLabel: "Automation workflow",
    project_url: "#",
  },
  {
    title: "Customer Booking App",
    slug: "customer-booking-app",
    category: "Mobile Apps",
    client_name: "Wellness Studio",
    description: "Cross-platform booking and retention app concept.",
    image: "/assets/direct/mobile-app-screens-direct.png",
    imageAlt: "Mobile booking app interface visual",
    visualLabel: "Mobile booking experience",
    project_url: "#",
  },
];

export const caseStudies = [
  {
    title: "Clinic Visibility to Consultation Engine",
    slug: "clinic-visibility-consultation-engine",
    industry: "Healthcare",
    service: "Website Development + SEO",
    challenge: "The clinic had scattered service pages, low search visibility, and weak appointment conversion.",
    strategy: "Rebuild the website around service intent, local SEO, trust signals, and clear consultation pathways.",
    execution: "Created structured service pages, improved speed, added appointment CTAs, and mapped local keywords.",
    results: "A stronger consultation journey, better local discovery, and clearer attribution for inquiries.",
    testimonial: "The website finally explains our services with confidence and makes it easy for patients to contact us.",
    image: "/assets/direct/case-healthcare.jpg",
    imageAlt: "Healthcare case study growth dashboard visual",
  },
  {
    title: "Real Estate Lead System",
    slug: "real-estate-lead-system",
    industry: "Real Estate",
    service: "Performance Marketing",
    challenge: "Campaigns produced inconsistent inquiries with little insight into lead quality.",
    strategy: "Pair targeted paid campaigns with offer-specific landing pages and lead qualification workflows.",
    execution: "Built landing pages, tracking, retargeting segments, and automated lead routing for the sales team.",
    results: "More structured lead flow, faster follow-up, and clearer visibility into campaign performance.",
    testimonial: "The campaign system helped our sales team focus on better inquiries instead of chasing everything.",
    image: "/assets/direct/case-real-estate.jpg",
    imageAlt: "Real estate lead generation dashboard visual",
  },
  {
    title: "AI Follow-Up Workflow",
    slug: "ai-follow-up-workflow",
    industry: "Professional Services",
    service: "AI Automation",
    challenge: "The team was losing warm inquiries because follow-up depended on manual reminders.",
    strategy: "Create an AI-assisted workflow for instant response, qualification, and CRM handoff.",
    execution: "Mapped inquiry stages, configured automated responses, and added internal notifications.",
    results: "Reduced response delays and created a more consistent customer experience.",
    testimonial: "The automation feels like an extra coordinator working quietly in the background.",
    image: "/assets/direct/case-automation.jpg",
    imageAlt: "AI follow-up automation workflow visual",
  },
];

export const blogPosts = [
  {
    title: "How AI Automation Changes Lead Response for Growing Businesses",
    slug: "ai-automation-lead-response",
    category: "AI Automation",
    excerpt:
      "Fast response is becoming a competitive advantage. AI workflows help teams qualify, route, and follow up before leads go cold.",
    content:
      "AI automation is most valuable when it removes friction from the customer journey. For lead response, that means capturing context, qualifying intent, sending relevant follow-ups, and notifying the right person without waiting for manual handoffs.",
    created_at: "2026-01-10",
    image: "/assets/direct/blog-automation.jpg",
    imageAlt: "AI automation lead response interface visual",
  },
  {
    title: "What Makes a Service Website Convert Better",
    slug: "service-website-conversions",
    category: "Web Development",
    excerpt:
      "Conversion improves when positioning, page structure, trust signals, and calls to action work together.",
    content:
      "A high-performing service website clarifies who the business helps, what outcomes it creates, and why buyers should trust the company. Strong page structure, fast performance, visible proof, and focused forms all support conversion.",
    created_at: "2026-01-18",
    image: "/assets/direct/blog-web-development.jpg",
    imageAlt: "Website conversion dashboard visual",
  },
  {
    title: "SEO Strategy for Businesses Expanding Into New Markets",
    slug: "seo-expanding-new-markets",
    category: "SEO",
    excerpt:
      "Market expansion needs localized search intent, service pages, and credibility signals that match buyer expectations.",
    content:
      "When businesses enter new markets, SEO must reflect local language, service demand, search behavior, and proof. The strongest strategy combines technical foundations with market-specific landing pages and content clusters.",
    created_at: "2026-02-04",
    image: "/assets/direct/blog-seo.jpg",
    imageAlt: "SEO market expansion analytics visual",
  },
];

export const auditPages = [
  {
    path: "/free-website-audit",
    auditType: "Website Audit",
    title: "Free Website Growth Audit",
    headline: "Find the conversion gaps holding your website back.",
    description:
      "Get a strategic review of your website experience, speed, messaging, and lead capture opportunities.",
    benefits: ["Conversion review", "UX and clarity notes", "Lead capture opportunities", "Priority action plan"],
  },
  {
    path: "/free-seo-audit",
    auditType: "SEO Audit",
    title: "Free SEO Visibility Audit",
    headline: "Understand why customers are not finding you on search.",
    description:
      "We review visibility, technical health, local SEO signals, and content opportunities for better discovery.",
    benefits: ["Technical SEO snapshot", "Keyword opportunity review", "Local visibility checks", "Content direction"],
  },
  {
    path: "/free-marketing-audit",
    auditType: "Marketing Audit",
    title: "Free Marketing Performance Audit",
    headline: "Turn scattered marketing activity into a clearer growth system.",
    description:
      "Review your campaigns, content, funnels, and reporting to identify stronger next moves.",
    benefits: ["Campaign clarity", "Funnel review", "Creative direction", "Reporting recommendations"],
  },
  {
    path: "/free-ai-consultation",
    auditType: "AI Consultation",
    title: "Free AI Automation Consultation",
    headline: "Discover the workflows your business can automate first.",
    description:
      "We identify high-friction manual tasks and map practical AI automation opportunities.",
    benefits: ["Workflow review", "Automation opportunity map", "AI chatbot guidance", "CRM and WhatsApp ideas"],
  },
  {
    path: "/request-proposal",
    auditType: "Proposal Request",
    title: "Request a Growth Proposal",
    headline: "Get a strategic proposal for your next digital growth move.",
    description:
      "Share your business goals and we will shape a practical roadmap across technology, marketing, and automation.",
    benefits: ["Goal review", "Recommended services", "Project scope guidance", "Next-step roadmap"],
  },
];

export const contactDetails = {
  email: "info@selmoredigital.com",
  phone: "+92 3000669541",
  whatsapp: "+92 3000669541",
  location: "Serving United States, Canada, and Pakistan.",
};

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
