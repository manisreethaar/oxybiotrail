import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: 'none' | 'short' | 'medium' | 'long';
}

export function ScrollReveal({ children, className, delay = 'short' }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: '0px 0px -50px 0px', // Offset slightly so it triggers before bottom
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const delayClass = {
        none: 'delay-0',
        short: 'delay-100',
        medium: 'delay-200',
        long: 'delay-300',
    }[delay];

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1000 ease-out transform',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
                delayClass,
                className
            )}
        >
            {children}
        </div>
    );
}
