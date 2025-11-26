import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan font-mono text-lg mb-4 tracking-widest">SYSTEM.INIT_</p>
                    <GlitchText text="HI, I AM PRAKASH" as="h1" className="text-4xl md:text-7xl mb-6" />
                    <h2 className="text-xl md:text-3xl text-gray-400 font-mono mb-8">
                        <span className="text-neon">&lt;</span> ML Enthusiast <span className="text-neon">/&gt;</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-neon/10 border border-neon text-neon font-mono hover:bg-neon hover:text-black transition-all duration-300 clip-path-polygon"
                        >
                            VIEW_PROJECTS
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-transparent border border-cyan text-cyan font-mono hover:bg-neon hover:text-black transition-all duration-300"
                        >
                            CONTACT_ME
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
