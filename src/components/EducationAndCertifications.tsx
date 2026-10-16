import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';

export const EducationAndCertifications: React.FC = () => {
  const { educationAndCertifications } = portfolioData;

  const educationItems = educationAndCertifications.filter(item => item.type === 'education');
  const certificationItems = educationAndCertifications.filter(item => item.type === 'certification');

  return (
    <section id="education" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-2">
            Credentials & Training
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Academic distinction and formal QA testing credentials verifying foundational testing theory, test design techniques, and computing excellence.
          </p>
        </div>

        {/* 2-Column Split: Education vs Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Formal Education */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-900 flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Formal Education</span>
            </h3>

            {educationItems.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 hover:border-slate-300 transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    Degree
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {edu.periodOrYear}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900">
                  {edu.title}
                </h4>
                <div className="text-sm font-medium text-slate-700 mt-1 mb-3">
                  {edu.institution}
                </div>

                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg mb-4 text-xs font-semibold text-blue-900">
                  Academic Score: {edu.scoreOrGrade}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}

            {/* Quality Commitment Box */}
            <div className="p-5 bg-slate-900 text-white rounded-xl border border-slate-800">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Commitment to Defect Prevention</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Combines strong analytical grounding from an engineering curriculum with meticulous attention to detail required in banking defect lifecycles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Professional Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Professional Testing Certifications</span>
            </h3>

            <div className="space-y-4">
              {certificationItems.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 hover:border-slate-300 transition-all shadow-2xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-100">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-medium text-blue-700">
                        {cert.institution}
                      </div>
                    </div>
                    <div className="px-2.5 py-1 text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-800 rounded-md shrink-0">
                      {cert.scoreOrGrade}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
