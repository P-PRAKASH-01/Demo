import React from 'react';
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
                            <p className="text-gray-300 font-mono leading-relaxed">
                               I am a curious and consistent learner who values clarity, structured thinking, and continuous improvement. Through hands-on practice and focused learning, I work on strengthening my technical foundation and applying my skills to meaningful, real-world projects.
                            </p>
                        </CyberCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
