import React from 'react';
import { motion } from 'framer-motion';
import CyberCard from './CyberCard';

// import certificate images
import GUVICert from '../assets/certificates/GUVI.png';
import IITBJavaCert from '../assets/certificates/IITB Java.png';
import IITBRDBMSCert from '../assets/certificates/IITB RDBMS.png';
import NPTELCert from '../assets/certificates/NPTEL.jpg';

const Certifications = () => {
    const certs = [
        {
            name: "GUVI Certified Webinar",
            issuer: "GUVI",
            date: "2025",
            id: "GUVI-123456",
            image: GUVICert
        },
        {
            name: "IITB Java",
            issuer: "IITB",
            date: "2025",
            id: "IITB-789012",
            image: IITBJavaCert
        },
        {
            name: "IITB RDBMS",
            issuer: "IITB",
            date: "2025",
            id: "IITB-345678",
            image: IITBRDBMSCert
        },
        {
            name: "Introduction to industry 4.0",
            issuer: "NPTEL",
            date: "2025",
            id: "NPTEL-2456556",
            image: NPTELCert
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

                                {/* Certificate Image */}
                                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg border border-neon/20">
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-cover 
                                                   group-hover:scale-105 
                                                   transition-transform duration-300"
                                    />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/70 
                                                    opacity-0 group-hover:opacity-100 
                                                    flex items-center justify-center 
                                                    text-neon font-mono text-sm 
                                                    transition-opacity">
                                        View Certificate
                                    </div>
                                </div>

                                <h3 className="text-lg font-orbitron text-white mb-2">
                                    {cert.name}
                                </h3>

                                <p className="text-cyan font-mono text-sm mb-1">
                                    {cert.issuer}
                                </p>

                                <p className="text-gray-500 text-xs font-mono">
                                    {cert.date} | ID: {cert.id}
                                </p>

                            </CyberCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
