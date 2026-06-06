import React from 'react';
import { projects } from '../../data/projects';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiMessageSquare, FiArrowUpRight } from 'react-icons/fi';
import { LuSparkles } from 'react-icons/lu';
import { motion } from 'framer-motion';

export default function ProjectShowcase() {
  const triggerAskAi = (projectTitle) => {
    // Dispatch custom event to trigger chatbot scrolling and response
    const event = new CustomEvent('ask-ai', { 
      detail: `Tell me about the ${projectTitle} project` 
    });
    window.dispatchEvent(event);
  };

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-container-max mx-auto border-t border-secondary/15">
      {/* Section Header */}
      <div className="mb-20 text-center md:text-left">
        <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold bg-accent/5 px-3 py-1.5 rounded-lg border border-accent/10">
          Portfolio
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4 mb-3">
          Things I've built
        </h2>
        <p className="font-sans text-base md:text-lg text-secondary max-w-xl leading-relaxed">
          A selection of engineering projects focused on AI integration, scalable architecture, and intuitive human interfaces.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-28">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl border border-secondary/20 bg-card premium-shadow-hover select-none">
                  {/* Subtle lighting glow on card hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover grayscale-[20%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                {/* Category metadata */}
                <div className="flex items-center gap-2 mb-3">
                  <LuSparkles size={14} className="text-accent" />
                  <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-3xl md:text-4xl text-text-primary mb-2">
                  {project.title}
                </h3>
                
                {/* Subtitle */}
                <p className="font-mono text-xs text-secondary/70 uppercase tracking-wider mb-4">
                  {project.subtitle}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 bg-card border border-secondary/15 text-secondary rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="font-sans text-sm md:text-base text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <ul className="flex flex-col gap-2.5 mb-8 w-full">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-text-primary">
                      <span className="text-accent mt-1 flex-shrink-0 font-bold">&bull;</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs and Links */}
                <div className="flex flex-wrap items-center gap-4 w-full border-t border-secondary/10 pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-secondary hover:text-accent transition-colors duration-300"
                  >
                    <FaGithub size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-secondary hover:text-accent transition-colors duration-300 mr-auto"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>

                  {/* Ask AI button */}
                  <button
                    onClick={() => triggerAskAi(project.title)}
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-accent bg-accent/5 hover:bg-accent/10 border border-accent/25 px-4 py-2 rounded-full transition-all duration-300 active:scale-95 group"
                  >
                    <FiMessageSquare size={14} className="group-hover:rotate-12 transition-transform" />
                    Ask AI about this <FiArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
