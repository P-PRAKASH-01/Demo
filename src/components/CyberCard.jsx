import React from 'react';
import { motion } from 'framer-motion';

const CyberCard = ({ children, className = "" }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`relative p-6 bg-black border border-neon/30 shadow-[0_0_10px_rgba(57,255,20,0.1)] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300 group overflow-hidden ${className}`}
        >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon"></div>

            {/* Scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000 pointer-events-none"></div>

            {children}
        </motion.div>
    );
};

export default CyberCard;
