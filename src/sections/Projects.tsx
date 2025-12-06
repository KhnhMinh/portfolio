import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '🛒',
        gradient: 'from-blue-500 to-cyan-500',
        github: '#',
        live: '#',
    },
    {
        id: 2,
        title: 'AI Content Generator',
        description: 'An intelligent content creation tool powered by machine learning, helping users generate high-quality articles and marketing copy.',
        tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
        image: '🤖',
        gradient: 'from-cyan-500 to-blue-500',
        github: '#',
        live: '#',
    },
    {
        id: 3,
        title: 'Task Management App',
        description: 'A collaborative project management platform with real-time updates, team collaboration, and advanced analytics.',
        tech: ['Vue.js', 'Firebase', 'TypeScript', 'Tailwind'],
        image: '📋',
        gradient: 'from-orange-500 to-red-500',
        github: '#',
        live: '#',
    },
    {
        id: 4,
        title: 'Crypto Trading Dashboard',
        description: 'Real-time cryptocurrency trading dashboard with advanced charting, portfolio tracking, and market analysis tools.',
        tech: ['Next.js', 'WebSocket', 'Chart.js', 'PostgreSQL'],
        image: '₿',
        gradient: 'from-green-500 to-emerald-500',
        github: '#',
        live: '#',
    },
    {
        id: 5,
        title: 'Social Media Analytics',
        description: 'Comprehensive analytics platform for social media metrics, engagement tracking, and content performance insights.',
        tech: ['React', 'D3.js', 'Node.js', 'Redis'],
        image: '📊',
        gradient: 'from-blue-500 to-sky-500',
        github: '#',
        live: '#',
    },
    {
        id: 6,
        title: 'Fitness Tracking App',
        description: 'A mobile-first fitness application with workout plans, progress tracking, and social features for motivation.',
        tech: ['React Native', 'GraphQL', 'MongoDB', 'AWS'],
        image: '💪',
        gradient: 'from-red-500 to-orange-500',
        github: '#',
        live: '#',
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="section relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                        <Code2 size={14} className="text-blue-400" />
                        <span className="text-sm font-medium text-gray-300">My Work</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Featured <span className="text-gradient-accent">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        A collection of projects that showcase my skills in building modern, scalable, and user-friendly applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="h-full bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 overflow-hidden relative group">
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                
                                {/* Project Icon */}
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-3xl mb-4 relative z-10`}>
                                    {project.image}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                                        >
                                            <Github size={16} />
                                            <span>Code</span>
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                                        >
                                            <ExternalLink size={16} />
                                            <span>Live</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white font-medium group"
                    >
                        <span>View All Projects</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

