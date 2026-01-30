import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  FlaskConical, 
  Microscope, 
  Sparkles, 
  Wheat, 
  Atom, 
  Leaf, 
  Recycle,
  Lightbulb,
  Cog,
  Layers,
  Beaker,
  ArrowRight,
  Target
} from 'lucide-react';

const researchAreas = [
  {
    icon: FlaskConical,
    title: 'Bioprocess Engineering',
    description: 'Natural product transformation through advanced bioprocessing techniques and optimization.',
  },
  {
    icon: Microscope,
    title: 'Microbial Fermentation',
    description: 'Bioactive ingredient generation using controlled fermentation and microbial technologies.',
  },
  {
    icon: Sparkles,
    title: 'Biocosmetic Formulation',
    description: 'Development of cosmetic products using natural and bio-derived compounds.',
  },
  {
    icon: Wheat,
    title: 'Functional Food Development',
    description: 'Value-added food products from medicinal mushrooms, millets, and Spirulina.',
  },
  {
    icon: Atom,
    title: 'Nanotechnology Applications',
    description: 'Enhanced stability, delivery, and bioavailability through nano-scale innovations.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Extraction',
    description: 'Eco-friendly processing methods using indigenous raw materials.',
  },
  {
    icon: Recycle,
    title: 'Circular Bioeconomy Models',
    description: 'Sustainable processing aligned with circular economy principles.',
  },
];

const innovationTypes = [
  { icon: Cog, label: 'Process Innovation' },
  { icon: Layers, label: 'Product Innovation' },
  { icon: Beaker, label: 'Platform & Technology' },
  { icon: Lightbulb, label: 'Applied Research' },
];

const Research = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Research & <span className="gradient-text">Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Advancing biotechnology through systematic R&D in bioprocessing, 
              fermentation, and sustainable product development.
            </p>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Research <span className="gradient-text">Focus Areas</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our R&D activities span multiple interconnected domains within biotechnology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {researchAreas.map((area) => (
              <div key={area.title} className="glass-card p-6 hover-lift group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <area.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Innovation */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Types of <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our innovation strategy encompasses multiple dimensions of biotechnology development.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {innovationTypes.map((type) => (
              <div key={type.label} className="glass-card p-6 text-center hover-lift">
                <type.icon size={32} className="text-primary mx-auto mb-4" />
                <span className="text-sm font-medium text-foreground">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Term R&D Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Target size={28} className="text-accent" />
              </div>
              <h2 className="text-3xl font-display font-bold">
                Long-Term <span className="gradient-text">R&D Vision</span>
              </h2>
            </div>
            <div className="glass-card p-8 md:p-12 border-l-4 border-l-accent">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                To establish scalable and sustainable manufacturing capabilities for biocosmetic 
                and food products supported by indigenous research and technology development, 
                contributing to India's global competitiveness in biotechnology-driven innovation.
              </p>
            </div>
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
                Interested in Collaboration?
              </h2>
              <p className="text-muted-foreground mb-8">
                We welcome partnerships with academic institutions and research organizations.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start a Conversation
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

export default Research;
