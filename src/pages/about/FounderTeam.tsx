import { Layout } from '@/components/layout/Layout';
import { ArrowRight, BookOpen, FlaskConical, Search, Users, Rocket, Heart, Mail, CheckCircle2, MapPin, Beaker, Leaf, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FounderTeam = () => {
    return (
        <Layout>
            {/* ─── HERO ─── */}
            <section className="pt-20 md:pt-32 pb-8 md:pb-16 relative overflow-hidden">
                <div className="container-width px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center space-y-6"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                            <Heart size={12} /> The People Behind Oxygen
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tighter text-slate-900 dark:text-white">
                            Built by <span className="text-primary">scientists.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
                            We aren't nutritionists who became entrepreneurs. We are people who were frustrated by what existed and decided to fix it properly.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
          CHAPTER 1: THE HOOK
          ═══════════════════════════════════════════════════════════ */}
            <ChapterSection number="01" title="The Hook" icon={<Search size={28} />} accentColor="amber">
                <div className="space-y-6">
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                        We spent six months trying to find a daily nutrition product we would actually recommend to someone we cared about.
                    </p>
                    <p className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                        We could not find one.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        Either the science was inadequate, or the ingredients were compromised, or the price was inaccessible, or it was designed for a Western diet and simply repacked for India.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        We analyzed blood reports from urban Indians across multiple cities. The pattern was consistent and alarming. <strong className="text-slate-900 dark:text-white">Seven out of ten showed at least one significant deficiency.</strong> Most were health-conscious people. Most were not eating badly by any measure. Most had no idea they were deficient.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        The food system was failing people who were trying to do the right thing.
                    </p>
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mt-8">
                        <p className="text-lg text-primary font-bold italic">
                            "We decided the only option was to build it ourselves."
                        </p>
                    </div>
                </div>
            </ChapterSection>

            {/* ═══════════════════════════════════════════════════════════
          CHAPTER 2: THE FOUNDERS
          ═══════════════════════════════════════════════════════════ */}
            <ChapterSection number="02" title="The Founders" icon={<Users size={28} />} accentColor="emerald" alternate>
                <div className="space-y-8">
                    {/* Founder Card */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        {/* Photo placeholder */}
                        <div className="w-40 h-48 md:w-48 md:h-56 rounded-2xl bg-gradient-to-br from-primary/10 to-amber-500/10 flex items-center justify-center shrink-0 mx-auto md:mx-0">
                            <Users size={48} className="text-primary/30" />
                        </div>
                        <div className="space-y-4 flex-grow">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Our Founder</h3>
                                <p className="text-sm text-primary font-bold">Chief Science Officer</p>
                            </div>

                            <div>
                                <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Why I am the right person for this</p>
                                <div className="space-y-1.5">
                                    {[
                                        'A pharmaceutical scientist who turned fermentation into food — with the precision of a lab and the soul of a craft.',
                                        'Founder operating at the intersection of: 🔬 Pharmaceutical Bioprocessing × 🧬 Nanoscience × 🌾 Fermented Food',
                                        'Incubated at TBI — Technology Business Incubator, ACE Hosur',
                                        'Personally analyzed 200+ peer-reviewed studies for this project',
                                    ].map((cred, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                            <p className="text-sm text-slate-600 dark:text-slate-300">{cred}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                                    "I am building Oxygen because I am genuinely angry at what the market currently offers people who are trying to take their health seriously. I have seen the research. I know what good nutrition science looks like. And I know that the gap between what is possible and what is being sold is not technical — <strong className="not-italic text-primary">it is a choice. We are choosing differently.</strong>"
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Responsible for at Oxygen</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Formulation Design', 'Ingredient Sourcing', 'Clinical Study Protocol', 'Science Communication'].map((area) => (
                                        <span key={area} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-[11px] font-medium text-slate-600 dark:text-slate-300">{area}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 hidden">
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                                    <Mail size={16} className="text-slate-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Have a technical question?</p>
                                    <p className="text-sm text-slate-500">info@oxygenbioinnovations.com · <span className="text-primary font-medium">We personally respond to science questions</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                        Growing the team as we grow. Interested in joining?{' '}
                        <Link to="/careers" className="text-primary font-bold hover:underline">See open roles →</Link>
                    </p>
                </div>
            </ChapterSection>

            {/* ═══════════════════════════════════════════════════════════
          CHAPTER 3: THE APPROACH — 6 Principles
          ═══════════════════════════════════════════════════════════ */}
            <ChapterSection number="03" title="Our Approach" icon={<FlaskConical size={28} />} accentColor="blue">
                <p className="text-lg text-slate-500 dark:text-slate-400 mb-10">
                    How we think about building Oxygen. These are not marketing copy — they are our operating principles.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            num: '01',
                            title: 'Science Before Marketing',
                            body: 'We designed the formulation before we designed the brand. We chose ingredients before we chose colors. We cited our evidence before we wrote our copy. This is backwards from how most nutrition companies work. We think it is the only sensible order.',
                            icon: <FlaskConical size={18} />,
                        },
                        {
                            num: '02',
                            title: 'India Is Not a Market Segment',
                            body: 'We did not take a Western formula and add Ashwagandha to make it Indian. We started from India. From what Indian bodies are deficient in. From what Indian ingredients can provide. From what Indian lifestyles demand. India is not an afterthought — it is the foundation.',
                            icon: <MapPin size={18} />,
                        },
                        {
                            num: '03',
                            title: 'Transparency Is Not Optional',
                            body: 'We will publish our lab reports. We will name our ingredient suppliers. We will cite the studies behind our claims. We will tell you when a study is preliminary and when it is robust. We will tell you what our products cannot do. This should be standard.',
                            icon: <Search size={18} />,
                        },
                        {
                            num: '04',
                            title: 'Dose Matters As Much As Ingredient',
                            body: 'Ashwagandha at 50mg is not the same as Ashwagandha at 300mg. Lion\'s Mane at 100mg is not what the research studied. We formulate at clinically relevant doses — not at doses that allow us to put the ingredient on the label.',
                            icon: <Beaker size={18} />,
                        },
                        {
                            num: '05',
                            title: 'Bioavailability Is the Real Metric',
                            body: 'A 100mg dose with 5% absorption delivers 5mg to your body. A 50mg dose with 35% absorption delivers 17.5mg. The nutrient that reaches your bloodstream is the only nutrient that matters. We optimize for absorption first. Always.',
                            icon: <Leaf size={18} />,
                        },
                        {
                            num: '06',
                            title: 'Clinical Evidence Is Non-Negotiable',
                            body: 'We designed our clinical study before we manufactured our first batch. Not because we are required to. But because we believe no company should sell a health product without evidence that it works. We are holding ourselves to that standard.',
                            icon: <Shield size={18} />,
                        },
                    ].map((principle, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-5 md:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl font-display font-bold text-slate-400 dark:text-slate-500">{principle.num}</span>
                                <div className="text-primary">{principle.icon}</div>
                            </div>
                            <h4 className="font-display font-bold text-slate-900 dark:text-white mb-2">{principle.title}</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{principle.body}</p>
                        </motion.div>
                    ))}
                </div>
            </ChapterSection>

            {/* ═══════════════════════════════════════════════════════════
          CHAPTER 4: THE JOURNEY SO FAR
          ═══════════════════════════════════════════════════════════ */}
            <ChapterSection number="04" title="The Journey So Far" icon={<Rocket size={28} />} accentColor="purple" alternate>
                <p className="text-lg text-slate-500 dark:text-slate-400 mb-4">
                    What we have built before we built anything physical.
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-10">
                    Most companies build first and think about science second. We spent months thinking about the science before building anything.
                </p>
                <div className="space-y-0">
                    {[
                        {
                            title: '6+ months of nutritional deficiency research',
                            body: 'Analyzed ICMR, NFHS-5, WHO India data. Mapped exact deficiency profiles by demographic and lifestyle. Built the evidence base for product necessity.',
                            status: 'Completed',
                        },
                        {
                            title: 'Complete formulation design',
                            body: 'Reviewed 200+ peer-reviewed studies. Designed complete formulas for 3 drinks + 1 bar. Every ingredient evidence-based. Every dose clinically relevant. Every form bioavailability optimized.',
                            status: 'Completed',
                        },
                        {
                            title: 'Regulatory pathway fully mapped',
                            body: 'FSSAI compliance audited per ingredient. Clinical study protocol designed. Ethics committee application in process. Label compliance framework completed.',
                            status: 'In Progress',
                        },
                        {
                            title: 'TBI Incubation secured',
                            body: 'Accepted by Technology Business Incubator at ACE, Hosur. Prototype development currently underway. Sensory testing beginning soon.',
                            status: 'Active',
                        },
                        {
                            title: 'Waitlist growing',
                            body: 'Before a single product exists — validation that the demand is real. Real people who believe something better should exist.',
                            status: 'Growing',
                        },
                    ].map((milestone, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-4"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                {i < 4 && <div className="w-0.5 h-16 bg-primary/10 mt-1" />}
                            </div>
                            <div className="pt-1.5 pb-6">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">{milestone.title}</h4>
                                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${milestone.status === 'Completed' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                        milestone.status === 'Growing' ? 'bg-primary/10 text-primary' :
                                            'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                        }`}>{milestone.status}</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{milestone.body}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="text-primary font-bold text-center mt-8">
                    We believe this is why Oxygen will work when others have not.
                </motion.p>
            </ChapterSection>

            {/* ═══════════════════════════════════════════════════════════
          CHAPTER 5: THE INVITATION
          ═══════════════════════════════════════════════════════════ */}
            <section className="section-padding bg-white dark:bg-slate-950">
                <div className="container-width px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="text-sm md:text-base font-bold uppercase tracking-widest text-primary mb-6 block">The Invitation</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
                            Join us.
                        </h2>
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-4">
                            Oxygen is currently in development. We are not asking you to buy anything. We are asking you to believe that something better is possible — and to hold us accountable to delivering it.
                        </p>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-12">
                            Join our waitlist. Read our research. Follow our development. Tell us what you need from a nutrition product. <strong className="text-primary font-medium">We are listening. And we are building.</strong>
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6 mb-12">
                            {[
                                {
                                    title: 'Join the Waitlist',
                                    desc: 'Get first access when we launch. Founding member pricing locked forever. First to receive clinical study results.',
                                    link: '/#waitlist',
                                    cta: 'Join Waitlist →',
                                    icon: <CheckCircle2 size={24} />,
                                },
                                {
                                    title: 'Follow the Journey',
                                    desc: 'We document everything. The science. The setbacks. The breakthroughs. The honest reality of building this in India.',
                                    link: '/blog',
                                    cta: 'Read Our Journal →',
                                    icon: <BookOpen size={24} />,
                                },
                                {
                                    title: 'Talk to Us',
                                    desc: 'If you have a question about our formulation, our ingredients, or our approach — ask us. We will give you a real answer.',
                                    link: '/contact',
                                    cta: 'Contact Us →',
                                    icon: <Mail size={24} />,
                                },
                            ].map((way, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="p-5 md:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-md hover:border-primary/20 transition-all"
                                >
                                    <div className="text-primary mb-3 flex justify-center">{way.icon}</div>
                                    <h3 className="font-display font-bold text-slate-900 dark:text-white mb-2">{way.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{way.desc}</p>
                                    <Link to={way.link} className="text-sm text-primary font-bold hover:underline inline-flex items-center gap-1">
                                        {way.cta} <ArrowRight size={14} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
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
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white">{title}</h2>
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

export default FounderTeam;
