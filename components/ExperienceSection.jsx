'use client'


import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa'

const TimelineItem = ({ date, title, subtitle, description, icon }) => (
    <motion.div
      className="flex mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div className="flex-grow">
        <div className="text-cyan-400 text-sm mb-1">{date}</div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <h4 className="text-lg text-gray-300 mb-2">{subtitle}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );


export default function ExperienceSection() {
    const experiences = [
      {
        date: "2020 - present",
        title: "Specialist Programmer",
        subtitle: "Infosys/Apple",
        description: "Architecting the future of retail tech, one line of code at a time. My daily routine involves juggling microservices, taming wild APIs, and occasionally debugging the space-time continuum.",
        icon: <FaBriefcase className="text-white" />
      },
      {
        date: "2016 - 2020",
        title: "B.Tech in Computer Science",
        subtitle: "University of Awesome Tech",
        description: "Survived countless coding marathons, debugged my way through complex algorithms, and emerged with a degree and a slight caffeine addiction.",
        icon: <FaGraduationCap className="text-white" />
      }
    ];
  
    return (
      <div className="experience-section py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">My Journey</h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cyan-500"></div>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>
    );
  };