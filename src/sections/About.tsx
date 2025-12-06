import { motion } from 'framer-motion';
import { Code, Zap, Target } from 'lucide-react';

const skills = [
    { name: 'Full-Stack Development', icon: <Code size={24} />, color: 'from-orange-500 to-orange-400' },
    { name: 'Docker & DevOps', icon: <img src="src/assets/docker-svgrepo-com.svg" alt="Docker" />, color: 'from-sky-500 to-blue-500' },
    { name: 'AI & Machine Learning', icon: <Zap size={24} />, color: 'from-cyan-500 to-teal-500' },
    { name: 'System Design', icon: <Target size={24} />, color: 'from-blue-400 to-indigo-500' },
];

const techStack = [
    'React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'Docker',
    'MongoDB', 'PostgreSQL', 'AWS', 'Git', 'Tailwind CSS', 'Machine Learning'
];

export const About = () => {
    return (
        <section id="about" className="section relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        About <span className="text-gradient-accent">Me</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Passionate developer crafting digital experiences with modern technologies
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Main Content with Image */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/10">
                                <img 
                                    src="/images/about-section-image.jpg" 
                                    alt="About Le Khanh Minh"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="relative z-10">
                                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                    Hello, I'm <strong className="text-white">Le Khanh Minh</strong>. I'm a software engineer who enjoys building systems that are dependable, thoughtfully designed, and genuinely useful. I approach my work with professionalism and curiosity, but I also believe that a positive attitude and a sense of humor make collaboration more effective and enjoyable.
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                    I'm currently expanding my interests into AI and machine learning, exploring how intelligent tools can enhance real-world applications and improve the way teams build and operate software. I appreciate challenges that push me to grow, refine my thinking, and learn new perspectives.
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    I value clear communication, kindness, and a practical engineering mindset. Whether I'm solving a complex technical problem or working with teammates, I aim to bring both competence and approachability. I'm always open to connecting with people who share the same drive for learning, building, and creating meaningful work.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group"
                            >
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                    {skill.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                                <p className="text-sm text-gray-400">
                                    Creating exceptional digital experiences with attention to detail and best practices.
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Tech Stack</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

