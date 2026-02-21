import { Layout } from '@/components/layout/Layout';
import { BookOpen, Search, Rocket, Heart, Leaf, Users, MapPin, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

const VisionMission = () => {
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
                            <Heart size={12} /> Our Vision & Mission
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tighter text-slate-900 dark:text-white">
                            Why Oxygen <span className="text-primary">exists.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
                            This is not a corporate origin story. This is the honest account of a problem we couldn't ignore, a gap nobody was filling, and a decision to build something better.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── THE VISION — Full-height cinematic statement ─── */}
            <section className="min-h-[50svh] lg:min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-[#0f2419]">
                {/* Subtle grain texture */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E")' }} />
                <div className="container-width px-4 py-12 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm md:text-base font-bold uppercase tracking-widest text-emerald-400/80 block mb-8 text-left md:text-center"
                        >
                            Our Vision
                        </motion.span>
                        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start relative z-10">
                            {/* Left Column - Large Typography */}
                            <div className="md:col-span-12 lg:col-span-5">
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tighter text-white leading-[1.1] mb-6"
                                >
                                    Building<br />
                                    India's First<br />
                                    <span className="text-emerald-400">Precision</span><br />
                                    <span className="text-emerald-400">Nutrition</span><br />
                                    System.
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="text-emerald-400/60 font-medium tracking-widest uppercase text-xs"
                                >
                                    Sustainable • Indigenous • Circular
                                </motion.p>
                            </div>

                            {/* Right Column - Breakdown */}
                            <div className="md:col-span-12 lg:col-span-7 space-y-6">
                                {[
                                    {
                                        title: "Sustainable Enterprise",
                                        text: "To build an innovation-driven biotechnology enterprise that prioritizes planetary health alongside human health."
                                    },
                                    {
                                        title: "Indigenous Resources",
                                        text: "To transform India's rich biological resources into globally competitive biocosmetic and food products."
                                    },
                                    {
                                        title: "Circular Bioeconomy",
                                        text: "To operate strictly through advanced biotechnology, circular bioeconomy principles, and responsible manufacturing."
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15, duration: 0.6 }}
                                        className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
                                    >
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-300 leading-relaxed font-light text-base md:text-lg">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── THE MISSION ─── */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="container-width px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Mission Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-10"
                        >
                            <span className="text-sm md:text-base font-bold uppercase tracking-widest text-primary block mb-4">Our Mission</span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
                                To make world-class nutrition accessible<br />
                                to every ambitious Indian.
                            </h2>
                            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light italic">
                                By combining India's ancient ingredient wisdom with modern nutritional science — and refusing to compromise on either.
                            </p>
                        </motion.div>

                        {/* Mission Body */}
                        <div className="max-w-3xl mx-auto space-y-6 mb-12 text-center">
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light"
                            >
                                Oxygen exists to close the gap between what urban Indians need nutritionally and what the market currently offers them.
                            </motion.p>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
                                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light"
                            >
                                We believe Indian ingredients are world-class. We believe Indian consumers deserve products formulated to global scientific standards. We believe honesty about what is in a product is not a marketing strategy — <strong className="text-slate-900 dark:text-white font-medium">it is a minimum standard that the industry has failed to meet.</strong>
                            </motion.p>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                                className="text-lg text-primary font-bold"
                            >
                                Our mission is to build the products that prove all three beliefs simultaneously.
                            </motion.p>
                        </div>

                        {/* 3 Mission Pillars */}
                        <div className="grid md:grid-cols-3 gap-6 mb-10 md:mb-16">
                            {[
                                {
                                    title: '1. Product & Commercial Mission',
                                    body: 'To develop and commercialize safe, natural, and sustainable biocosmetic and food products using innovative bioprocessing, fermentation, and formulation technologies, ensuring financial viability and market competitiveness.',
                                },
                                {
                                    title: '2. Research & Innovation Mission',
                                    body: 'To strengthen indigenous biotechnology innovation by advancing research in bioprocess engineering, microbial fermentation, and nanotechnology, supported through government grants, academic collaboration, and applied research programs.',
                                },
                                {
                                    title: '3. Impact & Ecosystem Mission',
                                    body: 'To create long-term environmental, social, and economic impact by supporting circular bioeconomy practices, enabling skill development through student mentorship and internships, generating employment, and aligning operations with national initiatives such as Make in India and sustainability-driven growth.',
                                }
                            ].map((mission, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white dark:bg-slate-950 p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800"
                                >
                                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-4">{mission.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                        {mission.body}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Our Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-10"
                        >
                            <span className="text-sm md:text-base font-bold uppercase tracking-widest text-primary block mb-4">Our Core Values</span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
                                The principles driving our research.
                            </h2>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-6 pb-16">
                            {[
                                {
                                    title: 'Scientific Rigor',
                                    icon: <FlaskConical size={22} />,
                                    body: 'Evidence-based, research-driven approach to every product and process',
                                },
                                {
                                    title: 'Sustainability First',
                                    icon: <Leaf size={22} />,
                                    body: 'Circular bioeconomy, minimal waste, maximum resource utilization',
                                },
                                {
                                    title: 'Collaboration',
                                    icon: <Users size={22} />,
                                    body: 'Building bridges between academia, industry, farmers, and consumers',
                                },
                                {
                                    title: 'Innovation with Purpose',
                                    icon: <Rocket size={22} />,
                                    body: 'Technology that solves real problems for real stakeholders',
                                },
                                {
                                    title: 'Indigenous Pride',
                                    icon: <MapPin size={22} />,
                                    body: "Celebrating and valorizing India's biological and knowledge wealth",
                                },
                                {
                                    title: 'Education & Empowerment',
                                    icon: <BookOpen size={22} />,
                                    body: 'Developing the next generation of biotech innovators',
                                },
                                {
                                    title: 'Integrity & Transparency',
                                    icon: <Search size={22} />,
                                    body: 'Honest communication about capabilities, challenges, and progress',
                                }
                            ].map((value, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 p-5 md:p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                            {value.body}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default VisionMission;
