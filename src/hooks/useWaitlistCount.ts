import { useState, useEffect } from 'react';

const WAITLIST_KEY = 'oxybiotrail_waitlist_count';
const WAITLIST_EVENT = 'waitlist-updated';

export const useWaitlistCount = (initialCount: number = 0) => {
    // Initialize from localStorage or use the provided initial count
    const [count, setCount] = useState<number>(() => {
        const saved = localStorage.getItem(WAITLIST_KEY);
        if (saved !== null) {
            return parseInt(saved, 10);
        }
        return initialCount;
    });

    // Listen for custom events from other components taking the same hook
    useEffect(() => {
        const handleUpdate = (e: Event) => {
            const customEvent = e as CustomEvent<{ count: number }>;
            setCount(customEvent.detail.count);
        };

        window.addEventListener(WAITLIST_EVENT, handleUpdate);
        return () => window.removeEventListener(WAITLIST_EVENT, handleUpdate);
    }, []);

    // Function to manually increment the count
    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem(WAITLIST_KEY, newCount.toString());

        // Dispatch event so other components update instantly
        window.dispatchEvent(
            new CustomEvent(WAITLIST_EVENT, { detail: { count: newCount } })
        );
    };

    return { count, increment };
};
