import { GrantBadge } from "@/components/GrantBadge";
import { motion } from "framer-motion";

const Roadmap = () => {
    const milestones = [
        { year: "Q1 2026", title: "Ideation & Concept", desc: "Market gap analysis for 'Project Vitality' and 'Project Radiance'. Strain literature review.", status: "Completed" },
        { year: "Q2 2026", title: "Strain Acquisition", desc: "Procuring and banking indigenous probiotic cultures at TBI Labs.", status: "In Progress" },
        { year: "Q3 2026", title: "Lab Formulation", desc: "Initial trials for confidential functional food prototypes.", status: "Planned" },
        { year: "Q4 2026", title: "Safety & Sensory", desc: "Internal efficacy testing and sensory panels for stealth formulations.", status: "Planned" }
    ];

    return (
        <div className="min-h-screen pt-20">
            <section className="section-padding text-center">
                <div className="container-width max-w-4xl mx-auto">
                    <GrantBadge label="Strategic Vision" className="mb-6 mx-auto" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Journey to 2026 & Beyond</h1>
                    <p className="text-xl text-muted-foreground mb-16">
                        A clear path from innovative research to sustainable manufacturing.
                    </p>

                    <div className="relative border-l-2 border-primary/20 ml-4 md:ml-auto md:mr-auto md:w-full max-w-3xl space-y-12 pl-8 md:pl-0">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative md:grid md:grid-cols-2 md:gap-12 md:items-center"
                            >
                                {/* Connector Dot */}
                                <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-background border-4 border-primary z-10" />

                                <div className={`text-left ${i % 2 === 0 ? "md:text-right" : "md:col-start-2"} `}>
                                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">{m.year}</span>
                                    <div className="glass-card p-6 inline-block w-full">
                                        <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                                        <p className="text-muted-foreground">{m.desc}</p>
                                        <span className="inline-block mt-4 text-xs font-semibold px-2 py-1 bg-secondary rounded text-primary-foreground">
                                            {m.status}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Roadmap;
