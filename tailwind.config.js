/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1220",
        blue: "#1E40AF",
        green: "#00D084",
        cyan: "#22D3EE",
        light: "#F8FAFC",
        medium: "#CBD5E1",
        slateText: "#334155",
        darkGray: "#475569",
      },
      fontFamily: {
        display: ["Manrope", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.18)",
        soft: "0 24px 80px rgba(11, 18, 32, 0.12)",
      },
      backgroundImage: {
        "signal-grid":
          "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
