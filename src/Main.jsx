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

            <section className="hero-section">
                <motion.div
                    className="main"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="badge">
                        <span>FULLSTACK DEVELOPER</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="name text-gradient">
                        TAREK BOUMALEK
                    </motion.h1>

                    <motion.p variants={itemVariants} className="Introduction">
                        I design and build high-performance fullstack applications combining clean UI, scalable backend architecture, and modern interactive experiences.
                    </motion.p>

                    <motion.div variants={itemVariants} className='Intro-Buttons'>
                        <button className='btn-primary'>Explore Projects</button>
                        <button className='btn-secondary'>Get in Touch</button>
                        <button className='btn-secondary'>Download CV</button>
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
            </div>
        </div>
    )
}
