
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <Layout>
                <div className="pt-32 pb-20 container mx-auto px-4 min-h-[60vh] flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-secondary/50 rounded-full flex items-center justify-center mb-6">
                        <span className="text-4xl">🛒</span>
                    </div>
                    <h1 className="text-3xl font-display font-bold mb-4">Your cart is empty</h1>
                    <p className="text-muted-foreground mb-8 text-lg">
                        Looks like you haven't added any sustainable goodies yet.
                    </p>
                    <Button asChild size="lg">
                        <Link to="/products">Start Shopping</Link>
                    </Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="text-4xl font-display font-bold mb-8">Shopping Cart</h1>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="glass-card p-4 rounded-xl flex gap-4 items-center">
                                <div className="w-20 h-20 bg-secondary/30 rounded-lg flex items-center justify-center shrink-0">
                                    {/* Placeholder for image */}
                                    <span className="font-bold text-xl opacity-50">{item.name.substring(0, 2).toUpperCase()}</span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-primary font-medium">{item.price}</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        <Minus size={14} />
                                    </Button>
                                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        <Plus size={14} />
                                    </Button>
                                </div>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-muted-foreground hover:text-destructive"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <Trash2 size={18} />
                                </Button>
                            </div>
                        ))}

                        <Button variant="outline" className="text-muted-foreground" onClick={clearCart}>
                            Clear Cart
                        </Button>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="glass-card p-6 rounded-xl sticky top-24">
                            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>₹{cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span className="text-green-500">Free</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span>₹{cartTotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <Button asChild className="w-full gap-2" size="lg">
                                <Link to="/checkout">
                                    Proceed to Checkout <ArrowRight size={16} />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
