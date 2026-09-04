import React from 'react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Server, Cpu, Network, Users, Check, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Server,
  Cpu,
  Network,
  Users,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0E131F] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ABOUT ME"
          title="Senior PHP & Symfony Backend Positioning"
          subtitle="Focused on delivering robust, maintainable, and highly optimized backend services for complex enterprise applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">
          {/* Main Biography Card */}
          <div className="lg:col-span-7 bg-backend-card border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/40 flex items-center justify-center text-sky-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 font-sans">
                  {profileData.name}
                </h3>
                <p className="text-xs font-mono text-sky-400 font-semibold">
                  {profileData.title} | {profileData.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {profileData.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Responsibilities Checklist */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                Key Operational Responsibilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Technical Architecture & ADRs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Code Review & Refactoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Database & SQL Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>REST API & OpenAPI Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>API Security & Authentication</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Team Support & Mentoring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {profileData.highlights.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Server;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100 font-sans group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Backend Engineering Principles Box */}
            <div className="p-5 rounded-xl bg-sky-950/30 border border-sky-500/30 text-xs font-mono text-sky-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Zero Compromise on Backend Code Quality</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-sky-900/60 font-semibold">
                SOLID & Clean Code
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
