import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

interface WaitlistFormProps {
    variant?: 'hero' | 'footer' | 'card';
}

export const WaitlistForm = ({ variant = 'hero' }: WaitlistFormProps) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSuccess(true);
        toast({
            title: "Welcome to the Inner Circle! 🌿",
            description: "You've been added to our exclusive pre-launch waitlist.",
        });

        // Reset after showing success state
        setTimeout(() => {
            setIsSuccess(false);
            setEmail('');
        }, 5000);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-xl border border-green-200 ${variant === 'footer' ? 'bg-white/10 text-white border-white/20' : ''}`}
            >
                <CheckCircle2 size={20} />
                <span className="font-medium">You're on the list! Watch your inbox.</span>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`relative max-w-md w-full ${variant === 'hero' ? 'mx-auto' : ''}`}>
            <div className="flex gap-2">
                <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`h-12 rounded-full px-6 bg-white/80 border-slate-200 focus:ring-2 focus:ring-primary/20 transition-all ${variant === 'footer'
                            ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20'
                            : 'shadow-sm'
                        }`}
                />
                <Button
                    type="submit"
                    disabled={isLoading}
                    className={`h-12 rounded-full px-6 transition-all ${variant === 'footer'
                            ? 'bg-white text-primary hover:bg-white/90'
                            : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20'
                        }`}
                >
                    {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <>
                            {variant === 'hero' ? 'Join Waitlist' : 'Join'}
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                    )}
                </Button>
            </div>
            {variant === 'hero' && (
                <p className="text-xs text-muted-foreground mt-3 text-center">
                    Join 850+ researchers & innovators waiting for launch.
                </p>
            )}
        </form>
    );
};
