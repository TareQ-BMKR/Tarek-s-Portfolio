import React from 'react';
import { motion } from 'framer-motion';
import "../CssFiles/SkillsA.css";

const SkillsA = ({ skills }) => {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="skill-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="skill-info">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percentage">{skill.percentage}%</span>
          </div>
          <div className="skill-progress-bg">
            <motion.div
              className="skill-progress-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          <p className="skill-description">{skill.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsA;
