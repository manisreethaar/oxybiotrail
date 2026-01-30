
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Subscribed!",
            description: "Welcome to the Oxygen BioInnovations community.",
        });
        setEmail("");
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-accent/20 backdrop-blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center border-primary/20">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Join the <span className="gradient-text">Bio-Revolution</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Stay ahead of the curve. Get the latest insights on sustainable biotechnology,
                        new product launches, and industry trends delivered to your inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-white/50 border-white/40 h-12"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button type="submit" size="lg" variant="hero" className="h-12 px-8">
                            Subscribe
                            <Send size={16} className="ml-2" />
                        </Button>
                    </form>
                    <p className="text-xs text-muted-foreground mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
}
