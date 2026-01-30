import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="glass-card p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4">
              Collaborate With Us
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We welcome partnerships with investors, research institutions,
              government agencies, and industry collaborators who share our vision
              for sustainable biotechnology innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Building, label: 'Investors & Incubators' },
                { icon: Users, label: 'Research Partners' },
                { icon: Handshake, label: 'Industry Collaborators' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-center gap-3 text-muted-foreground">
                  <item.icon size={20} className="text-primary" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Partner With Us
                  <Handshake size={18} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products">
                  Shop Our Products
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
