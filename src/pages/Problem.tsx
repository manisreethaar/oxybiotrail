import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Sprout, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Problem = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 font-bold text-xs uppercase tracking-wider mb-6">
              The Critical Gap
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              The Dual Crisis of <br />
              <span className="gradient-text">Waste & Wellness</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              India faces a paradoxical challenge: We are one of the world's largest food producers, yet we suffer from massive nutritional deficiencies while wasting millions of tons of biological resources.
            </p>
          </motion.div>
        </section>

        {/* The Two Sides */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem A: Waste */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl border-l-4 border-l-amber-500"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6">
                <AlertTriangle size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">40% of Food is Wasted</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every year, India loses millions of tonnes of fruits, vegetables, and grains due to supply chain inefficiencies. This isn't just trash—it's <strong>lost nutrition</strong> and a massive source of greenhouse gas emissions (methane) when dumped in landfills.
              </p>
              <div className="bg-amber-50 p-4 rounded-xl text-amber-800 text-sm font-medium">
                📉 Impact: $14 Billion annual economic loss.
              </div>
            </motion.div>

            {/* Problem B: Malnutrition */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl border-l-4 border-l-red-500"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                <TrendingUp size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">The Protein Deficit</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Over <strong>80% of Indians</strong> differ from protein deficiency. Modern diets are rich in empty calories (carbs/fats) but critically low in bio-available protein and gut-friendly probiotics, leading to lifestyle diseases like diabetes and IBS.
              </p>
              <div className="bg-red-50 p-4 rounded-xl text-red-800 text-sm font-medium">
                📉 Impact: Rise in chronic lifestyle disorders.
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Solution */}
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Sprout size={40} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                The "Oxygen" Solution
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                We engage in <strong>Circular Bio-Economy</strong>. We don't just "manage" waste; we mine it. By applying precision fermentation to agri-byproducts, we unlock high-value proteins and prebiotics that would otherwise rot.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold mb-2">1. Upcycle</h3>
                  <p className="text-sm text-muted-foreground">Collect nutrient-dense fruit/veg pomace.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold mb-2">2. Ferment</h3>
                  <p className="text-sm text-muted-foreground">Enhance bioavailability using proprietary microbial strains.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold mb-2">3. Nourish</h3>
                  <p className="text-sm text-muted-foreground">Create affordable, super-food ingredients.</p>
                </div>
              </div>
              <Button size="lg" className="rounded-full px-8 h-12" asChild>
                <Link to="/innovations">See Our Innovations <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Problem;
