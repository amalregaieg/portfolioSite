import React, { useState } from 'react';
import { Server, Database, Shield, Zap, RefreshCw, Cpu, Layers } from 'lucide-react';

export const ArchDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('symfony');

  const nodes = [
    {
      id: 'client',
      title: 'REST / OpenAPI Clients',
      subtitle: 'HTTP / JSON:API',
      icon: Zap,
      color: 'border-slate-700 bg-slate-900/80 text-slate-300',
      description: 'External API Consumers, Mobile Apps & Web Frontends initiating REST requests.'
    },
    {
      id: 'gateway',
      title: 'Nginx / Cloudflare',
      subtitle: 'TLS / Rate Limiting',
      icon: Shield,
      color: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300',
      description: 'Reverse proxy, Turnstile bot protection, SSL termination, and rate-limiting middleware.'
    },
    {
      id: 'symfony',
      title: 'Symfony 7 Core',
      subtitle: 'API Platform & Security Voters',
      icon: Cpu,
      color: 'border-sky-500/50 bg-sky-950/50 text-sky-300 ring-2 ring-sky-500/30',
      description: 'Business logic layer, DTO State Processors, Security Voters, and Dependency Injection container.'
    },
    {
      id: 'messenger',
      title: 'Symfony Messenger',
      subtitle: 'Async Queue & Workers',
      icon: RefreshCw,
      color: 'border-purple-500/40 bg-purple-950/40 text-purple-300',
      description: 'Decoupled asynchronous background workers for Stripe Webhooks, email notifications, and heavy processing.'
    },
    {
      id: 'database',
      title: 'MySQL / Doctrine ORM',
      subtitle: 'Relational DB & Caching',
      icon: Database,
      color: 'border-amber-500/40 bg-amber-950/40 text-amber-300',
      description: 'Normalized MySQL relational storage with composite indexing, query optimization, and transaction safety.'
    }
  ];

  const currentNode = nodes.find(n => n.id === activeNode) || nodes[2];

  return (
    <div className="rounded-xl border border-slate-800 bg-[#0D1117] p-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-sky-400" />
          <h3 className="font-mono text-sm font-semibold text-slate-200">
            Backend Architecture Overview
          </h3>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950/80 border border-sky-800 text-sky-300">
          Decoupled API Design
        </span>
      </div>

      {/* Nodes visual flow */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 my-4">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`p-3 rounded-lg border text-left transition-all relative group ${node.color} ${
                isSelected ? 'scale-105 shadow-glow-cyan' : 'opacity-80 hover:opacity-100 hover:scale-102'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Icon className="w-4 h-4 shrink-0" />
                <span className="font-mono text-[11px] font-bold line-clamp-1">{node.title}</span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono truncate">{node.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      <div className="mt-4 p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
        <div className="flex items-center gap-2 mb-2">
          <Server className="w-4 h-4 text-sky-400" />
          <span className="font-mono font-bold text-sky-300">{currentNode.title}</span>
          <span className="text-[10px] font-mono text-slate-500">({currentNode.subtitle})</span>
        </div>
        <p className="text-slate-300 leading-relaxed font-sans">{currentNode.description}</p>
      </div>
    </div>
  );
};
