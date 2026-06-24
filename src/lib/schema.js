const siteUrl = "https://selmoredigital.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Selmore Digital",
  url: siteUrl,
  logo: `${siteUrl}/assets/selmore-digital-logo.jpeg`,
  slogan: "Building Brands. Driving Growth. Automating Success.",
  sameAs: [
    "https://www.linkedin.com/company/selmore-digital",
    "https://www.facebook.com/selmoredigital",
    "https://www.instagram.com/selmoredigital",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Selmore Digital",
  url: siteUrl,
  areaServed: ["Pakistan", "United Arab Emirates", "United Kingdom", "United States"],
  priceRange: "$$",
  description:
    "Premium digital growth and AI automation company helping businesses generate leads, improve customer experience, and automate operations.",
};

export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "Selmore Digital",
      url: siteUrl,
    },
    description: service.description || service.overview,
    areaServed: ["Pakistan", "UAE", "UK", "USA"],
  };
}

export function faqSchema(faqs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function blogPostingSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: "Selmore Digital",
    },
    publisher: {
      "@type": "Organization",
      name: "Selmore Digital",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/selmore-digital-logo.jpeg`,
      },
    },
    datePublished: post.created_at || new Date().toISOString(),
  };
}
