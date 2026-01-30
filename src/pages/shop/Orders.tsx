
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Clock, CheckCircle } from "lucide-react";

const Orders = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    // Redirect if not logged in
    if (!user) {
        return (
            <Layout>
                <div className="pt-32 pb-20 container mx-auto px-4 text-center">
                    <h1 className="text-2xl font-bold mb-4">Please log in to view orders</h1>
                    <Button asChild><Link to="/login">Login</Link></Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="pt-32 pb-20 container mx-auto px-4 min-h-[60vh]">
                <h1 className="text-3xl font-display font-bold mb-2">My Orders</h1>
                <p className="text-muted-foreground mb-8">Track your sustainable tech purchases.</p>

                {user.orders.length === 0 ? (
                    <div className="text-center py-12 glass-card rounded-xl">
                        <Package size={48} className="mx-auto mb-4 opacity-50" />
                        <h2 className="text-xl font-bold mb-2">No orders yet</h2>
                        <Button asChild variant="link"><Link to="/products">Start Shopping</Link></Button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {user.orders.map((order) => (
                            <div key={order.id} className="glass-card p-6 rounded-xl">
                                <div className="flex flex-wrap justify-between items-center mb-4 border-b pb-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Order ID</p>
                                        <p className="font-mono font-bold">#{order.id}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-muted-foreground">Date</p>
                                        <p>{order.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        {order.status === 'Delivered' ? <CheckCircle size={14} /> : <Clock size={14} />}
                                        {order.status}
                                    </div>
                                </div>

                                <div className="space-y-2 mb-4">
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className="flex justify-between text-sm">
                                            <span>{item.name} <span className="text-muted-foreground">x{item.quantity}</span></span>
                                            <span>{item.price}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-2 font-bold text-lg">
                                    <span>Total</span>
                                    <span>₹{order.total.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Orders;
