import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'priyanshijain664@gmail.com',
      href: 'mailto:priyanshijain664@gmail.com',
      icon: <FiMail className="text-accent" size={20} />
    },
    {
      label: 'LinkedIn',
      value: 'priyanshijain',
      href: 'https://www.linkedin.com/in/priyanshi-jain-83a99628b/',
      icon: <FaLinkedin className="text-accent" size={20} />
    },
    {
      label: 'GitHub',
      value: 'jainnpriyanshii',
      href: 'https://github.com/jainnPriyanshii',
      icon: <FaGithub className="text-accent" size={20} />
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-[720px] mx-auto border-t border-secondary/15">
      <div className="w-full text-center">
        {/* Section Heading */}
        <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold bg-accent/5 px-3 py-1.5 rounded-lg border border-accent/10">
          Get In Touch
        </span>
        
        <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4 mb-3">
          Let's build something.
        </h2>
        
        <p className="font-sans text-base md:text-lg text-secondary mb-12 max-w-[500px] mx-auto opacity-90 leading-relaxed">
          Open to full-time roles, internships, and AI project collaborations.
        </p>

        {/* Contact Channel Cards */}
        <div className="flex flex-col gap-4 w-full">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex items-center justify-between p-5 bg-card border border-secondary/15 rounded-xl hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_10px_30px_-10px_rgba(139,94,60,0.15)] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {/* Circular Icon Wrapper */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-background border border-secondary/10 group-hover:bg-accent/10 transition-colors duration-300">
                  {link.icon}
                </div>
                
                {/* Label and Value */}
                <div className="text-left">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-secondary/70">
                    {link.label}
                  </span>
                  <span className="font-sans text-base md:text-lg text-text-primary font-medium group-hover:text-accent transition-colors duration-300">
                    {link.value}
                  </span>
                </div>
              </div>
              
              {/* Arrow Indicator */}
              <FiArrowRight 
                className="text-secondary/50 group-hover:text-accent group-hover:translate-x-1.5 transition-all duration-300" 
                size={18} 
              />
            </motion.a>
          ))}
        </div>

        {/* Decorative Profile Snapshot / Workplace Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative group"
        >
          {/* Subtle glow behind image on hover */}
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-secondary/10 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] border border-secondary/15 bg-card select-none">
            <img 
              alt="Workplace aesthetic" 
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] hover:scale-105 transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqocU94pWSsEGqREIBTtb6A5VlvLMOWgI6HuD7AKeHrKzqPPVWS3S3D2nh6hrsWanXA2uI577i_8zjhIW-8Z9M4AmmWZgTg7xUhetkwZ73AFQ1AeQcu1o3V2dXFMLnMnP9-5gTYaWStYWD9Ryl6kq5SyHs_Iy4mMDdQ5pih4u80mbHwnLfKZWlaqKtu5daz6_c4r2PwI1emuGCX0HDH9xAUQakZud94p9gxqwsiAAL45aex2Nw8LnglPpD0rxGCsbD4Pu4VL22b0H6"
            />
          </div> */}
        </motion.div>

      </div>
    </section>
  );
}
