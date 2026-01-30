import { Layout } from '@/components/layout/Layout';
import { Lightbulb, TrendingUp, Beaker, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const commercialPoints = [
  'Planned small-scale, sustainable manufacturing of value-added food and biocosmetic products',
  'Emphasis on market readiness, employment generation, and financial viability',
  'Production activities supported through government-backed MSME loan schemes',
];

const researchPoints = [
  'Structured R&D activities supported through government grants and academic collaboration',
  'Focus on bioprocess optimization, fermentation-based extraction, and microbial technologies',
  'Clear separation between commercial execution and R&D activities for regulatory compliance',
];

const Solution = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Lightbulb size={16} className="text-accent" />
              <span className="text-sm text-muted-foreground">Our Approach</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Solution</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A planned dual-approach model that integrates commercial production and 
              research-driven innovation within the same biological domain.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Commercial Focus */}
            <div className="glass-card p-8 md:p-10 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp size={28} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-primary">Commercial Focus</h2>
                  <p className="text-sm text-muted-foreground">Market-Driven Production</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our commercial arm focuses on building a financially sustainable manufacturing 
                operation that creates real value and employment opportunities.
              </p>
              <ul className="space-y-4">
                {commercialPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research & Innovation Focus */}
            <div className="glass-card p-8 md:p-10 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Beaker size={28} className="text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-accent">Research & Innovation</h2>
                  <p className="text-sm text-muted-foreground">Science-Driven Development</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our research arm advances biotechnology innovation through systematic 
                R&D programs and strategic academic partnerships.
              </p>
              <ul className="space-y-4">
                {researchPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 border-l-4 border-l-primary">
            <h3 className="text-xl font-display font-semibold mb-4 text-primary">
              Clear Separation for Compliance
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A key differentiator of our approach is the clear separation between commercial 
              execution and R&D activities. This ensures regulatory and financial compliance 
              while allowing both arms to operate effectively within their respective domains. 
              Commercial activities are supported through MSME loan schemes, while research 
              initiatives are funded through government grants and academic partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Explore Our Research Areas
              </h2>
              <p className="text-muted-foreground mb-8">
                Discover the specific domains where we're driving innovation.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/research">
                  View Research Focus
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solution;
