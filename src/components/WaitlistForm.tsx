import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { useWaitlistCount } from '@/hooks/useWaitlistCount';

interface WaitlistFormProps {
    variant?: 'hero' | 'footer' | 'card';
}

export const WaitlistForm = ({ variant = 'hero' }: WaitlistFormProps) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { toast } = useToast();
    const { count, increment } = useWaitlistCount(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSuccess(true);
        increment();
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
        <form onSubmit={handleSubmit} className={`relative max-w-lg w-full ${variant === 'hero' ? 'mx-auto' : ''}`}>
            <div className="flex flex-col md:flex-row gap-3 md:gap-2">
                <Input
                    type="text"
                    placeholder="First Name"
                    required
                    className={`h-12 md:h-12 rounded-xl md:rounded-full px-6 transition-all w-full md:w-1/3 ${variant === 'footer'
                        ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20'
                        : 'bg-white border-slate-200 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 shadow-sm'
                        }`}
                />
                <Input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`h-12 md:h-12 rounded-xl md:rounded-full px-6 transition-all w-full md:w-2/3 ${variant === 'footer'
                        ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20'
                        : 'bg-white border-slate-200 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 shadow-sm'
                        }`}
                />
                <Button
                    type="submit"
                    disabled={isLoading}
                    className={`h-12 md:h-12 rounded-xl md:rounded-full px-8 transition-all whitespace-nowrap w-full md:w-auto ${variant === 'footer'
                        ? 'bg-white text-primary hover:bg-white/90 w-full mt-2 md:mt-0'
                        : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 mt-2 md:mt-0'
                        }`}
                >
                    {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <>
                            Join Waitlist
                        </>
                    )}
                </Button>
            </div>
            {variant === 'hero' && (
                <div className="mt-4 text-center space-y-2">
                    <p className="text-xs font-bold text-primary tracking-wide uppercase">
                        Get Early Access
                    </p>

                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                        No payment. No commitment. Cancel anytime.
                    </p>
                </div>
            )}

            <p className="absolute -bottom-6 left-0 w-full text-center text-[10px] text-slate-500 dark:text-slate-400">
                By joining, you agree to our <a href="/privacy" className="underline hover:text-slate-600 dark:hover:text-slate-300">Privacy Policy</a>
            </p>
        </form>
    );
};
