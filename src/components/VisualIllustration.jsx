import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Coins,
  TrendingUp,
  Mail,
  MessageSquare,
  Users,
  Code2,
  Layers,
  Sparkles,
  Search,
  BarChart3,
  Target,
  Heart,
  Share2,
  Megaphone,
  Palette,
  Compass,
  Type,
  Bot,
  Cpu,
  Workflow,
  Smartphone,
  CheckCircle,
  Trophy,
  FileText,
  MousePointer,
  Grid,
} from "lucide-react";

export default function VisualIllustration({ type, className = "" }) {
  // Normalize types
  const normalizedType = String(type).toLowerCase();

  // Common background elements
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const slowSpinVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // 1. E-Commerce Illustration
  if (normalizedType.includes("ecommerce") || normalizedType.includes("shop")) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-indigo-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_60%)]" />
        <motion.div variants={slowSpinVariants} className="absolute w-72 h-72 border border-white/5 rounded-full" />
        
        {/* Floating background coins */}
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-[20%] left-[20%] text-amber-400 opacity-20"
        >
          <Coins className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-[20%] right-[20%] text-amber-400 opacity-20"
        >
          <Coins className="h-8 w-8" />
        </motion.div>

        {/* Foreground E-commerce Bag & Graphics */}
        <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-20 blur" />
            <ShoppingBag className="h-28 w-28 text-cyan-400" />
            <motion.div
              variants={pulseVariants}
              className="absolute -top-3 -right-3 bg-emerald-500 text-navy text-xs font-black p-2 rounded-full flex items-center justify-center shadow-lg"
            >
              <TrendingUp className="h-4 w-4" />
            </motion.div>
          </div>
          <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">Digital Storefront</h4>
          <p className="text-xs text-cyan-400 mt-1 uppercase tracking-widest font-semibold">Revenue Systems</p>
        </motion.div>
      </motion.div>
    );
  }

  // 2. Contact / CRM Illustration
  if (normalizedType.includes("contact") || normalizedType.includes("crm")) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-purple-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.12)_0,transparent_60%)]" />
        
        {/* Connector lines network */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
          <line x1="30%" y1="80%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
        </svg>

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-80 h-80 rounded-full border border-dashed border-pink-500/20"
        />

        {/* Floating communication cards */}
        <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur" />
            <Mail className="h-24 w-24 text-pink-400" />
            
            <motion.div
              animate={{ x: [-8, 8, -8], y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-purple-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <MessageSquare className="h-5 w-5 text-white" />
            </motion.div>

            <motion.div
              animate={{ x: [8, -8, 8], y: [5, -5, 5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-cyan-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <Users className="h-5 w-5 text-white" />
            </motion.div>
          </div>
          <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">Client CRM Gateway</h4>
          <p className="text-xs text-pink-400 mt-1 uppercase tracking-widest font-semibold">Seamless Routing</p>
        </motion.div>
      </motion.div>
    );
  }

  // 3. Website Development Illustration
  if (normalizedType.includes("website") || normalizedType.includes("web") || normalizedType.includes("laptop")) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-emerald-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15)_0,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Abstract Developer shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 border-2 border-emerald-500/10 border-t-emerald-500/30 rounded-full"
        />

        {/* Code / Wireframe Layers */}
        <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-20 blur" />
            <Code2 className="h-26 w-26 text-emerald-400" />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity }}
              className="absolute -top-3 -right-3 text-cyan-400"
            >
              <Sparkles className="h-6 w-6" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-3 -left-3 text-emerald-500/40"
            >
              <Layers className="h-10 w-10" />
            </motion.div>
          </div>
          <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">UX & Development Canvas</h4>
          <p className="text-xs text-emerald-400 mt-1 uppercase tracking-widest font-semibold">High Performance Code</p>
        </motion.div>
      </motion.div>
    );
  }

  // 4. SEO & Analytics Illustration
  if (normalizedType.includes("seo") || normalizedType.includes("analytics") || normalizedType.includes("dashboard")) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-cyan-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0,transparent_60%)]" />
        
        {/* Animated Bar Chart background lines */}
        <div className="absolute bottom-10 inset-x-10 h-32 flex items-end justify-between opacity-10">
          {[40, 70, 55, 90, 65, 80, 95].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
              className="w-[10%] bg-cyan-400 rounded-t-sm"
            />
          ))}
        </div>

        {/* Lens / Target element */}
        <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-500 opacity-20 blur" />
            <Search className="h-24 w-24 text-cyan-400" />
            
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-teal-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <BarChart3 className="h-5 w-5 text-white" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-cyan-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <Target className="h-5 w-5 text-white" />
            </motion.div>
          </div>
          <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">SEO & Analytics Engine</h4>
          <p className="text-xs text-cyan-400 mt-1 uppercase tracking-widest font-semibold">Search Optimization</p>
        </motion.div>
      </motion.div>
    );
  }

  // 5. Social Media Illustration
  if (normalizedType.includes("social") || normalizedType.includes("megaphone") || normalizedType.includes("planner")) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-rose-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.12)_0,transparent_60%)]" />
        
        {/* Floating engagement bubbles */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-[15%] right-[20%] text-rose-500"
        >
          <Heart className="h-8 w-8 fill-current" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-[20%] left-[15%] text-cyan-400"
        >
          <Share2 className="h-7 w-7" />
        </motion.div>

        {/* Social Card */}
        <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-500 opacity-20 blur" />
            <Megaphone className="h-24 w-24 text-rose-400" />
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-3 -left-3 bg-rose-600 text-white text-xs font-black px-2.5 py-1 rounded-full shadow"
            >
              LIVE
            </motion.div>
          </div>
          <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">Social Outreach Hub</h4>
          <p className="text-xs text-rose-400 mt-1 uppercase tracking-widest font-semibold">Audience Growth</p>
        </motion.div>
      </motion.div>
    );
  }

  // 6. Branding & Creative Illustration
  if (normalizedType.includes("branding") || normalizedType.includes("board") || normalizedType.includes("palette")) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-amber-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12)_0,transparent_60%)]" />
        
        {/* Palette Circles */}
        <div className="absolute top-10 right-10 flex gap-1.5 opacity-20">
          {["bg-amber-400", "bg-cyan-400", "bg-pink-500", "bg-emerald-500"].map((bg) => (
            <div key={bg} className={`w-3 h-3 rounded-full ${bg}`} />
          ))}
        </div>

        {/* Canvas elements */}
        <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-500 opacity-20 blur" />
            <Palette className="h-24 w-24 text-amber-400" />
            
            <motion.div
              animate={{ rotate: [0, 45, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-amber-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <Compass className="h-5 w-5 text-white" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-rose-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <Type className="h-5 w-5 text-white" />
            </motion.div>
          </div>
          <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">Brand & Identity Canvas</h4>
          <p className="text-xs text-amber-400 mt-1 uppercase tracking-widest font-semibold">Premium Design</p>
        </motion.div>
      </motion.div>
    );
  }

  // 7. AI & Automation Illustration
  if (normalizedType.includes("ai") || normalizedType.includes("automation") || normalizedType.includes("bot") || normalizedType.includes("workflow")) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-violet-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.16)_0,transparent_60%)]" />
        
        {/* Glowing node network */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-violet-400 rounded-full shadow-[0_0_10px_#8b5cf6]" />
          <div className="absolute top-[60%] left-[15%] w-3 h-3 bg-fuchsia-400 rounded-full shadow-[0_0_12px_#d946ef]" />
          <div className="absolute bottom-[30%] right-[25%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4]" />
        </div>

        {/* AI Robot */}
        <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-25 blur" />
            <Bot className="h-24 w-24 text-violet-400" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 bg-fuchsia-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <Cpu className="h-5 w-5 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-violet-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <Workflow className="h-5 w-5 text-white" />
            </motion.div>
          </div>
          <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">Intelligent Workflows</h4>
          <p className="text-xs text-violet-400 mt-1 uppercase tracking-widest font-semibold">AI Automation</p>
        </motion.div>
      </motion.div>
    );
  }

  // 8. Mobile App Illustration
  if (normalizedType.includes("mobile") || normalizedType.includes("app") || normalizedType.includes("screens")) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-fuchsia-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.12)_0,transparent_60%)]" />
        
        {/* Floating elements */}
        <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 opacity-20 blur" />
            <Smartphone className="h-24 w-24 text-fuchsia-400" />
            
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -top-3 -right-3 text-cyan-400"
            >
              <CheckCircle className="h-6 w-6" />
            </motion.div>

            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-3 -left-3 text-fuchsia-400/40"
            >
              <Layers className="h-9 w-9" />
            </motion.div>
          </div>
          <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">Mobile Product Suite</h4>
          <p className="text-xs text-fuchsia-400 mt-1 uppercase tracking-widest font-semibold">iOS & Android</p>
        </motion.div>
      </motion.div>
    );
  }

  // 9. Case Studies / Results Illustration
  if (normalizedType.includes("case") || normalizedType.includes("results")) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-emerald-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0,transparent_60%)]" />
        
        {/* Growth Nodes */}
        <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur" />
            <Trophy className="h-24 w-24 text-emerald-400" />
            
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-emerald-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <TrendingUp className="h-5 w-5 text-white" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -right-4 bg-teal-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <Sparkles className="h-5 w-5 text-white" />
            </motion.div>
          </div>
          <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">Case Growth Portfolio</h4>
          <p className="text-xs text-emerald-400 mt-1 uppercase tracking-widest font-semibold">Proven Results</p>
        </motion.div>
      </motion.div>
    );
  }

  // 10. Blog Editorial / Publication Illustration
  if (normalizedType.includes("blog") || normalizedType.includes("editorial")) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-violet-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0,transparent_60%)]" />
        
        {/* Floating quill/cursor */}
        <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 opacity-20 blur" />
            <FileText className="h-24 w-24 text-violet-400" />
            
            <motion.div
              animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-indigo-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <MousePointer className="h-5 w-5 text-white" />
            </motion.div>
          </div>
          <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">Digital Growth Insights</h4>
          <p className="text-xs text-violet-400 mt-1 uppercase tracking-widest font-semibold">Expert Insights</p>
        </motion.div>
      </motion.div>
    );
  }

  // 11. Portfolio Gallery Illustration
  if (normalizedType.includes("portfolio")) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-sky-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0,transparent_60%)]" />
        
        {/* Floating layout cards */}
        <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500 opacity-20 blur" />
            <Grid className="h-24 w-24 text-sky-400" />
            
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4.2, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-sky-600 border border-white/10 p-2.5 rounded-xl shadow-lg"
            >
              <Sparkles className="h-5 w-5 text-white" />
            </motion.div>
          </div>
          <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">Client Showcases</h4>
          <p className="text-xs text-sky-400 mt-1 uppercase tracking-widest font-semibold">Featured Work</p>
        </motion.div>
      </motion.div>
    );
  }

  // Fallback / default template (Premium abstract geometric layout)
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={`relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-navy to-indigo-950 overflow-hidden w-full h-full min-h-[300px] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0,transparent_60%)]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-60 h-60 border border-white/5 rounded-lg"
      />
      <motion.div variants={floatingVariants} className="relative z-10 flex flex-col items-center">
        <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-20 blur" />
          <Sparkles className="h-20 w-20 text-cyan-400" />
        </div>
        <h4 className="mt-6 font-display text-lg font-bold text-slate-200 tracking-wide">Selmore Digital</h4>
        <p className="text-xs text-cyan-400 mt-1 uppercase tracking-widest font-semibold">Growth Ecosystem</p>
      </motion.div>
    </motion.div>
  );
}
