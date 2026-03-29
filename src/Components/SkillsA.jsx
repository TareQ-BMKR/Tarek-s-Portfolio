import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../CssFiles/SkillsA.css";

gsap.registerPlugin(ScrollTrigger);

const SkillsA = ({ skills }) => {
  const cardRefs = useRef([]);
  const fillRefs = useRef([]);

  useEffect(() => {
    // Card Fade in
    cardRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(el,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Progress bar fill
    fillRefs.current.forEach((el, index) => {
      if (!el) return;
      const targetWidth = skills[index].percentage + "%";
      gsap.fromTo(el,
        { width: "0%" },
        {
          width: targetWidth,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [skills]);

  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="skill-card"
          ref={el => cardRefs.current[index] = el}
        >
          <div className="skill-info">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percentage">{skill.percentage}%</span>
          </div>
          <div className="skill-progress-bg">
            <div
              className="skill-progress-fill"
              ref={el => fillRefs.current[index] = el}
            ></div>
          </div>
          <p className="skill-description">{skill.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsA;
