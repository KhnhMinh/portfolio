import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, ChevronDown, CloudCog, Code, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const skills = [
    {
        name: 'Full-Stack Development',
        descriptionKey: 'about.skills.fullStack',
        icon: <Code size={24} />,
        color: 'from-orange-500 to-orange-400'
    },
    {
        name: 'AI Engineering',
        descriptionKey: 'about.skills.backend',
        icon: <Bot size={24} />,
        color: 'from-sky-500 to-blue-500'
    },
    {
        name: 'Cloud & Infrastructure',
        descriptionKey: 'about.skills.cloud',
        icon: <CloudCog size={24} />,
        color: 'from-cyan-500 to-teal-500'
    },
    {
        name: 'System Design',
        descriptionKey: 'about.skills.systemDesign',
        icon: <Target size={24} />,
        color: 'from-blue-400 to-indigo-500'
    },
];

const techStackCategories = [
    {
        titleKey: 'about.tech.software',
        icon: <Code size={18} />,
        color: 'from-orange-500/20 to-amber-500/10 text-orange-300',
        sections: [
            {
                titleKey: 'about.tech.software.database',
                technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Database Design', 'SQL']
            },
            {
                titleKey: 'about.tech.software.backend',
                technologies: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Microservices']
            },
            {
                titleKey: 'about.tech.software.frontend',
                technologies: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Responsive Design']
            },
            {
                titleKey: 'about.tech.software.foundation',
                technologies: ['TypeScript', 'JavaScript', 'Git', 'Testing', 'Clean Architecture']
            }
        ]
    },
    {
        titleKey: 'about.tech.ai',
        icon: <Bot size={18} />,
        color: 'from-sky-500/20 to-cyan-500/10 text-cyan-300',
        technologies: [
            'Python', 'LLMs', 'AI Agents', 'Prompt Engineering', 'RAG',
            'LangChain', 'OpenAI API', 'Vector Databases', 'ML Pipelines', 'Scikit-learn'
        ]
    },
    {
        titleKey: 'about.tech.cloud',
        icon: <CloudCog size={18} />,
        color: 'from-emerald-500/20 to-teal-500/10 text-emerald-300',
        technologies: [
            'Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Nginx',
            'Linux', 'Monitoring', 'Deployment Automation', 'Infrastructure as Code'
        ]
    },
    {
        titleKey: 'about.tech.systemDesign',
        icon: <Target size={18} />,
        color: 'from-blue-500/20 to-indigo-500/10 text-blue-300',
        technologies: [
            'Distributed Systems', 'Microservices', 'Event-Driven Architecture',
            'Caching', 'Message Queues', 'Scalability', 'Performance Optimization',
            'Database Design', 'API Design'
        ]
    }
];

export const About = () => {
    const { t } = useLanguage();
    const [expandedCategory, setExpandedCategory] = useState(0);
    const [expandedSoftwareSection, setExpandedSoftwareSection] = useState(0);
    
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
                        {t('about.title')}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        {t('about.subtitle')}
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
                                    {t('about.intro1')}
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                    {t('about.intro2')}
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    {t('about.intro3')}
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
                                    {t(skill.descriptionKey)}
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
                        <h3 className="text-2xl font-bold mb-8 text-center">{t('about.tech.title')}</h3>
                        <div className="space-y-4">
                            {techStackCategories.map((category, index) => {
                                const isExpanded = expandedCategory === index;
                                const techCount = category.sections
                                    ? category.sections.reduce((total, section) => total + section.technologies.length, 0)
                                    : category.technologies.length;

                                return (
                                <div
                                    key={category.titleKey}
                                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setExpandedCategory(isExpanded ? -1 : index)}
                                        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/[0.03]"
                                    >
                                        <div className="flex min-w-0 items-center gap-4">
                                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.color}`}>
                                                {category.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-lg font-semibold text-white">
                                                    {t(category.titleKey)}
                                                </h4>
                                                <p className="text-sm text-gray-400">
                                                    {techCount} {t('about.tech.skillsCount')}
                                                </p>
                                            </div>
                                        </div>
                                        <ChevronDown
                                            size={20}
                                            className={`shrink-0 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {isExpanded && (
                                        <div className="border-t border-white/10 px-5 pb-5 pt-4">
                                            {category.sections ? (
                                                <div className="space-y-3">
                                                    {category.sections.map((section, sectionIndex) => {
                                                        const isSectionExpanded = expandedSoftwareSection === sectionIndex;

                                                        return (
                                                            <div
                                                                key={section.titleKey}
                                                                className="overflow-hidden rounded-xl border border-white/10 bg-black/10"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    onClick={() => setExpandedSoftwareSection(isSectionExpanded ? -1 : sectionIndex)}
                                                                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-white/[0.03]"
                                                                >
                                                                    <div>
                                                                        <h5 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-200">
                                                                            {t(section.titleKey)}
                                                                        </h5>
                                                                        <p className="text-xs text-gray-400">
                                                                            {section.technologies.length} {t('about.tech.skillsCount')}
                                                                        </p>
                                                                    </div>
                                                                    <ChevronDown
                                                                        size={18}
                                                                        className={`shrink-0 text-gray-400 transition-transform ${isSectionExpanded ? 'rotate-180' : ''}`}
                                                                    />
                                                                </button>

                                                                {isSectionExpanded && (
                                                                    <div className="border-t border-white/10 px-4 pb-4 pt-3">
                                                                        <div className="flex flex-wrap gap-3">
                                                                            {section.technologies.map((tech) => (
                                                                                <span
                                                                                    key={tech}
                                                                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                                                                                >
                                                                                    {tech}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                <div className="flex flex-wrap gap-3">
                                                    {category.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
