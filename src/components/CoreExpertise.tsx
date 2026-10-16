import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  CheckSquare, 
  RefreshCw, 
  Flame, 
  Activity, 
  RotateCcw, 
  GitMerge, 
  UserCheck, 
  FileText, 
  Bug, 
  Search, 
  Database, 
  AlertCircle, 
  FileCheck 
} from 'lucide-react';

interface ExpertiseDetail {
  name: string;
  category: 'Execution' | 'Integration' | 'Lifecycle' | 'Design & Analysis';
  description: string;
  bankingApplication: string;
}

const expertiseDetails: Record<string, ExpertiseDetail> = {
  'Functional Testing': {
    name: 'Functional Testing',
    category: 'Execution',
    description: 'Verifying banking software features, business rules, and transaction paths against explicit functional specifications.',
    bankingApplication: 'Applied in loan origination, fund transfers, and balance checks.'
  },
  'Regression Testing': {
    name: 'Regression Testing',
    category: 'Execution',
    description: 'Re-running test suites following new release patches or configuration changes to ensure existing banking workflows remain stable.',
    bankingApplication: 'Executed during T24 patch updates and CRM sprint rollouts.'
  },
  'Smoke Testing': {
    name: 'Smoke Testing',
    category: 'Execution',
    description: 'Initial build verification testing to ensure the critical core services of candidate builds are responsive before deep test cycles.',
    bankingApplication: 'Candidate build validation for CAS and core banking modules.'
  },
  'Sanity Testing': {
    name: 'Sanity Testing',
    category: 'Execution',
    description: 'Targeted verification of specific bug fixes or localized module adjustments without exhaustive regression overhead.',
    bankingApplication: 'Verifying defect resolutions in cheque clearing and payment queues.'
  },
  'Retesting': {
    name: 'Retesting',
    category: 'Execution',
    description: 'Re-executing failed test cases once developers provide fixes to ensure the exact defect condition is fully rectified.',
    bankingApplication: 'Validating resolved JIRA tickets across release builds.'
  },
  'System Integration Testing (SIT)': {
    name: 'System Integration Testing (SIT)',
    category: 'Integration',
    description: 'Validating end-to-end data integrity across disparate interconnected systems (front-end intake, middle-tier routing, core ledger).',
    bankingApplication: 'Connecting FinnOne CAS, Sitecore, and Temenos T24.'
  },
  'User Acceptance Testing (UAT)': {
    name: 'User Acceptance Testing (UAT)',
    category: 'Integration',
    description: 'Supporting business users, product owners, and bank operations staff to validate business scenarios prior to production sign-off.',
    bankingApplication: 'Carried out with end users to confirm systems meet business needs.'
  },
  'Test Scenario & Case Design': {
    name: 'Test Scenario & Case Design',
    category: 'Design & Analysis',
    description: 'Formulating rigorous test scenarios, edge conditions, positive/negative paths, and detailed step-by-step test cases.',
    bankingApplication: 'Documenting cheque image clearing and multi-disbursement paths.'
  },
  'Defect Lifecycle Management': {
    name: 'Defect Lifecycle Management',
    category: 'Lifecycle',
    description: 'Governing defects from initial discovery and logging in JIRA through triage, prioritization, retesting, and verified closure.',
    bankingApplication: 'Standardized defect states (New, Assigned, Fixed, Retested, Closed).'
  },
  'Requirement Analysis': {
    name: 'Requirement Analysis',
    category: 'Design & Analysis',
    description: 'Deep technical and functional inspection of Business Requirement Documents (BRD) and Functional Specification Documents (FSD).',
    bankingApplication: 'Walkthroughs with business analysts on regulatory clearing criteria.'
  },
  'Test Data Creation': {
    name: 'Test Data Creation',
    category: 'Design & Analysis',
    description: 'Formulating representative, compliant synthetic banking test data sets (valid/invalid accounts, MICR codes, loan values).',
    bankingApplication: 'Synthetic loan accounts and split disbursement schedules.'
  },
  'Defect Triage': {
    name: 'Defect Triage',
    category: 'Lifecycle',
    description: 'Active participation in cross-functional triage sessions with developers, QA leads, and business analysts to evaluate severity.',
    bankingApplication: 'Daily triage meetings to resolve release candidate blockers.'
  },
  'Test Closure Reporting': {
    name: 'Test Closure Reporting',
    category: 'Lifecycle',
    description: 'Authoring formal Test Closure Reports (TCR) synthesizing execution metrics, defect density, open risks, and release readiness.',
    bankingApplication: 'Delivered for Sitecore portals and First Abu Dhabi Bank projects.'
  }
};

export const CoreExpertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Execution' | 'Integration' | 'Lifecycle' | 'Design & Analysis'>('All');

  const categories = ['All', 'Execution', 'Integration', 'Lifecycle', 'Design & Analysis'] as const;

  const filteredSkills = portfolioData.coreExpertise.filter((skillName) => {
    if (activeCategory === 'All') return true;
    const detail = expertiseDetails[skillName];
    return detail?.category === activeCategory;
  });

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-2">
              Domain Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Core Testing Expertise
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Specialized manual testing methodologies refined over 5 years across mission-critical banking applications, core accounting engines, and regulatory workflows.
            </p>
          </div>

          {/* Interactive Filter Control (Clean Segmented Tabs) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-300/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skillName) => {
            const detail = expertiseDetails[skillName] || {
              name: skillName,
              category: 'Execution',
              description: 'Rigorous manual software testing methodology applied to core banking systems.',
              bankingApplication: 'Banking domain validation and defect prevention.'
            };

            return (
              <div
                key={skillName}
                className="p-5 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category kicker */}
                  <div className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider mb-1.5">
                    {detail.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {detail.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {detail.description}
                  </p>
                </div>

                {/* Practical Banking Application Context */}
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Banking Context: </span>
                  <span>{detail.bankingApplication}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
