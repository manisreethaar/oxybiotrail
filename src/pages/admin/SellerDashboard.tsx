
import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, CheckCircle, Truck, Clock, ShieldAlert } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";

const SellerDashboard = () => {
    const { getAllOrders, updateOrderStatus, user } = useAuth(); // Get user
    const [orders, setOrders] = useState<any[]>([]);
    const { toast } = useToast();
    const navigate = useNavigate();

    // Refresh orders
    useEffect(() => {
        setOrders(getAllOrders());
    }, []);

    // Admin Guard
    if (!user || user.role !== 'admin') {
        return (
            <Layout>
                <div className="pt-32 pb-20 container mx-auto px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
                    <ShieldAlert size={64} className="text-destructive mb-4" />
                    <h1 className="text-3xl font-display font-bold mb-2">Access Denied</h1>
                    <p className="text-muted-foreground mb-8">
                        This area is restricted to authorized sellers only.
                    </p>
                    <div className="bg-secondary/50 p-6 rounded-xl max-w-sm w-full border border-border/50">
                        <h3 className="font-bold mb-2">Demo Access</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            To test this feature, log out and log in with an admin email.
                        </p>
                        <p className="text-sm font-mono bg-background p-2 rounded mb-4">admin@oxygenbio.com</p>
                        <div className="flex gap-2 justify-center">
                            <Button variant="outline" asChild><Link to="/">Home</Link></Button>
                            <Button asChild><Link to="/login">Login</Link></Button>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    const handleStatusUpdate = (orderId: string, newStatus: any) => {
        updateOrderStatus(orderId, newStatus);
        setOrders(getAllOrders()); // Refresh local view
        toast({
            title: "Order Updated",
            description: `Order #${orderId} marked as ${newStatus}`,
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Processing': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
            case 'Shipped': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
            case 'Delivered': return 'bg-green-500/10 text-green-500 border-green-500/20';
            default: return 'bg-secondary text-muted-foreground';
        }
    };

    return (
        <Layout>
            <div className="pt-32 pb-20 container mx-auto px-4 min-h-[80vh]">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-display font-bold">Seller Dashboard</h1>
                        <p className="text-muted-foreground">Manage your incoming orders and status.</p>
                    </div>
                    <Button variant="outline" onClick={() => setOrders(getAllOrders())}>Refresh Data</Button>
                </div>

                <div className="glass-card rounded-xl">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Items</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                                        No orders received yet.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                orders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell className="font-mono font-medium">#{order.id}</TableCell>
                                        <TableCell>{order.date}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{order.customerName}</span>
                                                <span className="text-xs text-muted-foreground">{order.customerEmail}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">
                                                {order.items.map(i => i.name).join(', ')}
                                                <span className="text-muted-foreground"> ({order.items.reduce((a, b) => a + b.quantity, 0)})</span>
                                            </span>
                                        </TableCell>
                                        <TableCell className="font-bold">₹{order.total.toFixed(2)}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={getStatusColor(order.status)}>
                                                {order.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreVertical size={16} />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onClick={() => handleStatusUpdate(order.id, 'Processing')}>
                                                        <Clock className="mr-2 h-4 w-4" /> Mark Processing
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleStatusUpdate(order.id, 'Shipped')}>
                                                        <Truck className="mr-2 h-4 w-4" /> Mark Shipped
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleStatusUpdate(order.id, 'Delivered')}>
                                                        <CheckCircle className="mr-2 h-4 w-4" /> Mark Delivered
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </Layout>
    );
};

export default SellerDashboard;
