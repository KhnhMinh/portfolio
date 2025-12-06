import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
    roles: string[];
    className?: string;
}

export const TypingAnimation = ({ roles, className = '' }: TypingAnimationProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const currentRole = roles[currentIndex];
        let timeoutId: ReturnType<typeof setTimeout>;
        
        if (isTyping && !isDeleting) {
            // Typing phase - fast scroll then slow down
            if (displayText.length < currentRole.length) {
                timeoutId = setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                }, displayText.length < 10 ? 50 : 70); // Fast at start, slower later
            } else {
                // Finished typing, pause for 3 seconds
                timeoutId = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            }
        } else if (isDeleting) {
            // Deleting phase - fast scroll
            if (displayText.length > 0) {
                timeoutId = setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length - 1));
                }, 20); // Fast deletion
            } else {
                // Finished deleting, move to next role with scroll animation
                timeoutId = setTimeout(() => {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % roles.length);
                    setIsTyping(true);
                }, 200);
            }
        }
        
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [displayText, isDeleting, currentIndex, roles, isTyping]);

    return (
        <span className={className}>
            <span className="inline-block">
                {displayText}
            </span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block ml-1"
            >
                |
            </motion.span>
        </span>
    );
};

