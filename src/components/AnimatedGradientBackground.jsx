import { motion } from "framer-motion";

export default function AnimatedGradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-signal-grid bg-[length:42px_42px] opacity-70"
        animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(30,64,175,0.28),transparent_28%,rgba(34,211,238,0.18)_56%,transparent_78%)]"
        animate={{ opacity: [0.52, 0.85, 0.52] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy to-transparent" />
    </div>
  );
}
