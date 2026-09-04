import React from 'react';
import { educationData } from '../data/education';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TechBadge } from '../components/ui/TechBadge';
import { GraduationCap, Award, CheckCircle, School } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0E131F] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ACADEMIC & CREDENTIALS"
          title="Education & Technical Certifications"
          subtitle="Solid academic background in Computer Multimedia & Web Engineering combined with certified Agile methodologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
          {educationData.map((item) => {
            const isDegree = item.type === 'education';
            return (
              <div
                key={item.id}
                className="bg-backend-card border border-slate-800 hover:border-sky-500/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon & Type Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-500/40 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      {isDegree ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6 text-amber-400" />}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                      isDegree
                        ? 'bg-sky-950/80 border-sky-500/40 text-sky-300'
                        : 'bg-amber-950/80 border-amber-500/40 text-amber-300'
                    }`}>
                      {item.period}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 font-sans group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-mono text-sky-400 font-medium mt-1 flex items-center gap-1.5">
                      <School className="w-4 h-4 shrink-0" />
                      {item.institution}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Core Focus Competencies */}
                  <div className="pt-2">
                    <h4 className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Competencies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill, idx) => (
                        <TechBadge key={idx} name={skill} isPrimary={idx === 0} size="sm" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Validation Line */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Academic Credential</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
