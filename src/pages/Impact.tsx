import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Leaf, 
  DollarSign, 
  Globe, 
  Users, 
  Scale, 
  Flag,
  CheckCircle,
  ArrowRight,
  Heart
} from 'lucide-react';

const focusAreas = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Responsible manufacturing practices that minimize environmental impact.',
  },
  {
    icon: DollarSign,
    title: 'Cost Efficiency',
    description: 'Optimized bioprocessing for economically viable production.',
  },
  {
    icon: Globe,
    title: 'Environmental Reduction',
    description: 'Bio-based alternatives to reduce dependency on synthetic chemicals.',
  },
  {
    icon: Users,
    title: 'Employment Generation',
    description: 'Job creation aligned with MSME and state-supported schemes.',
  },
  {
    icon: Scale,
    title: 'Regulatory Compliance',
    description: 'Adherence to regulatory and financial requirements as a core principle.',
  },
  {
    icon: Flag,
    title: 'Make in India',
    description: 'Alignment with national initiatives for sustainable growth.',
  },
];

const intendedImpacts = [
  'Adoption of eco-friendly production practices in biocosmetics and food manufacturing',
  'Value addition to indigenous biological resources',
  'Contribution to employment creation and skill development',
  'Development of safe and natural alternatives to chemical-intensive products',
  'Transparent and responsible utilization of public funds',
  'Alignment with national priorities such as Make in India and sustainability-driven growth',
];

const Impact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Heart size={16} className="text-accent" />
              <span className="text-sm text-muted-foreground">Creating Lasting Change</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Impact & <span className="gradient-text">Sustainability</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Creating long-term environmental, social, and economic value through 
              responsible biotechnology practices.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Focus <span className="gradient-text">Areas</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our operations are guided by these core principles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {focusAreas.map((area) => (
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

      {/* Intended Impact */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Intended <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            The outcomes we strive to achieve through our work.
          </p>
          <div className="max-w-3xl mx-auto glass-card p-8 md:p-12">
            <ul className="space-y-4">
              {intendedImpacts.map((impact, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 border-l-4 border-l-accent">
            <h3 className="text-xl font-display font-semibold mb-4 text-accent">
              Our Commitment
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to transparent and responsible utilization of all resources, 
              including public funds. Every decision we make is evaluated not just for its 
              commercial merit, but for its contribution to sustainable development and 
              the well-being of our communities. We believe that business success and 
              social responsibility are not mutually exclusive—they are complementary.
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
                Join Our Mission
              </h2>
              <p className="text-muted-foreground mb-8">
                Partner with us to create sustainable impact through biotechnology.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Connect With Us
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

export default Impact;
