export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Growth Systems",
    path: "/growth-systems",
    children: [
      { label: "Digital Growth System", path: "/growth-systems/digital-growth-system" },
      { label: "Website Development", path: "/growth-systems/website-development" },
      { label: "AI & Automation", path: "/growth-systems/ai-automation" },
      { label: "SEO", path: "/growth-systems/seo" },
      { label: "Performance Marketing", path: "/growth-systems/performance-marketing" },
      { label: "Social Media Marketing", path: "/growth-systems/social-media-marketing" },
      { label: "Brand Identity & Digital Experience", path: "/growth-systems/brand-identity-digital-experience" },
      { label: "Online Booking Systems", path: "/growth-systems/online-booking-systems" }
    ]
  },
  {
    label: "Work",
    path: "/work",
    children: [
      { label: "Selected Work", path: "/work" },
      { label: "Benchmark Residential", path: "/work/benchmark-residential" },
      { label: "Selmore Advertising", path: "/work/selmore-advertising" },
      { label: "Creative Circle", path: "/work/creative-circle" },
      { label: "Guardian Family Law", path: "/work/guardian-family-law" },
      { label: "Aurora Kratom", path: "/work/aurora-kratom" },
      { label: "Ektis", path: "/work/ektis" }
    ]
  },
  {
    label: "Creative",
    path: "/creative",
    children: [
      { label: "Creative Overview", path: "/creative" },
      { label: "Brand Identity", path: "/creative/brand-identity" },
      { label: "UI / UX Design", path: "/creative/ui-ux-design" },
      { label: "Mobile App Design", path: "/creative/mobile-app-design" },
      { label: "Presentation Design", path: "/creative/presentation-design" },
      { label: "Social Media Campaigns", path: "/creative/social-media-campaigns" },
      { label: "Advertising & Campaigns", path: "/creative/advertising-campaigns" },
      { label: "Motion Graphics", path: "/creative/motion-graphics" },
      { label: "Illustration & Digital Art", path: "/creative/illustration-digital-art" },
      { label: "Creative Concepts", path: "/creative/creative-concepts" }
    ]
  },
  {
    label: "Growth Journal",
    path: "/growth-journal",
    children: [
      { label: "All Articles", path: "/growth-journal" },
      { label: "How to Plan a Website", path: "/growth-journal/how-to-plan-a-website" },
      { label: "How AI is Changing Business", path: "/growth-journal/how-ai-is-changing-business" },
      { label: "SEO Guide", path: "/growth-journal/seo-guide" },
      { label: "Website Redesign Checklist", path: "/growth-journal/website-redesign-checklist" }
    ]
  },
  {
    label: "Growth Library",
    path: "/growth-library",
    children: [
      { label: "All Resources", path: "/growth-library" },
      { label: "Website Planning Checklist", path: "/growth-library/website-planning-checklist" },
      { label: "SEO Audit Checklist", path: "/growth-library/seo-audit-checklist" },
      { label: "AI Prompt Library", path: "/growth-library/ai-prompt-library" },
      { label: "Brand Discovery Workbook", path: "/growth-library/brand-discovery-workbook" }
    ]
  },
  { label: "Contact", path: "/contact" }
];

export const footerColumns = {
  col1: {
    title: "Selmore Digital",
    description: "Building connected digital growth systems for ambitious businesses worldwide.",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Instagram", url: "https://instagram.com" }
    ]
  },
  col2: {
    title: "Growth Systems",
    links: [
      { label: "Website Development", path: "/growth-systems/website-development" },
      { label: "AI & Automation", path: "/growth-systems/ai-automation" },
      { label: "SEO", path: "/growth-systems/seo" },
      { label: "Performance Marketing", path: "/growth-systems/performance-marketing" },
      { label: "Social Media Marketing", path: "/growth-systems/social-media-marketing" },
      { label: "Brand Identity", path: "/growth-systems/brand-identity-digital-experience" },
      { label: "Online Booking Systems", path: "/growth-systems/online-booking-systems" }
    ]
  },
  col3: {
    title: "Work & Creative",
    links: [
      { label: "Selected Work", path: "/work" },
      { label: "Growth Stories", path: "/work" },
      { label: "Creative Showcase", path: "/creative" },
      { label: "Growth Journal", path: "/growth-journal" },
      { label: "Growth Library", path: "/growth-library" }
    ]
  },
  col4: {
    title: "Contact",
    email: "hello@selmoredigital.com",
    phone: "+92 300 0669541",
    whatsapp: "+92 300 0669541",
    location: "Serving Pakistan, UAE, UK, and USA markets",
    ctaLabel: "Book Growth Session",
    ctaPath: "/book-growth-session"
  }
};
