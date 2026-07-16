import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

type LocalizedText = {
    en: string;
    vi: string;
};

const experiences = [
    {
        id: 1,
        title: {
            en: 'Software Engineer',
            vi: 'Kỹ sư Phần mềm'
        },
        company: 'FPT Smart Cloud - FCI',
        location: {
            en: 'Hanoi',
            vi: 'Hà Nội'
        },
        period: {
            en: 'Jan 2026 - Present',
            vi: '01/2026 - Hiện tại'
        },
        summary: {
            en: 'Making online identity fraudsters have a much harder day with eKYC, OCR, and biometric checks.',
            vi: 'Làm các cao thủ gian lận xác thực trực tuyến phải khổ sở với eKYC, OCR và sinh trắc học.'
        },
        description: {
            en: 'Developed and maintained user authentication and biometric solutions, focusing on secure and seamless identity verification. Solutions included OCR for ID documents, face matching, and active liveness checks to ensure the authenticity of users during the verification process.',
            vi: 'Phát triển và duy trì các giải pháp xác thực người dùng và sinh trắc học, tập trung vào việc định danh an toàn và liền mạch. Giải pháp bao gồm OCR cho giấy tờ tùy thân, đối sánh khuôn mặt và kiểm tra sống chủ động để đảm bảo tính xác thực của người dùng trong quá trình xác minh.'
        },
        achievements: [
            {
                en: 'Designed and implemented biometric authentication modules integrating face recognition, liveness detection, and ID document OCR',
                vi: 'Thiết kế và triển khai các module xác thực sinh trắc học tích hợp nhận diện khuôn mặt, phát hiện sống và OCR giấy tờ tùy thân'
            },
            {
                en: 'Developed end-to-end eKYC and authentication workflows ensuring regulatory compliance and robust security',
                vi: 'Phát triển quy trình eKYC và xác thực end-to-end, đảm bảo tuân thủ quy định và mức độ bảo mật cao'
            },
            {
                en: 'Integrated modern security protocols (OAuth2, OpenID Connect) to enhance user authentication across platforms',
                vi: 'Tích hợp các giao thức bảo mật hiện đại như OAuth2 và OpenID Connect để nâng cao khả năng xác thực trên nhiều nền tảng'
            },
            {
                en: 'Collaborated with cross-functional teams to deliver stable, user-friendly authentication experiences',
                vi: 'Phối hợp với các nhóm liên chức năng để mang lại trải nghiệm xác thực ổn định và thân thiện với người dùng'
            }
        ],
        tech: ['React', 'FastAPI', 'MySQL', 'FPTCloud', 'MongoDB', 'Docker', 'Otel-Collector'],
        logo: '/logos/companies/logo_fci.png',
    },
    {
        id: 2,
        title: {
            en: 'Software Engineer',
            vi: 'Kỹ sư Phần mềm'
        },
        company: 'C-OpenAI',
        location: {
            en: 'Hanoi',
            vi: 'Hà Nội'
        },
        period: {
            en: 'Sep 2025 - Jan 2026',
            vi: '09/2025 - 01/2026'
        },
        summary: {
            en: 'Helped legal teams stop drowning in documents by making search, review, and processing far less painful.',
            vi: 'Giúp đội pháp chế bớt ngộp trong đống văn bản bằng cách làm phần tìm kiếm, rà soát và xử lý đỡ đau đầu hơn nhiều.'
        },
        description: {
            en: 'Participated in developing strategic products to support the search, review, and management of legal documents. Focused on optimizing data processing workflows, enhancing user experience for legal information retrieval, and solving practical problems related to legal operations.',
            vi: 'Tham gia phát triển các sản phẩm chiến lược phục vụ tìm kiếm, rà soát và quản lý văn bản pháp lý. Tập trung tối ưu quy trình xử lý dữ liệu, nâng cao trải nghiệm tra cứu thông tin pháp lý và giải quyết các bài toán thực tế trong vận hành nghiệp vụ pháp chế.'
        },
        achievements: [
            {
                en: 'Developed and maintained large-scale software systems for legal document search and review',
                vi: 'Phát triển và duy trì các hệ thống phần mềm quy mô lớn phục vụ tìm kiếm và rà soát văn bản pháp lý'
            },
            {
                en: 'Collaborated with legal professionals to identify, analyze, and optimize business processes',
                vi: 'Phối hợp với chuyên gia pháp lý để xác định, phân tích và tối ưu các quy trình nghiệp vụ'
            },
            {
                en: 'Designed technical solutions to automate the processing, aggregation, and classification of legal documents',
                vi: 'Thiết kế các giải pháp kỹ thuật để tự động hóa việc xử lý, tổng hợp và phân loại văn bản pháp lý'
            },
            {
                en: 'Resolved practical issues arising in the daily operation of legal research and information systems',
                vi: 'Giải quyết các vấn đề phát sinh trong quá trình vận hành hằng ngày của hệ thống nghiên cứu và tra cứu thông tin pháp lý'
            }
        ],
        tech: ['React', 'Vue', 'Angular', 'Django', 'FastAPI', 'Postgres', 'MinIO', 'MongoDB', 'AWS', 'Docker'],
        logo: '/logos/companies/logo_copenai.png',
    },
    {
        id: 3,
        title: {
            en: 'Software Engineer',
            vi: 'Kỹ sư Phần mềm'
        },
        company: 'CMC ATI',
        location: {
            en: 'Hanoi',
            vi: 'Hà Nội'
        },
        period: {
            en: '2023 - Sep 2025',
            vi: '2023 - 09/2025'
        },
        summary: {
            en: 'Spent quality time teaching enterprise systems to read, listen, talk, and stop making operations unnecessarily dramatic.',
            vi: 'Dành kha kha thời gian dạy hệ thống doanh nghiệp biết đọc, biết nghe, biết nói, và bớt làm khổ đội vận hành.'
        },
        description: {
            en: 'Contributed to the development of strategic products to improve business processes and solve practical problems. Focused on automating workflows and operational efficiency through advanced AI technologies and process optimization.',
            vi: 'Đóng góp vào việc phát triển các sản phẩm chiến lược nhằm cải thiện quy trình nghiệp vụ và giải quyết các bài toán thực tế. Tập trung vào tự động hóa workflow và nâng cao hiệu quả vận hành thông qua công nghệ AI và tối ưu quy trình.'
        },
        achievements: [
            {
                en: 'Developed applications for automating and optimizing business workflows',
                vi: 'Phát triển các ứng dụng phục vụ tự động hóa và tối ưu quy trình nghiệp vụ'
            },
            {
                en: 'Integrated AI technologies including OCR, TTS, and STT into enterprise systems',
                vi: 'Tích hợp các công nghệ AI như OCR, TTS và STT vào hệ thống doanh nghiệp'
            },
            {
                en: 'Built specialized chatbots for business process support and information assistance',
                vi: 'Xây dựng chatbot chuyên biệt hỗ trợ quy trình nghiệp vụ và tư vấn thông tin'
            },
            {
                en: 'Designed and implemented solutions to enhance operational efficiency and accuracy',
                vi: 'Thiết kế và triển khai các giải pháp nâng cao hiệu quả và độ chính xác trong vận hành'
            },
            {
                en: 'Independently developed modules for the separation of legal text content (structuring, extracting, and managing official legal documents)',
                vi: 'Tự phát triển các module tách nội dung văn bản pháp luật như cấu trúc hóa, trích xuất và quản lý văn bản pháp quy'
            },
            {
                en: 'Built and optimized features for the processing, searching, and review of legal documents, improving accuracy and ease-of-use for end-users',
                vi: 'Xây dựng và tối ưu các tính năng xử lý, tìm kiếm và rà soát văn bản pháp lý, nâng cao độ chính xác và tính dễ dùng cho người dùng cuối'
            }
        ],
        tech: ['React', 'Vue', 'Angular', 'Django', 'Postgres', 'MinIO', 'Docker'],
        logo: '/logos/companies/logo_cmcati.png',
    },
    {
        id: 4,
        title: {
            en: 'Teaching and Classroom Management Assistant',
            vi: 'Trợ giảng và Hỗ trợ Quản lý Lớp học'
        },
        company: 'VTI Academy',
        location: {
            en: 'Hanoi',
            vi: 'Hà Nội'
        },
        period: {
            en: '2023 - Sep 2025',
            vi: '2023 - 09/2025'
        },
        summary: {
            en: 'Kept programming classes running smoothly while helping students and debugging confusion before it spread.',
            vi: 'Giữ lớp học lập trình chạy êm, hỗ trợ học viên và dập tắt những pha hoang mang trước khi chúng lan rộng.'
        },
        description: {
            en: 'Assisted in teaching, organizing, and managing programming classes, supporting both instruction and classroom activities.',
            vi: 'Hỗ trợ giảng dạy, tổ chức và quản lý các lớp học lập trình, đồng hành cùng hoạt động giảng dạy và vận hành lớp học.'
        },
        achievements: [
            {
                en: 'Assisted in organizing and managing programming classes focused on Python and Frontend (React) development',
                vi: 'Hỗ trợ tổ chức và quản lý các lớp lập trình tập trung vào Python và Frontend với React'
            },
            {
                en: 'Actively supported instructional activities and helped facilitate student learning and engagement',
                vi: 'Chủ động hỗ trợ hoạt động giảng dạy và thúc đẩy sự tham gia, học tập của học viên'
            },
            {
                en: 'Participated in class organization, student management, and logistical support for coursework',
                vi: 'Tham gia tổ chức lớp học, quản lý học viên và hỗ trợ hậu cần cho quá trình học tập'
            },
            {
                en: 'Gained valuable foundational experience in teaching and mentoring, providing a strong starting point for my career',
                vi: 'Tích lũy nền tảng kinh nghiệm quý giá trong giảng dạy và mentoring, tạo bước khởi đầu tốt cho sự nghiệp'
            }
        ],
        tech: ['Python', 'React', 'Teaching', 'Management'],
        logo: '/logos/companies/logo_vti_academy.png',
    },
];

const skills = [
    {
        category: {
            en: 'Full-Stack Development',
            vi: 'Phát triển Full-Stack'
        },
        items: [
            'React', 'Angular', 'Vue', 'TypeScript', 'Node.js', 'Next.js',
            'Python', 'Django', 'DRF', 'REST APIs', 'GraphQL', 'Postman'
        ]
    },
    {
        category: {
            en: 'Cloud & DevOps',
            vi: 'Cloud & DevOps'
        },
        items: ['Docker', 'Containerization', 'CI/CD', 'AWS', 'Cloud Infrastructure', 'Microservices']
    },
    {
        category: {
            en: 'Engineering',
            vi: 'Kỹ thuật Phần mềm'
        },
        items: ['System Design', 'Database Design', 'API Development', 'Performance Optimization', 'Code Review', 'Agile Methodologies']
    },
    {
        category: {
            en: 'Languages',
            vi: 'Ngôn ngữ'
        },
        items: ['English', 'Vietnamese']
    },
];

const getLocalizedText = (value: LocalizedText, language: 'en' | 'vi') => value[language];

export const Experience = () => {
    const { t, language } = useLanguage();
    const [expandedExperiences, setExpandedExperiences] = useState<Record<number, boolean>>({});

    const toggleExperience = (id: number) => {
        setExpandedExperiences((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

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
                                {(() => {
                                    const isExpanded = !!expandedExperiences[exp.id];

                                    return (
                                <>
                                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-[var(--bg-color)] z-10 group-hover:scale-125 transition-transform"></div>

                                <div
                                    className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 relative overflow-hidden text-left"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                                                    {getLocalizedText(exp.title, language)}
                                                </h3>
                                                <p className="text-lg text-blue-400 font-medium mb-2">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    <span>{getLocalizedText(exp.period, language)}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin size={14} />
                                                    <span>{getLocalizedText(exp.location, language)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <motion.button
                                            type="button"
                                            onClick={() => toggleExperience(exp.id)}
                                            whileHover={{ scale: 1.01 }}
                                            className="group/summary relative mb-4 -mx-1 block w-[calc(100%+0.5rem)] overflow-hidden rounded-xl px-5 py-4 text-left transition-all duration-300 hover:bg-white/[0.03] hover:pb-14"
                                        >
                                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover/summary:h-16 group-hover/summary:opacity-100">
                                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 via-blue-400/6 to-transparent"></div>
                                                <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent"></div>
                                                <div className="relative flex h-full items-end justify-center pb-3 text-sm font-medium text-blue-100/95">
                                                    {t('experience.hoverHint')}
                                                </div>
                                            </div>

                                            <AnimatePresence mode="wait" initial={false}>
                                                {isExpanded ? (
                                                    <motion.div
                                                        key={`detail-${exp.id}`}
                                                        initial={{ opacity: 0, rotateX: -90, y: 12 }}
                                                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                                                        exit={{ opacity: 0, rotateX: 90, y: -12 }}
                                                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                                                        style={{ transformOrigin: 'top center' }}
                                                        className="relative z-10"
                                                    >
                                                        <p className="text-gray-400 mb-4 leading-relaxed">
                                                            {getLocalizedText(exp.description, language)}
                                                        </p>

                                                        <ul className="space-y-2">
                                                            {exp.achievements.map((achievement, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                                    <ArrowRight size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                                                                    <span>{getLocalizedText(achievement, language)}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key={`summary-${exp.id}`}
                                                        initial={{ opacity: 0, rotateX: 90, y: 12 }}
                                                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                                                        exit={{ opacity: 0, rotateX: -90, y: -12 }}
                                                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                                                        style={{ transformOrigin: 'top center' }}
                                                        className="relative z-10"
                                                    >
                                                        <p className="pr-2 text-gray-300 leading-relaxed">
                                                            {getLocalizedText(exp.summary, language)}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.button>

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
                                </>
                                    );
                                })()}
                            </motion.div>
                        ))}
                    </div>
                </div>

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
                                key={skillGroup.category.en}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-6"
                            >
                                <h4 className="text-lg font-semibold text-blue-400 mb-4">
                                    {getLocalizedText(skillGroup.category, language)}
                                </h4>
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
