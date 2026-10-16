import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, MapPin, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-lg font-bold text-white tracking-tight">
              {profile.name}
            </div>
            <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
              {profile.role}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Manual Software Test Engineer with 5 years specializing in banking domain workflows, Temenos T24, FinnOne CAS, and defect lifecycle management.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
              Portfolio Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-white transition-colors">About Overview</a>
              <a href="#expertise" className="hover:text-white transition-colors">Core Testing Expertise</a>
              <a href="#tools" className="hover:text-white transition-colors">Tools & Applications</a>
              <a href="#experience" className="hover:text-white transition-colors">Work Experience</a>
              <a href="#projects" className="hover:text-white transition-colors">Banking Case Studies</a>
              <a href="#education" className="hover:text-white transition-colors">Certifications & B.E.</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact Form</a>
              <button
                onClick={onOpenResume}
                className="text-left text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                View Full Resume
              </button>
            </div>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
              Direct Contact
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors break-all">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors">
                  {profile.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved. Professional Testing Portfolio.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
