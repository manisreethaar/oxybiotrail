import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  Beaker,
  Building2,
  Users,
  ArrowRight,
  Linkedin,
  Mail
} from 'lucide-react';

const expertise = [
  { icon: Beaker, label: 'Bioprocessing' },
  { icon: GraduationCap, label: 'Nanoscience' },
  { icon: Building2, label: 'Industrial R&D' },
  { icon: Users, label: 'Research Mentoring' },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Led by experienced professionals combining scientific expertise
              with entrepreneurial vision.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile - Hidden for now */}
      {/* 
      <section className="py-16">
        <div className="container mx-auto px-4">
           ... (Founder details hidden)
        </div>
      </section> 
      */}

      {/* Growing Team */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Building Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As an early-stage startup, we are actively building our team. We seek passionate
              individuals who share our vision for sustainable biotechnology and want to be
              part of building something meaningful from the ground up.
            </p>
            <div className="glass-card p-8 inline-block">
              <p className="text-sm text-muted-foreground mb-4">
                Interested in joining our journey?
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  <Mail size={16} className="mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Learn More About Our Work
              </h2>
              <p className="text-muted-foreground mb-8">
                Explore our research focus and the impact we aim to create.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/research">
                    Our Research
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/impact">View Impact</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
