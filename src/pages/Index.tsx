import { Layout } from '@/components/layout/Layout';
import { ArrowRight, Leaf, ShieldCheck, Microscope, Dna, FlaskConical, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { WaitlistForm } from '@/components/WaitlistForm';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Stealth/Academic Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle, abstract background */}
        <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/20 -z-20" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] -z-10" />

        <div className="container-width text-center z-10 px-4">
          <div className="space-y-8 max-w-5xl mx-auto">

            {/* Credibility/Incubation Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md px-5 py-2 rounded-full border border-slate-200/60 dark:border-slate-800 shadow-sm mx-auto"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs md:text-sm font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Incubated at TBI, Adhiyamaan College of Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight font-display text-slate-900 dark:text-white leading-[1.1]"
            >
              Decoding the <br />
              <span className="gradient-text">Microbiome-First</span> Future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-8"
            >
              Junior research initiative investigating the <strong>Gut-Skin Axis</strong>.
              We engineer indigenous probiotic strains into bio-active solutions for wellness and cosmetics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-6 pt-4"
            >
              <WaitlistForm variant="hero" />

              <div className="flex gap-4 text-sm text-slate-500">
                <Link to="/about" className="hover:text-primary underline underline-offset-4 transition-colors">
                  Read Our Story
                </Link>
                <span>•</span>
                <Link to="/partner" className="hover:text-primary underline underline-offset-4 transition-colors">
                  Research Partnership
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Research Pillars (Replacing Technology Page) */}
      <section className="section-padding bg-white dark:bg-black/20 relative border-t border-slate-100 dark:border-slate-800">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Core Research Vectors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our R&D focuses on three critical intersections of biotechnology and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Dna size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Strain Isolation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bio-prospecting rare probiotic strains from traditional Indian fermented foods.
                Screening for high-efficacy metabolites and stability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-all"
            >
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <FlaskConical size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Fermentation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Optimizing solid-state and submerged fermentation protocols to maximize yield
                of postbiotics and enzymes from agri-waste substrates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-all"
            >
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Microscope size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Efficacy Testing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rigorous in-vitro validation of anti-microbial, anti-oxidant, and
                barrier-repair properties for all confidential formulations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Research Collaboration */}
      <section className="section-padding text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container-width max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Collaborate on Future Science
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            We are actively seeking academic grants and research partnerships for our 2026-27 roadmap.
            Access our confidential IP portfolio.
          </motion.p>
          <Button size="lg" className="rounded-full px-12 h-14 text-lg btn-primary shadow-xl" asChild>
            <Link to="/partner">Research Inquiry</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
