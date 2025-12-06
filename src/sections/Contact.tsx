import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        alert(t('contact.success'));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="section relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                        <Mail size={14} className="text-blue-400" />
                        <span className="text-sm font-medium text-gray-300">{t('contact.getInTouch')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        {t('contact.title')}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {t('contact.infoDesc')}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a
                                href="mailto:khnhminh.le@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">{t('contact.email')}</p>
                                    <p className="text-white font-medium">khnhminh.le@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+84962981702"
                                className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">{t('contact.phone')}</p>
                                    <p className="text-white font-medium">+84 96 298 1702</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">{t('contact.location')}</p>
                                    <p className="text-white font-medium">Ha Noi City, Vietnam</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <p className="text-sm text-gray-400 mb-4">{t('contact.follow')}</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/KhnhMinh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-lg bg-gray-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all group"
                                >
                                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/minh-le-khanh-892bbb365/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-lg bg-gray-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all group"
                                >
                                    <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-all"
                                    placeholder={t('contact.namePlaceholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-all"
                                    placeholder={t('contact.emailPlaceholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-all resize-none"
                                    placeholder={t('contact.messagePlaceholder')}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-glow w-full"
                            >
                                <span>{t('contact.send')}</span>
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

