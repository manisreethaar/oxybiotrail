
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login
        if (email && password) {
            login(email, email.split('@')[0]); // Use part of email as name for mock
            toast({
                title: "Welcome back!",
                description: "You have successfully logged in.",
            });
            navigate("/products");
        } else {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please enter both email and password.",
            });
        }
    };

    return (
        <Layout>
            <div className="pt-32 pb-20 container mx-auto px-4 flex justify-center items-center min-h-[80vh]">
                <div className="w-full max-w-md glass-card p-8 rounded-xl border border-border/50">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-display font-bold mb-2">Welcome Back</h1>
                        <p className="text-muted-foreground">Sign in to continue to Oxygen Bioinnovations</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link to="#" className="text-xs text-primary hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
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
                            Sign In
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-muted-foreground">Don't have an account? </span>
                        <Link to="/signup" className="text-primary hover:underline font-medium">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
