'use client';

import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

const SYSTEM_INFO = `
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell: https://aka.ms/PSWindows

   ╔══════════════════════════════════════════════╗
   ║         SHREYA JOLAPARA — Portfolio          ║
   ║  AI/ML Student | Full-Stack Developer        ║
   ║  Ahmedabad, Gujarat, India                   ║
   ╚══════════════════════════════════════════════╝
`;

export default function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  useEffect(() => {
    setHistory([
      {
        command: 'systeminfo',
        output: (
          <pre className="font-mono text-xs leading-relaxed text-[#0078d4] whitespace-pre">
            {SYSTEM_INFO}
          </pre>
        ),
      },
    ]);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (trimmedCmd) {
      case 'help':
      case 'get-help':
        output = (
          <div className="text-cyan-400 space-y-1 font-mono text-xs md:text-sm">
            <p className="font-bold text-white mb-1">Available PowerShell Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-gray-300">
              <div><span className="text-[#0078d4] font-semibold">systeminfo</span> — Display system information</div>
              <div><span className="text-[#0078d4] font-semibold">whoami</span> — Current user info</div>
              <div><span className="text-[#0078d4] font-semibold">dir</span> — List files</div>
              <div><span className="text-[#0078d4] font-semibold">type bio.txt</span> — Display bio</div>
              <div><span className="text-[#0078d4] font-semibold">projects</span> — List projects</div>
              <div><span className="text-[#0078d4] font-semibold">skills</span> — List technical skills</div>
              <div><span className="text-[#0078d4] font-semibold">experience</span> — Work experience</div>
              <div><span className="text-[#0078d4] font-semibold">achievements</span> — Achievements</div>
              <div><span className="text-[#0078d4] font-semibold">certifications</span> — Education</div>
              <div><span className="text-[#0078d4] font-semibold">contact</span> — Contact info</div>
              <div><span className="text-[#0078d4] font-semibold">tasklist</span> — Running apps</div>
              <div><span className="text-[#0078d4] font-semibold">cls</span> — Clear screen</div>
            </div>
          </div>
        );
        break;
      case 'systeminfo':
        output = (
          <pre className="font-mono text-xs leading-relaxed text-[#0078d4] whitespace-pre">
            {SYSTEM_INFO}
          </pre>
        );
        break;
      case 'whoami':
        output = <p className="text-cyan-400 font-mono">SHREYA-PC\\shreya (AI/ML Student & Full-Stack Developer)</p>;
        break;
      case 'dir':
      case 'ls':
      case 'get-childitem':
        output = (
          <div className="font-mono text-xs text-gray-300">
            <div className="text-white/50 mb-1">Directory of C:\Users\Shreya\Portfolio</div>
            <div className="grid grid-cols-1 gap-0.5">
              <span>  &lt;DIR&gt;  projects/</span>
              <span>  &lt;DIR&gt;  experience/</span>
              <span>  &lt;DIR&gt;  skills/</span>
              <span>  2.1 KB  bio.txt</span>
              <span>  4.5 KB  resume.pdf</span>
              <span>  1.2 KB  contact.vcf</span>
            </div>
          </div>
        );
        break;
      case 'type bio.txt':
      case 'cat bio.txt':
      case 'about':
        output = <p className="text-gray-200 leading-relaxed">{portfolioData.profile.bio}</p>;
        break;
      case 'projects':
        output = (
          <ul className="space-y-2 font-mono text-xs">
            {portfolioData.projects.map((p, i) => (
              <li key={i} className="border-l-2 border-[#0078d4] pl-2">
                <span className="text-[#0078d4] font-bold">{p.title}</span> [{p.status}]
                <p className="text-gray-400 text-[11px] mt-0.5">{p.purpose}</p>
              </li>
            ))}
          </ul>
        );
        break;
      case 'skills':
        output = (
          <div className="space-y-1.5 font-mono text-xs">
            {portfolioData.skills.map((s, i) => (
              <div key={i}>
                <span className="text-yellow-400 font-bold">{s.category}:</span>{' '}
                <span className="text-gray-300">{s.items.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;
      case 'experience':
        output = (
          <div className="space-y-3 font-mono text-xs">
            {portfolioData.experience.map((e, i) => (
              <div key={i} className="border-l-2 border-cyan-500 pl-2">
                <div className="font-bold text-cyan-400">{e.role} @ {e.company}</div>
                <div className="text-gray-400 text-[11px]">{e.period} • {e.mode}</div>
              </div>
            ))}
          </div>
        );
        break;
      case 'achievements':
        output = (
          <ul className="list-disc list-inside space-y-1 font-mono text-xs text-yellow-300">
            {portfolioData.achievements.map((a, i) => (
              <li key={i}>{a.title} ({a.organization || a.scale})</li>
            ))}
          </ul>
        );
        break;
      case 'certifications':
      case 'education':
        output = (
          <ul className="list-disc list-inside space-y-1 font-mono text-xs text-purple-300">
            {portfolioData.certifications.map((c, i) => (
              <li key={i}>{c.title} — {c.issuer}</li>
            ))}
          </ul>
        );
        break;
      case 'contact':
        output = (
          <div className="font-mono text-xs space-y-1 text-gray-200">
            <p>Email: <a href={`mailto:${portfolioData.profile.email}`} className="text-[#0078d4] underline">{portfolioData.profile.email}</a></p>
            <p>LinkedIn: <a href={portfolioData.profile.linkedin} target="_blank" className="text-cyan-400 underline">{portfolioData.profile.linkedin}</a></p>
            <p>GitHub: <a href={portfolioData.profile.github} target="_blank" className="text-emerald-400 underline">{portfolioData.profile.github}</a></p>
          </div>
        );
        break;
      case 'tasklist':
        output = (
          <div className="font-mono text-xs text-gray-300">
            <div className="text-white/50 mb-1 border-b border-white/10 pb-1">Image Name          PID     Status</div>
            <div>portfolio.exe        1001    Running</div>
            <div>terminal.exe         1002    Running</div>
            <div>explorer.exe         1003    Running</div>
            <div>search.exe           1004    Idle</div>
          </div>
        );
        break;
      case 'cls':
      case 'clear':
        setHistory([]);
        return;
      case '':
        break;
      default:
        output = (
          <p className="text-red-400 font-mono text-xs">
            &apos;{cmd}&apos; is not recognized as an internal or external command. Type &quot;help&quot; for available commands.
          </p>
        );
    }

    if (trimmedCmd !== '') {
      setHistory((prev) => [...prev, { command: cmd, output }]);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div 
      className="p-4 h-full bg-[#0c0c0c] text-gray-200 font-mono text-xs md:text-sm overflow-y-auto cursor-text select-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="mb-4 text-[#0078d4] border-b border-white/10 pb-2">
        Windows PowerShell — shreya@SHREYA-PC<br />
        Type <span className="text-cyan-400 font-bold">&quot;help&quot;</span> or <span className="text-cyan-400 font-bold">&quot;systeminfo&quot;</span> for system information.
      </div>

      {history.map((item, index) => (
        <div key={index} className="mb-3">
          <div className="flex items-center gap-1 font-mono text-xs">
            <span className="text-yellow-400 font-bold">PS</span>
            <span className="text-[#0078d4]">C:\Users\Shreya&gt;</span>
            <span className="text-white ml-1 font-semibold">{item.command}</span>
          </div>
          <div className="mt-1.5 ml-2">{item.output}</div>
        </div>
      ))}

      <form onSubmit={onSubmit} className="flex items-center gap-1 font-mono text-xs mt-2">
        <span className="text-yellow-400 font-bold">PS</span>
        <span className="text-[#0078d4]">C:\Users\Shreya&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white font-mono ml-1 text-xs md:text-sm"
          spellCheck={false}
          autoComplete="off"
        />
      </form>
      <div ref={endRef} />
    </div>
  );
}
