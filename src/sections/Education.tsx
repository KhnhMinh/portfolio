import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
    {
        id: 1,
        degree: "Master's Candidate (In Progress)",
        field: 'Computer Science',
        school: 'VNU University of Engineering and Technology',
        period: '2025',
        location: 'Hanoi, Vietnam',
        description: 'Currently pursuing a Master\'s degree in Computer Science, focusing on advanced research and specialized knowledge in the field.',
        skills: ['Research Skills'],
        logo: '🎓',
    },
    {
        id: 2,
        degree: "Bachelor's Degree",
        field: 'Information and Communication Technology',
        school: 'University of Science and Technology of Hanoi - USTH',
        period: '2020 - 2024',
        location: 'Hanoi, Vietnam',
        description: 'Completed Bachelor\'s degree in Information and Communication Technology, gaining comprehensive knowledge in software engineering, computer systems, and modern technologies.',
        skills: ['Research Skills', 'Software Engineering', 'Computer Systems'],
        logo: '📚',
    },
    {
        id: 3,
        degree: 'High School Diploma',
        field: '',
        school: 'High School for Gifted Students, Hanoi National University of Education',
        period: '2017 - 2020',
        location: 'Hanoi, Vietnam',
        description: 'Graduated from a specialized high school for gifted students, building a strong foundation in mathematics, science, and critical thinking.',
        skills: ['Mathematics', 'Science', 'Critical Thinking'],
        logo: '🏫',
    },
];

export const Education = () => {
    return (
        <section id="education" className="section relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                        <GraduationCap size={14} className="text-blue-400" />
                        <span className="text-sm font-medium text-gray-300">Academic Background</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient-accent">Education</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        My academic journey and educational achievements.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-500 to-sky-500 opacity-20"></div>

                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
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
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl flex-shrink-0">
                                                {edu.logo}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                                                    {edu.degree}
                                                </h3>
                                                {edu.field && (
                                                    <p className="text-lg text-blue-400 font-medium mb-1">
                                                        {edu.field}
                                                    </p>
                                                )}
                                                <p className="text-base text-gray-300 font-medium mb-2">
                                                    {edu.school}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Period and Location */}
                                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{edu.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Award size={14} />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 mb-4 leading-relaxed">
                                            {edu.description}
                                        </p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                            {edu.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

