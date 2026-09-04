import React from 'react';

interface TechBadgeProps {
  name: string;
  isPrimary?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  isPrimary = false,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3 py-1.5',
  }[size];

  const primaryStyle = isPrimary
    ? 'bg-sky-950/70 border-sky-500/40 text-sky-300 font-semibold shadow-glow-cyan'
    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border font-mono transition-colors ${sizeClasses} ${primaryStyle}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isPrimary ? 'bg-sky-400' : 'bg-slate-500'}`} />
      {name}
    </span>
  );
};
