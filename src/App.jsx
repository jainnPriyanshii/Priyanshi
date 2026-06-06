import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary selection:bg-accent/15 selection:text-text-primary">
      {/* Background grain texture overlay */}
      <div className="grain-overlay" />

      {/* 
        Outer premium frame around the app on desktop.
        Wraps content inside a rounded-3xl container with a subtle frame border.
      */}
      <div className="md:border-[12px] md:border-secondary/10 md:rounded-[32px] md:m-4 md:min-h-[calc(100vh-2rem)] flex flex-col justify-between overflow-hidden shadow-inner">
        <div>
          {/* Navigation Header */}
          <Navbar />

          {/* Section pages orchestration */}
          <Home />
        </div>

        {/* Global footer */}
        <Footer />
      </div>
    </div>
  );
}
