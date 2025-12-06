import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const experiences = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'C-OpenAI',
        location: 'At company',
        period: 'Sep 2025 - Present',
        description: 'Working on Docker products, building scalable full-stack applications and contributing to containerization technologies. Focus on creating reliable, well-designed systems that solve real-world problems.',
        achievements: [
            'Developed and maintained Docker-based applications serving production environments',
            'Collaborated on improving container orchestration and deployment workflows',
            'Implemented robust backend services with focus on reliability and performance',
            'Worked with cross-functional teams to deliver high-quality software solutions',
        ],
        tech: ['Docker', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL'],
    },
    {
        id: 2,
        title: 'Software Engineer',
        company: 'CMC ATI',
        location: 'At company',
        period: '2023 - Sep 2025',
        description: 'Built full-stack applications with emphasis on system design and engineering best practices. Focused on creating dependable systems that are both functional and maintainable.',
        achievements: [
            'Designed and implemented scalable backend architectures',
            'Developed responsive frontend applications with modern frameworks',
            'Optimized database queries and improved application performance',
            'Participated in code reviews and mentored junior developers',
        ],
        tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript', 'Docker'],
    },
];

const skills = [
    {
        category: 'Full-Stack Development',
        items: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Python', 'REST APIs', 'GraphQL']
    },
    {
        category: 'Docker & DevOps',
        items: ['Docker', 'Containerization', 'CI/CD', 'AWS', 'Cloud Infrastructure', 'Microservices']
    },
    {
        category: 'Engineering',
        items: ['System Design', 'Database Design', 'API Development', 'Performance Optimization', 'Code Review', 'Agile Methodologies']
    },
    {
        category: 'Languages',
        items: ['English', 'Vietnamese']
    },
];

export const Experience = () => {
    const { t } = useLanguage();
    
    return (
        <section id="experience" className="section relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                        <Briefcase size={14} className="text-cyan-400" />
                        <span className="text-sm font-medium text-gray-300">{t('experience.journey')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        {t('experience.title')}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        {t('experience.subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto mb-16">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-500 to-sky-500 opacity-20"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative pl-24 pb-12 last:pb-0 group"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-[var(--bg-color)] z-10 group-hover:scale-125 transition-transform"></div>

                                {/* Content Card */}
                                <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-lg text-blue-400 font-medium mb-2">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    <span>{exp.period}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin size={14} />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <ul className="space-y-2 mb-4">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                    <ArrowRight size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                            {exp.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-5xl mx-auto"
                >
                    <h3 className="text-3xl font-bold mb-8 text-center">{t('experience.skills')}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-6"
                            >
                                <h4 className="text-lg font-semibold text-blue-400 mb-4">{skillGroup.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
