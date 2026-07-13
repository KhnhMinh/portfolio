import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

type LocalizedText = {
    en: string;
    vi: string;
};

const education = [
    {
        id: 1,
        degree: {
            en: "Master's Candidate (In Progress)",
            vi: 'Học viên Cao học (Đang theo học)'
        },
        field: {
            en: 'Computer Science',
            vi: 'Khoa học Máy tính'
        },
        school: {
            en: 'Posts and Telecommunications Institute of Technology - PTIT',
            vi: 'Học viện Công nghệ Bưu chính Viễn thông - PTIT'
        },
        period: {
            en: '2025 - Present',
            vi: '2025 - Hiện tại'
        },
        location: {
            en: 'Hanoi, Vietnam',
            vi: 'Hà Nội, Việt Nam'
        },
        description: {
            en: 'Currently pursuing a Master\'s degree in Computer Science, focusing on advanced research and specialized knowledge in the field.',
            vi: 'Hiện đang theo học chương trình Thạc sĩ ngành Khoa học Máy tính, tập trung vào nghiên cứu chuyên sâu và mở rộng kiến thức chuyên ngành.'
        },
        skills: [
            { en: 'Research Skills', vi: 'Kỹ năng Nghiên cứu' }
        ],
        logo: (
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-sm font-bold text-blue-300">
                PTIT
            </div>
        ),
    },
    {
        id: 2,
        degree: {
            en: "Bachelor's Degree",
            vi: 'Cử nhân'
        },
        field: {
            en: 'Information and Communication Technology',
            vi: 'Công nghệ Thông tin và Truyền thông'
        },
        school: {
            en: 'University of Science and Technology of Hanoi - USTH',
            vi: 'Trường Đại học Khoa học và Công nghệ Hà Nội - USTH'
        },
        period: {
            en: '2020 - 2024',
            vi: '2020 - 2024'
        },
        location: {
            en: 'Hanoi, Vietnam',
            vi: 'Hà Nội, Việt Nam'
        },
        description: {
            en: 'Completed Bachelor\'s degree in Information and Communication Technology, gaining comprehensive knowledge in software engineering, computer systems, and modern technologies.',
            vi: 'Hoàn thành chương trình Cử nhân ngành Công nghệ Thông tin và Truyền thông, tích lũy kiến thức toàn diện về kỹ thuật phần mềm, hệ thống máy tính và các công nghệ hiện đại.'
        },
        skills: [
            { en: 'Research Skills', vi: 'Kỹ năng Nghiên cứu' },
            { en: 'Software Engineering', vi: 'Kỹ thuật Phần mềm' },
            { en: 'Computer Systems', vi: 'Hệ thống Máy tính' }
        ],
        logo: <img src="/logos/usth-logo.webp" alt="USTH Logo" style={{ width: 40, height: 40, objectFit: 'contain' }} />,
    },
    {
        id: 3,
        degree: {
            en: 'High School Diploma',
            vi: 'Tốt nghiệp THPT'
        },
        field: {
            en: '',
            vi: ''
        },
        school: {
            en: 'High School for Gifted Students, Hanoi National University of Education',
            vi: 'Trường THPT Chuyên Đại học Sư phạm Hà Nội'
        },
        period: {
            en: '2017 - 2020',
            vi: '2017 - 2020'
        },
        location: {
            en: 'Hanoi, Vietnam',
            vi: 'Hà Nội, Việt Nam'
        },
        description: {
            en: 'Graduated from a specialized high school for gifted students, building a strong foundation in mathematics, science, and critical thinking.',
            vi: 'Tốt nghiệp từ trường THPT chuyên, xây dựng nền tảng vững chắc về toán học, khoa học và tư duy phản biện.'
        },
        skills: [
            { en: 'Mathematics', vi: 'Toán học' },
            { en: 'Science', vi: 'Khoa học' },
            { en: 'Critical Thinking', vi: 'Tư duy Phản biện' }
        ],
        logo: <img src="/logos/csp-logo.png" alt="CSP Logo" style={{ width: 40, height: 40, objectFit: 'contain' }} />,
    },
];

const getLocalizedText = (value: LocalizedText, language: 'en' | 'vi') => value[language];

export const Education = () => {
    const { t, language } = useLanguage();

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
                        <span className="text-sm font-medium text-gray-300">{t('education.background')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient-accent">{t('education.title')}</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        {t('education.subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
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
                                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-[var(--bg-color)] z-10 group-hover:scale-125 transition-transform"></div>

                                <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center text-2xl flex-shrink-0">
                                                {edu.logo}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                                                    {getLocalizedText(edu.degree, language)}
                                                </h3>
                                                {getLocalizedText(edu.field, language) && (
                                                    <p className="text-lg text-blue-400 font-medium mb-1">
                                                        {getLocalizedText(edu.field, language)}
                                                    </p>
                                                )}
                                                <p className="text-base text-gray-300 font-medium mb-2">
                                                    {getLocalizedText(edu.school, language)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{getLocalizedText(edu.period, language)}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Award size={14} />
                                                <span>{getLocalizedText(edu.location, language)}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 mb-4 leading-relaxed">
                                            {getLocalizedText(edu.description, language)}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                            {edu.skills.map((skill) => (
                                                <span
                                                    key={skill.en}
                                                    className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                                                >
                                                    {getLocalizedText(skill, language)}
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
