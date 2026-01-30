import { Layout } from '@/components/layout/Layout';
import { Target, Lightbulb, Heart, Globe } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 animate-fade-in">
            {/* Logo */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-lg hover-lift overflow-hidden p-1">
              <img src="/logo.png" alt="Oxygen BioInnovations Logo" className="w-full h-full object-contain scale-110" />
            </div>

            {/* Text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center md:text-left">
              About <span className="gradient-text whitespace-nowrap">Oxygen BioInnovations</span>
            </h1>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building a sustainable biotechnology enterprise through innovation,
              indigenous resources, and responsible manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose & Identity - Consolidated Flow */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 space-y-24">

          {/* Who We Are */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Who We <span className="gradient-text">Are</span>
              </h2>
              <div className="glass-card p-8 border-l-4 border-l-primary">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Oxygen Bioinnovations Private Limited is an early-stage biotechnology startup
                  focused on sustainable product development using indigenous biological resources
                  and advanced biotechnology approaches. Based in Tamil Nadu, India, we are committed
                  to transforming local biological wealth into globally competitive products.
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-primary/10 to-purple-100 rounded-3xl flex items-center justify-center shadow-inner relative overflow-hidden group">
                <Globe size={120} className="text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-white/40 blur-xl"></div>
                <Globe size={80} className="text-primary relative z-10" />
              </div>
            </div>
          </div>

          {/* Vision - Reversed */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target size={24} className="text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Our <span className="text-accent">Vision</span>
                </h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                "To build a sustainable and innovation-driven biotechnology enterprise that transforms indigenous biological resources into globally competitive products."
              </p>
              <ul className="space-y-4">
                {[
                  'Advanced Biotechnology Approaches',
                  'Circular Bioeconomy Principles',
                  'Responsible Manufacturing'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="glass-card p-8 w-full max-w-md hover-lift">
                <div className="space-y-4">
                  <div className="h-2 w-20 bg-accent/20 rounded-full" />
                  <h3 className="text-xl font-bold text-foreground">Future Focused</h3>
                  <p className="text-sm text-muted-foreground">Creating a legacy of sustainability for generations to come through science-backed innovation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb size={24} className="text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Our <span className="gradient-text">Mission</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: 'Commercial', desc: 'Develop safe, natural sustainable products.' },
                  { title: 'Innovation', desc: 'Strengthen indigenous biotech research.' },
                  { title: 'Impact', desc: 'Create environmental & social value.' }
                ].map((m) => (
                  <div key={m.title} className="flex gap-4 p-4 rounded-xl bg-white/40 hover:bg-white/60 transition-colors border border-white/40">
                    <div className="w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
                    <div>
                      <h4 className="font-semibold text-foreground">{m.title}</h4>
                      <p className="text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              {/* Abstract visual for Mission */}
              <div className="relative w-full max-w-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="glass-card p-8 relative z-10 flex flex-col gap-6">
                  <span className="text-6xl font-display font-bold text-primary/10 absolute top-4 right-4">03</span>
                  <h3 className="text-2xl font-bold">Core Pillars</h3>
                  <div className="space-y-3">
                    <div className="h-10 w-full bg-primary/5 rounded-lg flex items-center px-4 text-sm font-medium text-primary">Sustainability</div>
                    <div className="h-10 w-full bg-accent/5 rounded-lg flex items-center px-4 text-sm font-medium text-accent">Innovation</div>
                    <div className="h-10 w-full bg-purple-500/5 rounded-lg flex items-center px-4 text-sm font-medium text-purple-600">Community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Globe, label: 'Sustainability' },
              { icon: Lightbulb, label: 'Innovation' },
              { icon: Target, label: 'Credibility' },
              { icon: Heart, label: 'Responsibility' },
            ].map((value) => (
              <div key={value.label} className="glass-card p-6 text-center hover-lift">
                <value.icon size={32} className="text-primary mx-auto mb-4" />
                <span className="text-sm font-medium text-foreground">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
