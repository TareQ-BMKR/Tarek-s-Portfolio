import React, { useEffect, useRef } from 'react';
import { PROJECTS } from "../data";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import '../CssFiles/Projects.css';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const projectRefs = useRef([]);

    useEffect(() => {
        projectRefs.current.forEach((el, index) => {
            if (!el) return;
            
            gsap.fromTo(el, 
                { 
                    opacity: 0, 
                    y: 30 
                }, 
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="projects-container">
            {PROJECTS.map((project, index) => (
                <div
                    className="project-row"
                    key={project.id}
                    ref={el => projectRefs.current[index] = el}
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
                </div>
            ))}
        </div>
    );
}
