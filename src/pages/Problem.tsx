import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { FlaskConical, ArrowRight, Beaker, Leaf, BookOpen, ExternalLink, ChevronRight, Brain, Coins, BatteryWarning, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Animated Bar ─── */
const CompBar = ({ label, form, pct, color, delay }: { label: string; form: string; pct: number; color: string; delay: number }) => (
  <div className="flex items-center gap-4">
    <div className="w-28 sm:w-36 shrink-0 text-right">
      <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{label}</p>
      <p className="text-[10px] text-slate-500 dark:text-slate-400">{form}</p>
    </div>
    <div className="flex-grow h-7 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        className={`h-full rounded-full ${color} flex items-center justify-end pr-2`}
      >
        <span className="text-[10px] font-bold text-white">{pct}%</span>
      </motion.div>
    </div>
  </div>
);

/* ─── Process Step ─── */
const ProcessStep = ({ num, title, detail, isLast }: { num: string; title: string; detail: string; isLast?: boolean }) => (
  <div className="flex items-start gap-4">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{num}</div>
      {!isLast && <div className="w-0.5 h-12 bg-primary/20 mt-1" />}
    </div>
    <div className="pt-1.5">
      <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400">{detail}</p>
    </div>
  </div>
);

const Problem = () => {
  return (
    <Layout>
      {/* ═══ HERO ═══ */}
      <section className="pt-20 md:pt-32 pb-8 md:pb-16">
        <div className="container-width px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-6">
              <FlaskConical size={14} /> Formulation Science
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white leading-[1.05] tracking-tighter">
              The Science Behind <span className="text-primary">Oxygen</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
              Every formulation decision has a reason. Every reason has a reference. Every reference is available to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ LAYER 1: THE MARKET PROBLEM ═══ */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-width px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                India Has a Nutrition Crisis
              </h2>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-light leading-relaxed">
                That nobody is talking about honestly. These are not estimates — these are ICMR, NFHS-5, and WHO measurements.
              </p>
            </motion.div>

            {/* Deficiency Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-10">
              {[
                { pct: '70-90%', label: 'Vitamin D Deficient', sub: 'Urban Indians', src: 'ICMR Task Force, 2022', color: 'text-red-500' },
                { pct: '47%', label: 'B12 Deficient', sub: 'Total population', src: 'J. Nutritional Science', color: 'text-amber-500' },
                { pct: '53%', label: 'Iron Deficient', sub: 'Working women', src: 'NFHS-5', color: 'text-rose-500' },
                { pct: '68%', label: 'Multiple Deficiencies', sub: 'Urban professionals', src: 'Recent clinical data', color: 'text-red-600' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 md:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center"
                >
                  <span className={`text-3xl md:text-4xl font-display font-bold ${stat.color} block mb-2`}>{stat.pct}</span>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{stat.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.sub}</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 italic border-t border-slate-100 dark:border-slate-800 pt-2 inline-block">Source: {stat.src}</p>
                </motion.div>
              ))}
            </div>

            {/* Consequence Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Brain className="w-6 h-6 text-rose-500" />, title: 'Cognitive Impact', body: 'Iron deficiency reduces cognitive performance by 15-20% in working adults.', src: 'Am J Clinical Nutrition' },
                { icon: <Coins className="w-6 h-6 text-amber-500" />, title: 'Economic Impact', body: 'Nutritional deficiency costs India an estimated ₹4.5 lakh crore annually in lost productivity.', src: 'World Bank India Report' },
                { icon: <BatteryWarning className="w-6 h-6 text-orange-500" />, title: 'Fatigue Burden', body: 'Chronic fatigue affects 38% of urban working population — directly tied to micronutrient gaps.', src: 'ASSOCHAM Survey' },
                { icon: <GraduationCap className="w-6 h-6 text-blue-500" />, title: 'Student Impact', body: 'Micronutrient deficiency linked to 21% reduction in academic performance.', src: 'Nutrition Reviews Journal' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 md:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-start gap-5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0 mt-1 p-2 bg-white dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700">{card.icon}</div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-2">{card.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{card.body}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 italic">Source: {card.src}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-center text-sm text-slate-500 dark:text-slate-400 italic"
            >
              This is a public health crisis hiding in plain sight.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══ LAYER 2: THE BEHAVIORAL PROBLEM ═══ */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-width px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                The Intention-Action Gap
              </h2>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-light leading-relaxed">
                Urban Indians are more health-aware than any previous generation. They read about nutrition. They follow wellness accounts. They know what protein is. <strong className="text-slate-700 dark:text-slate-200 font-medium">And yet deficiency rates are rising.</strong>
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Time Scarcity',
                  color: 'border-amber-500',
                  body: 'The average working professional in Bangalore or Mumbai works 52 hours per week. Commutes consume another 2-3 hours daily. What remains is insufficient for meal planning, preparation, and consistent nutritional coverage.',
                  callout: 'This is not laziness. It is mathematics.',
                },
                {
                  num: '02',
                  title: 'Trust Deficit',
                  color: 'border-red-500',
                  body: 'CSE (Centre for Science and Environment) found that 68% of tested health food products failed to meet their own label claims. Maggi. Baby food controversies. Protein spiking scandals. The rational response is skepticism.',
                  callout: 'Why buy something you cannot trust?',
                },
                {
                  num: '03',
                  title: 'Relevance Gap',
                  color: 'border-blue-500',
                  body: 'Most nutrition science is conducted in Western populations. Indian bodies have different gut microbiome composition, dietary baselines (predominantly vegetarian), cooking methods, and specific deficiency profiles.',
                  callout: 'A Western product is not optimally designed for an Indian professional.',
                },
              ].map((barrier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`p-5 md:p-6 rounded-2xl bg-white dark:bg-slate-800/50 border-t-4 ${barrier.color} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <span className="text-2xl font-display font-bold text-slate-200 dark:text-slate-700 block mb-3">{barrier.num}</span>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">{barrier.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{barrier.body}</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 italic border-t border-slate-100 dark:border-slate-700 pt-3 inline-block">"{barrier.callout}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LAYER 3: THE SUPPLY PROBLEM ═══ */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-width px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                The Market Response Has Been Inadequate
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  category: 'Traditional Health Drinks',
                  examples: 'Horlicks, Complan, Bournvita, Boost',
                  offer: 'Strong distribution and cultural familiarity.',
                  fail: 'Sugar: 16-18g/serving. Cheapest synthetic vitamin forms. Zero adaptogens. Zero bioavailability optimization. Designed in the 1970s.',
                },
                {
                  category: 'Protein Supplements',
                  examples: 'MuscleBlaze, ON India',
                  offer: 'High protein content for muscle building.',
                  fail: 'Designed for one narrow outcome: muscle mass. Ignore micronutrient deficiency completely. Amino acid spiking documented. Relevant for gym users only — not 95% of working Indians.',
                },
                {
                  category: 'Imported Premium Products',
                  examples: 'AG1, Huel, Ritual',
                  offer: 'Genuine science. Quality ingredients. Transparency.',
                  fail: 'AG1: ₹350-500/serving — unsustainable daily. None use Indian ingredients. None understand Indian nutritional patterns. Import duty makes them prohibitively costly.',
                },
                {
                  category: 'Nutraceutical Startups',
                  examples: 'Emerging Indian brands',
                  offer: 'Modern positioning, Indian origin.',
                  fail: 'Most are marketing companies that make supplements — not science companies that make products. Label claims without clinical evidence. Doses not clinically relevant.',
                },
              ].map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 md:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                >
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-1">{cat.category}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 italic pb-3 border-b border-slate-100 dark:border-slate-800">{cat.examples}</p>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500 block mb-1">What they offer</span>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{cat.offer}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-500 block mb-1">Why it fails</span>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{cat.fail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* The Empty Intersection — Dark conclusion card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-12 rounded-3xl bg-slate-900 dark:bg-slate-800 text-center"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-2xl mx-auto">
                The market has: Affordable products that are inadequate. Quality products that are inaccessible. Indian products that lack rigour. Rigorous products that lack Indian relevance.
              </p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                Affordable. Quality. Indian. Rigorous.
              </h3>
              <p className="text-primary font-bold text-lg">
                This intersection is currently empty. Oxygen is being built to occupy it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HOW WE SOLVE IT — Our Formulation Science
          ═══════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-width px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">Our Scientific Response</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              How We Close The Gap
            </h2>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Our science exists to serve our mission. Every formulation decision below connects directly to the problem above.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 1: BIOAVAILABILITY ═══ */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-width px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">The Bioavailability Problem</h2>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-light leading-relaxed">Why the <em className="font-semibold text-slate-700 dark:text-slate-300">form</em> of a nutrient matters more than the dose.</p>
            </motion.div>

            {/* The Core Argument */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <h3 className="font-display font-bold text-lg mb-4 text-slate-900 dark:text-white">The claim vs. the reality</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  A product can list <strong>100% RDA of iron.</strong> If it uses Ferrous Oxide (5% absorption), you absorb 5mg of the listed 18mg.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Our iron: <strong className="text-primary">Ferrous Bisglycinate (Albion TRAACS®).</strong> Absorption rate: 25-35%. You absorb 4.5-6.3mg from our 18mg.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "Wait — that sounds similar?"
                </p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/10">
                <h3 className="font-display font-bold text-lg mb-4 text-primary">No. Because we also ensure:</h3>
                <ul className="space-y-3">
                  {[
                    'No competing inhibitors in formula',
                    'Taken with Vitamin C (our formula has it)',
                    'pH optimized for mineral absorption',
                    'No oxide or sulfate forms anywhere',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                      <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-bold text-primary mt-6">Result: Meaningfully superior absorption.</p>
              </div>
            </motion.div>

            {/* Infographic 1: Absorption Comparison Bars */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-8 text-center">Absorption: Cheap Forms vs. Oxygen Forms</h3>
              <div className="max-w-3xl mx-auto space-y-5">
                {/* Each mineral: cheap then ours */}
                <div className="space-y-2">
                  <CompBar label="Iron" form="FeSO₄ (Generic)" pct={8} color="bg-slate-400" delay={0} />
                  <CompBar label="Iron" form="Fe-Bisglycinate (Ours)" pct={28} color="bg-primary" delay={0.1} />
                </div>
                <div className="space-y-2">
                  <CompBar label="Zinc" form="ZnO (Generic)" pct={12} color="bg-slate-400" delay={0.2} />
                  <CompBar label="Zinc" form="Zn-Bisglycinate (Ours)" pct={41} color="bg-primary" delay={0.3} />
                </div>
                <div className="space-y-2">
                  <CompBar label="Magnesium" form="MgO (Generic)" pct={4} color="bg-slate-400" delay={0.4} />
                  <CompBar label="Magnesium" form="Mg-Glycinate (Ours)" pct={23} color="bg-primary" delay={0.5} />
                </div>
                <div className="space-y-2">
                  <CompBar label="B12" form="Cyanocobalamin (Generic)" pct={15} color="bg-slate-400" delay={0.6} />
                  <CompBar label="B12" form="Methylcobalamin (Ours)" pct={55} color="bg-primary" delay={0.7} />
                </div>
                <div className="space-y-2">
                  <CompBar label="Folate" form="Folic Acid (Generic)" pct={20} color="bg-slate-400" delay={0.8} />
                  <CompBar label="Folate" form="5-MTHF (Ours)" pct={70} color="bg-primary" delay={0.9} />
                </div>
              </div>
            </motion.div>

            {/* Infographic 2: MTHFR Visual */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 md:p-12 rounded-3xl bg-slate-900 dark:bg-slate-800 text-white">
              <h3 className="text-2xl font-display font-bold mb-2 text-center">Why synthetic folic acid fails 40% of people</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-10">The MTHFR Gene Variant</p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Generic Path */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Generic Supplements</h4>
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-2 rounded-lg bg-slate-700 text-sm font-bold">Folic Acid</div>
                    <ArrowRight size={16} className="text-slate-500" />
                    <div className="px-4 py-2 rounded-lg bg-amber-500/20 text-amber-400 text-sm font-bold border border-amber-500/30">MTHFR Enzyme</div>
                    <ArrowRight size={16} className="text-slate-500" />
                    <div className="px-4 py-2 rounded-lg bg-slate-700 text-sm font-bold">5-MTHF</div>
                  </div>
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <p className="text-sm text-red-400">
                      <strong>~40% of Indians</strong> carry an MTHFR variant — their enzyme can't convert Folic Acid efficiently.
                      Result: <strong>Unusable folate. Dead end.</strong>
                    </p>
                    <div className="mt-3 h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-red-500/60 rounded-full" />
                    </div>
                    <p className="text-xs font-medium text-slate-500 mt-2">40% of population affected</p>
                  </div>
                </div>

                {/* Oxygen Path */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Oxygen's Approach</h4>
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-bold border border-emerald-500/30">5-MTHF (Direct)</div>
                    <ArrowRight size={16} className="text-emerald-500" />
                    <div className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm font-bold">Ready to Use ✓</div>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-sm text-emerald-400">
                      <strong>Bypasses the enzyme entirely.</strong> 5-MTHF is the biologically active form.
                      Works for <strong>100% of people</strong> — regardless of MTHFR status.
                    </p>
                    <div className="mt-3 h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-emerald-500/60 rounded-full" />
                    </div>
                    <p className="text-xs font-medium text-slate-500 mt-2">100% of population benefits</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: THE MILLET SYSTEM ═══ */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-width px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">The Millet System</h2>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-light leading-relaxed">Ancient grain. Modern science.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Content */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-6">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Finger millet (Ragi) has been eaten in India for <strong>5,000 years.</strong> Modern nutrition science explains why:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
                    <span className="text-2xl font-display font-bold text-primary">344mg</span>
                    <p className="text-[10px] text-slate-500 mt-1">Calcium per 100g (Ragi)</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                    <span className="text-2xl font-display font-bold text-slate-500 dark:text-slate-400">125mg</span>
                    <p className="text-[10px] text-slate-500 mt-1">Calcium per 100ml (Milk)</p>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50">
                  <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400 mb-2">But raw Ragi has a problem:</h4>
                  <p className="text-sm text-amber-600 dark:text-amber-300">
                    Phytic acid binds minerals → <strong>reduces absorption by 60-70%.</strong>
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  This is why we didn't just <em>add</em> Ragi to our formula. We processed it correctly first.
                </p>
              </motion.div>

              {/* Process Diagram */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="p-5 md:p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
              >
                <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6">Our Processing</h4>
                <div className="space-y-0">
                  <ProcessStep num="1" title="Sourcing" detail="Organic finger millet from Karnataka smallholder farms" />
                  <ProcessStep num="2" title="Sprouting (Malting)" detail="48hrs controlled germination → Phytase activation → 60% phytic acid reduction" />
                  <ProcessStep num="3" title="Gentle Drying" detail="Low-temp dehydration to preserve heat-sensitive nutrients" />
                  <ProcessStep num="4" title="Micro-Milling" detail="Ultra-fine particle size for formula integration" isLast />
                </div>
                <div className="mt-6 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-center">
                  <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Result: Highly bioavailable mineral matrix</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: MUSHROOM SCIENCE ═══ */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-width px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">The Mushroom Science</h2>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-light leading-relaxed">Why extraction method determines everything.</p>
            </motion.div>

            {/* Two Column Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Most Brands */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-lg font-display font-bold text-slate-500 dark:text-slate-400 mb-6">Most Brands</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Mycelium grown on grain', detail: 'Much of the "mushroom powder" is actually grain filler' },
                    { label: 'No active compound verification', detail: 'You have no idea if there are any actives' },
                    { label: 'Single extraction method', detail: 'Misses half the bioactive compounds' },
                    { label: 'No β-glucan guarantee', detail: 'Could be any amount — or none' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center text-xs shrink-0 mt-0.5">✕</span>
                      <div>
                        <p className="text-sm font-bold text-slate-600 dark:text-slate-300">{item.label}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Oxygen */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/10"
              >
                <h3 className="text-lg font-display font-bold text-primary mb-6">Oxygen's Approach</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Fruiting body only', detail: 'Where active compounds actually concentrate' },
                    { label: 'Dual extraction: Hot water + Ethanol', detail: 'Water → β-glucans & polysaccharides. Ethanol → triterpenes & hericenones' },
                    { label: 'Megazyme AOAC 995.16 verified', detail: 'Gold-standard enzymatic β-glucan assay on every batch' },
                    { label: '≥30% β-glucan guaranteed', detail: 'Verified minimum per batch — not a marketing claim' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                      <div>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{item.label}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Extraction Diagram */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">Dual Extraction Process</h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-36">
                  <Leaf size={24} className="text-emerald-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Fruiting Body</p>
                </div>
                <ArrowRight size={20} className="text-slate-500 dark:text-slate-400 rotate-90 md:rotate-0" />
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 w-44">
                    <Beaker size={20} className="text-blue-500 mx-auto mb-2" />
                    <p className="text-xs font-bold text-blue-700 dark:text-blue-400">Hot Water Extract</p>
                    <p className="text-[10px] text-blue-500">β-glucans, polysaccharides</p>
                  </div>
                  <div className="text-sm font-bold text-slate-500 dark:text-slate-400 self-center">+</div>
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 w-44">
                    <FlaskConical size={20} className="text-amber-500 mx-auto mb-2" />
                    <p className="text-xs font-bold text-amber-700 dark:text-amber-400">Ethanol Extract</p>
                    <p className="text-[10px] text-amber-500">Triterpenes, hericenones</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-slate-500 dark:text-slate-400 rotate-90 md:rotate-0" />
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 w-40">
                  <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Complete Profile</p>
                  <p className="text-[10px] text-emerald-500">Full-spectrum verified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: REFERENCES ═══ */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-width px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">References</h2>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-light leading-relaxed">
                We cite our sources. Always. These are the studies that informed our formulation decisions. We encourage you to read them. Form your own conclusions.
              </p>
            </motion.div>

            <div className="space-y-10">
              {REFERENCE_GROUPS.map((group, gi) => (
                <motion.div key={gi} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                    <BookOpen size={14} /> {group.category}
                  </h3>
                  <div className="space-y-3">
                    {group.refs.map((ref, ri) => (
                      <div key={ri} className="p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4">
                        <p className="text-sm text-slate-600 dark:text-slate-300">{ref.text}</p>
                        {ref.doi && (
                          <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer"
                            className="shrink-0 text-[10px] font-bold text-primary flex items-center gap-1 hover:underline">
                            DOI <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-width px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 tracking-tight text-slate-900 dark:text-white">See every ingredient in detail</h2>
            <p className="text-base md:text-lg font-light max-w-2xl mx-auto text-slate-500 dark:text-slate-400 mb-8">
              Explore our full ingredient database — every form, every dose, every clinical study.
            </p>
            <Link to="/ingredients" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Explore Ingredients <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

/* ─── Reference Data ─── */
const REFERENCE_GROUPS = [
  {
    category: 'Millet Research',
    refs: [
      { text: 'Shobana S. et al. (2013). Finger millet-based meals on glycaemic response. British Journal of Nutrition.', doi: '10.1017/S0007114512003819' },
      { text: 'Devi PB et al. (2014). Health benefits of finger millet polyphenols. Advances in Food and Nutrition Research.', doi: '10.1016/B978-0-12-800269-8.00001-6' },
      { text: 'Chandrashekar A. (2010). Finger millet: Eleusine coracana. Critical Reviews in Food Science and Nutrition.' },
      { text: 'Nambiar VS et al. (2011). Iron-fortified pearl millet-based food supplementation. Journal of Food Science and Technology.' },
    ],
  },
  {
    category: 'Mushroom Research',
    refs: [
      { text: 'Mori K et al. (2009). Improving effects of Hericium erinaceus on mild cognitive impairment. Phytotherapy Research.', doi: '10.1002/ptr.2634' },
      { text: 'Lai PL et al. (2013). Neurotrophic properties of Hericium erinaceus. Journal of Agricultural and Food Chemistry.', doi: '10.1021/jf4022507' },
      { text: 'Hirsch KR et al. (2017). Chronic supplementation with Cordyceps militaris improves exercise performance. Journal of Dietary Supplements.', doi: '10.1080/19390211.2016.1203386' },
      { text: 'Wachtel-Galor S et al. (2011). Ganoderma lucidum (Reishi). In: Herbal Medicine: Biomolecular and Clinical Aspects.' },
    ],
  },
  {
    category: 'Ashwagandha Research',
    refs: [
      { text: 'Chandrasekhar K et al. (2012). A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of KSM-66. Indian Journal of Psychological Medicine.', doi: '10.4103/0253-7176.106022' },
      { text: 'Wankhede S et al. (2015). Examining the effect of Withania somnifera on muscle strength and recovery. Journal of the International Society of Sports Nutrition.', doi: '10.1186/s12970-015-0104-9' },
      { text: 'Choudhary D et al. (2017). Efficacy and safety of Ashwagandha root extract on cognitive functions. Journal of Dietary Supplements.' },
    ],
  },
  {
    category: 'Cognitive Ingredients',
    refs: [
      { text: 'Pase MP et al. (2012). The cognitive-enhancing effects of Bacopa monnieri: a systematic review of randomized controlled trials. Journal of Alternative and Complementary Medicine.' },
      { text: 'Calabrese C et al. (2008). Effects of a standardized Bacopa monnieri extract on cognitive performance in older adults. J Altern Complement Med.', doi: '10.1089/acm.2008.0018' },
      { text: 'Nobre AC et al. (2008). L-Theanine, a natural constituent in tea, and its effect on mental state. Asia Pacific Journal of Clinical Nutrition.' },
      { text: 'Owen GN et al. (2008). The combined effects of L-theanine and caffeine on cognitive performance. Nutritional Neuroscience.' },
    ],
  },
  {
    category: 'Bioavailability Research',
    refs: [
      { text: 'Ashmead HD (2012). Amino Acid Chelation in Human and Animal Nutrition. CRC Press. Comprehensive review of chelated mineral bioavailability.' },
      { text: 'Bailey LB et al. (2015). Biomarkers of Nutrition for Development — Folate Review. Journal of Nutrition.', doi: '10.3945/jn.114.206599' },
      { text: 'Scaglione F, Panzavolta G (2014). Folate, folic acid and 5-methyltetrahydrofolate are not the same thing. Xenobiotica.', doi: '10.3109/00498254.2013.845705' },
      { text: 'Pérez-Guisado J, Jakeman PM (2010). Citrulline malate enhances athletic performance. Journal of Strength and Conditioning Research.' },
    ],
  },
];

export default Problem;
