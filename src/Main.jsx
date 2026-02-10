import { motion } from 'framer-motion'
import "./CssFiles/home.css"
import { SKILLS } from './data'
import SkillsSlider from './Components/SkillsA'
import Aboutme from './Components/aboutMe'
import Projects from './Components/projects'
import Navbar from './Components/NavBar'

export default function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 80
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="portfolio-root">
            <Navbar />

            <video
                autoPlay
                loop
                muted
                playsInline
                className="background-video"
            >
                <source src="/BackGroundVid.mp4" type="video/mp4" />
            </video>

            <section id="home" className="hero-section">
                <motion.div
                    className="main"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="badge">
                        <span>FULLSTACK DEVELOPER</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="name">
                        TAREK BOUMALEK
                    </motion.h1>

                    <motion.p variants={itemVariants} className="Introduction">
                        I design and build high-performance fullstack applications combining clean UI, scalable backend architecture, and modern interactive experiences.
                    </motion.p>

                    <motion.div variants={itemVariants} className='Intro-Buttons'>
                        <button className='btn-primary' onClick={() => scrollToSection('projects')}>Explore Projects</button>
                        <button className='btn-secondary' onClick={() => scrollToSection('contact')}>Get in Touch</button>
                        <a href="TarekBoumalek's CV.pdf" download><button className='btn-secondary'>Download CV</button></a>
                    </motion.div>
                </motion.div>
            </section>

            <div className="content-wrap">
                <section id="about" className="section-container">
                    <Aboutme />
                </section>

                <section className="skills-section">
                    <SkillsSlider skills={SKILLS} reverse={true} />
                </section>

                <section id="projects" className="section-container">
                    <h2 className='projects-title text-gradient'>PROJECTS</h2>
                    <Projects />
                </section>

                <section id="contact" className="section-container contact-section">
                    <h2 className="section-title text-gradient">GET IN TOUCH</h2>
                    <div className="contact-content glass-card">
                        <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                        <a href="mailto:tarek@example.com" className="btn-primary">Say Hello</a>
                    </div>
                </section>
            </div>
        </div>
    )
}
