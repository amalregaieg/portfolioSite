import React from 'react';
import { experienceData } from '../data/experience';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TechBadge } from '../components/ui/TechBadge';
import { Briefcase, Calendar, MapPin, ChevronRight, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#0E131F] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="CAREER TIMELINE"
          title="Professional Backend Work Experience"
          subtitle="Data-driven career path focused on Symfony technical leadership, backend architecture, and high-performance API engineering."
        />

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto mt-12 pl-4 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-sky-500 flex items-center justify-center group-hover:border-sky-400 group-hover:scale-110 transition-all shadow-glow-cyan">
                <div className="w-2 h-2 rounded-full bg-sky-400" />
              </div>

              {/* Experience Main Card */}
              <div className="bg-backend-card border border-slate-800 hover:border-sky-500/40 rounded-xl p-6 sm:p-8 shadow-xl transition-all">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-100 font-sans group-hover:text-sky-300 transition-colors">
                        {exp.position}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-semibold">
                          Current Role
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-mono text-sky-400 font-medium mt-0.5 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                      {exp.location && (
                        <span className="text-slate-400 font-normal flex items-center gap-1">
                          • <MapPin className="w-3 h-3 text-slate-400" /> {exp.location}
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs w-fit">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.startDate} — {exp.endDate}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-5">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Core Technical Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-sans text-slate-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements if present */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-6 p-4 rounded-lg bg-sky-950/30 border border-sky-500/20 text-xs space-y-2">
                    <h5 className="font-mono font-bold text-sky-300 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-sky-400" /> Key Impact & Achievements
                    </h5>
                    <ul className="space-y-1 font-sans text-slate-300 pl-5 list-disc">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Used */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Stack & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <TechBadge key={idx} name={tech} isPrimary={idx < 4} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
