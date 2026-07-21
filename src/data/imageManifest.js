export const imageManifest = [
  {
    id: "home-hero-growth-system",
    src: "/images/home/hero-growth-system.webp",
    srcSet: [
      { src: "/images/home/hero-growth-system-768.webp", width: 768 },
      { src: "/images/home/hero-growth-system-1200.webp", width: 1200 },
      { src: "/images/home/hero-growth-system-1600.webp", width: 1600 }
    ],
    sizes: "(max-width: 768px) 100vw, 50vw",
    alt: "Connected digital growth system combining website, marketing, data and automation",
    width: 1600,
    height: 1000,
    aspectRatio: "8/5",
    loading: "eager",
    fetchPriority: "high",
    pageAssociation: ["/"],
    assetStatus: "generation-required"
  },
  {
    id: "about-hero-team",
    src: "/images/about/team-collaboration.webp",
    alt: "Selmore Digital team collaboration and strategy meeting",
    width: 1200,
    height: 800,
    aspectRatio: "3/2",
    loading: "lazy",
    pageAssociation: ["/about"],
    assetStatus: "generation-required"
  }
];
