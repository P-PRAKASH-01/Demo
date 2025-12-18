import React from 'react';
import { motion } from 'framer-motion';
import CyberCard from './CyberCard';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Weather Checker Web application",
            tech: ["Python", "HTML", "JavaScript"],
            description: "A Weather checker is used to check the weather of any city before Going any vacation or trip.",
            github: "https://github.com/P-PRAKASH-01/weather-comfort-checker",
            demo: "weather-comfort-checker.vercel.app/"
        },
        {
            title: "Kisan mitra Application",
            tech: ["Python", "Node.js", "HTML", "PWA"],
            description: "Kisan mitra is a web application that helps farmers to detect the diesease from leaf picture and suggest the best treatment .",
            github: "https://github.com/P-PRAKASH-01/Kisan-Mitra-app",
            demo: "#"
        },
        {
            title: "Smart Gallery Application",
            tech: ["React", "python", "HTML", "PWA"],
            description: "Smart Gallery is a web application that helps users to manage their photos with Auto tagging feature.",
            github: "https://github.com/P-PRAKASH-01/Smart-Gallery",
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
