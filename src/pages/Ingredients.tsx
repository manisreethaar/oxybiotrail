import { Layout } from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, ChevronDown, ExternalLink, ShieldCheck, FlaskConical, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { INGREDIENTS, INGREDIENT_CATEGORIES, type Ingredient } from '@/data/ingredients';

const Ingredients = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const filtered = activeFilter === 'all'
        ? INGREDIENTS
        : INGREDIENTS.filter((i) => i.categories.includes(activeFilter));

    return (
        <Layout>
            {/* Hero */}
            <section className="pt-24 md:pt-32 pb-12 md:pb-16">
                <div className="container-width px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-6">
                            <FlaskConical size={12} /> Full Transparency
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white leading-[1.05] tracking-tighter">
                            Every ingredient. <span className="text-primary">Every reason.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                            Nothing in Oxygen is there by accident. Nothing is there for label appeal.
                            Everything has peer-reviewed evidence for its inclusion.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="sticky top-16 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-100 dark:border-slate-800 py-4">
                <div className="container-width px-4">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {INGREDIENT_CATEGORIES.map((cat) => {
                            const count = cat.value === 'all'
                                ? INGREDIENTS.length
                                : INGREDIENTS.filter((i) => i.categories.includes(cat.value)).length;
                            return (
                                <button
                                    key={cat.value}
                                    onClick={() => setActiveFilter(cat.value)}
                                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeFilter === cat.value
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-500 dark:text-slate-400'
                                        }`}
                                >
                                    {cat.label}
                                    <span className={`text-[10px] font-bold ${activeFilter === cat.value ? 'text-white/70' : 'text-slate-500 dark:text-slate-400'}`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Ingredient Grid */}
            <section className="section-padding">
                <div className="container-width px-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4 max-w-5xl mx-auto"
                        >
                            {filtered.map((ingredient, i) => (
                                <IngredientCard
                                    key={ingredient.id}
                                    ingredient={ingredient}
                                    index={i}
                                    isExpanded={expandedId === ingredient.id}
                                    onToggle={() => setExpandedId(expandedId === ingredient.id ? null : ingredient.id)}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-slate-500 dark:text-slate-400">No ingredients in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom Note */}
            <section className="pb-12 md:pb-20">
                <div className="container-width px-4">
                    <div className="max-w-3xl mx-auto text-center p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                        <Leaf size={32} className="text-primary mx-auto mb-4" />
                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 text-slate-900 dark:text-white tracking-tight">
                            Full Certificate of Analysis for every batch
                        </h3>
                        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-4 font-light">
                            When we launch, every batch will have a publicly available CoA with third-party verified test results.
                            Scan the QR code on any product to see the exact test report for your batch.
                        </p>
                        <span className="text-xs text-primary font-bold uppercase tracking-widest">Available at launch</span>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

/* ─────────── Ingredient Card ─────────── */
const IngredientCard = ({ ingredient, index, isExpanded, onToggle }: {
    ingredient: Ingredient; index: number; isExpanded: boolean; onToggle: () => void;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 overflow-hidden transition-shadow hover:shadow-lg"
        >
            {/* Collapsed Header */}
            <button
                onClick={onToggle}
                className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-6 text-left"
            >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Leaf size={22} className="text-primary" />
                </div>
                <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">{ingredient.name}</h3>
                        {ingredient.skus.map((sku) => (
                            <span key={sku} className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${sku === 'CORE' ? 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400' :
                                sku === 'FOCUS' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400' :
                                    'bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-400'
                                }`}>
                                {sku}
                            </span>
                        ))}
                    </div>
                    <p className="text-[13px] md:text-sm text-slate-500 dark:text-slate-400 italic mt-0.5">{ingredient.scientificName}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{ingredient.tagline}</p>
                </div>
                <ChevronDown size={20} className={`text-slate-500 dark:text-slate-400 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>

            {/* Expanded Deep-Dive */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 border-t border-slate-100 dark:border-slate-800 pt-6 space-y-8">

                            {/* Overview */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <InfoBlock label="Family" value={ingredient.family} />
                                <InfoBlock label="Geographic Origin" value={ingredient.origin} />
                                {ingredient.traditionalUse && (
                                    <div className="sm:col-span-2">
                                        <InfoBlock label="Traditional Use" value={ingredient.traditionalUse} />
                                    </div>
                                )}
                            </div>

                            {/* Why We Chose This */}
                            <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-primary mb-2">
                                    <CheckCircle2 size={16} /> Why We Chose This
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{ingredient.whyWeChoseThis}</p>
                            </div>

                            {/* Specification */}
                            <div>
                                <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-3">
                                    <FlaskConical size={16} className="text-primary" /> Our Specification
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <SpecBlock label="Form" value={ingredient.form} sub={ingredient.formRationale} />
                                    <SpecBlock label="Standardization" value={ingredient.standardization} sub={`Verified by: ${ingredient.verificationMethod}`} />
                                    <SpecBlock label="Our Dose" value={ingredient.dose} />
                                    <SpecBlock label="Clinical Dose Range" value={ingredient.clinicalDoseRange} />
                                </div>
                            </div>

                            {/* Evidence */}
                            {ingredient.studies.length > 0 && (
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-3">
                                        <BookOpen size={16} className="text-primary" /> The Evidence
                                    </h4>
                                    <div className="space-y-3">
                                        {ingredient.studies.map((study, i) => (
                                            <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">{study.citation}</p>
                                                <p className="text-sm text-slate-600 dark:text-slate-300">{study.finding}</p>
                                                {study.doi && (
                                                    <a
                                                        href={`https://doi.org/${study.doi}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 text-[10px] font-bold text-primary mt-2 hover:underline"
                                                    >
                                                        View Study <ExternalLink size={10} />
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Safety + Source */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-3">
                                        <ShieldCheck size={16} className="text-primary" /> Safety Profile
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-2">{ingredient.safety}</p>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">FSSAI: {ingredient.fssaiStatus}</span>
                                </div>
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-3">
                                        <MapPin size={16} className="text-primary" /> Our Source
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Origin: {ingredient.sourceCountry}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {ingredient.certifications.map((cert) => (
                                            <span key={cert} className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-200 dark:border-emerald-800">
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Batch Testing Note */}
                            <div className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-700">
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    🔬 <strong>Batch Testing:</strong> Full third-party CoA will be available for every production batch at launch.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/* ─── Helper Components ─── */
const InfoBlock = ({ label, value }: { label: string; value: string }) => (
    <div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-0.5">{label}</span>
        <p className="text-sm text-slate-700 dark:text-slate-300">{value}</p>
    </div>
);

const SpecBlock = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-0.5">{label}</span>
        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{value}</p>
        {sub && <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{sub}</p>}
    </div>
);

export default Ingredients;
