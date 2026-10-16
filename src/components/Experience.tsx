import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experienceTimeline } = portfolioData;

  return (
    <section id="experience" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-2">
            Work History
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Progressive career trajectory in manual software testing at Tristha Global Pvt Ltd, Mumbai, delivering end-to-end quality assurance across enterprise banking engagements.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
          {experienceTimeline.map((item, index) => (
            <div key={index} className="relative pl-6 md:pl-10">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>

              {/* Role Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 hover:border-slate-300 transition-all">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 text-xs sm:text-sm text-slate-600 font-medium mt-1">
                      <span className="flex items-center gap-1.5 text-blue-700">
                        <Building className="w-3.5 h-3.5" />
                        <span>{item.company}</span>
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Dates & Status */}
                  <div className="flex flex-col sm:items-end">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.period}</span>
                    </div>
                    {item.statusNote && (
                      <span className="text-[11px] text-slate-400 mt-0.5">
                        {item.statusNote}
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Responsibilities list */}
                <div className="mt-5">
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
                    Key Testing Responsibilities & Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
