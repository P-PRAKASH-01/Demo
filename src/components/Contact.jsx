import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import CyberCard from './CyberCard';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // Replace with your actual Service ID, Template ID, and Public Key
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

        // Simulating success for demo purposes
        setTimeout(() => {
            setStatus('Message Sent Successfully!');
            e.target.reset();
        }, 1500);

        /* Uncomment to use real EmailJS
        emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
          .then((result) => {
              setStatus('Message Sent Successfully!');
              e.target.reset();
          }, (error) => {
              setStatus('Failed to send message.');
          });
        */
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-4 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-12">
                        <span className="text-neon">05.</span> CONTACT_UPLINK
                    </h2>

                    <CyberCard>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-neon font-mono text-sm mb-2">IDENTIFIER (NAME)</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-black border border-gray-800 focus:border-neon text-white font-mono p-3 outline-none transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-neon font-mono text-sm mb-2">COMM_CHANNEL (EMAIL)</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-black border border-gray-800 focus:border-neon text-white font-mono p-3 outline-none transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-neon font-mono text-sm mb-2">TRANSMISSION (MESSAGE)</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full bg-black border border-gray-800 focus:border-neon text-white font-mono p-3 outline-none transition-colors resize-none"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-neon/10 border border-neon text-neon font-mono py-3 hover:bg-neon hover:text-black transition-all duration-300 uppercase tracking-wider"
                            >
                                Initiate Transmission
                            </button>

                            {status && (
                                <p className="text-center font-mono text-cyan mt-4 animate-pulse">
                                    {status}
                                </p>
                            )}
                        </form>
                    </CyberCard>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
