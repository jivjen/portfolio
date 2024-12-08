"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Instagram, Twitter, Linkedin, Codepen, ExternalLink, Folder, Download, Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';

const SmallProjectCard = ({ project }) => {
  return (
    <div className="group bg-[#112240] p-6 rounded-lg 
      transform transition-all duration-300 hover:-translate-y-2
      hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)]
      border border-[#233554] hover:border-[#64FFDA]/30 cursor-default">
      <div className="flex justify-between items-start mb-4">
        <Folder className="w-10 h-10 text-[#64FFDA] transition-all duration-300 
          group-hover:text-[#64FFDA] group-hover:transform group-hover:translate-y-[-2px]" />
        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} className="hover:-translate-y-1 transition-all duration-300">
              <Github className="w-5 h-5 text-[#a8b2d1] hover:text-[#64FFDA]" />
            </a>
          )}
          {project.external && (
            <a href={project.external} className="hover:-translate-y-1 transition-all duration-300">
              <ExternalLink className="w-5 h-5 text-[#a8b2d1] hover:text-[#64FFDA]" />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-[#CCD6F6] text-xl font-semibold mb-2 group-hover:text-[#64FFDA] 
        transition-all duration-300">{project.title}</h3>
      <p className="text-[#8892B0] leading-relaxed mb-4 group-hover:text-[#ccd6f6] transition-all duration-300">
        {project.description}
      </p>
      <ul className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <li key={index} className="bg-[#112240]/95 px-3 py-1 rounded-full text-sm 
            backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.3)]
            border border-[#233554] hover:border-[#64FFDA]/30
            text-[#A8B2D1] hover:text-[#64FFDA] transition-all duration-300
            hover:transform hover:-translate-y-1 cursor-default
            relative z-20">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <div className="group relative min-h-[500px] w-full mb-32">
      <div className="h-full bg-[#112240] rounded-lg p-8 flex flex-col
        border border-[#233554] group-hover:border-[#64FFDA]/20 
        transition-all duration-300 hover:translate-y-[-5px]
        hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)]">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-[#64FFDA] font-mono">Featured Project</p>
            <div className="h-px flex-1 bg-gradient-to-r from-[#64FFDA]/30 to-transparent"></div>
          </div>

          <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg
            shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]">
            <div className="absolute inset-0 bg-[#64FFDA] opacity-20 mix-blend-multiply 
              group-hover:opacity-30 transition-all duration-300"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-fill transition-all duration-500 
                group-hover:scale-105"
            />
          </div>
          <div className="flex gap-4">
            <h3 className="text-3xl font-bold text-[#CCD6F6] mb-4 group-hover:text-[#64FFDA]
            transition-all duration-300">{project.title}</h3>
            {project.external && (
              <a href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-1 transition-all duration-300">
                <ExternalLink className="w-8 h-8 text-[#a8b2d1] hover:text-[#64FFDA]" />
              </a>
            )}
          </div>
          <div className="bg-[#112240]/50 p-6 rounded-lg mb-6 backdrop-blur-sm
            border border-[#233554]/50 group-hover:border-[#64FFDA]/10
            transition-all duration-300">
            <p className="text-[#A8B2D1] leading-relaxed group-hover:text-[#CCD6F6]
              transition-all duration-300">
              {project.description}
            </p>
          </div>

          <div className="flex-grow">
            <ul className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <li key={i} className="tech-tag px-3 py-1 rounded-full text-sm 
                  text-[#A8B2D1] hover:text-[#64FFDA] transition-all duration-300
                  hover:transform hover:-translate-y-1 cursor-default">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const otherProjects = [
  {
    title: "Delivery Drone",
    description: "A smart autonomous drone that can be used for quick commerce delivery",
    technologies: ["Python", "ArduPilot", "RaspberryPi"],
  },
  {
    title: "Trollo",
    description: "A smart human-following trolley prototype using image processing and object tracking",
    technologies: ["Python", "OpenCV", "RaspberryPi"],
  },
  {
    title: "SecBot",
    description: " An office assistant bot using SLAM (Simultaneous Localization and Mapping)",
    technologies: ["RaspberryPi", "Python", "ROS"],
    github: "#",
    external: "#",
  },
  {
    title: "ShortenIt",
    description: "A text summarizer prototype using deep learning models",
    technologies: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    title: "Ichigo",
    description: "An IoT based agricultural bot that uses image processing to detect diseased plants by going around and surveying the field",
    technologies: ["RaspberryPi", "Python", "OpenCV"],
    github: "#",
    external: "#",
  },
  {
    title: "Emote",
    description: "A Facial emotion recognition system using Deep Learning",
    technologies: ["Python", "FaceNet", "Flask"],
  }
];


const projects = [
  {
    title: "Smart Inventory Management",
    description: "Revolutionizing retail with cutting-edge image recognition. This project leverages AI and computer vision to automate inventory management, reducing human error and streamlining operations.",
    technologies: ["Python", "YOLO", "TRex", "NextJS", "Flask", "PostgreSQL"],
    github: "https://github.com/example/halcyon-theme",
    image: "/inventory.png"
  },
  {
    title: "Invoice Automation System",
    description: "A comprehensive invoice automation system that uses AI and machine learning to process invoices, extract key data, and automate payment processing. The system is designed to reduce manual effort and improve accuracy in financial operations.",
    technologies: ["Python", "NextJS", "Ollama", "Llama3", "LlamaParse"],
    github: "https://github.com/example/spotify-profile",
    image: "/invoice.png"
  },
  {
    title: "Automated Recruitment System",
    description: "An AI-powered system that automates the process of parsing resumes, extracting relevant information, and matching candidates with job requirements. This system is designed to streamline recruitment processes and improve hiring efficiency.",
    technologies: ["Python", "NextJS", "Ollama", "Llama3", "LlamaParse"],
    image: "/resume.png"
  },
  {
    title: "DeMail [Work In Progress]",
    description: "A web application where users can give in their mail IDs, analyse their subscriptions and unsubscribe from unwanted subscriptions in a single click.",
    technologies: ["Go", "Svelte", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/example/time-to-have-more-fun",
    image: "/demail1.png"
  }
];

const startupProjects = [
  {
    title: "chiqo.in",
    description: "Tried out quick commerce in fashion retail with 1-hour delivery promise. Built and scaled the platform to handle real-time inventory management across multiple physical outlets, dynamic delivery routing, and seamless payment processing. Had a small pilot run and successfully processed a few initial orders before shutting it down.",
    technologies: ["NextJS", "Node.js", "PostgreSQL", "Redis", "Google Maps API", "Stripe"],
    external: "https://chiqo.in",
    image: "/chiqo.png",
    status: "Status: Discontinued"
  },
  {
    title: "hireloom.ai",
    description: "Developed an enterprise-grade AI automation platform that helped businesses streamline operations through intelligent process automation. Leveraged LLMs for document processing, workflow automation, and predictive analytics. Served 5+ enterprise clients before strategic closure.",
    technologies: ["Python", "Langchain", "FastAPI", "Docker", "AWS", "MongoDB"],
    external: "https://hireloom.ai",
    image: "/hireloom.png",
    status: "Status: Discontinued"
  },
  {
    title: "metrik.in",
    description: "Built an AI-powered research assistant specifically designed for management consultants. Features include automated report generation, competitive analysis, and market trend identification using advanced LLM agents. Built out a private beta with a few consultants.",
    technologies: ["Python", "LangChain", "OpenAI", "NextJS", "Firecrawl", "Gemini"],
    external: "https://metrik.in",
    image: "/metrik.png",
    status: "Status: Discontinued"
  }
];

const StartupProjectCard = ({ project, index }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center px-4 md:px-20 relative group">
      <div className={`w-full max-w-4xl ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} z-10 
        ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
        <div className="flex items-center gap-3 mb-2">
          <p className="text-[#64FFDA] group-hover:text-[#64FFDA]/80 transition-all duration-300">
            {project.status}
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-[#64FFDA]/30 to-transparent 
            group-hover:from-[#64FFDA]/50 transition-all duration-300"></div>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-[#CCD6F6] text-2xl md:text-3xl font-bold">
            {project.title}
          </h3>
          <a href={project.external}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#64FFDA] opacity-60 
              hover:opacity-100 transition-all duration-300
              hover:-translate-y-1 hover:translate-x-1"
            aria-label={`Visit ${project.title}`}>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#64FFDA] 
          transition-all duration-300 group-hover:w-full"></span>
        <div className="bg-[#112240]/90 p-8 rounded-lg mb-6 shadow-xl backdrop-blur-sm 
          border border-[#233554] group-hover:border-[#64FFDA]/20 
          transform transition-all duration-300 group-hover:translate-y-[-5px]
          group-hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)]">
          <p className="text-[#A8B2D1] text-lg leading-relaxed group-hover:text-[#CCD6F6] 
            transition-all duration-300">{project.description}</p>
        </div>
        <ul className="flex flex-wrap mb-6 gap-3">
          {project.technologies.map((tech, i) => (
            <li key={i} className="bg-[#112240]/95 px-4 py-2 rounded-full text-sm 
              backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.3)]
              border border-[#233554] hover:border-[#64FFDA]/30
              text-[#A8B2D1] hover:text-[#64FFDA] transition-all duration-300
              hover:transform hover:-translate-y-1 cursor-default
              before:absolute before:inset-0 before:bg-[#0A192F]/40 before:rounded-full before:-z-10
              relative z-20">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className={`w-full md:w-7/12 h-64 md:h-3/4 overflow-hidden mt-8 md:mt-0 
        md:absolute ${index % 2 === 0 ? 'md:right-20' : 'md:left-20'}`}>
        <div className="relative h-full group">
          <div className="absolute inset-0 bg-[#64FFDA] opacity-20 mix-blend-multiply 
            group-hover:opacity-30 transition-all duration-300"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500 
              group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

const StyledButton = ({ children, className, ...props }) => (
  <Button
    {...props}
    className={`border border-[#64FFDA] text-[#64FFDA] 
      hover:bg-[#64FFDA]/10 transition-all duration-300 
      hover:shadow-[0_5px_15px_-10px_rgba(100,255,218,0.4)]
      hover:transform hover:-translate-y-1 ${className}`}
  >
    {children}
  </Button>
);

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeJob, setActiveJob] = useState('Infosys');
  const [ageString, setAgeString] = useState('');
  const [expString, setExpString] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const startDate = new Date('2020-10-05T00:00:00');
    const updateExp = () => {
      const now = new Date();
      const diff = now - startDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setExpString(`${years} yrs, ${months} mnths, ${days} days, ${hours} hrs, ${minutes} mins, ${seconds} secs`);
    }

    updateExp();
    const timer = setInterval(updateExp, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const birthDate = new Date('1998-07-12T00:00:00');


    const updateAge = () => {
      const now = new Date();
      const diff = now - birthDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setAgeString(`${years} yrs, ${months} mnths, ${days} days, ${hours} hrs, ${minutes} mins, ${seconds} secs`);
    };



    updateAge();

    const timer = setInterval(updateAge, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'work', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jobs = {
    Infosys: {
      title: "Specialist Programmer @ Infosys | Apple [Full-Time]",
      period: "October 2020 - Present",
      responsibilities: [
        "Played a key role in enhancing the Apple Store App, contributing to several major feature releases including TodayAtApple, Compare Feature, and the Trade-In flow",
        "Leveraged deep understanding of the entire Apple ecosystem and expertise in server-side technologies to ensure scalability and resilience during critical events like iPhone pre-booking live sales, handling massive traffic in regions like the US",
        "Actively championed innovation by building AI automation POCs that significantly improved developer productivity and earned client appreciation",
      ]
    },
    Cerner: {
      title: "Software Intern @ Cerner [Internship]",
      period: "December 2019 - June 2020",
      responsibilities: [
        "Contributed to the development of tools used in hospital labs, including the integration of COVID-19 testing functionalities during the pandemic",
        "Worked on data transmission using messaging queues, ensuring seamless communication between hospital devices and Cerner's backend systems",
        "Developed and optimized lab tool interfaces, enhancing data accuracy and streamlining workflows for medical professionals",
      ]
    },
    MavenAI: {
      title: "Machine Learning Intern @ Maven AI [Internship]",
      period: "April 2019 - June 2019",
      responsibilities: [
        "Developed an advanced automatic attendance system using FaceNet for facial recognition, implementing convolutional neural networks (CNNs) for high-accuracy real-time identity verification",
        "Engineered a basic alternative credit scoring model leveraging machine learning algorithms, incorporating non-traditional data sources to assess creditworthiness with improved accuracy and inclusivity"
      ]
    },
    Mactus: {
      title: "Machine Learning Intern @ Mactus Automation [Internship]",
      period: "November 2019",
      responsibilities: [
        "Developed predictive maintenance models for manufacturing machines using machine learning algorithms to analyze historical data and identify patterns indicative of potential failures",
        "Integrated real-time monitoring and predictive analytics to provide early warnings and actionable insights, reducing machine downtime and improving operational efficiency",
      ]
    },
    NUS: {
      title: "Academic Intern @ National University of Singapore [Internship]",
      period: "June 2018",
      responsibilities: [
        "Participated in an advanced internship program at the National University of Singapore (NUS), collaborating with Hewlett Packard on cutting-edge machine learning and deep learning projects",
        "Designed and implemented sophisticated machine learning models for predictive analytics, utilizing large-scale datasets to uncover actionable insights and drive innovation",
        "Leveraged state-of-the-art deep learning frameworks to develop high-performance algorithms, significantly enhancing data processing capabilities and accuracy in real-world applications"
      ]
    },
    Wipro: {
      title: "Software Intern @ Wipro [Internship]",
      period: "April 2018 - May 2018",
      responsibilities: [
        "Worked on revamping the website for a delivery company, enhancing user experience and functionality",
        "Developed and optimized web pages using Java JSPs and Servlets, improving site performance and responsiveness",
      ]
    }
  };

  const NavLink = ({ href, number, text, onClick }) => (
    <a
      href={href}
      className={`group relative text-md transition-all duration-300 ease-in-out
        ${activeSection === href.slice(1) ? 'text-[#64FFDA]' : 'text-[#CCD6F6]'}`}
      onClick={onClick}
    >
      <span className="text-[#64FFDA] opacity-70 mr-1">{number}</span>
      <span className="relative">
        {text}
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#64FFDA] 
          transition-all duration-300 ease-out group-hover:w-full"></span>
      </span>
    </a>
  );

  const SocialIcon = ({ Icon, href }) => (
    <a
      href={href}
      className="group relative p-2 transition-all duration-300 ease-in-out"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5 text-[#CCD6F6] transition-all duration-300 
        group-hover:text-[#64FFDA] group-hover:transform group-hover:-translate-y-1" />
      <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#64FFDA] rounded-full 
        opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
    </a>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#233554] text-[#CCD6F6] font-['Fira_Code',monospace]">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-[#0A192F]/70 backdrop-blur-md"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#64FFDA]/20 to-transparent"></div>
        <div className="relative flex justify-between items-center px-6 md:px-12 py-4">
          <a href="#" className="group relative">
            <div className="absolute inset-0 bg-[#64FFDA]/20 blur-md group-hover:bg-[#64FFDA]/30 
              transition-all duration-300 rounded-lg"></div>
            <div className="relative text-3xl font-bold text-[#64FFDA] tracking-wider">
              JJ
            </div>
          </a>
          <div className="mt-0">
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="#about" number="01" text="About" />
              <NavLink href="#experience" number="02" text="Experience" />
              <NavLink href="#work" number="03" text="Work" />
              <NavLink href="#contact" number="04" text="Contact" />
              <Button
                variant="outline"
                className="border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10
                  px-4 py-2 rounded-md transition-all duration-300 ease-in-out
                  hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(100,255,218,0.1)]"
              >
                Resume
              </Button>
            </nav>
            <button
              className="md:hidden relative group p-2 text-[#64FFDA]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="absolute inset-0 bg-[#64FFDA]/10 rounded-md 
                scale-0 group-hover:scale-100 transition-transform duration-200"></div>
              <Menu className="relative w-6 h-6 transition-transform duration-200 
                group-hover:rotate-90" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-y-0 right-0 w-[min(75vw,400px)] bg-[#112240]/98 backdrop-blur-lg
          z-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} 
          transition-all duration-300 ease-in-out shadow-[-10px_0_30px_-15px_rgba(2,12,27,0.7)]`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#64FFDA] p-2 hover:bg-[#64FFDA]/10 rounded-md
              transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-8 p-8">
          <NavLink href="#about" number="01" text="About" onClick={() => setMenuOpen(false)} />
          <NavLink href="#experience" number="02" text="Experience" onClick={() => setMenuOpen(false)} />
          <NavLink href="#work" number="03" text="Work" onClick={() => setMenuOpen(false)} />
          <NavLink href="#contact" number="04" text="Contact" onClick={() => setMenuOpen(false)} />
          <Button
            variant="outline"
            className="border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10
              px-8 py-3 rounded-md transition-all duration-300 mt-4
              hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(100,255,218,0.1)]"
          >
            Resume
          </Button>
        </nav>
      </div>

      <main>
        <section id="home" className="h-screen flex items-center justify-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl md:text-2xl mb-4">Hi, my name is</h1>
            <h2 className="text-4xl md:text-7xl font-bold">Jival Jenson.</h2>
            <h3 className="text-lg font-bold text-purple-200">[Age: {ageString}]</h3>
            <h3 className="text-lg font-bold text-purple-200 mb-4">[Experience: {expString}]</h3>
            <p className="text-purple-300 mb-8">
              I'm a software engineer fueled by an insatiable curiosity for how technology works. With experience across diverse tech stacks, I currently specialize in developing AI solutions for real-world challenges.            </p>
            {/* <Button
              className="border border-[#64FFDA] text-[#64FFDA] bg-transparent
                hover:bg-[#64FFDA]/10 px-8 py-4 rounded-md transition-all duration-300
                hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(100,255,218,0.1)]"
            >
              Resume
            </Button> */}
          </div>
        </section>

        <section id="about" className="min-h-screen p-4 md:p-8 flex items-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[#CCD6F6] text-2xl md:text-3xl font-semibold mb-4"><span className="text-gold-400">01.</span> About Me</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p className="text-purple-300 mb-4">
                  Turning curiosity into code has been my driving force since I can remember. I love diving into new frameworks and crafting solutions from scratch, learning and adapting as I go. Beyond coding, I'm a multi-instrumentalist with a focus on keyboard, and you'll often find me immersed in books on philosophy, theology, and psychology.                </p>
                <p className="text-purple-300 mb-4">
                  I thrive on quick learning and tackling challenges, whether it's mastering a new tech stack or picking up a musical instrument. My current technical playground includes:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-purple-300">
                  <li>▹ Java</li>
                  <li>▹ JavaScript</li>
                  <li>▹ Python</li>
                  <li>▹ NextJs</li>
                  <li>▹ VueJs</li>
                  <li>▹ Svelte</li>
                  <li>▹ Go</li>
                  <li>▹ Rust</li>
                  <li>▹ C</li>
                  <li>▹ Zig</li>
                </ul>
              </div>
              <div className="flex-shrink-0 w-64 h-52 relative mx-auto md:mx-0">
                <div className="absolute inset-0 bg-gold-400 rounded-md transform translate-x-1 translate-y-2"></div>
                <img src="/jival jenson.jpg" alt="Jival Jenson" className="absolute inset-0 rounded-md " />
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="min-h-screen p-4 md:p-8 flex items-center mb-44">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#CCD6F6] text-2xl md:text-3xl font-semibold mb-4"><span className="text-gold-400">02.</span> Where I've Worked</h2>
            <div className="flex flex-col h-auto">
              <div className="w-full overflow-x-auto mb-4">
                <div className="flex md:flex-col">
                  {Object.keys(jobs).map((job) => (
                    <button
                      key={job}
                      onClick={() => setActiveJob(job)}
                      className={`py-2 px-4 text-left whitespace-nowrap ${activeJob === job ? 'text-gold-400 bg-purple-800' : 'text-purple-300'} hover:bg-purple-800 hover:text-gold-400 transition-colors md:border-l-2 md:border-purple-700`}
                    >
                      {job}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-[#CCD6F6] text-xl font-semibold mb-1">{jobs[activeJob].title}</h3>
                <p className="text-purple-300 mb-4">{jobs[activeJob].period}</p>
                <ul className="space-y-4">
                  {jobs[activeJob].responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold-400 mr-2">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="text-[#64FFDA]">03.</span> Featured Projects
            </h2>

            {/* Startup Projects */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold text-center mb-12 text-[#CCD6F6]">
                Startup Ventures
              </h3>
              <div className="project-card-container">
                {startupProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>

            {/* Professional Projects */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold text-center mb-12 text-[#CCD6F6]">
                Professional Projects
              </h3>
              <div className="project-card-container">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>

            {/* Other Notable Projects */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-12 text-[#CCD6F6]">
                Other Notable Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <SmallProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center p-4 md:p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              <span className="text-gold-400">04. </span>What's Next?
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h3>
            <p className="text-purple-300 mb-8">
              I'm currently looking for new opportunities to collaborate on exciting projects, join innovative teams, and contribute my expertise. Whether it's a challenging technical role or an interesting startup venture, I'm eager to explore possibilities that align with my passion for building impactful solutions.

            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                className="border border-[#64FFDA] text-[#64FFDA] bg-transparent
                  hover:bg-[#64FFDA]/10 px-8 py-4 rounded-md transition-all duration-300
                  hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(100,255,218,0.1)]
                  flex items-center gap-2"
                onClick={() => {
                  window.open('/path-to-your-resume.pdf', '_blank')
                }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="md:hidden flex flex-col items-center p-4 bg-purple-950">
        <div className="flex space-x-4 mb-2">
          <Github className="w-5 h-5 text-purple-300 hover:text-gold-400 cursor-pointer" />
          <Instagram className="w-5 h-5 text-purple-300 hover:text-gold-400 cursor-pointer" />
          <Twitter className="w-5 h-5 text-purple-300 hover:text-gold-400 cursor-pointer" />
          <Linkedin className="w-5 h-5 text-purple-300 hover:text-gold-400 cursor-pointer" />
          <Codepen className="w-5 h-5 text-purple-300 hover:text-gold-400 cursor-pointer" />
        </div>
        <a
          href="mailto:jival.json@gmail.com"
          className="text-purple-300 hover:text-gold-400"
        >
          jival.json@gmail.com
        </a>
      </footer>

      <aside className="hidden md:flex fixed left-4 md:left-8 bottom-0 flex-col items-center space-y-6">
        <SocialIcon Icon={Github} href="https://github.com/jivjen" />
        <SocialIcon Icon={Instagram} href="https://instagram.com/jivaljenson" />
        {/* <SocialIcon Icon={Twitter} href="https://twitter.com/yourusername" /> */}
        <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/jival-jenson" />
        {/* <SocialIcon Icon={Codepen} href="https://codepen.io/yourusername" /> */}
        <div className="w-px h-24 bg-[#8892B0]"></div>
      </aside>

      <aside className="hidden md:flex fixed right-4 md:right-8 bottom-0 flex-col items-center">
        <a
          href="mailto:jival.json@gmail.com"
          className="vertical-text text-purple-300 hover:text-gold-400 mb-8 writing-mode-vertical"
        >
          jival.json@gmail.com
        </a>
        <div className="w-px h-24 bg-purple-300"></div>
      </aside>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;