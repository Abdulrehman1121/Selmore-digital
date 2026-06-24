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

export const tagline = "Building Brands. Driving Growth. Automating Success.";

export const brandAssets = {
  logo: "/assets/selmore-digital-logo.png",
  markAlt: "Selmore Digital official logo",
  heroVisual: "/assets/direct/hero-ecommerce-dashboard.png",
  contactVisual: "/assets/direct/contact-crm-direct.png",
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const trustIndicators = ["Strategy", "Design", "Growth", "Automation", "Results"];

export const stats = [
  { value: "8+", label: "Growth services" },
  { value: "5", label: "Core markets planned" },
  { value: "24/7", label: "Automation mindset" },
  { value: "100%", label: "Growth-first delivery" },
];

export const problems = [
  "Low visibility",
  "Weak conversions",
  "Unclear brand",
  "Manual workflows",
  "Inconsistent content",
  "No lead system",
];

export const services = [
  {
    title: "Website Development",
    slug: "website-development",
    path: "/services/website-development",
    icon: Code2,
    description: "Digital experiences built for growth.",
    benefits: ["Conversion UX", "Fast builds", "Lead capture"],
    image: "/assets/direct/website-growth-laptop.png",
    imageAlt: "Modern website dashboard and conversion interface",
  },
  {
    title: "Ecommerce Development",
    slug: "ecommerce-development",
    path: "/services/ecommerce-development",
    icon: ShoppingBag,
    description: "Stores designed to sell with clarity.",
    benefits: ["Product grids", "Checkout flow", "Sales tracking"],
    image: "/assets/direct/hero-ecommerce-dashboard.png",
    imageAlt: "Ecommerce storefront and checkout dashboard visual",
  },
  {
    title: "SEO Services",
    slug: "seo-services",
    path: "/services/seo-services",
    icon: Search,
    description: "Visibility for high-intent search.",
    benefits: ["Local SEO", "Technical fixes", "Keyword growth"],
    image: "/assets/direct/analytics-dashboard-closeup.png",
    imageAlt: "Search ranking and SEO growth dashboard visual",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    path: "/services/social-media-marketing",
    icon: Megaphone,
    description: "Content systems for trust and reach.",
    benefits: ["Content calendar", "Reels creative", "Engagement data"],
    image: "/assets/direct/social-content-planner.png",
    imageAlt: "Social media calendar and engagement analytics visual",
  },
  {
    title: "Performance Marketing",
    slug: "performance-marketing",
    path: "/services/performance-marketing",
    icon: Target,
    description: "Paid growth with measurable intent.",
    benefits: ["Ad dashboards", "Funnels", "ROAS tracking"],
    image: "/assets/direct/analytics-dashboard-closeup.png",
    imageAlt: "Paid ads performance and conversion analytics visual",
  },
  {
    title: "Branding & Creative",
    slug: "branding-design",
    path: "/services/branding-design",
    icon: Palette,
    description: "Premium identities built for trust.",
    benefits: ["Logo systems", "Brand boards", "Collateral"],
    image: "/assets/direct/branding-board-direct.png",
    imageAlt: "Premium brand identity board with logo, color palette, and mockups",
  },
  {
    title: "AI Automation",
    slug: "ai-automation",
    path: "/services/ai-automation",
    icon: Bot,
    description: "Intelligent workflows that scale response.",
    benefits: ["AI chatbots", "Agents", "CRM workflows"],
    image: "/assets/direct/ai-crm-workspace.png",
    imageAlt: "AI chatbot and workflow automation dashboard visual",
    featured: true,
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    path: "/services/mobile-app-development",
    icon: Smartphone,
    description: "Mobile products for customers and teams.",
    benefits: ["iOS and Android", "App dashboards", "Customer flows"],
    image: "/assets/direct/mobile-app-screens-direct.png",
    imageAlt: "Mobile app screen mockups and dashboard interface visual",
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
};

export const industries = [
  {
    title: "Healthcare",
    icon: HeartPulse,
    description: "Patient-first digital journeys.",
    image: "/assets/direct/website-growth-laptop.png",
    alt: "Healthcare digital growth visual"
  },
  {
    title: "Real Estate",
    icon: Building2,
    description: "Premium lead systems.",
    image: "/assets/direct/analytics-dashboard-closeup.png",
    alt: "Real Estate digital growth visual"
  },
  {
    title: "Education",
    icon: GraduationCap,
    description: "Enrollment growth systems.",
    image: "/assets/direct/social-content-planner.png",
    alt: "Education digital growth visual"
  },
  {
    title: "Manufacturing",
    icon: Cpu,
    description: "B2B visibility engines.",
    image: "/assets/direct/analytics-dashboard-closeup.png",
    alt: "Manufacturing digital growth visual"
  },
  {
    title: "Restaurants & Cafes",
    icon: Store,
    description: "Local growth flows.",
    image: "/assets/direct/hero-ecommerce-dashboard.png",
    alt: "Restaurants & Cafes digital growth visual"
  },
  {
    title: "Beauty & Wellness",
    icon: Sparkles,
    description: "Premium brand journeys.",
    image: "/assets/direct/branding-board-direct.png",
    alt: "Beauty & Wellness digital growth visual"
  },
  {
    title: "Ecommerce",
    icon: ShoppingBag,
    description: "Revenue-first stores.",
    image: "/assets/direct/hero-ecommerce-dashboard.png",
    alt: "Ecommerce digital growth visual"
  },
  {
    title: "Professional Services",
    icon: BriefcaseBusiness,
    description: "Authority-led growth.",
    image: "/assets/direct/ai-crm-workspace.png",
    alt: "Professional Services digital growth visual"
  }
];

export const automationHighlights = [
  { title: "AI Chatbots", icon: Bot },
  { title: "AI Agents", icon: BrainCircuit },
  { title: "WhatsApp Automation", icon: Workflow },
  { title: "CRM Automation", icon: Users },
  { title: "Workflow Automation", icon: Activity },
];

export const values = [
  { title: "Growth", description: "Every strategy is tied to business outcomes, not vanity activity." },
  { title: "Innovation", description: "We use modern technology and AI where it creates practical advantage." },
  { title: "Excellence", description: "Design, code, copy, and systems are treated as premium business assets." },
  { title: "Transparency", description: "Clients deserve clear priorities, reporting, and communication." },
  { title: "Partnership", description: "We work as strategic collaborators, not one-off task vendors." },
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
    image: "/assets/direct/website-growth-laptop.png",
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
    image: "/assets/direct/analytics-dashboard-closeup.png",
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
    image: "/assets/direct/branding-board-direct.png",
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
    image: "/assets/direct/ai-crm-workspace.png",
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
    image: "/assets/direct/case-results-direct.png",
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
    image: "/assets/direct/analytics-dashboard-closeup.png",
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
    image: "/assets/direct/ai-crm-workspace.png",
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
    image: "/assets/direct/ai-crm-workspace.png",
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
    image: "/assets/direct/website-growth-laptop.png",
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
    image: "/assets/direct/analytics-dashboard-closeup.png",
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
  email: "hello@selmoredigital.com",
  phone: "+92 300 0000000",
  whatsapp: "+92 300 0000000",
  location: "Serving Pakistan, UAE, UK, and USA markets",
};

export const quickHighlights = [
  { title: "Growth-first approach", icon: ChartNoAxesCombined },
  { title: "Technology with purpose", icon: Cpu },
  { title: "Results matter", icon: BarChart3 },
  { title: "Partnership over projects", icon: BadgeCheck },
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
