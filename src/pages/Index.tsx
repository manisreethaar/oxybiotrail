import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { OverviewSection } from '@/components/home/OverviewSection';
import { FocusAreas } from '@/components/home/FocusAreas';
import { CTASection } from '@/components/home/CTASection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Newsletter } from '@/components/home/Newsletter';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* 1. The Problem - Sustainability Gap - Glassmorphism */}
      <section className="py-12 bg-white/40 backdrop-blur-sm border-y border-white/40">
        <ScrollReveal>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="glass-card p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground relative z-10">
                Bridging the <span className="gradient-text">Sustainability Gap</span>
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed font-light relative z-10">
                We address the critical need for sustainable alternatives in the cosmetics and food industries,
                reducing reliance on synthetic chemicals and resource-heavy production through
                <span className="font-semibold text-primary"> indigenous innovation</span>.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. The How - Technology / Focus Areas */}
      <div className="bg-white/40 backdrop-blur-sm border-y border-white/40 py-12">
        <ScrollReveal delay="medium">
          <FocusAreas />
        </ScrollReveal>
      </div>

      {/* 3. The What - Featured Products */}
      <ScrollReveal>
        <FeaturedProducts />
      </ScrollReveal>

      {/* 4. Overview/Impact - Transparent */}
      <ScrollReveal delay="medium">
        <OverviewSection />
      </ScrollReveal>

      {/* 5. CTA - Minimalist */}
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>

      {/* 6. Newsletter Signup */}
      <ScrollReveal delay="medium">
        <Newsletter />
      </ScrollReveal>
    </Layout>
  );
};

export default Index;
