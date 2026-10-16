import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Mail, Phone, MapPin, CheckCircle2, FileText, ExternalLink } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile } = portfolioData;
  const [imageError, setImageError] = useState(false);
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem('zq_custom_photo');
    } catch {
      return null;
    }
  });

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Subtle background ambient grid (consulting blueprint pattern) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Domain Kicker: Clean unboxed metadata with separators (Strict Zero-Pill) */}
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider font-semibold text-blue-400">
              <span>Software Test Engineer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Banking Domain Specialist</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Temenos T24 & FinnOne CAS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
              Quality Assured.<br className="hidden sm:inline" />
              <span className="text-slate-200"> Banking Systems Trusted.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Specialized in manual functional and regression testing for high-stakes banking architectures. Proven expertise across core banking workflows, System Integration Testing (SIT), User Acceptance Testing (UAT), and defect lifecycle management with JIRA.
            </p>

            {/* Small Expertise Tags: Clean unboxed text with typographic separators (Strict Anti-Slop) */}
            <div className="pt-1">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Core Focus Areas
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-200 font-medium">
                {profile.heroTags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span className="hover:text-blue-400 transition-colors">{tag}</span>
                    {idx < profile.heroTags.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* CTA Actions: Single-line controls with robust links */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
              >
                <span>Explore My Experience</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Full Resume</span>
              </button>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{profile.displayPhone}</span>
              </a>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{profile.location}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Corporate Portrait Card & Executive Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-slate-800/60 border border-slate-700/80 rounded-xl p-5 shadow-2xl relative">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/60 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Software Test Engineer Profile</span>
                <span className="text-slate-400">Mumbai, India</span>
              </div>

              {/* Portrait Image Frame */}
              <div className="relative aspect-[4/4.6] w-full rounded-lg overflow-hidden bg-slate-900 border border-slate-700/60 flex items-center justify-center group">
                {!imageError ? (
                  <img
                    src={customPhoto || "/images/profile-portrait.jpg"}
                    alt="Zakaria Qureshi - Software Test Engineer & Banking QA"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      if (!customPhoto) {
                        setImageError(true);
                      } else {
                        setCustomPhoto(null);
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  /* High quality fallback if image ever fails */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900">
                    <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-blue-500/40 flex items-center justify-center text-white font-bold text-2xl mb-3 shadow-inner">
                      ZQ
                    </div>
                    <div className="text-base font-bold text-white">Zakaria Qureshi</div>
                    <div className="text-xs text-blue-400 mt-0.5">Software Test Engineer</div>
                    <div className="text-xs text-slate-400 mt-2 max-w-[220px]">
                      5 Years Experience in Banking QA & Temenos T24
                    </div>
                  </div>
                )}

                {/* Subtle photo upload / swap overlay button */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <label className="cursor-pointer bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white px-2.5 py-1 rounded text-[11px] font-medium border border-slate-700 backdrop-blur-xs flex items-center gap-1 shadow-sm">
                    <span>Change Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            const res = event.target?.result as string;
                            if (res) {
                              setCustomPhoto(res);
                              localStorage.setItem('zq_custom_photo', res);
                              setImageError(false);
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>

              {/* Executive Details Strip */}
              <div className="mt-4 pt-3 border-t border-slate-700/60 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Testing Specialty:</span>
                  <span className="font-semibold text-slate-200">Manual Functional QA</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Primary Core System:</span>
                  <span className="font-semibold text-slate-200">Temenos T24 & CAS</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Key Client Handled:</span>
                  <span className="font-semibold text-slate-200">First Abu Dhabi Bank (FAB)</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-700/40">
                  <span className="text-slate-400">Education:</span>
                  <span className="font-semibold text-blue-400">B.E. Mumbai Univ (9.76 CGPA)</span>
                </div>
              </div>

              {/* Card CTA action */}
              <div className="mt-4 pt-2">
                <a
                  href="#projects"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-200 bg-slate-700/50 hover:bg-slate-700 hover:text-white rounded border border-slate-600/60 transition-colors"
                >
                  <span>View 5 Featured Banking Projects</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Proof Strip Below the Split (Mandatory Spatial Math) */}
        <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              5 Years
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              Banking Domain QA
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              5 Projects
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              Enterprise Client Rollouts
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              Manual Testing Precision
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              9.76 CGPA
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              B.E. Mumbai University
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
