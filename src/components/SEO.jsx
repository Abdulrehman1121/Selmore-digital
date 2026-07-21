import { useEffect } from "react";
import { defaultSEO } from "../data/seoData.js";

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
  title = defaultSEO.title,
  description = defaultSEO.description,
  path = "/",
  schema = [],
  image = defaultSEO.defaultOgImage,
  type = "website",
}) {
  const cleanPath = path === "/" ? "" : path.replace(/\/+$/, "");
  const canonicalUrl = `${defaultSEO.canonicalHost}${cleanPath}`;

  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', {
      identity: { name: "description" },
      values: { content: description },
    });

    // Open Graph
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
    upsertMeta('meta[property="og:type"]', {
      identity: { property: "og:type" },
      values: { content: type },
    });
    upsertMeta('meta[property="og:image"]', {
      identity: { property: "og:image" },
      values: { content: `${defaultSEO.canonicalHost}${image}` },
    });

    // Twitter Card
    upsertMeta('meta[name="twitter:card"]', {
      identity: { name: "twitter:card" },
      values: { content: "summary_large_image" },
    });
    upsertMeta('meta[name="twitter:site"]', {
      identity: { name: "twitter:site" },
      values: { content: defaultSEO.twitterHandle },
    });
    upsertMeta('meta[name="twitter:title"]', {
      identity: { name: "twitter:title" },
      values: { content: title },
    });
    upsertMeta('meta[name="twitter:description"]', {
      identity: { name: "twitter:description" },
      values: { content: description },
    });

    // Canonical tag
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [description, path, title, image, type, canonicalUrl]);

  const schemaItems = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemaItems.filter(Boolean).map((item, index) => (
        <script
          key={`${canonicalUrl}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
