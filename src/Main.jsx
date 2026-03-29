import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Github, Linkedin, MessageCircle } from 'lucide-react';
import "./CssFiles/home.css";

import Aboutme from './Components/aboutMe';
import Projects from './Components/projects';
import SkillsA from './Components/SkillsA';
import ContactForm from './Components/ContactForm';
import { SKILLS } from './data';

export default function Home() {
    useEffect(() => {
        // GSAP smooth entrance or other logic can be added here
    }, []);

    return (
        <div className="home-container" id="home">
            <section className="hero">
                <div className="social-links-left">
                    <a href="https://linkedin.com/in/tarik-boumalek-9a4613356/" target="_blank" rel="noreferrer"><Linkedin size={22} /></a>
                    <a href="https://github.com/TareQ-BMKR" target="_blank" rel="noreferrer"><Github size={22} /></a>
                    <a href="https://wa.me/212691076419" target="_blank" rel="noreferrer"><MessageCircle size={22} /></a>
                </div>

                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="hero-title">
                            TAREK <br />
                            <span className="accent-text">BOUMALEK</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <p>BASED IN MOROCCO • CRAFTING DIGITAL EXPERIENCES</p>
                    </motion.div>
                </div>

            </section>

            <section id="about" className="about-section">
                <Aboutme />
            </section>

            <section id="skills" className="skills-section">
                <div className="section-header">
                    <h2>EXPERT<span>ISE</span></h2>
                </div>
                <SkillsA skills={SKILLS} />
            </section>

            <section id="projects" className="projects-section">
                <div className="section-header">
                    <h2>PROJE<span>CTS</span></h2>
                </div>
                <Projects />
            </section>

            <footer id="contact" className="contact-footer">
                <div className="footer-inner">
                    <h3>LET'S WORK <span>TOGETHER</span></h3>
                    <ContactForm />
                    <div className="contact-links">
                        <a href="mailto:tarekboumalek@gmail.com">EMAIL ME</a>
                        <a href="tel:+212691076419">CALL ME</a>
                    </div>
                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} TAREK BOUMALEK. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
