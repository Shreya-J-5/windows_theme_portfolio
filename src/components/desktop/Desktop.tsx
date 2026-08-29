'use client';

import React, { useState, useEffect } from 'react';
import Wallpaper from './Wallpaper';
import MenuBar from './MenuBar';
import DesktopIcon from './DesktopIcon';
import DesktopIdentity from './DesktopIdentity';
import Dock from './Dock';
import BootScreen from './BootScreen';
import WindowManager from '@/components/window/WindowManager';
import GlobalSearch from '@/components/search/GlobalSearch';
import { useWindowStore } from '@/store/windowStore';
import { Folder, Code, FileText, User, Trophy, Award, Users, Terminal, Sparkles } from 'lucide-react';

const DESKTOP_ICONS = [
  { id: 'finder', label: 'File Explorer', accent: '#f5c542', icon: <Folder className="text-yellow-400 w-10 h-10" /> },
  { id: 'projects', label: 'Projects', accent: '#00b7c3', icon: <Code className="text-cyan-400 w-10 h-10" /> },
  { id: 'resume', label: 'Resume.pdf', accent: '#e74856', icon: <FileText className="text-red-400 w-10 h-10" /> },
  { id: 'about', label: 'About Me', accent: '#0078d4', icon: <User className="text-blue-400 w-10 h-10" /> },
  { id: 'achievements', label: 'Achievements', accent: '#f7630c', icon: <Trophy className="text-orange-400 w-10 h-10" /> },
  { id: 'certifications', label: 'Education', accent: '#ff8c00', icon: <Award className="text-amber-400 w-10 h-10" /> },
  { id: 'community', label: 'Community', accent: '#0078d4', icon: <Users className="text-blue-400 w-10 h-10" /> },
  { id: 'terminal', label: 'Terminal', accent: '#0078d4', icon: <Terminal className="text-blue-300 w-10 h-10" /> },
  { id: 'askraksha', label: 'Ask Shreya', accent: '#6b69d6', icon: <Sparkles className="text-purple-400 w-10 h-10" /> },
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
        setSearchOpen(prev => !prev);
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
          
          <div className="absolute top-0 left-0 right-0 bottom-12 overflow-hidden p-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 w-fit items-start justify-start grid-flow-col auto-cols-max grid-rows-6">
              {DESKTOP_ICONS.map((icon, index) => (
                <DesktopIcon
                  key={index}
                  icon={icon.icon}
                  label={icon.label}
                  accent={icon.accent}
                  isOpen={windows[icon.id]?.isOpen ?? false}
                  onDoubleClick={() => openApp(icon.id)}
                />
              ))}
            </div>
          </div>

          <DesktopIdentity />
          <WindowManager />
          <Dock onOpenAppGrid={() => setSearchOpen(true)} />
          <MenuBar onOpenSearch={() => setSearchOpen(true)} />
          
          {searchOpen && (
            <div className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm flex items-end pb-16 justify-center" onClick={() => setSearchOpen(false)}>
              <div onClick={e => e.stopPropagation()}>
                <GlobalSearch onClose={() => setSearchOpen(false)} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
