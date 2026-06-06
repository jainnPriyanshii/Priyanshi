import React from 'react';
import { skillCategories, skillsQuote } from '../../data/skills';
import { FaBrain } from 'react-icons/fa';
import { FiCpu, FiTerminal, FiDatabase, FiCode } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function StackSection() {
  return (
    <section id="stack" className="py-24 px-6 md:px-12 max-w-container-max mx-auto border-t border-secondary/15">
      {/* Section Header */}
      <div className="mb-20 text-center md:text-left">
        <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold bg-accent/5 px-3 py-1.5 rounded-lg border border-accent/10">
          Skills & Stack
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4 mb-3">
          My toolkit
        </h2>
        <p className="font-sans text-base md:text-lg text-secondary max-w-xl leading-relaxed">
          A selection of technologies and frameworks I use to bridge the gap between complex engineering and elegant user experiences.
        </p>
      </div>

      {/* Stack Bento-ish Rows */}
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {skillCategories.map((cat, catIdx) => {
          const isAi = cat.highlight;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.08 }}
              className={`flex flex-col md:flex-row items-start md:items-center py-5 border-l-2 pl-6 transition-all duration-300 ${
                isAi 
                  ? 'border-accent bg-accent/5 rounded-r-xl pr-6' 
                  : 'border-secondary/15 hover:border-accent/40'
              }`}
            >
              {/* Category Label Column */}
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                {isAi ? (
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 shadow-sm">
                    <FaBrain size={12} /> {cat.title}
                  </span>
                ) : (
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-secondary block">
                    {cat.title}
                  </span>
                )}
              </div>

              {/* Badges/Tags Column */}
              <div className="w-full md:w-3/4 flex flex-wrap gap-x-6 gap-y-4">
                {cat.skills.map((skill) => (
                  isAi ? (
                    <span
                      key={skill}
                      className="font-mono text-xs font-medium px-3.5 py-1.5 border border-accent/20 text-text-primary rounded-lg bg-card shadow-sm hover:border-accent hover:shadow-[0_4px_15px_-3px_rgba(139,94,60,0.15)] transition-all duration-300 cursor-default select-none"
                    >
                      {skill}
                    </span>
                  ) : (
                    <span
                      key={skill}
                      className="skill-tag relative font-sans text-sm md:text-base text-text-primary/95 cursor-default select-none py-1 group"
                    >
                      {skill}
                      {/* Underline Hover Animation */}
                      <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0" />
                    </span>
                  )
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quote Block */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 py-12 border-t border-b border-secondary/15 flex justify-center text-center px-4 max-w-3xl mx-auto"
      >
        <blockquote className="font-display italic text-2xl md:text-3xl text-accent leading-relaxed max-w-2xl select-none">
          "{skillsQuote}"
        </blockquote>
      </motion.div>
    </section>
  );
}
