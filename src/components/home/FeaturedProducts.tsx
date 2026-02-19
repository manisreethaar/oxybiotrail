
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// STEALTH MODE: Specific products hidden
const RESEARCH_HIGHLIGHTS = [
    {
        id: '1',
        title: 'Smart Protein',
        desc: 'Fermentation-derived protein alternatives.',
        icon: '🧬'
    },
    {
        id: '2',
        title: 'Bio-Cosmetics',
        desc: 'Circular skincare from agricultural waste.',
        icon: '🌿'
    },
    {
        id: '3',
        title: 'Nutraceuticals',
        desc: 'Enhanced bioavailability delivery systems.',
        icon: '💊'
    }
];

export function FeaturedProducts() {
    return (
        <section className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/20">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            From Lab to <span className="gradient-text">Life</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Explore our latest prototypes and research breakthroughs.
                            Sustainable solutions currently in development at our TBI labs.
                        </p>
                    </div>
                    <Button variant="outline" className="shrink-0 w-full md:w-auto" asChild>
                        <Link to="/innovations" className="group flex items-center justify-center">
                            View Research Portfolio
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {RESEARCH_HIGHLIGHTS.map((item) => (
                        <div key={item.id} className="glass-card p-8 hover-lift rounded-2xl border border-white/40">
                            <div className="text-4xl mb-6 bg-white/50 w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold font-display mb-3">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
