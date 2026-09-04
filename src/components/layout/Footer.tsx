import React from 'react';
import { profileData } from '../../data/profile';
import { Terminal, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B10] border-t border-slate-800/80 pt-12 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800/60">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-slate-900 border border-sky-500/40 flex items-center justify-center text-sky-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono text-base font-bold text-slate-100">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs text-sky-400 font-mono font-semibold">
              {profileData.title} | {profileData.subtitle}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md font-sans">
              Specialized in scalable backend architectures, PHP 8.3, Symfony 7, API Platform, RESTful APIs, MySQL performance, and technical leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Core Stack
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              <li>• PHP 8.3 / Symfony 7</li>
              <li>• API Platform / REST</li>
              <li>• MySQL / SQL Tuning</li>
              <li>• Symfony Messenger</li>
              <li>• Docker & CI/CD</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub Profile
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn Profile
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> {profileData.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} {profileData.name}. All backend rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with clean PHP & Symfony architectural standards</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
