import FadeIn from "./FadeIn.jsx";

export default function SectionHeading({ eyebrow, title, description, align = "left", dark = false }) {
  const centered = align === "center";
  return (
    <FadeIn className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-cyan" : "text-blue"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl font-extrabold leading-tight tracking-normal md:text-5xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-8 md:text-lg ${dark ? "text-slate-300" : "text-darkGray"}`}>
          {description}
        </p>
      )}
    </FadeIn>
  );
}
