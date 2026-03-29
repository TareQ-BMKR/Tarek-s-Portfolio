import React from 'react';
import { PROJECTS } from "../data";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import '../CssFiles/Projects.css';

export default function Projects() {
    return (
        <div className="projects-container">
            {PROJECTS.map((project, index) => (
                <motion.div
                    className="project-row"
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true, margin: "-10%" }}
                >
                    <div className="project-index">0{index + 1}</div>

                    <div className="project-visual">
                        <div className="image-overlay"></div>
                        <img src={project.image} alt={project.title} />
                    </div>

                    <div className="project-details">
                        <div className="project-tags">
                            {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <a href={project.link} className="project-link">
                            VIEW CASE STUDY <ArrowUpRight size={20} />
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
