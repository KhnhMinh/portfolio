import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const experiences = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'FPT Smart Cloud - FCI',
        location: 'Hanoi',
        period: 'Jan 2026 - Present',
        description: 'Developed and maintained user authentication and biometric solutions, focusing on secure and seamless identity verification. Solutions included OCR for ID documents, face matching, and active liveness checks to ensure the authenticity of users during the verification process.',
        achievements: [
            'Designed and implemented biometric authentication modules integrating face recognition, liveness detection, and ID document OCR',
            'Developed end-to-end eKYC and authentication workflows ensuring regulatory compliance and robust security',
            'Integrated modern security protocols (OAuth2, OpenID Connect) to enhance user authentication across platforms',
            'Collaborated with cross-functional teams to deliver stable, user-friendly authentication experiences',
        ],
        tech: ['React', 'FastAPI', 'MySQL', 'FPTCloud', 'MongoDB', 'Docker', 'Otel-Collector'],
        logo: '/logos/companies/logo_fci.png',
    },
    {
        id: 2,
        title: 'Software Engineer',
        company: 'C-OpenAI',
        location: 'Hanoi',
        period: 'Sep 2025 - Jan 2026',
        description: 'Participated in developing strategic products to support the search, review, and management of legal documents. Focused on optimizing data processing workflows, enhancing user experience for legal information retrieval, and solving practical problems related to legal operations.',
        achievements: [
            'Developed and maintained large-scale software systems for legal document search and review',
            'Collaborated with legal professionals to identify, analyze, and optimize business processes',
            'Designed technical solutions to automate the processing, aggregation, and classification of legal documents',
            'Resolved practical issues arising in the daily operation of legal research and information systems',
        ],
        tech: ['React', 'Vue', 'Angular', 'Django', 'FastAPI', 'Postgres', 'MinIO', 'MongoDB', 'AWS', 'Docker'],
        logo: '/logos/companies/logo_copenai.png',
    },
    {
        id: 3,
        title: 'Software Engineer',
        company: 'CMC ATI',
        location: 'Hanoi',
        period: '2023 - Sep 2025',
        description: 'Contributed to the development of strategic products to improve business processes and solve practical problems. Focused on automating workflows and operational efficiency through advanced AI technologies and process optimization.',
        achievements: [
            'Developed applications for automating and optimizing business workflows',
            'Integrated AI technologies including OCR, TTS, and STT into enterprise systems',
            'Built specialized chatbots for business process support and information assistance',
            'Designed and implemented solutions to enhance operational efficiency and accuracy',
            'Independently developed modules for the separation of legal text content (structuring, extracting, and managing official legal documents)',
            'Built and optimized features for the processing, searching, and review of legal documents, improving accuracy and ease-of-use for end-users'
        ],
        tech: ['React', 'Vue', 'Angular','Django', 'Postgres', 'MinIO', 'Docker'],
        logo: '/logos/companies/logo_cmcati.png',
    },
    {
        id: 4,
        title: 'Teaching and Classroom Management Assistant',
        company: 'VTI Academy',
        location: 'Hanoi',
        period: '2023 - Sep 2025',
        description: 'Assisted in teaching, organizing, and managing programming classes, supporting both instruction and classroom activities.',
        achievements: [
            'Assisted in organizing and managing programming classes focused on Python and Frontend (React) development',
            'Actively supported instructional activities and helped facilitate student learning and engagement',
            'Participated in class organization, student management, and logistical support for coursework',
            'Gained valuable foundational experience in teaching and mentoring, providing a strong starting point for my career'
        ],
        tech: ['Python', 'React', 'Teaching', 'Management'],
        logo: '/logos/companies/logo_vti_academy.png',
    },
];

const skills = [
    {
        category: 'Full-Stack Development',
        items: [
            'React', 'Angular', 'Vue', 'TypeScript', 'Node.js', 'Next.js', 
            'Python', 'Django', 'DRF', 'REST APIs', 'GraphQL', 'Postman'
        ]
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
