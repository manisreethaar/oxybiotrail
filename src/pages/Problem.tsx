import { Layout } from '@/components/layout/Layout';
import { AlertTriangle, Factory, Leaf, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const problems = [
  {
    icon: Factory,
    title: 'Dependence on Synthetic Ingredients',
    description: 'Food and cosmetic industries continue to rely heavily on petroleum-derived and chemically synthesized ingredients, contributing to environmental damage and health concerns.',
  },
  {
    icon: Leaf,
    title: 'Underutilized Indigenous Resources',
    description: 'India possesses abundant biological resources such as medicinal mushrooms, traditional millets, Spirulina, and diverse microorganisms that are often sold as low-value raw materials.',
  },
  {
    icon: AlertTriangle,
    title: 'Limited Access to Bioprocessing',
    description: 'Due to limited access to scientifically optimized bioprocessing, fermentation-based extraction, and eco-friendly value-addition technologies, indigenous resources remain undervalued.',
  },
  {
    icon: Building2,
    title: 'High Infrastructure Barriers',
    description: 'Early-stage biotech startups, MSMEs, and academic innovators face high infrastructure barriers and limited access to pilot-scale R&D, restricting scalable bio-based product development.',
  },
];

const Problem = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <AlertTriangle size={16} className="text-destructive" />
              <span className="text-sm text-muted-foreground">The Challenge</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Problem We <span className="text-destructive">Address</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Despite growing awareness of sustainability and health, critical gaps remain 
              in leveraging India's biological wealth for value-added products.
            </p>
          </div>
        </div>
      </section>

      {/* Main Problem Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 border-l-4 border-l-destructive/50">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Despite growing awareness of sustainability and health, food and cosmetic industries 
              continue to rely heavily on petroleum-derived and chemically synthesized ingredients. 
              These practices contribute to environmental damage, high carbon footprint, and 
              long-term health concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Areas */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Key <span className="gradient-text">Challenges</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <div key={problem.title} className="glass-card p-8 hover-lift group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <problem.icon size={24} className="text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-destructive transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Solution */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Ready to See Our Approach?
              </h2>
              <p className="text-muted-foreground mb-8">
                Discover how we're addressing these challenges through our dual-approach model.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/solution">
                  Explore Our Solution
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

export default Problem;
