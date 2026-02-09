import { motion } from 'framer-motion'
import "../CssFiles/aboutme.css"

export default function Aboutme() {
    return (
        <section className="about-section" id="about">
            <motion.div
                className="about-container glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="about-title text-gradient">About Me</h2>
                        <div className="about-description">
                            <p>
                                Second-year Digital Development student specializing in <strong>Full Stack Web Development</strong>.
                                Enthusiastic about crafting high-performance, pixel-perfect experiences.
                            </p>
                            <p>
                                My journey is driven by a passion for clean UI, scalable architecture, and solving complex problems with efficient technical solutions.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="image-border">
                            <img src="/Tarek'sPhoto.jpg" alt="Tarek Boumalek" className="about-image" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
