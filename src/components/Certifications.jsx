import React from 'react';
import { motion } from 'framer-motion';
import CyberCard from './CyberCard';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
    const certs = [
        {
            name: "Certified Ethical Hacker (CEH)",
            issuer: "EC-Council",
            date: "2023",
            id: "ECC-123456"
        },
        {
            name: "CompTIA Security+",
            issuer: "CompTIA",
            date: "2022",
            id: "COMP-789012"
        },
        {
            name: "OSCP",
            issuer: "Offensive Security",
            date: "2024",
            id: "OS-345678"
        }
    ];

    return (
        <section id="certifications" className="py-20 relative bg-black/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-12">
                        <span className="text-neon">04.</span> CERTIFICATIONS
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {certs.map((cert, index) => (
                            <CyberCard key={index} className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 bg-neon/10 rounded-full flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                                    <FaCertificate className="text-3xl text-neon" />
                                </div>
                                <h3 className="text-lg font-orbitron text-white mb-2">{cert.name}</h3>
                                <p className="text-cyan font-mono text-sm mb-1">{cert.issuer}</p>
                                <p className="text-gray-500 text-xs font-mono">{cert.date} | ID: {cert.id}</p>
                            </CyberCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
