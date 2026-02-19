import { Layout } from '@/components/layout/Layout';
import { Network, ArrowRight, FlaskConical, Leaf, ShieldCheck, Microscope, FileCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { WaitlistForm } from '@/components/WaitlistForm';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const TRUST_ITEMS = [
  { label: "TBI Incubated Startup", icon: <Network /> },
  { label: "Science-First Formulation", icon: <FlaskConical /> },
  { label: "FSSAI Licensing In Progress", icon: <ShieldCheck /> },
  { label: "100% Indian Ingredients", icon: <Leaf /> },
  { label: "Third-Party Testing Planned", icon: <CheckCircle2 /> },
  { label: "Zero Artificial Ingredients", icon: <Leaf /> },
  { label: "Clinical Study Protocol Ready", icon: <FileCheck /> },
  { label: "Peer-Reviewed Formulation", icon: <Microscope /> },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - The "What is this?" */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="container-width z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy & Form */}
            <div className="text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                <span>🌱 Currently in Development</span>
                <span>•</span>
                <span>TBI Incubated</span>
                <span>•</span>
                <span>Clinical Study Designed</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display text-slate-900 dark:text-white leading-[1.1]">
                Ancient Ingredients. <br />
                Modern Science. <br />
                <span className="text-primary">No Compromise.</span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-light">
                India is building its first precision nutrition system.
                Built on Millet, Medicinal Mushrooms, and decades of nutritional science.
                Designed for working Indians who deserve better than what currently exists.
              </p>

              <div className="pt-4">
                <WaitlistForm variant="hero" />
              </div>
            </div>

            {/* Right: Abstract Visuals */}
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Circle 1: Millet Gold */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border border-amber-500/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-amber-500/5 -translate-x-10 -translate-y-10"
              >
                <span className="font-display text-amber-600/50 font-bold tracking-widest text-xs uppercase transform -rotate-45">Millet Matrix</span>
              </motion.div>

              {/* Circle 2: Jade Green */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border border-emerald-500/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-emerald-500/5 translate-x-10 translate-y-5"
              >
                <span className="font-display text-emerald-600/50 font-bold tracking-widest text-xs uppercase transform rotate-12">Bio-Actives</span>
              </motion.div>

              {/* Circle 3: Burgundy */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 border border-rose-900/20 rounded-full flex items-center justify-center backdrop-blur-sm bg-rose-900/5 translate-y-20 -translate-x-20"
              >
                <span className="font-display text-rose-900/40 font-bold tracking-widest text-xs uppercase">Adaptogens</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Trust Bar - "Is this legitimate?" */}
      <section className="border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 py-8 overflow-hidden">
        <div className="container-width">
          <InfiniteMovingCards items={TRUST_ITEMS} direction="left" speed="normal" className="bg-transparent" />
        </div>
      </section>

      {/* Ingredient Section Anchor */}
      <div id="ingredients"></div>

    </Layout>
  );
};

export default Index;
