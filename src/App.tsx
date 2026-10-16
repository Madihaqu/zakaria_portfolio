import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoreExpertise } from './components/CoreExpertise';
import { ToolsAndApplications } from './components/ToolsAndApplications';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { EducationAndCertifications } from './components/EducationAndCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <CoreExpertise />
        <ToolsAndApplications />
        <Experience />
        <Projects />
        <EducationAndCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Full Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
