
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import { Link } from 'react-router-dom';

// Using a subset of products for the homepage
// Using a subset of products for the homepage
const FEATURED_PRODUCTS = [
    {
        id: '1',
        name: 'Chettinad Mushroom Jerky',
        description: 'Air-dried Oyster mushrooms marinated in traditional spices. A savory snack that mimics meat texture without the guilt.',
        price: '₹249.00',
        image: 'https://images.unsplash.com/photo-1621855675471-26c713b41830?w=800&q=80',
        category: 'food' as const,
        benefits: ['High Protein', 'Meat-like Texture'],
        badge: 'First in India',
    },
    {
        id: '4',
        name: 'Zero-Waste Myco-Scrub',
        description: 'Upcycled mushroom fibers into luxury skincare. A sustainable, gentle exfoliant.',
        price: '₹599.00',
        image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=800&q=80',
        category: 'cosmetics' as const,
        benefits: ['Circular Economy', 'Plastic-Free'],
        badge: 'Best Seller',
    },
    {
        id: '3',
        name: 'Heme-Boost Spirulina Bar',
        description: 'The only energy bar scientifically formulated with Amla to unlock the iron absorption of Spirulina.',
        price: '₹120.00',
        image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80',
        category: 'food' as const,
        benefits: ['Iron Boost', 'Instant Energy'],
        badge: 'Unique Formula',
    }
];

export function FeaturedProducts() {
    return (
        <section className="py-8 relative overflow-hidden">
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
                            View All Innovations
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURED_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
