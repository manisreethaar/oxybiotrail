import { Sparkles, Wheat, FlaskConical, Recycle } from 'lucide-react';

const focusAreas = [
  {
    icon: Sparkles,
    title: 'Sustainable Biocosmetics',
    description: 'Natural and bio-derived cosmetic formulations using advanced bioprocessing and eco-friendly ingredients.',
  },
  {
    icon: Wheat,
    title: 'Functional Foods',
    description: 'Value-added food products from medicinal mushrooms, traditional millets, and nutrient-rich Spirulina.',
  },
  {
    icon: FlaskConical,
    title: 'Bioprocess Engineering',
    description: 'Fermentation-based extraction and processing technologies for natural product transformation.',
  },
  {
    icon: Recycle,
    title: 'Circular Bioeconomy',
    description: 'Sustainable manufacturing aligned with circular economy principles and responsible resource utilization.',
  },
];

export function FocusAreas() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Key <span className="gradient-text">Focus Areas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We concentrate our expertise on domains where biotechnology
            can create sustainable, commercially viable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="group glass-card p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <area.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
