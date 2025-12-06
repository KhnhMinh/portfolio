import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TypingAnimation } from '../components/TypingAnimation';

const roles = [
    'a Master\'s Candidate',
    'a Bachelor\'s Graduate',
    'a Researcher',
    'a Software Engineer',
    'a Full-Stack Developer',
    'an AI Enthusiast',
    'a Problem Solver',
];

export const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative pt-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="order-2 md:order-1 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
                    >
                        <Sparkles size={14} className="text-yellow-400" />
                        <span className="text-sm font-medium text-gray-300">Available for opportunities</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-2"
                    >
                        <span className="block text-gray-200">Hello from</span>
                        <span className="block text-gradient-accent mb-2">Le Khanh Minh</span>
                        <span className="block text-base md:text-lg text-gray-400 font-normal mt-2">(Lê Khánh Minh)</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
                    >
                        <span>I am </span>
                        <TypingAnimation 
                            roles={roles} 
                            className="text-blue-400 font-semibold"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-base md:text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
                    >
                        Building dependable, thoughtfully designed systems that are genuinely useful. 
                        Exploring AI and machine learning to enhance real-world applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#projects" className="btn btn-glow">
                            <span>View Projects</span>
                            <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white font-medium">
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Stats or Tech Stack */}
                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 flex items-center gap-8 text-gray-500"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span>React</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                            <span>TypeScript</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                            <span>Docker</span>
                        </div>
                    </motion.div> */}
                </div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2 flex justify-center relative"
                >
                    {/* Profile Image with Gradient Background */}
                    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                        {/* Main Gradient Blob */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full blur-[80px] opacity-40 animate-pulse"></div>

                        {/* Profile Image Container */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 z-10 flex items-center justify-center"
                        >
                            <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
                                <img 
                                    src="/images/hero-profile-image.jpg" 
                                    alt="Le Khanh Minh" 
                                    className="relative w-full h-full object-cover rounded-3xl border-2 border-white/10 shadow-2xl"
                                />
                            </div>
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -right-4 z-20"
                        >
                            <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-3 shadow-xl">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center p-1">
                                    <span className="text-xl">🚀</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Status</p>
                                    <p className="font-bold text-white">Available</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
