import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FlaskConical, Database, Cpu, Users, FileCheck, Rocket, ArrowRight, Wheat, Microscope } from 'lucide-react';

const services = {
  nearTerm: [
    {
      icon: FlaskConical,
      title: 'Biocosmetic Products',
      description: 'Production and sale of biocosmetic products derived from natural and bio-based ingredients.',
    },
    {
      icon: Wheat,
      title: 'Functional Foods',
      description: 'Value-added food products based on medicinal mushrooms, traditional millets, and Spirulina.',
    },
    {
      icon: Users,
      title: 'Direct-to-Consumer',
      description: 'D2C and online sales channels ensuring direct reach to environmentally conscious consumers.',
    }
  ],
  ecosystem: [
    {
      icon: Users,
      title: 'Student Mentorship',
      description: 'Technical guidance and mentorship for biotechnology and life-science students.',
    },
    {
      icon: Rocket,
      title: 'Internship Programs',
      description: 'Hands-on internship programs and academic project support for aspiring biotechnologists.',
    },
    {
      icon: FileCheck,
      title: 'Grant Proposals',
      description: 'Preparation and submission of government grant proposals for R&D-focused initiatives.',
    }
  ],
  longTerm: [
    {
      icon: Microscope,
      title: 'Advanced R&D',
      description: 'R&D-driven product development focused on novel formulations and processes.',
    },
    {
      icon: Database,
      title: 'Custom Formulation',
      description: 'Custom formulation and bioprocess development services for industry partners.',
    },
    {
      icon: Cpu,
      title: 'Pilot Studies',
      description: 'Pilot-scale studies, technology validation, and industry–academia collaborative projects.',
    }
  ]
};

const processSteps = [
  { step: '01', title: 'Consultation', description: 'Understanding your unique needs and objectives.' },
  { step: '02', title: 'Strategy', description: 'Developing a tailored plan for research and development.' },
  { step: '03', title: 'Execution', description: 'Rigorous scientific process and quality assurance.' },
  { step: '04', title: 'Delivery', description: 'Providing actionable results and scalable solutions.' },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Services & <span className="gradient-text">Offerings</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From sustainable production to advanced research and ecosystem building,
              we offer comprehensive solutions in biotechnology.
            </p>
          </div>
        </div>
      </section>

      {/* 1. For Customers: Commercial Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-start mb-12 gap-6 md:gap-12">
            <div>
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">For Market</span>
              <h2 className="text-3xl font-display font-bold mt-2 h-fit">
                Commercial <span className="gradient-text">Products</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-left pb-1">
              Ready-to-market sustainable solutions for consumers and industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.nearTerm.map((service) => (
              <div key={service.title} className="glass-card p-8 hover-lift group border-primary/20">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. For Partners: Research & Ecosystem */}
      <section className="py-16 bg-white/40 backdrop-blur-md relative border-y border-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent tracking-wider uppercase">For Partners & Academia</span>
            <h2 className="text-3xl font-display font-bold mt-2">
              Research & <span className="text-accent">Ecosystem</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              We don't just build products; we build the future of biotechnology through mentorship and advanced R&D.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ecosystem Column */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Users className="text-accent" /> Ecosystem Building
              </h3>
              <div className="grid gap-4">
                {services.ecosystem.map((service) => (
                  <div key={service.title} className="glass-card p-6 flex items-start gap-4 hover:shadow-md transition-all">
                    <service.icon className="text-accent shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">{service.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* R&D Column */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Microscope className="text-primary" /> Future R&D
              </h3>
              <div className="grid gap-4">
                {services.longTerm.map((service) => (
                  <div key={service.title} className="glass-card p-6 flex items-start gap-4 hover:shadow-md transition-all">
                    <service.icon className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">{service.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A proven methodology that ensures quality, transparency, and results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="glass-card p-8 text-center h-full">
                  <div className="text-4xl font-display font-bold gradient-text mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight size={20} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Ready to Accelerate Your Research?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how our services can help you achieve your scientific
                and business objectives faster.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/research">View Our Research</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
