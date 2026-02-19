import { Button } from "@/components/ui/button";
import { Leaf, Sparkles, FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string; // Kept for type compatibility, but not rendered
    category: "cosmetics" | "food" | "handmade";
    benefits: string[];
    badge?: string;
    tagline?: string;
}

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const isHandmade = product.category === 'handmade';

    // Generate Initials
    const initials = product.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();

    // Select color based on category
    const bgGradient = product.category === 'cosmetics'
        ? "from-pink-500/20 to-purple-600/20"
        : product.category === 'food'
            ? "from-emerald-500/20 to-teal-500/20"
            : "from-amber-500/20 to-orange-500/20";

    const textColor = product.category === 'cosmetics'
        ? "text-pink-600"
        : product.category === 'food'
            ? "text-emerald-600"
            : "text-amber-700";

    return (
        <div className={cn(
            "overflow-hidden group hover-lift flex flex-col h-full transition-all duration-300 rounded-2xl",
            isHandmade ? "glass-card border-amber-200/50 shadow-amber-100/50" : "glass-card hover:shadow-primary/20"
        )}>
            {/* Text Placeholder Area */}
            <div className={cn(
                "relative aspect-square flex items-center justify-center bg-gradient-to-br p-6",
                bgGradient
            )}>
                {product.badge && (
                    <div className={cn(
                        "absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10",
                        isHandmade
                            ? "bg-[#D4A373] text-white"
                            : "bg-primary text-primary-foreground"
                    )}>
                        {product.badge}
                    </div>
                )}

                {/* Sales Urgency Badge (Demo Logic) */}
                <div className="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded border border-blue-500/50 bg-blue-500/10 text-blue-600">
                    🔬 Prototype
                </div>

                <div className={cn(
                    "text-6xl font-display font-bold opacity-20 select-none",
                    textColor
                )}>
                    {initials}
                </div>

                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 justify-center">
                    <span className="text-sm font-medium text-primary bg-white/90 px-4 py-2 rounded-full shadow-lg">View Specs</span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                    <div className={cn(
                        "flex items-center gap-2 text-xs font-medium uppercase tracking-wide",
                        isHandmade ? "text-amber-700" : "text-primary"
                    )}>
                        {product.category === 'cosmetics' ? <Sparkles size={12} /> : <Leaf size={12} />}

                        {product.category === 'cosmetics' ? 'Biocosmetics' :
                            product.category === 'handmade' ? 'Handmade' : 'Functional Food'}
                    </div>
                    {/* Removed Price */}
                </div>

                <h3 className={cn("text-xl font-display font-bold mb-1 transition-colors group-hover:text-primary")}>
                    {product.name}
                </h3>

                {product.tagline && (
                    <p className="text-xs font-medium text-muted-foreground mb-3 italic">
                        {product.tagline}
                    </p>
                )}

                <p className="text-sm mb-4 flex-1 text-muted-foreground">
                    {product.description}
                </p>

                <Button
                    variant="outline"
                    className="w-full gap-2 mt-4 group-hover:bg-primary group-hover:text-white transition-all"
                >
                    <FlaskConical size={16} />
                    View Research Data
                </Button>
            </div>
        </div>
    );
}
