import React, { useState } from 'react';
import { portfolioData, BankingProject } from '../data/portfolioData';
import { 
  Building2, 
  Calendar, 
  Layers, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle,
  X,
  ExternalLink
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<BankingProject | null>(null);

  const categories = ['All', 'Cheque Clearing', 'Core Banking', 'Lending', 'Compliance & Regulatory'] as const;

  const filteredProjects = portfolioData.featuredProjects.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-2">
              Featured Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Banking Projects
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Five enterprise manual testing initiatives executed for First Abu Dhabi Bank (FAB), covering core banking architectures, high-volume cheque image clearing, and multi-tranche lending.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 hover:border-slate-300 transition-all flex flex-col justify-between ${
                idx === 0 && selectedCategory === 'All' ? 'lg:col-span-2 bg-gradient-to-br from-slate-50 to-blue-50/20' : ''
              }`}
            >
              <div>
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200/80 text-xs">
                  <div className="flex items-center gap-2 font-medium text-slate-600">
                    <span className="text-blue-700 font-semibold">{project.client}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>{project.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium font-mono text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{project.period}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {project.name}
                </h3>

                {/* Systems Involved */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                  <span className="font-semibold text-slate-700">Application:</span>
                  <span className="text-blue-700 font-medium">{project.application}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>Methodology: {project.testingMethodology}</span>
                </div>

                {/* Project Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Key Responsibilities Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                    Key Testing Responsibilities:
                  </div>
                  <ul className="space-y-1.5">
                    {project.responsibilities.slice(0, 3).map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span className="leading-normal">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* T24 Validation Teaser if available */}
                {project.t24ValidationPoints && project.t24ValidationPoints.length > 0 && (
                  <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg mb-4 text-xs">
                    <div className="font-semibold text-blue-900 mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                      <span>Temenos T24 Synchronization:</span>
                    </div>
                    <p className="text-blue-800/90 leading-tight">
                      {project.t24ValidationPoints[0]}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {project.responsibilities.length} verified test scopes
                </span>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                >
                  <span>View Full Test Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-xl border border-slate-200 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span className="font-semibold text-blue-600 uppercase">{activeModalProject.client}</span>
                  <span>·</span>
                  <span>{activeModalProject.category}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {activeModalProject.name}
                </h3>
                <div className="text-xs text-slate-500 mt-1 flex flex-wrap gap-x-4">
                  <span><strong>Application:</strong> {activeModalProject.application}</span>
                  <span><strong>Period:</strong> {activeModalProject.period}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-6">
              
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">
                  Project Scope & Architecture
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-200/80">
                  {activeModalProject.summary}
                </p>
              </div>

              {/* All Responsibilities */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-3">
                  Comprehensive Manual Testing Responsibilities
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* T24 Core Verification Points if present */}
              {activeModalProject.t24ValidationPoints && activeModalProject.t24ValidationPoints.length > 0 && (
                <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-blue-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    <span>Temenos T24 System Validations Performed</span>
                  </h4>
                  <ul className="space-y-2 pt-1">
                    {activeModalProject.t24ValidationPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-blue-950">
                        <span className="text-blue-500 font-bold shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Highlights / Tags */}
              {activeModalProject.technicalHighlights && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">
                    Key Technical Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technicalHighlights.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs bg-slate-100 border border-slate-200 text-slate-700 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
