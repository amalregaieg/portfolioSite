import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TechBadge } from '../components/ui/TechBadge';
import { Server, Database, Layers, ShieldCheck, Workflow, Box, GitPullRequest, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Server,
  Database,
  Layers,
  ShieldCheck,
  Workflow,
  Box,
  GitPullRequest,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-backend-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TECHNICAL EXPERTISE"
          title="Backend Engineering & Architecture Skills"
          subtitle="Strictly categorized technical competencies. No fake percentage bars—only real backend engineering capabilities."
        />

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg border transition-all ${
              selectedCategory === 'all'
                ? 'bg-sky-950 border-sky-500/50 text-sky-300 font-semibold shadow-glow-cyan'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            All Categories ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-950 border-sky-500/50 text-sky-300 font-semibold shadow-glow-cyan'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Server;
            return (
              <div
                key={category.id}
                className="bg-backend-card border border-slate-800 hover:border-sky-500/40 rounded-xl p-6 shadow-lg flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-mono text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400">
                        {category.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 font-sans leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Tags List */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="group/tag relative">
                        <TechBadge
                          name={skill.name}
                          isPrimary={skill.isPrimary}
                          size="md"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tagline */}
                <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Production-tested in PHP & Symfony</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
