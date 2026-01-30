
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

// Types
export interface CartItem {
    id: string;
    name: string;
    price: string; // Store as string with symbol, handle parsing internally
    numericPrice: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: any, quantity?: number) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const { toast } = useToast();

    // Load cart from local storage
    useEffect(() => {
        const storedCart = localStorage.getItem('oxygen_cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to local storage
    useEffect(() => {
        localStorage.setItem('oxygen_cart', JSON.stringify(cart));
    }, [cart]);

    const parsePrice = (priceStr: string) => {
        // Remove symbols and commas
        const numericStr = priceStr.replace(/[^0-9.]/g, '');
        return parseFloat(numericStr) || 0;
    };

    const addToCart = (product: any, quantity: number = 1) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                toast({
                    title: "Added to cart",
                    description: `Updated quantity for ${product.name}`,
                });
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                toast({
                    title: "Added to cart",
                    description: `${product.name} has been added to your cart`,
                });
                return [...prevCart, {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    numericPrice: parsePrice(product.price),
                    image: product.image,
                    quantity
                }];
            }
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(id);
            return;
        }
        setCart(prevCart => prevCart.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.reduce((total, item) => total + (item.numericPrice * item.quantity), 0);
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, itemCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
