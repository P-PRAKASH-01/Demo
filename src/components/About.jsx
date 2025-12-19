import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CyberCard from './CyberCard';
import { FaUserSecret } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-12">
                        <span className="text-neon">01.</span> ABOUT_ME
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-neon/20 rounded-full blur-xl group-hover:bg-neon/40 transition-all duration-500"></div>
                            <div className="relative w-64 h-64 mx-auto rounded-full border-2 border-neon overflow-hidden bg-black flex items-center justify-center">
                                <FaUserSecret className="text-9xl text-gray-500" />
                                {/* Replace with actual image: <img src="/path/to/image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                            </div>
                        </div>

                        <CyberCard>
                            <h3 className="text-2xl font-orbitron text-cyan mb-4">WHO_AM_I?</h3>
                            <p className="text-gray-300 font-mono leading-relaxed mb-4">
                                I am passionate about Full stack and an ML enthusiast with a strong interest in software development and data-driven systems. I focus on building solid fundamentals in programming, databases, and logical problem-solving, aiming to understand concepts deeply and apply them correctly.
                            </p>
                            <div className="flex flex-col gap-4">
                                {/* Social Links */}
                                <div className="flex items-center gap-6">
                                    <a
                                        href="https://github.com/P-PRAKASH-01"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-neon transition text-2xl"
                                    >
                                        <FaGithub />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/prakash--p7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-cyan transition text-2xl"
                                    >
                                        <FaLinkedin />
                                    </a>
                                </div>

                                {/* Download CV Button */}
                                <a
                                    href="/Prakash_P_Resume.pdf"
                                    download
                                    className="inline-flex items-center gap-2 w-fit px-6 py-2 font-orbitron text-sm border border-neon text-neon rounded-md
                   hover:bg-neon hover:text-white transition-all duration-300"
                                >
                                    <FaDownload />
                                    DOWNLOAD_CV
                                </a>
                            </div>
                        </CyberCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
