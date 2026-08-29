'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type MotionStyle, type MotionValue } from 'framer-motion';
import { Folder, User, Code, Briefcase, Cpu, Trophy, Award, Users, FileText, Terminal, Sparkles, Search } from 'lucide-react';
import { useWindowStore } from '@/store/windowStore';

interface DockProps {
  onOpenAppGrid?: () => void;
}

const DOCK_ITEMS = [
  { id: 'finder', label: 'File Explorer', accent: '#f5c542', icon: Folder },
  { id: 'about', label: 'About Me', accent: '#0078d4', icon: User },
  { id: 'projects', label: 'Projects', accent: '#00b7c3', icon: Code },
  { id: 'experience', label: 'Experience', accent: '#e74856', icon: Briefcase },
  { id: 'skills', label: 'Skills', accent: '#00cc6a', icon: Cpu },
  { id: 'achievements', label: 'Achievements', accent: '#f7630c', icon: Trophy },
  { id: 'certifications', label: 'Certifications', accent: '#ff8c00', icon: Award },
  { id: 'community', label: 'Community', accent: '#0078d4', icon: Users },
  { id: 'resume', label: 'Resume', accent: '#e74856', icon: FileText },
  { id: 'terminal', label: 'Windows Terminal', accent: '#0078d4', icon: Terminal },
  { id: 'askraksha', label: 'Ask Shreya', accent: '#6b69d6', icon: Sparkles, special: true },
];

type DockItemData = typeof DOCK_ITEMS[number];

function DockItem({ item, mouseX }: { item: DockItemData; mouseX: MotionValue<number> }) {
  const windows = useWindowStore((s) => s.windows);
  const openApp = useWindowStore((s) => s.openApp);
  const isOpen = windows[item.id]?.isOpen ?? false;
  const [isHovered, setIsHovered] = useState(false);
  const ref = React.useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const baseWidth = item.special ? 100 : 40;
  const magnifiedWidth = item.special ? 110 : 48;
  const widthSync = useTransform(distance, [-100, 0, 100], [baseWidth, magnifiedWidth, baseWidth]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 16 });

  return (
    <div className="relative flex flex-col items-center">
      {isHovered && (
        <div className="absolute -top-9 px-3 py-1 bg-[#2d2d2d] text-gray-100 text-[11px] rounded-md border border-white/10 whitespace-nowrap z-50 shadow-lg font-medium">
          {item.label}
        </div>
      )}
      <motion.button
        ref={ref}
        whileHover={{ y: -3 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className={`dock-icon relative flex items-center justify-center gap-2 rounded ${item.special ? 'dock-icon-special px-3' : ''} ${isOpen ? 'is-open' : ''}`}
        style={{ width, height: item.special ? 40 : width, '--icon-accent': item.accent } as MotionStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => openApp(item.id)}
      >
        <item.icon className="relative z-10 w-5 h-5 text-white" />
        {item.special && <span className="relative z-10 text-[11px] font-medium text-white whitespace-nowrap">{item.label}</span>}
      </motion.button>
      {/* Win11 Active Indicator — thin accent line */}
      <div className={`mt-1 rounded-full transition-all duration-200 ${isOpen ? 'w-4 h-[3px] bg-[#0078d4]' : 'w-1 h-[3px] bg-transparent'}`} />
    </div>
  );
}

export default function Dock({ onOpenAppGrid }: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div
        className="dock flex items-center justify-center gap-1 px-3 h-12"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {/* Win11 Start Button */}
        <button
          onClick={onOpenAppGrid}
          className="w-10 h-10 rounded hover:bg-white/10 transition-colors flex items-center justify-center text-white mr-1"
          title="Start (Ctrl+K)"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <rect x="1" y="1" width="8" height="8" rx="1" />
            <rect x="11" y="1" width="8" height="8" rx="1" />
            <rect x="1" y="11" width="8" height="8" rx="1" />
            <rect x="11" y="11" width="8" height="8" rx="1" />
          </svg>
        </button>

        {/* Win11 Search Button */}
        <button
          onClick={onOpenAppGrid}
          className="w-10 h-10 rounded hover:bg-white/10 transition-colors flex items-center justify-center text-white/70 mr-2"
          title="Search"
        >
          <Search size={18} />
        </button>

        <div className="w-px h-6 bg-white/10 mx-1" />

        {DOCK_ITEMS.map((item) => (
          <DockItem key={item.id} item={item} mouseX={mouseX} />
        ))}
      </div>
    </div>
  );
}
