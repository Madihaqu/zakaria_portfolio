import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, Shield, Users, Layers, Award, FileSpreadsheet } from 'lucide-react';

export const About: React.FC = () => {
  const { profile } = portfolioData;

  const keyHighlights = [
    {
      icon: Layers,
      title: 'Banking Domain & Workflows',
      description: 'Deep functional testing exposure to core banking operations, cheque clearing pipelines (ICCS), loan origination (LOS), loan management (LMS), and split disbursements.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Test Execution',
      description: 'Hands-on design, review, and rigorous execution of test scenarios and test cases across Functional, Regression, Smoke, Sanity, Retesting, SIT, and UAT cycles.'
    },
    {
      icon: Users,
      title: 'QA Team Task Allocation',
      description: 'Experience leading QA team execution tasks, delegating testing modules, monitoring progress against project schedules, and driving test deliverables to sign-off.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Defect Lifecycle & JIRA',
      description: 'Proficient in end-to-end defect tracking using JIRA, authoring detailed reproduction steps, participating in triage meetings, and validating developer candidate fixes.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-2">
            Professional Overview
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Zakaria Qureshi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Software Test Engineer with 5 years of hands-on experience specializing in manual functional testing for the enterprise banking domain.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Professional Synopsis */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Career Objective & Professional Synopsis
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {profile.objective}
              </p>
            </div>

            {/* Resume-Grounded Synopsis Checklist */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">
                Core Qualifications & Testing Competencies
              </h4>
              <ul className="space-y-3">
                {profile.synopsisPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Key Value Pillars & Personal Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 4 Feature Pillars */}
            <div className="space-y-4">
              {keyHighlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-slate-200/90 rounded-lg hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 bg-blue-50 border border-blue-100 rounded text-blue-700 shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Verified Personal Details Box (From Resume) */}
            <div className="p-5 bg-slate-900 text-white rounded-xl border border-slate-800 shadow-sm">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Personal & Location Details
              </h4>
              <div className="grid grid-cols-2 gap-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Permanent Location:</span>
                  <span className="font-medium text-slate-200">{profile.personalDetails.address}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Languages Known:</span>
                  <span className="font-medium text-slate-200">
                    {profile.personalDetails.languages.join(', ')}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">Nationality:</span>
                  <span className="font-medium text-slate-200">{profile.personalDetails.nationality}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Academic Distinction:</span>
                  <span className="font-medium text-blue-400">9.76 CGPA (Mumbai Univ)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
