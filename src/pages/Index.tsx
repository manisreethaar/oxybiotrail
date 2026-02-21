import { Layout } from '@/components/layout/Layout';
import { Network, ArrowRight, FlaskConical, Leaf, ShieldCheck, Microscope, FileCheck, CheckCircle2, Clock, ShieldOff, Globe, FileText, Beaker, Users2, Award, Rocket, Lock, Share2, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
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
      className="text-center p-5 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center"
    >
      <span className="text-5xl md:text-7xl font-display font-bold text-primary">{count}{suffix}</span>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 md:mt-4 leading-relaxed">{label}</p>
      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-wider">Source: {source}</p>
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
      className={`group relative flex flex-col p-5 md:p-8 rounded-3xl bg-white dark:bg-slate-800/50 border ${colors.border} hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
    >
      {/* Badge */}
      <span className={`inline-block self-start text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${colors.bg} ${colors.text} mb-4`}>
        {badge}
      </span>

      {/* Name */}
      <h3 className={`text-2xl sm:text-3xl font-display font-bold mb-2 ${colors.text}`}>{name}</h3>

      {/* Tagline */}
      <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-4">{tagline}</p>

      {/* Audience */}
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wide">{audience}</p>

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
            className={`px-2.5 py-1 text-xs font-bold rounded-full border ${colors.pill} ${colors.pillText}`}
          >
            {ing}
          </motion.span>
        ))}
      </div>

      {/* Format & Price */}
      <div className="text-xs text-slate-500 dark:text-slate-400 mb-6 space-y-1">
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

/* ─────────── AbsorptionBar (animated grow bar) ─────────── */
const AbsorptionBar = ({ label, percentage, color, delay }: { label: string; percentage: number; color: string; delay: number }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-slate-600 dark:text-slate-300">{label}</span>
        <span className="text-sm font-bold text-slate-900 dark:text-white">{percentage}%</span>
      </div>
      <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
};

/* ─────────── WaitlistCTA (Section 11) ─────────── */
const BENEFITS = [
  'First access — before public launch',
  'Founding member pricing (locked forever)',
  'Monthly development updates (real behind-the-scenes, not marketing emails)',
  'Clinical study results — first to know',
  'Opportunity to shape final formulation (we survey waitlist for flavor preferences)',
  'Free starter kit with first order',
];

const WaitlistCTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [formula, setFormula] = useState('');
  const [city, setCity] = useState('');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) {
      toast({ title: 'Please fill in your name and email', variant: 'destructive' });
      return;
    }
    setSubmitted(true);
  };

  const shareUrl = 'https://www.oxygenbioinnovations.com';
  const shareText = `I just joined the waitlist for OXYGEN — India's first honest precision nutrition drink. Built on Millet, Mushrooms, and real science. Join here: ${shareUrl}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-4">
                Be part of something<br />
                <span className="text-primary">India has needed for years.</span>
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400">Join our waitlist and receive:</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Benefits */}
              <div className="space-y-4">
                {BENEFITS.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, type: 'spring', stiffness: 300 }}
                      className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <Check size={14} className="text-emerald-600" />
                    </motion.div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="p-5 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-xl"
              >
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-1.5">First Name *</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Your first name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:text-slate-400 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:text-slate-400 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-1.5">Which formula interests you most?</label>
                    <select
                      value={formula}
                      onChange={(e) => setFormula(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    >
                      <option value="">Select one...</option>
                      <option value="VITALITY">Project VITALITY — Daily Baseline</option>
                      <option value="CLARITY">Project CLARITY — Cognitive Focus</option>
                      <option value="MOMENTUM">Project MOMENTUM — Cellular Recovery</option>
                      <option value="BAR">The Honest Protein Bar</option>
                      <option value="ALL">All of them</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-1.5">Your City <span className="text-slate-500 dark:text-slate-400">(optional)</span></label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g., Bangalore"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:text-slate-400 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
                >
                  Join the Waitlist — I Want Early Access
                </button>

                <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4 leading-relaxed">
                  No payment required. No spam. Unsubscribe instantly anytime.<br />
                  Your trust means everything to us.
                </p>

                <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-slate-500 dark:text-slate-400">
                  <Lock size={12} /> Your data is never sold
                </div>
              </motion.form>
            </div>
          </motion.div>
        ) : (
          /* ─── Success State ─── */
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl mx-auto py-12"
          >
            {/* Animated Checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-24 h-24 mx-auto mb-8"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.circle
                  cx="50" cy="50" r="45"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.path
                  d="M30 52 L45 67 L72 35"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
              </svg>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
                You are in. 🌱
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">
                Welcome to the Oxygen waitlist, <strong className="text-primary">{firstName}</strong>.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                Check your inbox right now — we've sent you a welcome note with what happens next.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mb-10">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">While you wait:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link to="/ingredients" className="text-sm text-primary hover:underline font-medium">→ Read about our key ingredients</Link>
                <Link to="/blog" className="text-sm text-primary hover:underline font-medium">→ Follow our development journey</Link>
              </div>
            </motion.div>

            {/* Share Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Share with someone who should know about Oxygen:</p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-white text-sm font-bold hover:bg-emerald-600 transition-all"
                >
                  <Share2 size={14} /> WhatsApp
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all"
                >
                  <Share2 size={14} /> LinkedIn
                </a>
                <button
                  onClick={copyLink}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
                >
                  {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy Link</>}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - The "What is this?" */}
      <section className="relative min-h-[80svh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 pb-8 lg:pt-20 lg:pb-0">
        <div className="container-width z-10 px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Copy & Form */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8 w-full max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
              <div className="inline-flex flex-wrap justify-center items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                <span>🌱 Currently in Development</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">TBI Incubated</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Clinical Study Designed</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter font-display text-slate-900 dark:text-white leading-[1.1] lg:leading-[1.05]">
                Ancient Ingredients. <br className="hidden sm:block" />
                Modern Science. <br />
                <span className="text-primary">No Compromise.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-light mt-4 lg:mt-6">
                India is building its first precision nutrition system.
                Built on Millet, Medicinal Mushrooms, and decades of scientific research.
                Designed for ambitious Indians who deserve better than what currently exists.
              </p>

              <div className="pt-2 lg:pt-4 w-full">
                <WaitlistForm variant="hero" />
              </div>
            </div>

            {/* Right: Abstract Visuals */}
            <div className="relative h-[250px] sm:h-[350px] lg:h-[500px] w-full flex items-center justify-center mt-4 border-t lg:border-t-0 border-transparent">
              {/* Circle 1: Millet Gold */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-amber-500/30 rounded-full flex items-center justify-center backdrop-blur-md bg-amber-500/5 -translate-x-8 -translate-y-8 lg:-translate-x-16 lg:-translate-y-16"
              >
                <span className="font-display text-amber-600/70 font-bold tracking-widest text-[10px] sm:text-xs uppercase transform -rotate-45">Millet Matrix</span>
              </motion.div>

              {/* Circle 2: Jade Green */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-emerald-500/30 rounded-full flex items-center justify-center backdrop-blur-md bg-emerald-500/5 translate-x-8 translate-y-8 lg:translate-x-16 lg:translate-y-16"
              >
                <span className="font-display text-emerald-600/70 font-bold tracking-widest text-[10px] sm:text-xs uppercase transform rotate-12">Bio-Actives</span>
              </motion.div>

              {/* Circle 3: Burgundy */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-rose-900/20 rounded-full flex items-center justify-center backdrop-blur-md bg-rose-900/5 translate-x-12 -translate-y-2 lg:translate-x-20 lg:-translate-y-4"
              >
                <span className="font-display text-rose-900/50 font-bold tracking-widest text-[8px] sm:text-xs uppercase">Adaptogens</span>
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
            className="text-center max-w-4xl mx-auto mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight leading-tight text-slate-900 dark:text-white mb-4">
              You are probably <br />
              <span className="text-primary">nutritionally deficient.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
              Not because you are careless. Because modern Indian life makes proper nutrition almost impossible.
            </p>
          </motion.div>

          {/* Statistics Block */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16 max-w-5xl mx-auto">
            {[
              { end: 73, suffix: '%', label: 'of urban Indians are Vitamin D deficient', source: 'ICMR National Nutrition Survey' },
              { end: 50, suffix: '%', label: 'of working professionals skip at least one meal per day', source: 'ASSOCHAM Health Survey' },
              { end: 68, suffix: '%', label: 'of Indian health drinks fail to meet their own label claims', source: 'CSE Report 2023' },
            ].map((stat, i) => (
              <StatCard key={i} end={stat.end} suffix={stat.suffix} label={stat.label} source={stat.source} delay={i * 0.15} />
            ))}
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16 max-w-6xl mx-auto">
            {/* Card 1: Time Problem */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="group p-5 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
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
              className="group p-5 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-red-500/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
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
              className="group p-5 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
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
            <h3 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white">
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
            className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
              Meet <span className="text-primary">Oxygen</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
              Three precision formulas. Each scientifically designed for a specific need.
              All built on the same uncompromising foundation: Indian ingredients, active nutrient forms,
              and doses that actually work.
            </p>
          </motion.div>

          {/* Three Formula Cards */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-8 md:mb-12">
            {/* CORE / VITALITY */}
            <FormulaCard
              name="Project VITALITY"
              badge="Target: Daily Deficiencies"
              badgeColor="amber"
              tagline="For when you cannot eat well but refuse to function sub-optimally. An everyday nutritional baseline."
              audience="Status: Pre-Clinical Optimization"
              benefits={[
                "Covers 50% of your daily nutrient needs",
                "Sustained energy without sugar spikes",
                "Stress adaptation with KSM-66 Ashwagandha",
              ]}
              ingredients={["Finger Millet", "Ashwagandha KSM-66", "Lion's Mane", "Moringa", "22 Chelated Nutrients"]}
              format="Format: Under Evaluation"
              price="Pricing: Access-First Protocol (TBA)"
              delay={0}
            />

            {/* FOCUS / CLARITY */}
            <FormulaCard
              name="Project CLARITY"
              badge="Target: Cognitive Fatigue"
              badgeColor="emerald"
              tagline="The honest alternative to high-sugar energy drinks. Built for sustained focus and the dreaded 3PM crash."
              audience="Status: Sensory Trials & Taste Profiling"
              benefits={[
                "Clean focus without caffeine crash",
                "Memory and attention support (Lion's Mane)",
                "L-Theanine:Caffeine ratio 2.5:1 (clinically studied)",
              ]}
              ingredients={["Lion's Mane", "Bacopa Monnieri", "L-Theanine", "Natural Caffeine", "Active B Vitamins"]}
              format="Format: Under Evaluation"
              price="Pricing: Access-First Protocol (TBA)"
              delay={0.15}
            />

            {/* SURGE / MOMENTUM */}
            <FormulaCard
              name="Project MOMENTUM"
              badge="Target: Cellular Recovery"
              badgeColor="rose"
              tagline="An athletic recovery matrix built around ATP production and true muscle repair, rather than synthetic stimulation."
              audience="Status: Formulation Finalized"
              benefits={[
                "Faster muscle recovery (Kokum + Tart Cherry)",
                "ATP production support (Cordyceps militaris)",
                "Strength and endurance (Creatine HCl + Citrulline)",
              ]}
              ingredients={["Cordyceps", "Creatine HCl", "Kokum Extract", "L-Citrulline", "Electrolytes"]}
              format="Format: Under Evaluation"
              price="Pricing: Access-First Protocol (TBA)"
              delay={0.3}
            />
          </div>

          {/* Product D: The Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-6 md:p-12 rounded-2xl md:rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center"
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

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: THE SCIENCE — "Why should I believe this works?"
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="container-width px-4">

          {/* Opening */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
              We show our work.
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Every formulation decision has a peer-reviewed reason.
              Every ingredient has a verified source. Every claim is something we can prove.
            </p>
          </motion.div>

          {/* Three Science Pillars */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-10 md:mb-20">

            {/* Pillar 1: Active Forms */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <FlaskConical size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-slate-900 dark:text-white">Active forms only</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Most products use the cheapest permitted form of each vitamin and mineral. We use:
              </p>
              <ul className="space-y-2 text-sm mb-6">
                {[
                  { ours: "Methylcobalamin", theirs: "not Cyanocobalamin" },
                  { ours: "Pyridoxal-5-Phosphate", theirs: "not Pyridoxine HCl" },
                  { ours: "5-MTHF Folate", theirs: "not Folic Acid" },
                  { ours: "Albion TRAACS® Chelated Minerals", theirs: "" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>{item.ours}</strong>
                      {item.theirs && <span className="text-slate-500 dark:text-slate-400 ml-1">({item.theirs})</span>}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                The difference: <strong className="text-primary">3-4x better absorption.</strong><br />
                The cost difference per serving: ₹2. The choice was obvious.
              </p>
            </motion.div>

            {/* Pillar 2: Standardized Extracts */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Microscope size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-slate-900 dark:text-white">Verified, not assumed</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Our Lion's Mane extract is verified at minimum <strong className="text-emerald-600">30% β-glucan content</strong> using
                the Megazyme AOAC method — the gold standard verification method.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Not marketing weight. Not assumed potency. <strong className="text-slate-700 dark:text-slate-200">Verified active compound content.</strong>
              </p>
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  Most brands do not do this. We consider it non-negotiable.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3: Clinical Transparency */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FileCheck size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-slate-900 dark:text-white">Proving it, not just claiming it</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                We have designed a clinical study for <strong className="text-blue-600">135 participants across 8 weeks</strong> —
                before we launch commercially.
              </p>
              {/* Clinical Study Mini-Diagram */}
              <div className="space-y-3 mb-6">
                {[
                  { label: "Three arms", detail: "Professionals, Students, Athletes" },
                  { label: "Primary outcomes", detail: "Biomarkers + cognitive tests" },
                  { label: "Ethics committee", detail: "Approval in process" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={14} className="text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>{item.label}:</strong> {item.detail}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">
                  Results will be published. Regardless of outcome.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Absorption Comparison Bars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-10 md:mb-20"
          >
            <h3 className="text-2xl font-display font-bold text-center mb-10 text-slate-900 dark:text-white">
              The absorption difference
            </h3>
            <div className="space-y-8">
              <AbsorptionBar label="Standard mineral form (Oxide/Sulfate)" percentage={8} color="bg-slate-300 dark:bg-slate-700" delay={0} />
              <AbsorptionBar label="Oxygen chelated mineral (Albion TRAACS®)" percentage={28} color="bg-primary" delay={0.3} />
            </div>
            <p className="text-center text-sm text-primary font-bold mt-6">3.5x better absorption</p>
          </motion.div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-display font-bold text-center mb-10 text-slate-900 dark:text-white">
              How we compare
            </h3>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Feature</div>
                <div className="p-4 text-xs font-bold uppercase tracking-wider text-primary text-center">What we do</div>
                <div className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">What most brands do</div>
              </div>
              {/* Table Rows */}
              {[
                { feature: "Vitamin B12", ours: "Methylcobalamin", theirs: "Cyanocobalamin" },
                { feature: "Minerals", ours: "Chelated (TRAACS®)", theirs: "Oxide/Sulfate forms" },
                { feature: "Mushroom extracts", ours: "Verified β-glucan", theirs: "Unverified weight" },
                { feature: "Lab reports", ours: "Public CoA", theirs: "No transparency" },
                { feature: "Efficacy data", ours: "Clinical study", theirs: "No efficacy data" },
                { feature: "Suppliers", ours: "Named sources", theirs: "Anonymous suppliers" },
                { feature: "Vitamin forms", ours: "Active (bioavailable)", theirs: "Synthetic forms" },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`grid grid-cols-3 border-b border-slate-100 dark:border-slate-800 last:border-b-0 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-900/50'
                    }`}
                >
                  <div className="p-4 text-sm font-medium text-slate-600 dark:text-slate-300">{row.feature}</div>
                  <div className="p-4 text-sm font-bold text-primary text-center">{row.ours}</div>
                  <div className="p-4 text-sm text-slate-500 dark:text-slate-400 text-center">{row.theirs}</div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8: THE JOURNEY — "Are these people real and credible?"
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="container-width px-4">

          {/* Opening */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white leading-tight tracking-tight">
              Building in public.<br />
              <span className="text-primary">Every step. Every setback.<br />Every breakthrough.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Most companies hide their development process. We think you should see exactly how your nutrition is being built.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto py-10 md:py-16 relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute left-6 md:left-8 top-0 w-0.5 bg-gradient-to-b from-emerald-500 via-amber-500 to-slate-200 dark:to-slate-700 origin-top"
            />

            {/* Stage Items */}
            {[
              {
                status: 'completed' as const,
                title: 'Nutritional Gap Research',
                date: 'Aug 2025',
                content: 'Analyzed ICMR, NFHS-5, and WHO data on Indian nutritional deficiencies. Mapped the exact nutrients most urban Indians are lacking.',
                icon: <FileText size={18} />,
              },
              {
                status: 'completed' as const,
                title: 'Scientific Formulation Design',
                date: 'Oct 2025',
                content: 'Designed complete formulations for all three SKUs + protein bar. Every ingredient: peer-reviewed rationale. Every dose: clinical evidence base. Every form: bioavailability optimized.',
                icon: <FlaskConical size={18} />,
              },
              {
                status: 'completed' as const,
                title: 'Regulatory Pathway Mapping',
                date: 'Dec 2025',
                content: 'Mapped complete FSSAI compliance pathway. Ingredient audit completed. Label compliance framework designed. Clinical study protocol drafted.',
                icon: <FileCheck size={18} />,
              },
              {
                status: 'current' as const,
                title: 'TBI Incubation + Prototype Development',
                date: 'Jan 2026 — Present',
                content: 'Currently developing physical prototypes at TBI, Adhiyamaan College of Engineering. Sensory testing beginning. Flavor system under development. First tastings planned for March 2026.',
                icon: <Beaker size={18} />,
              },
              {
                status: 'upcoming' as const,
                title: 'Clinical Pilot Study',
                date: 'Target Q2 2026',
                content: 'n=135 participants. 8-week intervention study. Three arms: Professionals, Students, Athletes. Ethics committee approval in process.',
                icon: <Users2 size={18} />,
              },
              {
                status: 'upcoming' as const,
                title: 'FSSAI Licensing + Commercial Production',
                date: 'Target Q3 2026',
                content: 'FSSAI Central License application. Contract manufacturer finalization. First production batch.',
                icon: <Award size={18} />,
              },
              {
                status: 'upcoming' as const,
                title: 'Launch — Waitlist First',
                date: 'Target Q4 2026',
                content: 'Waitlist members get access first. Founding member pricing locked. Public launch follows 30 days later.',
                icon: <Rocket size={18} />,
                cta: true,
              },
            ].map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-16 md:pl-20 mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 z-10">
                  <div className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all
                    ${stage.status === 'completed'
                      ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      : stage.status === 'current'
                        ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-500/30'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400'
                    }
                  `}>
                    {stage.icon}
                  </div>
                  {/* Pulsing ring for current stage */}
                  {stage.status === 'current' && (
                    <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-amber-500 animate-ping opacity-30" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`
                  p-6 rounded-2xl border transition-all
                  ${stage.status === 'completed'
                    ? 'bg-white dark:bg-slate-800/50 border-emerald-100 dark:border-emerald-900/30'
                    : stage.status === 'current'
                      ? 'bg-amber-50/50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800/50 shadow-lg shadow-amber-500/5'
                      : 'bg-white/50 dark:bg-slate-800/30 border-slate-100 dark:border-slate-800 opacity-70'
                  }
                `}>
                  {/* Status + Date */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${stage.status === 'completed'
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                      : stage.status === 'current'
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}>
                      {stage.status === 'completed' ? '✓ Completed' : stage.status === 'current' ? '← You are here' : 'Upcoming'}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{stage.date}</span>
                  </div>

                  {/* Title */}
                  <h4 className={`text-lg font-display font-bold mb-2 ${stage.status === 'upcoming' ? 'text-slate-500' : 'text-slate-900 dark:text-white'
                    }`}>
                    {stage.title}
                  </h4>

                  {/* Content */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {stage.content}
                  </p>

                  {/* CTA for Launch stage */}
                  {stage.cta && (
                    <a href="#waitlist" className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                      Get waitlist access <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* TBI Incubator Credibility Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mt-8 p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Network size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2 text-slate-900 dark:text-white">
              Incubated at TBI, Adhiyamaan College of Engineering
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              Technology Business Incubator — supporting deep-tech and biotech startups with mentorship, lab access, and industry connections.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              Actively incubated since January 2026
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9: THE FOUNDER STORY — "Who is behind this?"
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="container-width px-4">
          <div className="max-w-4xl mx-auto">
            {/* Opening */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-widest text-primary mb-8"
            >
              We started with one observation:
            </motion.p>

            {/* Pull Quote — word by word */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                {('India has the world\'s most powerful functional ingredients. Why does every serious nutrition product still come from abroad?').split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
            </div>

            {/* Story Paragraphs */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="space-y-6">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-900 dark:text-white">We</strong> watched classmates and colleagues reach for popular health drinks — products that listed impressive vitamin counts on the label but used the cheapest possible forms. Synthetic folic acid that 40% of Indians can't convert. Oxide minerals with single-digit absorption. Sugar content higher than most sodas. The data confirmed what seemed obvious: <strong>urban Indians are increasingly deficient in the nutrients that matter most.</strong>
                </motion.p>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  The market response was not the answer. Products designed to <em>appear</em> healthy while being nutritionally mediocre. The same global brands selling inferior formulations in India. <strong>Nobody building something genuinely better.</strong>
                </motion.p>
              </div>
              <div className="space-y-6">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  So we decided to start with the science. Before the brand. Before the packaging. Before a single rupee of marketing. We spent <strong>3+ months designing formulations</strong> that we would personally want to consume. Then we built everything else around that.
                </motion.p>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 italic text-slate-500 dark:text-slate-400"
                >
                  "I keep working on this because someone has to prove that honest products can win in India. The science is there. The ingredients are here. The consumer is ready. Someone just needs to refuse to cut corners."
                </motion.div>
              </div>
            </div>

            {/* Founder Credentials Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-center p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mb-16"
            >
              {/* Photo placeholder */}
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-primary/10 to-amber-500/10 flex items-center justify-center shrink-0">
                <Users2 size={48} className="text-primary/30" />
              </div>
              <div className="text-center md:text-left space-y-4 flex-grow">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">The Founder</h3>
                  <p className="text-sm text-primary font-bold">Chief Science Officer, Oxygen BioInnovations</p>
                </div>
                <div className="space-y-2">
                  {[
                    'A pharmaceutical scientist who turned fermentation into food — with the precision of a lab and the soul of a craft.',
                    'Founder operating at the intersection of: 🔬 Pharmaceutical Bioprocessing × 🧬 Nanoscience × 🌾 Fermented Food',
                    'Incubated at TBI — Technology Business Incubator, ACE Hosur',
                    'Deeply frustrated by India\'s nutrition gap — and determined to fix it',
                  ].map((cred, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">{cred}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Team Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "We are not nutritionists who became entrepreneurs. We are people who were frustrated by what existed and decided to fix it properly. That means <strong className="text-slate-900 dark:text-white not-italic">getting the science right first.</strong> Everything else follows."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 11: MAIN WAITLIST CTA — "What do I do now?"
          ═══════════════════════════════════════════════════════════════ */}
      <section id="waitlist" className="section-padding relative overflow-hidden">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.08),transparent_60%)]" />

        <div className="container-width px-4 relative z-10">
          <WaitlistCTA />
        </div>
      </section>

    </Layout>
  );
};

export default Index;
