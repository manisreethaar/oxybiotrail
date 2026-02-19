
import { Layout } from "@/components/layout/Layout";
import { GrantBadge } from "@/components/GrantBadge";
import { motion } from "framer-motion";
import { FlaskConical, Microscope, Factory, CheckCircle2, Circle, ArrowRight } from "lucide-react";

// Types for the pipeline
type Stage = "Discovery" | "Lab Scale" | "Pilot Scale" | "Commercial";

interface PipelineProject {
    id: string;
    name: string;
    category: "Nutraceuticals" | "Cosmeceuticals" | "Industrial";
    description: string;
    stage: Stage;
    progress: number; // 0-100
}

const PROJECTS: PipelineProject[] = [
    {
        id: "P-101",
        name: "Myco-Protein isolate (Alt-Meat)",
        category: "Nutraceuticals",
        description: "High-fidelity textured protein from fungal fermentation.",
        stage: "Pilot Scale",
        progress: 75
    },
    {
        id: "C-204",
        name: "Bio-Surfactant Sophorolipids",
        category: "Cosmeceuticals",
        description: "Eco-friendly emulsifiers for skincare formulations.",
        stage: "Lab Scale",
        progress: 40
    },
    {
        id: "N-305",
        name: "Indigenous Probiotic Strains",
        category: "Nutraceuticals",
        description: "Gut-health optimizing strains isolated from traditional sources.",
        stage: "Discovery",
        progress: 15
    },
    {
        id: "I-401",
        name: "Enzymatic Bioconversion",
        category: "Industrial",
        description: "Agri-waste valorization process for bioplastics.",
        stage: "Discovery",
        progress: 10
    }
];

const STAGES: Stage[] = ["Discovery", "Lab Scale", "Pilot Scale", "Commercial"];

const Products = () => {
    return (
        <Layout>
            <div className="pt-32 pb-20 container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <GrantBadge label="R&D Pipeline 2026" className="mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-display font-bold">
                            Innovation <span className="gradient-text">Pipeline</span>
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
                            Tracking the maturity of our technologies from concept to commercialization.
                            Transparent updates on our scientific progress.
                        </p>
                    </motion.div>
                </div>

                {/* Legend / Process Flow */}
                <div className="mb-16 hidden md:flex justify-between items-center max-w-4xl mx-auto px-8 py-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                    {STAGES.map((stage, index) => (
                        <div key={stage} className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${index < 3 ? 'bg-primary' : 'bg-slate-300'}`} />
                            <span className={`text-sm font-medium ${index < 3 ? 'text-foreground' : 'text-muted-foreground'}`}>{stage}</span>
                            {index < STAGES.length - 1 && <div className="w-12 h-px bg-slate-200 mx-2" />}
                        </div>
                    ))}
                </div>

                {/* Pipeline Grid */}
                <div className="grid gap-6 max-w-5xl mx-auto">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 md:p-8 rounded-xl border border-slate-200/60 dark:border-slate-800 hover:shadow-md transition-all relative overflow-hidden"
                        >
                            <div className="grid md:grid-cols-12 gap-6 items-center">

                                {/* ID & Info */}
                                <div className="md:col-span-4 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                            ID: {project.id}
                                        </span>
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display">{project.name}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Progress Visual */}
                                <div className="md:col-span-8 space-y-4">
                                    <div className="flex justify-between text-xs font-medium text-slate-500 uppercase tracking-widest px-1">
                                        {STAGES.map(s => <span key={s}>{s}</span>)}
                                    </div>

                                    {/* Progress Bar Container */}
                                    <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
                                        {/* Grid markers */}
                                        <div className="absolute inset-0 grid grid-cols-4 divide-x divide-white/20 dark:divide-black/20 z-10 w-full h-full pointer-events-none" />

                                        {/* Filled Bar */}
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-blue-500 to-primary relative"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${project.progress}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        >
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm mr-1 animate-pulse" />
                                        </motion.div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-16 text-center max-w-2xl mx-auto">
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-800/30 p-4 rounded-lg">
                        <p className="text-xs text-amber-800 dark:text-amber-200">
                            <strong>Confidentiality Notice:</strong> Specific methodologies and strain details are withheld pending patent applications.
                            This pipeline reflects current development status as of Q1 2026.
                        </p>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Products;
