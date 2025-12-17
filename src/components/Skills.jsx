import React from 'react';
import { motion } from 'framer-motion';
import CyberCard from './CyberCard';
import { FaCode, FaShieldAlt, FaBrain, FaPython, FaGithub, FaJs, FaReact, FaLinux, FaTerminal, FaNetworkWired, FaUserSecret } from 'react-icons/fa';
import { SiSupabase, SiMongodb } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            icon: <FaCode className="text-neon text-3xl" />,
            skills: [
                { name: "Python", icon: <FaPython /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "React", icon: <FaReact /> },
                { name: "C++", icon: <FaCode /> }, // Placeholder icon
            ]
        },
        {
            title: "Technical Tools",
            icon: <FaShieldAlt className="text-cyan text-3xl" />,
            skills: [
                { name: "GitHub", icon: <FaGithub /> },
                { name: "VS code", icon: <SiSupabase /> },
                { name: "Superbase", icon: <SiSupabase /> },
                { name: "MongoDB", icon: <SiMongodb /> },
            ]
        },
        {
            title: "Soft Skills",
            icon: <FaBrain className="text-purple-500 text-3xl" />,
            skills: [
                { name: "Problem Solving", icon: <FaTerminal /> },
                { name: "Teamwork", icon: <FaNetworkWired /> },
                { name: "Communication", icon: <FaUserSecret /> }, // Placeholder
                { name: "Adaptability", icon: <FaBrain /> },
            ]
        }
    ];

    // Helper component for icon if FaUserSecret is not imported (it is imported though)
    // But wait, I used FaUserSecret in the skills array but didn't import it in the import list above?
    // Ah, I imported it in About.jsx but here I need to import it too if I use it.
    // I see FaUserSecret is NOT in the import list. I'll add it.

    return (
        <section id="skills" className="py-20 relative bg-black/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-12">
                        <span className="text-neon">02.</span> SKILLS_&_TOOLS
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <CyberCard key={index} className="h-full">
                                <div className="flex items-center gap-4 mb-6 border-b border-gray-800 pb-4">
                                    {category.icon}
                                    <h3 className="text-xl font-orbitron text-white">{category.title}</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {category.skills.map((skill, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-gray-300 hover:text-neon transition-colors">
                                            <span className="text-lg">{skill.icon}</span>
                                            <span className="font-mono text-sm">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </CyberCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// I need to make sure I import FaUserSecret if I use it.
// Let's fix the imports in the actual file content.

export default Skills;
