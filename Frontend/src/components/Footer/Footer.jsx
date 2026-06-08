import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full py-16 px-6 md:px-12 flex flex-col items-center justify-center gap-6 text-center max-w-container-max mx-auto border-t border-secondary/15">
      {/* Decorative Divider Line */}
      <div className="h-[1px] w-16 bg-accent/20 mb-2"></div>

      <a 
        href="#" 
        onClick={handleLogoClick}
        className="font-display text-xl font-bold text-text-primary hover:text-accent transition-colors duration-300"
      >
        Priyanshi Jain
      </a>

      <p className="font-sans text-sm text-secondary/80 max-w-md">
       Building intelligent applications at the intersection of Full-Stack Development and AI.
      </p>

      <div className="flex gap-6 mt-2">
        <a 
          href="https://www.linkedin.com/in/priyanshi-jain-83a99628b" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-mono text-xs uppercase tracking-wider text-secondary hover:text-accent transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/jainnPriyanshii" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-mono text-xs uppercase tracking-wider text-secondary hover:text-accent transition-colors duration-300"
        >
          GitHub
        </a>
        <a 
          href="mailto:priyanshijain664@gmail.com" 
          className="font-mono text-xs uppercase tracking-wider text-secondary hover:text-accent transition-colors duration-300"
        >
          Email
        </a>
      </div>

      <p className="font-mono text-[10px] uppercase tracking-widest text-secondary/40 mt-6 flex items-center gap-1.5 select-none">
        Built with Thoughtful Engineering &bull; &copy; {currentYear} Priyanshi Jain.
      </p>
    </footer>
  );
}
