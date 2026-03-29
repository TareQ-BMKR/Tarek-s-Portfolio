import React from 'react';
import { motion } from 'framer-motion';
import "../CssFiles/aboutme.css";

export default function Aboutme() {
    return (
        <div className="about-wrapper">
            <div className="about-text-content">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="about-label">WHO I AM</p>
                    <h2 className="about-main-text">
                        I AM A <span className="highlight">FULLSTACK DEVELOPER</span> AND DIGITAL CRAFTSMAN WHO LOVES TO BRING IDEAS TO LIFE THROUGH CLEAN CODE AND VIBRANT DESIGN.
                    </h2>
                </motion.div>


            </div>
        </div>
    );
}
