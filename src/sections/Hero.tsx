import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { CodeWindow } from '../components/ui/CodeWindow';
import { ArchDiagram } from '../components/ui/ArchDiagram';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { Mail, ArrowRight, Code2, Layers, Server, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [visualMode, setVisualMode] = useState<'code' | 'architecture'>('code');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-backend-bg">
      {/* Background Decorative Tech Grid & Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines, Positioning & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Senior Backend Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>PHP 8.3 & Symfony 7 Specialist</span>
            </div>

            {/* Titles */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
                {profileData.title}
              </h1>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold font-mono gradient-text-cyan">
                {profileData.subtitle}
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              {profileData.heroDescription}
            </p>

            {/* Emphasized Core Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-3 py-1 rounded bg-slate-900 border border-sky-500/40 text-sky-300 font-semibold flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-sky-400" /> PHP 8.3
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-sky-500/40 text-sky-300 font-semibold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-sky-400" /> Symfony 7
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-indigo-500/40 text-indigo-300 font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" /> API Platform
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-amber-500/40 text-amber-300 font-semibold flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-amber-400" /> MySQL / Doctrine
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-emerald-500/40 text-emerald-300 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Backend Arch
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono">
              <button
                onClick={() => scrollToSection('experience')}
                className="px-5 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm shadow-glow-cyan transition-all flex items-center gap-2"
              >
                View my experience
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-sky-500/50 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all"
              >
                View my projects
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-3 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm transition-all"
              >
                Contact me
              </button>
            </div>

            {/* Social Icons & Email */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" /> GitHub
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-300" /> LinkedIn
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-300" /> {profileData.email}
              </a>
            </div>
          </div>

          {/* Right Column: Code Snippet / Architecture Visualizer */}
          <div className="lg:col-span-6">
            <div className="space-y-3">
              {/* Visual Mode Switcher */}
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Live Code & Architecture Preview
                </span>
                <div className="inline-flex rounded-lg p-1 bg-slate-900 border border-slate-800 font-mono text-xs">
                  <button
                    onClick={() => setVisualMode('code')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      visualMode === 'code'
                        ? 'bg-sky-950 text-sky-300 border border-sky-500/40 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    PHP Code
                  </button>
                  <button
                    onClick={() => setVisualMode('architecture')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      visualMode === 'architecture'
                        ? 'bg-sky-950 text-sky-300 border border-sky-500/40 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Architecture Flow
                  </button>
                </div>
              </div>

              {/* Render Selected Visual Component */}
              {visualMode === 'code' ? <CodeWindow /> : <ArchDiagram />}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
