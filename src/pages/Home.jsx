import React from 'react';
import Hero from '../components/Hero/Hero';
import ProjectShowcase from '../components/ProjectShowcase/ProjectShowcase';
import ExperienceTimeline from '../components/ExperienceTimeline/ExperienceTimeline';
import StackSection from '../components/StackSection/StackSection';
import ContactSection from '../components/ContactSection/ContactSection';

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Landing & AI Chat Input */}
      <Hero />

      {/* Projects Showcase Section (Work) */}
      <ProjectShowcase />

      {/* Experience Vertical Timeline Section (Experience) */}
      <ExperienceTimeline />

      {/* categorized Toolkit Grid Section (Stack) */}
      <StackSection />

      {/* Premium CTA & Links Section (Contact) */}
      <ContactSection />
    </main>
  );
}
