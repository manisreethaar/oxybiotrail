
import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard, Product } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router-dom';

// Mock Data - Replace with real data later
// STEALTH MODE: Specific products hidden for patent protection
const RESEARCH_PILLARS = [
    {
        id: '1',
        title: 'Sustainable Nutrition',
        description: 'Developing high-protein functional foods using precision fermentation of indigenous millet and mushroom strains.',
        image: 'https://images.unsplash.com/photo-1621855675471-26c713b41830?w=800&q=80',
        tags: ['Smart Protein', 'Fermentation', 'Food Security']
    },
    {
        id: '2',
        title: 'Green Cosmeceuticals',
        description: 'Extracting bioactive compounds from agricultural by-products to create high-performance, circular skincare solutions.',
        image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=800&q=80',
        tags: ['Circular Economy', 'Bio-Active', 'Upcycling']
    },
    {
        id: '3',
        title: 'Nutraceutical Delivery',
        description: 'Novel encapsulation methods to enhance the bioavailability of traditional herbal extracts.',
        image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80',
        tags: ['Bioavailability', 'Nano-encapsulation', 'Health']
    }
];

// State removed for simpler static display
const Products = () => {
    return (
        <Layout>
            <div className="pt-24 pb-16 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Research <span className="gradient-text">Focus Areas</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            We are currently advancing research in three key domains, aiming to solve critical challenges in nutrition and cosmetics through biotechnology.
                        </p>
                    </div>

                    {/* Research Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {RESEARCH_PILLARS.map((pillar) => (
                            <div key={pillar.id} className="glass-card hover-lift overflow-hidden rounded-2xl group">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <h3 className="text-2xl font-bold text-white font-display">{pillar.title}</h3>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {pillar.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {pillar.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wide">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-16 text-center max-w-2xl mx-auto p-6 bg-amber-50 rounded-xl border border-amber-100 dark:bg-amber-900/10 dark:border-amber-900/20">
                        <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                            * Specific formulations and product details are currently undisclosed pending patent filings.
                            Partner with us for detailed technical disclosures.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Products;
