import { Layout } from '@/components/layout/Layout';
import { ArrowRight, Leaf, ShieldCheck, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GrantBadge } from '@/components/GrantBadge';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background blobs - Toned down for professionalism */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />

        <div className="container-width text-center z-10 px-4">
          <div className="space-y-8 max-w-5xl mx-auto">

            {/* Credibility Badge (Top Priority) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-2 rounded-full border border-slate-200 shadow-sm mx-auto"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Incubated at <strong>TBI, Adhiyamaan College of Engineering</strong>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight font-display text-slate-900 dark:text-white leading-tight"
            >
              Transforming <span className="gradient-text">Agricultural Waste</span> <br />
              into Bio-Wellness Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We engineer advanced microbial fermentation processes to extract high-value
              nutraceuticals and cosmeceuticals from indigenous biological resources.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center pt-8"
            >
              <Button size="lg" className="rounded-full text-lg h-14 px-10 btn-primary shadow-lg shadow-primary/20" asChild>
                <Link to="/innovations">
                  View R&D Pipeline <Microscope className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-10 border-slate-300 hover:bg-slate-50 text-slate-700" asChild>
                <Link to="/about">
                  Our Vision <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid (Why Us?) */}
      <section className="section-padding bg-white/50 relative border-t border-slate-100 backdrop-blur-sm">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Eco-Conscious</h3>
              <p className="text-muted-foreground">
                Zero-waste manufacturing processes using upcycled agricultural by-products.
                Supported by PMEGP green initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Microscope size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lab Verified</h3>
              <p className="text-muted-foreground">
                Rigorous efficacy testing for every batch.
                Developing proprietary probiotic strains for targeted health benefits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">GMP Ready</h3>
              <p className="text-muted-foreground">
                Designing our 2026 facility to meet global Good Manufacturing Practices
                and ISO standards right from day one.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding text-center">
        <div className="container-width max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Partner in our Growth Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            We are actively seeking grant partners and incubation support for our 2026 launch.
            Join us in revolutionizing the bio-wellness sector.
          </motion.p>
          <Button size="lg" className="rounded-full px-10 h-14 text-lg btn-primary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
