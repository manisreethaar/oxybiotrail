import { Beaker, TrendingUp } from 'lucide-react';

export function OverviewSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Our <span className="gradient-text">Dual Approach</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We integrate commercial production with research-driven innovation,
            creating sustainable value from India's rich biological resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Commercial Production */}
          <div className="glass-card p-6 md:p-8 hover-lift group">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <TrendingUp size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">
              Commercial Production
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Small-scale, sustainable manufacturing of value-added biocosmetic and food products
              with focus on market readiness and employment generation.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Market-ready product development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                MSME loan-supported operations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Direct-to-consumer distribution
              </li>
            </ul>
          </div>

          {/* Research & Innovation */}
          <div className="glass-card p-6 md:p-8 hover-lift group">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Beaker size={28} className="text-accent" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-accent transition-colors">
              Research & Innovation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Structured R&D activities focusing on bioprocess optimization, fermentation technologies,
              and advanced natural formulations.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Government grant-supported R&D
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Academic collaborations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Microbial technology advancement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
