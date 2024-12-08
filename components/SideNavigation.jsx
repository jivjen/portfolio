import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-scroll';

const SideNavigation = () => {
  const sections = [
    { id: 'about', name: 'About', icon: '👤' },
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'skills', name: 'Skills', icon: '🛠️' },
  ];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <VerticalTimeline layout="1-column-right" className="vertical-timeline-custom-line">
        {sections.map((section) => (
          <VerticalTimelineElement
            key={section.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent', color: '#fff', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={section.icon}
          >
            <Link
              to={section.id}
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {section.name}
            </Link>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default SideNavigation;