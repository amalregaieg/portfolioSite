import React, { useState } from 'react';
import { codeSnippets } from '../../data/code-snippets';
import { Copy, Check, Terminal, FileCode } from 'lucide-react';

export const CodeWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const snippet = codeSnippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-[#0D1117] shadow-2xl overflow-hidden font-mono text-xs md:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-slate-800/80">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-3 flex items-center gap-2 text-slate-400 text-xs font-sans">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-mono text-slate-300">symfony-architecture.php</span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors text-xs font-sans"
          title="Copy Code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Snippet Tabs */}
      <div className="flex border-b border-slate-800/80 bg-[#12161F] overflow-x-auto">
        {codeSnippets.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs border-r border-slate-800/60 transition-colors whitespace-nowrap font-sans ${
              activeTab === idx
                ? 'bg-[#0D1117] text-sky-400 font-medium border-t-2 border-t-sky-400'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-sky-400/80" />
            <span>{item.filename.split('/').pop()}</span>
          </button>
        ))}
      </div>

      {/* Code Metadata Header */}
      <div className="px-5 py-2.5 bg-slate-900/40 border-b border-slate-800/40 text-xs font-sans flex items-center justify-between text-slate-400">
        <span className="text-slate-300 font-mono text-[11px]">{snippet.filename}</span>
        <span className="px-2 py-0.5 rounded bg-sky-950/80 border border-sky-800/50 text-sky-300 text-[10px] font-mono">
          PHP 8.3 / {snippet.category}
        </span>
      </div>

      {/* Code Body */}
      <div className="p-5 overflow-x-auto max-h-[380px] bg-[#0D1117] leading-relaxed">
        <pre className="text-slate-200 font-mono text-xs">
          <code>
            {snippet.code.split('\n').map((line, lineIdx) => {
              // Highlight PHP 8 attributes & keywords
              let highlighted = line;
              const isAttribute = line.trim().startsWith('#[');
              const isNamespace = line.trim().startsWith('namespace') || line.trim().startsWith('use');
              const isClass = line.includes('class ') || line.includes('interface ');
              const isPublic = line.includes('public ') || line.includes('private ') || line.includes('protected ');

              return (
                <div key={lineIdx} className="table-row hover:bg-slate-800/20">
                  <span className="table-cell select-none pr-4 text-right text-slate-600 text-[11px] w-8">
                    {lineIdx + 1}
                  </span>
                  <span
                    className={`table-cell ${
                      isAttribute
                        ? 'text-sky-300 font-semibold'
                        : isNamespace
                        ? 'text-indigo-400'
                        : isClass
                        ? 'text-purple-300 font-semibold'
                        : isPublic
                        ? 'text-emerald-300'
                        : 'text-slate-300'
                    }`}
                  >
                    {highlighted}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Footer Info */}
      <div className="px-5 py-2 bg-[#12161F] border-t border-slate-800/60 text-[11px] font-sans text-slate-400 flex items-center justify-between">
        <span>{snippet.description}</span>
        <span className="text-emerald-400 font-mono flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Clean Architecture
        </span>
      </div>
    </div>
  );
};
