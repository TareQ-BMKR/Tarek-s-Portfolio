import { motion } from 'framer-motion'
import { PROJECTS } from "../data";
import '../CssFiles/Projects.css';

export default function Projects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <section className="projects-section" id="projects">
            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {PROJECTS.map((project, index) => (
                    <motion.div
                        className="project-card glass-card"
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                    >
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-overlay">
                                <button className="btn-secondary">View Case Study</button>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-name">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, idx) => (
                                    <span className="project-tag" key={idx}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
