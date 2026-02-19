import { Layout } from '@/components/layout/Layout';
import { Network, ArrowRight, FlaskConical, Leaf, ShieldCheck, Microscope, FileCheck, CheckCircle2, Clock, ShieldOff, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { WaitlistForm } from '@/components/WaitlistForm';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { useCountUp } from '@/hooks/useCountUp';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

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

/* ─────────── StatCard (animated counter) ─────────── */
const StatCard = ({ end, suffix, label, source, delay }: { end: number; suffix: string; label: string; source: string; delay: number }) => {
  const { count, ref } = useCountUp(end, 1500);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
    >
      <span className="text-6xl md:text-7xl font-display font-bold text-primary">{count}{suffix}</span>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">{label}</p>
      <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-wider">Source: {source}</p>
    </motion.div>
  );
};

/* ─────────── FormulaCard (product) ─────────── */
const COLOR_MAP: Record<string, { bg: string; text: string; border: string; pill: string; pillText: string }> = {
  amber: { bg: 'bg-amber-500/5', text: 'text-amber-600', border: 'border-amber-500/20 hover:border-amber-500/50', pill: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800', pillText: 'text-amber-700 dark:text-amber-400' },
  emerald: { bg: 'bg-emerald-500/5', text: 'text-emerald-600', border: 'border-emerald-500/20 hover:border-emerald-500/50', pill: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800', pillText: 'text-emerald-700 dark:text-emerald-400' },
  rose: { bg: 'bg-rose-900/5', text: 'text-rose-700', border: 'border-rose-900/20 hover:border-rose-900/50', pill: 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800', pillText: 'text-rose-700 dark:text-rose-400' },
};

interface FormulaCardProps {
  name: string; badge: string; badgeColor: string; tagline: string;
  audience: string; benefits: string[]; ingredients: string[];
  format: string; price: string; delay: number;
}

const FormulaCard = ({ name, badge, badgeColor, tagline, audience, benefits, ingredients, format, price, delay }: FormulaCardProps) => {
  const colors = COLOR_MAP[badgeColor] || COLOR_MAP.amber;
  const [notified, setNotified] = useState(false);
  const { toast } = useToast();

  const handleNotify = () => {
    setNotified(true);
    toast({ title: `You're on the ${name} list! ✓`, description: "We'll notify you when it launches." });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`group relative flex flex-col p-8 rounded-3xl bg-white dark:bg-slate-800/50 border ${colors.border} hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
    >
      {/* Badge */}
      <span className={`inline-block self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${colors.bg} ${colors.text} mb-4`}>
        {badge}
      </span>

      {/* Name */}
      <h3 className={`text-3xl font-display font-bold mb-2 ${colors.text}`}>{name}</h3>

      {/* Tagline */}
      <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-4">{tagline}</p>

      {/* Audience */}
      <p className="text-[11px] text-slate-400 mb-6 uppercase tracking-wide">{audience}</p>

      {/* Benefits */}
      <ul className="space-y-3 mb-6 flex-grow">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
            <CheckCircle2 size={16} className={`${colors.text} mt-0.5 shrink-0`} />
            {b}
          </li>
        ))}
      </ul>

      {/* Ingredient Pills */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {ingredients.map((ing, i) => (
          <motion.span
            key={ing}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3 + i * 0.08 }}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-full border ${colors.pill} ${colors.pillText}`}
          >
            {ing}
          </motion.span>
        ))}
      </div>

      {/* Format & Price */}
      <div className="text-xs text-slate-400 mb-6 space-y-1">
        <p>{format}</p>
        <p className="font-bold text-slate-600 dark:text-slate-300">{price}</p>
      </div>

      {/* CTA */}
      <button
        onClick={handleNotify}
        disabled={notified}
        className={`w-full py-3 rounded-full text-sm font-bold transition-all duration-300 ${notified
            ? 'bg-green-50 text-green-600 border border-green-200 cursor-default'
            : `${colors.bg} ${colors.text} border ${colors.border} hover:shadow-md`
          }`}
      >
        {notified ? 'You are on the list ✓' : `Notify me when ${name} launches →`}
      </button>
    </motion.div>
  );
};

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

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: THE PROBLEM — "Do these people understand my problem?"
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="container-width px-4">
          {/* Opening Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-slate-900 dark:text-white mb-6">
              You are probably <br />
              <span className="text-primary">nutritionally deficient.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Not because you are careless. Because modern Indian life makes proper nutrition almost impossible.
            </p>
          </motion.div>

          {/* Statistics Block */}
          <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
            {[
              { end: 73, suffix: '%', label: 'of urban Indians are Vitamin D deficient', source: 'ICMR National Nutrition Survey' },
              { end: 50, suffix: '%', label: 'of working professionals skip at least one meal per day', source: 'ASSOCHAM Health Survey' },
              { end: 68, suffix: '%', label: 'of Indian health drinks fail to meet their own label claims', source: 'CSE Report 2023' },
            ].map((stat, i) => (
              <StatCard key={i} end={stat.end} suffix={stat.suffix} label={stat.label} source={stat.source} delay={i * 0.15} />
            ))}
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
            {/* Card 1: Time Problem */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-slate-900 dark:text-white">No time for real nutrition</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                The average working professional has 22 minutes for lunch, often at their desk.
                Students skip meals before exams. Athletes eat whatever is convenient after training.
                The food system was not designed for how Indians actually live.
              </p>
            </motion.div>

            {/* Card 2: Trust Problem */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-red-500/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldOff size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-slate-900 dark:text-white">Existing products deceive you</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Most Indian health drinks are primarily sugar with token doses of vitamins your body cannot absorb.
                Cheap synthetic forms, under-dosed actives, misleading labels.
                The same brand sells better formulas in foreign markets. You deserve to know this.
              </p>
            </motion.div>

            {/* Card 3: Relevance Problem */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-slate-900 dark:text-white">Imported solutions do not fit India</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Products designed for Western nutritional deficiencies miss what Indian bodies need.
                They do not understand Ragi, Moringa, or Ashwagandha.
                They do not understand how Indians eat, work, or train. India needs an Indian solution.
              </p>
            </motion.div>
          </div>

          {/* Transition Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h3 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white">
              So we built one.
            </h3>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: THE SOLUTION — "What exactly is this?"
          ═══════════════════════════════════════════════════════════════ */}
      <section id="ingredients" className="section-padding bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="container-width px-4">
          {/* Opening */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              Meet <span className="text-primary">Oxygen</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
              Three precision formulas. Each scientifically designed for a specific need.
              All built on the same uncompromising foundation: Indian ingredients, active nutrient forms,
              and doses that actually work.
            </p>
          </motion.div>

          {/* Three Formula Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* CORE */}
            <FormulaCard
              name="CORE"
              badge="Daily Nutrition"
              badgeColor="amber"
              tagline="For when you cannot eat well but refuse to feel it."
              audience="Working professionals · Busy parents · Anyone with an irregular eating schedule"
              benefits={[
                "Covers 50% of your daily nutrient needs",
                "Sustained energy without sugar spikes",
                "Stress adaptation with KSM-66 Ashwagandha",
              ]}
              ingredients={["Finger Millet", "Ashwagandha KSM-66", "Lion's Mane", "Moringa", "22 Chelated Nutrients"]}
              format="Coming as: Shot (60ml) · Sachet (15g)"
              price="From ₹79 per serving"
              delay={0}
            />

            {/* FOCUS */}
            <FormulaCard
              name="FOCUS"
              badge="Cognitive Performance"
              badgeColor="emerald"
              tagline="The honest alternative to Red Bull and coffee."
              audience="Students · Working professionals · Anyone replacing energy drinks"
              benefits={[
                "Clean focus without caffeine crash",
                "Memory and attention support (Lion's Mane)",
                "L-Theanine:Caffeine ratio 2.5:1 (clinically studied)",
              ]}
              ingredients={["Lion's Mane", "Bacopa Monnieri", "L-Theanine", "Natural Caffeine", "Active B Vitamins"]}
              format="Coming as: Shot (60ml) · Sachet (15g)"
              price="From ₹89 per serving"
              delay={0.15}
            />

            {/* SURGE */}
            <FormulaCard
              name="SURGE"
              badge="Athletic Performance"
              badgeColor="rose"
              tagline="Recovery and performance. Built for people who train seriously."
              audience="Gym goers · Runners · Anyone who trains 3+ times per week"
              benefits={[
                "Faster muscle recovery (Kokum + Tart Cherry)",
                "ATP production support (Cordyceps militaris)",
                "Strength and endurance (Creatine HCl + Citrulline)",
              ]}
              ingredients={["Cordyceps", "Creatine HCl", "Kokum Extract", "L-Citrulline", "Electrolytes"]}
              format="Coming as: Shot (60ml) · Sachet (15g)"
              price="From ₹99 per serving"
              delay={0.3}
            />
          </div>

          {/* Product D: The Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">+ Coming Soon</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-slate-900 dark:text-white">
              The Honest Protein Bar
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-6">
              Real dates, real cashews, real pumpkin seeds. 300mg KSM-66 Ashwagandha in every bar.
              No fake protein. No compound chocolate. Coming alongside our drink range.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Dates", "Cashews", "Pumpkin Seeds", "KSM-66 Ashwagandha", "Whey Isolate"].map((ing, i) => (
                <motion.span
                  key={ing}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-800"
                >
                  {ing}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
