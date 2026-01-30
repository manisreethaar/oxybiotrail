
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Support = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        orderId: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            toast({
                title: "Request Received",
                description: "Our support team will get back to you within 24 hours.",
            });
            setFormData({ name: "", email: "", orderId: "", message: "" });
        }, 1000);
    };

    return (
        <Layout>
            <div className="pt-32 pb-20 container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-display font-bold mb-4">Customer Support</h1>
                    <p className="text-muted-foreground text-lg">
                        Need help with an order or have questions about our products? We're here to assist you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass-card p-8 rounded-xl">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Mail className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Email Us</h3>
                                        <p className="text-muted-foreground">support@oxygenbio.com</p>
                                        <p className="text-muted-foreground">sales@oxygenbio.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Phone className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Call Us</h3>
                                        <p className="text-muted-foreground">+91 (800) 123-4567</p>
                                        <p className="text-sm text-muted-foreground">Mon-Fri, 9am - 6pm IST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <MapPin className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Visit Us</h3>
                                        <p className="text-muted-foreground">
                                            Oxygen Bioinnovations Lab<br />
                                            Tech Park, Bangalore<br />
                                            Karnataka, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support Form */}
                    <div className="glass-card p-8 rounded-xl">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="orderId">Order ID (Optional)</Label>
                                <Input
                                    id="orderId"
                                    placeholder="#12345"
                                    value={formData.orderId}
                                    onChange={e => setFormData({ ...formData, orderId: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="How can we help you?"
                                    className="min-h-[120px]"
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full gap-2">
                                <Send size={16} /> Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Support;
