
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email && password) {
            // Mock signup + login
            login(email, name);
            toast({
                title: "Account created!",
                description: "Welcome to Oxygen Bioinnovations.",
            });
            navigate("/products");
        } else {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please fill in all fields.",
            });
        }
    };

    return (
        <Layout>
            <div className="pt-32 pb-20 container mx-auto px-4 flex justify-center items-center min-h-[80vh]">
                <div className="w-full max-w-md glass-card p-8 rounded-xl border border-border/50">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-display font-bold mb-2">Create Account</h1>
                        <p className="text-muted-foreground">Join the future of clean consumption</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="bg-background/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-background/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-background/50"
                            />
                        </div>
                        <Button type="submit" className="w-full h-11">
                            Sign Up
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-muted-foreground">Already have an account? </span>
                        <Link to="/login" className="text-primary hover:underline font-medium">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;
