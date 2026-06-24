import { motion } from "framer-motion";
import { Bot, CheckCircle2, LineChart, MessagesSquare, Workflow } from "lucide-react";

const bars = [64, 82, 48, 90, 72, 96, 78];

export default function DashboardMockup() {
  return (
    <motion.div
      className="glass-panel relative mx-auto w-full max-w-xl overflow-hidden rounded-lg p-4 shadow-glow"
      initial={{ opacity: 0, y: 26, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">Growth Command Center</p>
          <p className="mt-1 text-sm text-slate-300">Live leads, visibility, automation</p>
        </div>
        <div className="rounded-lg border border-green/40 bg-green/20 px-3 py-2 text-xs font-bold text-green">
          +38% Pipeline
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Qualified Leads", "184", LineChart],
          ["AI Replies", "1.8k", Bot],
          ["Saved Hours", "72", Workflow],
        ].map(([label, value, Icon]) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] p-3">
            <Icon className="mb-3 h-5 w-5 text-cyan" />
            <p className="text-2xl font-extrabold text-white">{value}</p>
            <p className="mt-1 text-xs text-slate-400">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Lead Velocity</p>
            <span className="text-xs text-green">Optimized</span>
          </div>
          <div className="flex h-32 items-end gap-2">
            {bars.map((height, index) => (
              <motion.div
                key={height}
                className="w-full rounded-t bg-gradient-to-t from-blue to-cyan"
                initial={{ height: 16 }}
                animate={{ height }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
          <p className="mb-4 text-sm font-semibold text-white">Automation Flow</p>
          <div className="space-y-3">
            {[
              ["Website form", MessagesSquare],
              ["AI qualifies", Bot],
              ["CRM task", CheckCircle2],
            ].map(([label, Icon]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan/20 text-cyan">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
