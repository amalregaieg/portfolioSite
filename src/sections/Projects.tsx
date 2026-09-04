import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TechBadge } from '../components/ui/TechBadge';
import { GithubIcon } from '../components/ui/Icons';
import { Layers, ShieldAlert, Cpu, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const Projects: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string>(projectsData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(prev => prev === id ? '' : id);
  };

  return (
    <section id="projects" className="py-20 bg-backend-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="BACKEND CASE STUDIES"
          title="Featured PHP, Symfony & API Architecture Projects"
          subtitle="Real-world technical implementations emphasizing API design, business logic isolation, async processing, and SQL optimization."
        />

        <div className="grid grid-cols-1 gap-8 mt-10">
          {projectsData.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                className="bg-backend-card border border-slate-800 hover:border-sky-500/40 rounded-2xl overflow-hidden shadow-2xl transition-all"
              >
                {/* Project Header Bar */}
                <div className="p-6 sm:p-8 bg-[#111722] border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-sky-950/80 border border-sky-500/30 text-sky-400 font-mono text-xs font-semibold">
                        {project.category}
                      </span>
                      <span className="text-slate-400 font-mono text-xs font-medium">
                        Role: {project.role}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 font-sans">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-300 font-sans max-w-3xl">
                      "{project.description}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-glow-cyan transition-all"
                    >
                      <span>{isExpanded ? 'Hide Architecture Details' : 'View Deep Dive'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Core Stack Tags Bar */}
                <div className="px-6 py-3 bg-[#0D1117] border-b border-slate-800/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Core Tech:</span>
                  {project.technologies.map((tech, idx) => (
                    <TechBadge key={idx} name={tech} isPrimary={idx < 3} size="sm" />
                  ))}
                </div>

                {/* Expanded Project Deep Dive */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 space-y-8 bg-backend-card">
                    {/* Grid: Context, Problem, Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                        <h4 className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Layers className="w-4 h-4" /> 1. Context
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          {project.context}
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                        <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                          <ShieldAlert className="w-4 h-4" /> 2. Technical Problem
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                        <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Cpu className="w-4 h-4" /> 3. Architecture Solution
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Technical Challenges & Architecture Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                      <div>
                        <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                          Complex Technical Challenges Overcome
                        </h4>
                        <div className="space-y-2 font-sans text-xs text-slate-300">
                          {project.technicalChallenges.map((challenge, idx) => (
                            <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded bg-sky-950 border border-sky-500/40 text-sky-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="leading-relaxed">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                          Backend Architecture Highlights
                        </h4>
                        <div className="space-y-2 font-sans text-xs text-slate-300">
                          {project.architectureHighlights.map((highlight, idx) => (
                            <div key={idx} className="p-3 rounded-lg bg-sky-950/20 border border-sky-500/20 flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed font-mono text-slate-200">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
