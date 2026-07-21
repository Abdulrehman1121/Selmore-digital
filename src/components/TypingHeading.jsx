import { useEffect, useRef, useState } from "react";

/**
 * TypingHeading
 * Renders an h1 (or any tag via `as` prop) with a typewriter effect on mount.
 * After typing completes a blinking cursor fades out.
 *
 * Props:
 *  text        – string to type out  (required)
 *  className   – additional classes for the heading element
 *  speed       – ms per character (default 38)
 *  delay       – ms before typing starts (default 300)
 *  as          – HTML tag to use (default "h1")
 *  cursor      – show blinking cursor (default true)
 */
export default function TypingHeading({
  text = "",
  className = "",
  speed = 38,
  delay = 300,
  as: Tag = "h1",
  cursor = true,
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    indexRef.current = 0;

    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1;
        setDisplayed(text.slice(0, indexRef.current));
        if (indexRef.current >= text.length) {
          clearInterval(interval);
          // Cursor stays visible briefly then fades
          setTimeout(() => setDone(true), 900);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, speed, delay]);

  return (
    <Tag className={`${className} inline`}>
      {displayed}
      {cursor && (
        <span
          aria-hidden="true"
          className={`inline-block w-[3px] h-[0.9em] bg-cyan rounded-sm align-middle ml-1 transition-opacity duration-700 ${
            done ? "opacity-0" : "animate-blink"
          }`}
        />
      )}
    </Tag>
  );
}
