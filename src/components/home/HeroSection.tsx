import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, FlaskConical, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20">
      {/* Background Effects - Toned Down */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 mix-blend-multiply animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Floating Elements - More opacity and playful */}
      <div className="absolute top-1/3 right-[15%] animate-float opacity-60 mix-blend-multiply">
        <Leaf size={60} className="text-primary fill-primary/20" />
      </div>
      <div className="absolute bottom-1/3 left-[10%] animate-float opacity-50 mix-blend-multiply" style={{ animationDelay: '1.5s' }}>
        <FlaskConical size={50} className="text-accent fill-accent/20" />
      </div>
      <div className="absolute top-1/2 right-[8%] animate-float opacity-60 mix-blend-multiply" style={{ animationDelay: '3s' }}>
        <Sparkles size={40} className="text-purple-500 fill-purple-300" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Giant Text Blob - Subtle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/5 via-purple-500/5 to-accent/5 blur-[80px] rounded-full pointer-events-none -z-10" />

          {/* Company Name */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Precision Biology</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-none mb-8 animate-fade-in tracking-tighter text-foreground relative" style={{ animationDelay: '0.1s' }}>
            Nature's Blueprint.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent">Perfected by Science.</span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-display font-bold mb-8 animate-fade-in text-slate-800" style={{ animationDelay: '0.15s' }}>
            Innovate. Engage. Transform.
          </p>

          {/* Purpose Statement */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed font-medium" style={{ animationDelay: '0.2s' }}>
            We continuously innovate to bring you high-performance biocosmetic
            and functional foods that are <span className="text-primary font-bold">good for you</span> and the <span className="text-accent font-bold">planet</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="h-16 px-10 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all bg-primary hover:bg-primary/90 text-white font-bold tracking-wide transform hover:-translate-y-1" asChild>
              <Link to="/products">
                Shop Products
                <ArrowRight size={24} className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-primary text-slate-700 font-bold tracking-wide transform hover:-translate-y-1" asChild>
              <Link to="/services">Research Services</Link>
            </Button>
          </div>

          {/* Key Focus Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              'Sustainable Biocosmetics',
              'Functional Foods',
              'Bioprocess Engineering',
              'Circular Bioeconomy',
            ].map((focus) => (
              <span
                key={focus}
                className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-white/50 shadow-sm text-base font-semibold text-primary hover:bg-white hover:scale-105 transition-all cursor-default select-none"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
