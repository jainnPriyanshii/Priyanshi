import React, { useEffect, useState, useRef } from 'react';
import ChatPlaceholder from '../ChatPlaceholder/ChatPlaceholder';
import { motion } from 'framer-motion';
import { FiCpu } from 'react-icons/fi';

export default function Hero() {
  const [underlineActive, setUnderlineActive] = useState(false);
  const heroRef = useRef(null);

  // Trigger underline animation after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setUnderlineActive(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Mouse follow glow effect scoped to the hero section
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    heroRef.current.style.setProperty('--mouse-x', `${x}%`);
    heroRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden hero-gradient"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(139, 94, 60, 0.09) 0%, transparent 60%)`
      }}
    >
      {/* Decorative SVG grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,94,60,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,94,60,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Content */}
      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center justify-center">
        {/* Subtle glow container */}
        <div className="relative mb-6">
          <div className="absolute -inset-1 bg-accent/10 blur-xl rounded-full opacity-60"></div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-text-primary mb-4"
          >
            Hi, I'm{' '}
            <span className={`underline-anim inline-block ${underlineActive ? 'active' : ''}`}>
              Priyanshi
            </span>.
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-mono text-xs md:text-sm text-accent font-semibold uppercase tracking-[0.25em] mb-12 opacity-90 max-w-lg leading-relaxed"
        >
          AI Engineer &bull; Full Stack Developer &bull; LLM Builder
        </motion.p>

        {/* Chat Placeholder Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="w-full"
        >
          <ChatPlaceholder />
        </motion.div>
      </div>

      {/* Atmospheric Accent Glyphs (Left & Right margins) */}
      <div className="absolute bottom-12 left-12 hidden lg:block opacity-20 hover:opacity-50 transition-opacity duration-300">
        <div className="w-24 h-24 border border-secondary/20 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
          <FiCpu className="text-accent" size={32} />
        </div>
      </div>
      
      <div className="absolute top-1/4 right-16 hidden lg:block opacity-10 select-none">
        <div className="font-mono text-[110px] leading-none text-secondary font-bold">
          AI
        </div>
      </div>
    </section>
  );
}
