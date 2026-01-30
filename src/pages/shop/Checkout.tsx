
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const { user, addOrder } = useAuth();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: user?.name || "",
        address: "",
        city: "",
        zip: "",
        paymentMethod: "card"
    });

    if (cart.length === 0) {
        navigate('/cart');
        return null;
    }

    const handlePlaceOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate payment processing
        setTimeout(() => {
            const newOrder: any = {
                id: Math.random().toString(36).substr(2, 9).toUpperCase(),
                date: new Date().toLocaleDateString(),
                customerName: formData.name,
                customerEmail: user?.email || 'guest@example.com',
                status: 'Processing',
                items: cart,
                total: cartTotal
            };

            addOrder(newOrder);
            clearCart();
            setLoading(false);

            toast({
                title: "Order Placed Successfully! 🎉",
                description: `Order #${newOrder.id} is being processed.`,
            });

            navigate('/orders');
        }, 2000);
    };

    return (
        <Layout>
            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="text-3xl font-display font-bold mb-8">Checkout</h1>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Shipping Form */}
                    <div className="space-y-8">
                        <div className="glass-card p-6 rounded-xl">
                            <h2 className="text-xl font-bold mb-4">Shipping Area</h2>
                            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input
                                        id="address"
                                        value={formData.address}
                                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                                        required
                                        placeholder="Street address"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input
                                            id="city"
                                            value={formData.city}
                                            onChange={e => setFormData({ ...formData, city: e.target.value })}
                                            required
                                            placeholder="City"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="zip">PIN Code</Label>
                                        <Input
                                            id="zip"
                                            value={formData.zip}
                                            onChange={e => setFormData({ ...formData, zip: e.target.value })}
                                            required
                                            placeholder="123456"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="glass-card p-6 rounded-xl">
                            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                            <RadioGroup defaultValue="card" onValueChange={val => setFormData({ ...formData, paymentMethod: val })}>
                                <div className="flex items-center space-x-2 border p-3 rounded-lg bg-background/50">
                                    <RadioGroupItem value="card" id="card" />
                                    <Label htmlFor="card">Credit/Debit Card</Label>
                                </div>
                                <div className="flex items-center space-x-2 border p-3 rounded-lg bg-background/50">
                                    <RadioGroupItem value="upi" id="upi" />
                                    <Label htmlFor="upi">UPI / Net Banking</Label>
                                </div>
                                <div className="flex items-center space-x-2 border p-3 rounded-lg bg-background/50">
                                    <RadioGroupItem value="cod" id="cod" />
                                    <Label htmlFor="cod">Cash On Delivery</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>

                    {/* Order Review */}
                    <div>
                        <div className="glass-card p-6 rounded-xl sticky top-24">
                            <h2 className="text-xl font-bold mb-4">Your Order</h2>
                            <div className="space-y-4 max-h-60 overflow-y-auto mb-4">
                                {cart.map(item => (
                                    <div key={item.id} className="flex justify-between items-center text-sm">
                                        <span>{item.name} <span className="text-muted-foreground">x{item.quantity}</span></span>
                                        <span>{item.price}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t pt-4 mt-4 space-y-2">
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total to Pay</span>
                                    <span>₹{cartTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                form="checkout-form"
                                className="w-full mt-6"
                                size="lg"
                                disabled={loading}
                            >
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {loading ? "Processing..." : "Place Order"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
