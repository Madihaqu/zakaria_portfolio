import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Download, Printer, Mail, Phone, MapPin, CheckCircle2, Building, Calendar } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, featuredProjects, experienceTimeline, toolsAndApplications, educationAndCertifications } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-xl border border-slate-300 max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Toolbar (Sticky Top) */}
        <div className="p-4 bg-slate-900 text-white rounded-t-xl flex items-center justify-between gap-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-slate-100">
              Zakaria Qureshi — Curriculum Vitae
            </span>
            <span className="hidden sm:inline-block text-xs bg-slate-800 text-blue-400 px-2 py-0.5 rounded border border-slate-700">
              Source Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer border border-slate-700"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-slate-300" />
              <span className="hidden xs:inline">Print</span>
            </button>

            <a
              href="/Zakaria_Qureshi_Resume.pdf"
              download="Zakaria_Qureshi_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors cursor-pointer"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document View */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-800 bg-white">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {profile.name}
            </h1>
            <div className="text-sm font-semibold text-blue-800 mt-0.5">
              {profile.role}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-2">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.email}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.displayPhone}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.location}</span>
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {profile.objective}
            </p>
          </div>

          {/* Professional Synopsis */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Professional Synopsis
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-700">
              {profile.synopsisPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications Tested */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Applications & Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {toolsAndApplications.map((tool) => (
                <div key={tool.id} className="p-2 bg-slate-50 border border-slate-200 rounded">
                  <div className="font-bold text-slate-900">{tool.name}</div>
                  <div className="text-[11px] text-slate-500">{tool.category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">
              {experienceTimeline.map((item, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                    <span className="text-sm">{item.title} — {item.company}, {item.location}</span>
                    <span className="text-blue-800 font-mono text-xs">{item.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-slate-700">
                    {item.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Handled */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Projects Handled (Client: First Abu Dhabi Bank)
            </h2>
            <div className="space-y-5">
              {featuredProjects.map((p) => (
                <div key={p.id} className="text-xs bg-slate-50/70 p-3.5 rounded border border-slate-200/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 border-b border-slate-200/60 mb-2">
                    <span className="font-bold text-sm text-slate-900">{p.name}</span>
                    <span className="text-blue-800 font-mono text-[11px]">{p.period}</span>
                  </div>
                  <div className="text-slate-600 mb-2">
                    <strong>Applications:</strong> {p.application} | <strong>Methodology:</strong> {p.testingMethodology}
                  </div>
                  <ul className="space-y-1 text-slate-700">
                    {p.responsibilities.slice(0, 4).map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <span className="text-blue-600">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Education & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {educationAndCertifications.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded">
                  <div className="font-bold text-slate-900">{item.title}</div>
                  <div className="text-slate-600">{item.institution}</div>
                  <div className="text-blue-800 font-semibold mt-1">{item.scoreOrGrade}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Details */}
          <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap gap-x-6 gap-y-2">
            <span><strong>Permanent Address:</strong> {profile.personalDetails.address}</span>
            <span><strong>Languages:</strong> {profile.personalDetails.languages.join(', ')}</span>
            <span><strong>Nationality:</strong> {profile.personalDetails.nationality}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
