
import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard, Product } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router-dom';

// Mock Data - Replace with real data later
const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Chettinad Mushroom Jerky',
        description: 'Air-dried Oyster mushrooms marinated in traditional spices. A high-protein, chewy, savory snack that mimics meat texture without the guilt.',
        price: '₹249.00',
        image: 'https://images.unsplash.com/photo-1621855675471-26c713b41830?w=800&q=80',
        category: 'food',
        benefits: ['High Protein', 'Meat-like Texture', 'Zero Cholesterol'],
        badge: 'First in India',
    },
    {
        id: '2',
        name: 'Bio-Active Enzyme Millet Mix',
        description: "Unlike standard health mixes, we use 'Living Sprouting Technology' to boost enzymatic activity, ensuring 3x better digestion for kids and elderly.",
        price: '₹399.00',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80',
        category: 'food',
        benefits: ['3x Better Digestion', 'Sprouted Millets', 'No Added Sugar'],
        badge: 'Lab-Verified Absorption',
    },
    {
        id: '3',
        name: 'Heme-Boost Spirulina Bar',
        description: 'The only energy bar scientifically formulated with Amla to unlock the iron absorption of Spirulina. Essential for fighting fatigue.',
        price: '₹120.00',
        image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80',
        category: 'food',
        benefits: ['Iron Boost', 'Vitamin-C Rich', 'Instant Energy'],
        badge: 'With Natural Vitamin-C',
    },
    {
        id: '4',
        name: 'Zero-Waste Myco-Scrub',
        description: 'Upcycled mushroom fibers blended with essential oils. A sustainable, gentle exfoliant that turns farm waste into luxury skincare.',
        price: '₹599.00',
        image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=800&q=80',
        category: 'cosmetics',
        benefits: ['Upcycled Fibers', 'Gentle Exfoliation', 'Plastic-Free'],
        badge: 'Circular Economy',
    },
    // Handmade Bio-Cosmetics (Reclassified)
    {
        id: '5',
        name: 'Seri-Glow Silk Soap',
        tagline: 'Infused with Native Silk Protein.',
        description: 'Handcrafted cold-process soap rich in Sericin protein to repair skin barriers. Sourced from local sericulture waste (Upcycled).',
        price: '₹299.00',
        image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800&q=80',
        category: 'cosmetics',
        benefits: ['Skin Barrier Repair', 'Upcycled Silk', 'Cold Processed'],
        badge: 'Handmade',
    },
    {
        id: '6',
        name: 'Ferment-X Hair Mist',
        tagline: 'Controlled Fermentation Technology.',
        description: 'Rice water fermented to the exact pH for hair strengthening, stabilized with essential oils. No sour smell, just science.',
        price: '₹449.00',
        image: 'https://images.unsplash.com/photo-1526947425960-94d0c9f136a7?w=800&q=80',
        category: 'cosmetics',
        benefits: ['pH Balanced', 'Hair Strengthening', 'Natural Shine'],
        badge: 'Handmade',
    },
    {
        id: '7',
        name: 'Spirulina Bio-Dust Mask',
        tagline: 'Waterless. Preservative-Free.',
        description: 'A dry-active blend of Kaolin clay and Spirulina algae. Activates only when you mix it.',
        price: '₹349.00',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
        category: 'cosmetics',
        benefits: ['Preservative Free', 'Fresh Activation', 'Detoxifying'],
        badge: 'Handmade',
    },
    {
        id: '8',
        name: 'Chromo-Lip Bio-Tint',
        tagline: 'Edible-Grade Pigments.',
        description: 'Natural red tint derived from Alkanet root and Beetroot. Zero synthetic dyes.',
        price: '₹199.00',
        image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&q=80',
        category: 'cosmetics',
        benefits: ['Synthetic Dye Free', 'Edible Grade', 'Long Lasting'],
        badge: 'Handmade',
    },
    {
        id: '9',
        name: 'Vettiver Cold-Infusion Oil',
        tagline: 'Solar-Extracted Hydration.',
        description: 'Vettiver roots macerated in cold-pressed oil for 21 days to preserve heat-sensitive phyto-compounds.',
        price: '₹399.00',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
        category: 'cosmetics',
        benefits: ['Cold Infused', 'Cooling Effect', 'Aromatherapeutic'],
        badge: 'Handmade',
    }
];

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');
    const [activeCategory, setActiveCategory] = useState<'all' | 'cosmetics' | 'food'>('all');

    useEffect(() => {
        if (categoryParam === 'cosmetics' || categoryParam === 'food') {
            setActiveCategory(categoryParam);
        } else {
            setActiveCategory('all');
        }
    }, [categoryParam]);

    const handleCategoryChange = (category: 'all' | 'cosmetics' | 'food') => {
        setActiveCategory(category);
        setSearchParams(category === 'all' ? {} : { category });
    };

    const filteredProducts = activeCategory === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <Layout>
            <div className="pt-24 pb-16 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Science-Led <span className="gradient-text">Commerce</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Experience the future of biotechnology with our curated collection of
                            sustainable cosmetics and functional foods.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center gap-4 mb-12 flex-wrap">
                        <Button
                            variant={activeCategory === 'all' ? 'hero' : 'ghost'}
                            onClick={() => handleCategoryChange('all')}
                        >
                            All Products
                        </Button>
                        <Button
                            variant={activeCategory === 'cosmetics' ? 'hero' : 'ghost'}
                            onClick={() => handleCategoryChange('cosmetics')}
                        >
                            Biocosmetics
                        </Button>
                        <Button
                            variant={activeCategory === 'food' ? 'hero' : 'ghost'}
                            onClick={() => handleCategoryChange('food')}
                        >
                            Functional Foods
                        </Button>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Products;
