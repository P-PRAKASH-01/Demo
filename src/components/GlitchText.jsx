import React from 'react';

const GlitchText = ({ text, as: Component = 'h2', className = "" }) => {
    return (
        <Component
            className={`glitch-text font-orbitron font-bold text-white relative inline-block ${className}`}
            data-text={text}
        >
            {text}
        </Component>
    );
};

export default GlitchText;
