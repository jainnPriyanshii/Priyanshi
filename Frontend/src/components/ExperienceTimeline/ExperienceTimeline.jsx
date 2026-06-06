import React from 'react';
import { experiences, education } from '../../data/experience';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-[900px] mx-auto border-t border-secondary/15">
      {/* Section Header */}
      <div className="mb-20 text-center md:text-left">
        <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold bg-accent/5 px-3 py-1.5 rounded-lg border border-accent/10">
          Career Path
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4 mb-3">
          Where I've worked
        </h2>
        <p className="font-sans text-base md:text-lg text-secondary max-w-xl leading-relaxed">
          A journey through engineering challenges, from dual-role e-commerce platforms to precision fintech interfaces.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-4 md:pl-8">
        
        {/* Vertical Timeline Track Line */}
        <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/30 to-transparent" />

        {/* Experience Cards */}
        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Connector Node (animated on card hover) */}
              <div className="absolute left-[-5px] md:left-[-7px] top-5 h-3.5 w-3.5 md:h-4 md:w-4 rounded-full bg-accent border-4 border-background ring-2 ring-accent/20 z-10 transition-transform duration-300 group-hover:scale-125 group-hover:bg-accent" />

              {/* Glassmorphic Timeline Card */}
              <article className="grainy-surface bg-card rounded-2xl p-6 md:p-8 border border-secondary/20 premium-shadow-hover transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-2xl text-text-primary font-bold">
                      {exp.company}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-secondary mt-1 flex items-center gap-1.5">
                      <FiBriefcase size={12} className="text-accent" /> {exp.role}
                    </p>
                  </div>
                  <div className="bg-accent text-background font-mono text-[10px] md:text-xs px-3.5 py-1.5 rounded-full font-semibold flex items-center gap-1.5 shadow-sm">
                    <FiCalendar size={12} /> {exp.period}
                  </div>
                </div>

                <p className="font-sans text-sm md:text-base text-text-primary/90 mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 bg-background border border-secondary/15 text-accent rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* Education Bottom Node (representing graduation / scholastic summary) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative pl-8 md:pl-10 pt-10"
        >
          {/* Timeline final circular node */}
          <div className="absolute left-[-7px] md:left-[-9px] bottom-0 h-4 w-4 md:h-5 md:w-5 bg-accent rounded-full ring-4 ring-accent/15 shadow-[0_0_15px_rgba(139,94,60,0.3)]" />

          {/* Education content block */}
          <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 bg-gradient-to-r from-accent/5 to-transparent border-l-2 border-accent py-4 px-6 rounded-r-2xl w-full border-t border-r border-b border-secondary/10">
            <FaGraduationCap className="text-accent flex-shrink-0" size={24} />
            <div className="flex-grow">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold block mb-0.5">
                Education
              </span>
              <p className="font-mono text-xs md:text-sm text-text-primary tracking-wide leading-relaxed">
                {education.degree} &bull; <span className="font-bold text-accent">{education.grade}</span> &bull; {education.period} &bull; <span className="text-secondary">{education.school}</span>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
