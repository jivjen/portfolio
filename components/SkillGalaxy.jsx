import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiMongodb, SiPython } from 'react-icons/si';

const iconMap = {
  React: FaReact,
  'Node.js': FaNode,
  JavaScript: SiJavascript,
  Java: FaJava,
  'Spring Boot': SiSpringboot,
  MongoDB: SiMongodb,
  Docker: FaDocker,
  Python: SiPython,
  AWS: FaAws,
};

const SkillIcon = ({ skill }) => {
  const Icon = iconMap[skill.name] || (() => null);
  return (
    <motion.div
      className="flex flex-col items-center m-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center"
        whileHover={{ y: -5 }}
      >
        <Icon className="text-3xl text-cyan-400" />
      </motion.div>
      <span className="mt-2 text-sm font-medium text-gray-300">{skill.name}</span>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold text-cyan-400 mb-4">{title}</h3>
    <div className="flex flex-wrap justify-center">
      {skills.map((skill) => (
        <SkillIcon key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const SkillGalaxy = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const techSkills = [
    { name: 'JavaScript', level: 5 },
    { name: 'React', level: 4 },
    { name: 'Node.js', level: 4 },
    { name: 'Java', level: 5 },
    { name: 'Spring Boot', level: 4 },
    { name: 'MongoDB', level: 3 },
    { name: 'Docker', level: 2 },
    { name: 'Python', level: 3 },
    { name: 'AWS', level: 3 },
  ];

  const nonTechSkills = [
    { name: 'Project Management', level: 4 },
    { name: 'Public Speaking', level: 3 },
    { name: 'Problem Solving', level: 5 },
    { name: 'Team Leadership', level: 4 },
  ];

  return (
    <motion.div
    >
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">Skill Galaxy</h2>
      <SkillCategory title="Tech" skills={techSkills} />
      <SkillCategory title="Non-Tech" skills={nonTechSkills} />
    </motion.div>
  );
};

export default SkillGalaxy;