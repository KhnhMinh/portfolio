import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-6'}`}
            >
                <div
                    className={`
            flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full 
            transition-all duration-300
            ${isScrolled
                            ? 'bg-black/50 backdrop-blur-xl border border-white/10 shadow-lg shadow-blue-500/10'
                            : 'bg-transparent border border-transparent'
                        }
          `}
                >
                    <a href="#" className="text-xl font-bold tracking-tight">
                        LeKhanhMinh<span className="text-blue-500">.</span>
                    </a>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>

                        <div className="w-[1px] h-6 bg-white/10"></div>

                        <div className="flex gap-4">
                            <SocialLink href="https://github.com/KhnhMinh" icon={<Github size={18} />} />
                            <SocialLink href="https://www.linkedin.com/in/minh-le-khanh-892bbb365/" icon={<Linkedin size={18} />} />
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex justify-between items-center mb-12">
                                <span className="text-xl font-bold">Menu</span>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-full">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-8 flex-1 justify-center items-center">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-3xl font-bold hover:text-blue-500 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="flex justify-center gap-8 pb-12">
                                <SocialLink href="#" icon={<Github size={24} />} />
                                <SocialLink href="#" icon={<Linkedin size={24} />} />
                                <SocialLink href="#" icon={<Mail size={24} />} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
    >
        {icon}
    </a>
);
