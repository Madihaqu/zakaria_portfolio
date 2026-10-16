import React, { useState } from 'react';
import { portfolioData, ToolItem } from '../data/portfolioData';
import { 
  Building2, 
  Bug, 
  CreditCard, 
  FileCheck2, 
  FileSpreadsheet, 
  Layers, 
  Globe, 
  Users2,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const ToolsAndApplications: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);

  const getToolIcon = (id: string) => {
    switch (id) {
      case 't24':
        return Building2;
      case 'jira':
        return Bug;
      case 'finnone-cas':
        return CreditCard;
      case 'los':
        return FileCheck2;
      case 'lms':
        return Layers;
      case 'crm':
        return Users2;
      case 'sitecore':
        return Globe;
      case 'msoffice':
        return FileSpreadsheet;
      default:
        return Building2;
    }
  };

  return (
    <section id="tools" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-2">
            Technical Stack & Enterprise Systems
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tools & Banking Applications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Hands-on manual testing expertise across core banking engines, loan acquisition platforms, and defect governance systems utilized in tier-1 banking institutions.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.toolsAndApplications.map((tool) => {
            const Icon = getToolIcon(tool.id);

            return (
              <div
                key={tool.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Tool Header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-700 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {tool.name}
                  </h3>
                  <div className="text-xs text-blue-600 font-medium mb-2.5">
                    {tool.fullName}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {tool.description}
                  </p>
                </div>

                {/* Key Responsibilities list */}
                <div className="pt-3 border-t border-slate-200/80">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Verified Testing Activities
                  </div>
                  <ul className="space-y-1.5">
                    {tool.keyResponsibilities.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expand button for full details */}
                  <button
                    onClick={() => setSelectedTool(tool)}
                    className="mt-4 w-full py-1.5 px-2 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded border border-slate-200 transition-colors text-center cursor-pointer"
                  >
                    View All Responsibilities
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Tool Modal Detail */}
      {selectedTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl border border-slate-200 max-w-lg w-full p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-blue-600">
                  {selectedTool.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{selectedTool.fullName}</h3>
              </div>
              <button
                onClick={() => setSelectedTool(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 cursor-pointer"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-1">
                  System Role & Application Scope
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedTool.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2">
                  Detailed Testing Responsibilities & Coverage
                </h4>
                <ul className="space-y-2">
                  {selectedTool.keyResponsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedTool(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
