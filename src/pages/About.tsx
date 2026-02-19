
import { Layout } from '@/components/layout/Layout';
import { Target, Lightbulb, Heart, Globe, Building2, Microscope, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { GrantBadge } from '@/components/GrantBadge';

const About = () => {
  return (
    <Layout>
      {/* Hero Section: The Problem & The Pivot */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GrantBadge label="Est. 2026" className="mb-6 mx-auto" />
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                Bridging the Gap Between <br />
                <span className="gradient-text">Agriculture & Wellness</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We are tackling two critical global challenges: <strong>Agricultural Waste</strong> and <strong>Nutritional Deficiency</strong>.
              By upcycling nutrient-rich by-products, we create sustainable solutions for a healthier planet and a healthier you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Strategic Core: Vision, Mission, Values */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-900/20 relative">
        <div className="container mx-auto px-4 relative z-10">

          {/* Vision & Mission Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl border-t-4 border-t-primary"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "To be a global leader in the circular bio-economy, transforming indigenous biological resources into world-class sustainable products."
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl border-t-4 border-t-accent"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                <Lightbulb size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
              <ul className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span><strong>Democratize Nutrition:</strong> Make high-quality protein and probiotics accessible to all.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span><strong>Minimize Waste:</strong> Utilize 100% of raw materials through upcycling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span><strong>Empower Farmers:</strong> Create new revenue streams from agricultural waste.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-12">Driven by Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Globe, label: 'Sustainability', color: 'text-green-500', bg: 'bg-green-50' },
                { icon: Microscope, label: 'Innovation', color: 'text-blue-500', bg: 'bg-blue-50' },
                { icon: Award, label: 'Integrity', color: 'text-purple-500', bg: 'bg-purple-50' },
                { icon: Heart, label: 'Wellness', color: 'text-red-500', bg: 'bg-red-50' },
              ].map((value, i) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl hover-lift"
                >
                  <div className={`w-12 h-12 mx-auto rounded-full ${value.bg} flex items-center justify-center mb-4`}>
                    <value.icon size={24} className={value.color} />
                  </div>
                  <span className="font-bold text-foreground">{value.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Incubation & Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-16 rounded-[3rem] bg-gradient-to-br from-white to-primary/5 border border-primary/10 overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <Building2 size={14} />
                  Incubated Startup
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold">
                  Powered by <br />
                  <span className="text-primary">TBI & Adhiyamaan</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are proud to be incubated at the <strong>Technology Business Incubator (TBI)</strong> at
                  <strong> Adhiyamaan College of Engineering</strong>, Hosur. This partnership provides us with:
                </p>
                <ul className="space-y-3">
                  {[
                    'Access to Advanced Bioscience Laboratories',
                    'Mentorship from Industry Experts & Professors',
                    'Infrastructure for Prototype Development',
                    'A Vibrant Ecosystem of Innovation'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image / Logo Placeholder */}
              <div className="relative h-80 bg-white rounded-3xl shadow-xl flex items-center justify-center p-8 border border-slate-100 group">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="text-center space-y-4">
                  {/* Placeholder for TBI Logo */}
                  <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <Building2 size={40} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-800">TBI - ACE</h4>
                    <p className="text-sm text-slate-500">Adhiyamaan College of Engineering</p>
                    <p className="text-xs text-slate-400 mt-1">Dr. M.G.R. Nagar, Hosur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
