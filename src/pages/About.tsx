import { Layout } from '@/components/layout/Layout';
import { ArrowRight, BookOpen, FlaskConical, Search, Users, Rocket, Heart, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container-width px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              <Heart size={12} /> Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-slate-900 dark:text-white">
              Why Oxygen <span className="text-primary">exists.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              This is not a corporate origin story. This is the honest account of a problem we couldn't ignore, a gap nobody was filling, and a decision to build something better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── THE VISION — Full-height cinematic statement ─── */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-[#0f2419]">
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E")' }} />
        <div className="container-width px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400/60 block mb-8 text-center"
            >
              Our Vision
            </motion.span>
            <div className="text-center space-y-3">
              {[
                'An India where nutritional deficiency',
                'is no longer a silent barrier to human potential —',
                '',
                'where a working professional in Chennai,',
                'a student in Pune,',
                'and an athlete in Delhi',
                '',
                'all have access to precision nutrition',
                'that matches the scientific standard',
                'of the world\'s best products,',
                '',
                'built from India\'s own',
                'ancient ingredient wisdom.',
              ].map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: line ? 1 : 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className={`font-display ${line ? 'text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 leading-snug' : 'h-4'
                    }`}
                >
                  {line || '\u00A0'}
                </motion.p>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 3 }}
              className="text-center mt-12 text-sm text-emerald-400/50 tracking-widest uppercase"
            >
              This is what we are building toward.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 1: THE OBSERVATION ─── */}
      <ChapterSection
        number="01"
        title="The Observation"
        icon={<Search size={28} />}
        accentColor="amber"
      >
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          It started with a simple question at a college canteen in Hosur.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          I watched a classmate — someone who trained six days a week, studied twelve hours a day —
          down a popular "health drink" that was 47% sugar with synthetic vitamins his body could barely absorb.
          He thought he was doing the right thing. The label told him he was.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          I started reading labels obsessively. Horlicks, Bournvita, Complan, Ensure. The more I looked,
          the more a pattern emerged: <strong className="text-slate-900 dark:text-white">cheap vitamin forms, under-dosed actives, sugar as the primary ingredient,
            and marketing that made it all sound scientific.</strong>
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          The same brands sold better formulations abroad. Indian consumers were getting the cost-optimized version.
          Not the health-optimized version. That observation wouldn't leave me alone.
        </p>
      </ChapterSection>

      {/* ─── CHAPTER 2: THE RESEARCH ─── */}
      <ChapterSection
        number="02"
        title="The Research"
        icon={<BookOpen size={28} />}
        accentColor="emerald"
        alternate
      >
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Three months of research confirmed what the labels suggested. The data was worse than the observation.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 my-10">
          {[
            { stat: "73%", label: "of urban Indians are Vitamin D deficient", source: "ICMR" },
            { stat: "50%", label: "of working professionals skip at least one meal daily", source: "ASSOCHAM" },
            { stat: "68%", label: "of health drinks fail their own label claims", source: "CSE 2023" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700"
            >
              <span className="text-3xl font-display font-bold text-primary">{s.stat}</span>
              <p className="text-sm text-slate-500 mt-2">{s.label}</p>
              <p className="text-[10px] text-slate-400 mt-1">{s.source}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          We spoke to nutritionists, sports coaches, and working professionals. The same story repeated:
          people wanted to eat better but lacked the time. They trusted brands that didn't deserve their trust.
          And the products designed for Western deficiencies missed what Indian bodies actually needed.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          The gap wasn't just real. It was enormous. And nobody was honestly addressing it.
        </p>
      </ChapterSection>

      {/* ─── CHAPTER 3: THE FORMULATION ─── */}
      <ChapterSection
        number="03"
        title="The Formulation"
        icon={<FlaskConical size={28} />}
        accentColor="blue"
      >
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          We didn't start with a product idea. We started with a set of principles and refused to compromise on any of them.
        </p>
        <div className="space-y-4 my-10">
          {[
            { principle: "Every ingredient must have a peer-reviewed rationale", detail: "No marketing-driven inclusions. If the science isn't clear, it doesn't go in." },
            { principle: "Every vitamin and mineral must be in its active form", detail: "Methylcobalamin, not Cyanocobalamin. 5-MTHF, not Folic Acid. P5P, not Pyridoxine. The absorption difference is 3-4x." },
            { principle: "Every dose must be clinically meaningful", detail: "Not a 'dusting' of 50+ ingredients. Fewer ingredients at doses that actually work." },
            { principle: "Every ingredient must be Indian where possible", detail: "Ragi, Ashwagandha, Moringa, Kokum, Bacopa. India's pharmacopeia is world-class. We just forgot." },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30"
            >
              <h4 className="font-display font-bold text-slate-900 dark:text-white mb-1">{p.principle}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{p.detail}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          The result: three distinct formulas — <strong className="text-blue-600">CORE</strong> for daily nutrition,
          <strong className="text-emerald-600"> FOCUS</strong> for cognitive performance,
          and <strong className="text-rose-700"> SURGE</strong> for athletic recovery.
          Each designed for a specific need. All built on the same uncompromising foundation.
        </p>
      </ChapterSection>

      {/* ─── CHAPTER 4: THE TEAM ─── */}
      <ChapterSection
        number="04"
        title="The Team"
        icon={<Users size={28} />}
        accentColor="purple"
        alternate
      >
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          Oxygen isn't a faceless corporation. It's built by people who personally care about this problem.
        </p>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 items-center p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/10 to-amber-500/10 flex items-center justify-center shrink-0">
            <Users size={48} className="text-primary/40" />
          </div>
          <div className="text-center md:text-left space-y-3">
            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Manisreethaar</h3>
              <p className="text-sm text-primary font-bold">Founder & Lead Researcher</p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Student researcher at Adhiyamaan College of Engineering. Started with a frustration about how Indian
              health products underserve Indian consumers. Spent 3+ months in research before writing a single
              line of formulation. Believes Indian ingredients deserve Indian innovation — not cost-cutting.
            </p>
            <p className="text-sm text-slate-400 italic">
              "I keep working on this because someone has to prove that honest products can win in India."
            </p>
          </div>
        </motion.div>

        <p className="text-sm text-slate-400 text-center">
          Growing the team as we grow. Interested in joining?{' '}
          <Link to="/careers" className="text-primary font-bold hover:underline">See open roles →</Link>
        </p>
      </ChapterSection>

      {/* ─── CHAPTER 5: THE MISSION ─── */}
      <section className="section-padding bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
        <div className="container-width px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6 block">Chapter 05 — The Mission</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-12">
              Oxygen exists to prove three things.
            </h2>

            <div className="space-y-10 text-left max-w-2xl mx-auto">
              {[
                {
                  num: "1",
                  title: "Indian ingredients are world-class.",
                  body: "They always have been. Ragi, Ashwagandha, Lion's Mane, Moringa — these aren't alternatives. They're originals.",
                },
                {
                  num: "2",
                  title: "Honest products can succeed commercially.",
                  body: "Quality and transparency are competitive advantages, not liabilities. We refuse to believe that cutting corners is the only way to build a business in India.",
                },
                {
                  num: "3",
                  title: "The Indian nutrition consumer is intelligent.",
                  body: "They deserve products that respect their intelligence. Not misleading labels. Not token doses. Not sugar disguised as science.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-6"
                >
                  <span className="text-5xl font-display font-bold text-primary/30">{item.num}</span>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg text-primary font-bold mt-16"
            >
              We are building all three proofs simultaneously.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── CHAPTER 6: JOIN THE JOURNEY ─── */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-width px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6 block">Chapter 06</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              Join the journey.
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-12">
              We're building this in public. Every breakthrough, every setback, every decision — documented and shared.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Read the Blog", desc: "Science deep-dives & building updates", link: "/blog", icon: <BookOpen size={24} /> },
                { label: "See the Roadmap", desc: "Our development timeline", link: "/", icon: <Rocket size={24} /> },
                { label: "Explore Ingredients", desc: "What goes into Oxygen", link: "/#ingredients", icon: <Leaf size={24} /> },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.link}
                    className="block p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white mb-1">{item.label}</h4>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <a
              href="/#waitlist"
              className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Join the Waitlist <ArrowRight size={18} />
            </a>
            <p className="text-xs text-slate-400 mt-4">No payment. No commitment. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

/* ─────────── ChapterSection (reusable container) ─────────── */
const ACCENT_MAP: Record<string, { icon: string; border: string; bg: string }> = {
  amber: { icon: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600', border: 'border-amber-500/10', bg: 'bg-white dark:bg-slate-950' },
  emerald: { icon: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600', border: 'border-emerald-500/10', bg: 'bg-slate-50 dark:bg-slate-900/50' },
  blue: { icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600', border: 'border-blue-500/10', bg: 'bg-white dark:bg-slate-950' },
  purple: { icon: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600', border: 'border-purple-500/10', bg: 'bg-slate-50 dark:bg-slate-900/50' },
};

const ChapterSection = ({
  number,
  title,
  icon,
  accentColor,
  alternate,
  children,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
  accentColor: string;
  alternate?: boolean;
  children: React.ReactNode;
}) => {
  const colors = ACCENT_MAP[accentColor] || ACCENT_MAP.amber;
  return (
    <section className={`section-padding ${alternate ? 'bg-slate-50 dark:bg-slate-900/50' : 'bg-white dark:bg-slate-950'}`}>
      <div className="container-width px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colors.icon}`}>
              {icon}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">Chapter {number}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">{title}</h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
