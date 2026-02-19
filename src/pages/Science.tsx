import { GrantBadge } from "@/components/GrantBadge";
import { motion } from "framer-motion";

const Science = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative section-padding overflow-hidden">
                <div className="container-width relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <GrantBadge label="Core Technology" className="mb-6" />
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Harnessing Nature's <br />
                            <span className="gradient-text">Microbial Intelligence</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            We utilize advanced bio-fermentation processes to cultivate probiotic strains that enhance both skin health and gut immunity.
                        </p>
                    </motion.div>
                </div>

                {/* Abstract Background Element */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10" />
            </section>

            {/* Process Section */}
            <section className="bg-white/50 dark:bg-black/20 section-padding backdrop-blur-sm">
                <div className="container-width">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Strain Selection", desc: "Identifying robust probiotic strains from indigenous sources." },
                                    { title: "Bio-Fermentation", desc: "Controlled growth in our state-of-the-art bioreactors." },
                                    { title: "Review & Quality", desc: "Rigorous testing for viability and purity (ISO Standards)." }
                                ].map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                        className="flex gap-4 p-4 rounded-xl hover:bg-white/40 transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{step.title}</h3>
                                            <p className="text-muted-foreground">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] glass-card flex items-center justify-center p-8">
                            {/* Placeholder for scientific illustration */}
                            <div className="text-center text-muted-foreground">
                                <div className="w-32 h-32 mx-auto bg-secondary rounded-full animate-pulse mb-4 flex items-center justify-center text-4xl">
                                    🧬
                                </div>
                                <p>Proprietary Bio-Process</p>
                                <small className="block mt-2 text-xs">Patent Pending 2026</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Science;
