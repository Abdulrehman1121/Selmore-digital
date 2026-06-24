import { useEffect } from "react";

const defaultDescription =
  "Selmore Digital helps businesses build stronger brands, generate qualified leads, and automate operations through intelligent marketing, modern websites, and AI-powered technology.";
const siteUrl = "https://selmoredigital.com";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes.identity).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  }
  Object.entries(attributes.values).forEach(([key, value]) => element.setAttribute(key, value));
}

export default function SEO({
  title = "Selmore Digital | Digital Growth & AI Automation Partner",
  description = defaultDescription,
  path = "/",
  schema = [],
}) {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}${path}`;
    document.title = title;
    upsertMeta('meta[name="description"]', {
      identity: { name: "description" },
      values: { content: description },
    });
    upsertMeta('meta[property="og:title"]', {
      identity: { property: "og:title" },
      values: { content: title },
    });
    upsertMeta('meta[property="og:description"]', {
      identity: { property: "og:description" },
      values: { content: description },
    });
    upsertMeta('meta[property="og:url"]', {
      identity: { property: "og:url" },
      values: { content: canonicalUrl },
    });
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [description, path, title]);

  const schemaItems = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemaItems.filter(Boolean).map((item, index) => (
        <script
          key={`${path}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
