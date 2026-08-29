'use client';

import React, { useState, useEffect } from 'react';
import Wallpaper from './Wallpaper';
import DesktopIcon from './DesktopIcon';
import DesktopIdentity from './DesktopIdentity';
import Dock from './Dock';
import BootScreen from './BootScreen';
import WindowManager from '@/components/window/WindowManager';
import GlobalSearch from '@/components/search/GlobalSearch';
import { useWindowStore } from '@/store/windowStore';
import {
  Folder,
  Code,
  FileText,
  User,
  Cpu,
  Trophy,
  Award,
  Users,
  Terminal,
  Sparkles,
  Trash2,
  Laptop,
} from 'lucide-react';

const DESKTOP_ICONS = [
  {
    id: 'recycle',
    label: 'Recycle Bin',
    isShortcut: false,
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-400 rounded-lg flex items-center justify-center shadow-md border border-white/40">
        <Trash2 className="w-6 h-6 text-slate-700" />
      </div>
    ),
    action: 'finder',
  },
  {
    id: 'thispc',
    label: 'This PC',
    isShortcut: false,
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center shadow-md border border-white/40">
        <Laptop className="w-6 h-6 text-white" />
      </div>
    ),
    action: 'finder',
  },
  {
    id: 'finder',
    label: 'File Explorer',
    isShortcut: true,
    icon: (
      <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center shadow-md border border-amber-300 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-2 bg-amber-300" />
        <Folder className="w-6 h-6 text-amber-900 z-10" fill="currentColor" fillOpacity={0.3} />
      </div>
    ),
    action: 'finder',
  },
  {
    id: 'projects',
    label: 'Projects',
    isShortcut: true,
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md border border-white/40">
        <Code className="w-6 h-6 text-white" />
      </div>
    ),
    action: 'projects',
  },
  {
    id: 'resume',
    label: 'Resume.pdf',
    isShortcut: true,
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-700 rounded-lg flex items-center justify-center shadow-md border border-white/40 relative">
        <FileText className="w-6 h-6 text-white" />
        <span className="absolute bottom-1 right-1 text-[8px] font-black text-white bg-black/40 px-0.5 rounded">PDF</span>
      </div>
    ),
    action: 'resume',
  },
  {
    id: 'about',
    label: 'About Me',
    isShortcut: true,
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md border border-white/40">
        <User className="w-6 h-6 text-white" />
      </div>
    ),
    action: 'about',
  },
  {
    id: 'skills',
    label: 'Skills',
    isShortcut: true,
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-md border border-white/40">
        <Cpu className="w-6 h-6 text-white" />
      </div>
    ),
    action: 'skills',
  },
  {
    id: 'achievements',
    label: 'Achievements',
    isShortcut: true,
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md border border-white/40">
        <Trophy className="w-6 h-6 text-white" />
      </div>
    ),
    action: 'achievements',
  },
  {
    id: 'certifications',
    label: 'Education',
    isShortcut: true,
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md border border-white/40">
        <Award className="w-6 h-6 text-white" />
      </div>
    ),
    action: 'certifications',
  },
  {
    id: 'terminal',
    label: 'Windows Terminal',
    isShortcut: true,
    icon: (
      <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shadow-md border border-slate-700">
        <Terminal className="w-6 h-6 text-sky-400" />
      </div>
    ),
    action: 'terminal',
  },
  {
    id: 'askshreya',
    label: 'Ask Shreya AI',
    isShortcut: true,
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-md border border-purple-400">
        <Sparkles className="w-6 h-6 text-yellow-300" />
      </div>
    ),
    action: 'askshreya',
  },
];

export default function Desktop() {
  const [booted, setBooted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const openApp = useWindowStore((state) => state.openApp);
  const windows = useWindowStore((state) => state.windows);

  useEffect(() => {
    if (sessionStorage.getItem('hasBooted')) {
      setBooted(true);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#202020]">
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}

      {booted && (
        <>
          <Wallpaper />

          {/* 🪟 Windows 11 Desktop Icons Area - Vertical Columns on Left */}
          <div className="absolute top-2 left-2 bottom-14 z-10 flex flex-col flex-wrap content-start gap-1 p-2 max-h-[calc(100vh-64px)]">
            {DESKTOP_ICONS.map((item) => (
              <DesktopIcon
                key={item.id}
                icon={item.icon}
                label={item.label}
                isShortcut={item.isShortcut}
                isOpen={windows[item.action]?.isOpen ?? false}
                onDoubleClick={() => openApp(item.action)}
              />
            ))}
          </div>

          <DesktopIdentity />
          <WindowManager />

          {/* 🪟 Windows 11 Unified Taskbar */}
          <Dock onOpenAppGrid={() => setSearchOpen((prev) => !prev)} />

          {/* 🔍 Windows 11 Start Menu / Search Modal */}
          {searchOpen && (
            <div
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-end pb-16 justify-center animate-in fade-in duration-150"
              onClick={() => setSearchOpen(false)}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <GlobalSearch onClose={() => setSearchOpen(false)} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
