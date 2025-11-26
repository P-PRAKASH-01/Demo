import React from 'react';
import { motion } from 'framer-motion';
import CyberCard from './CyberCard';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Network Vulnerability Scanner",
            tech: ["Python", "Nmap", "Scapy"],
            description: "A custom tool to scan networks for open ports and potential vulnerabilities. Generates detailed reports.",
            github: "#",
            demo: "#"
        },
        {
            title: "Secure Chat Application",
            tech: ["React", "Node.js", "Socket.io", "AES-256"],
            description: "End-to-end encrypted chat application ensuring privacy and data integrity.",
            github: "#",
            demo: "#"
        },
        {
            title: "Malware Analysis Sandbox",
            tech: ["C++", "VirtualBox API", "Python"],
            description: "Automated environment for safely executing and analyzing suspicious files.",
            github: "#",
            demo: "#"
        },
        {
            title: "Phishing Detection System",
            tech: ["Machine Learning", "Python", "Scikit-learn"],
            description: "AI-powered system to detect and block phishing URLs in real-time.",
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-12">
                        <span className="text-neon">03.</span> FEATURED_PROJECTS
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <CyberCard key={index} className="group">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-orbitron text-white group-hover:text-cyan transition-colors">{project.title}</h3>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-gray-400 hover:text-neon transition-colors"><FaGithub size={20} /></a>
                                        <a href={project.demo} className="text-gray-400 hover:text-neon transition-colors"><FaExternalLinkAlt size={20} /></a>
                                    </div>
                                </div>

                                <p className="text-gray-400 font-mono mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="text-xs font-mono text-neon bg-neon/10 px-2 py-1 rounded border border-neon/20">
                                            {tech}
                                        </span>
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

export default Projects;
