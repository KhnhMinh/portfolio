import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
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
        alert('Thank you for your message! I will get back to you soon.');
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
                        <span className="text-sm font-medium text-gray-300">Get In Touch</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Let's <span className="text-gradient-accent">Connect</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
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
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a
                                href="mailto:lekhanhminh@example.com"
                                className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-white font-medium">khnhminh.le@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+84123456789"
                                className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="text-white font-medium">+84 96 298 1702</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="text-white font-medium">Ha Noi City, Vietnam</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <p className="text-sm text-gray-400 mb-4">Follow me on</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-lg bg-gray-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all group"
                                >
                                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://linkedin.com"
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
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10 focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-glow w-full"
                            >
                                <span>Send Message</span>
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

