'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Folder,
  User,
  Code,
  Briefcase,
  Cpu,
  Trophy,
  Award,
  Users,
  FileText,
  Terminal,
  Sparkles,
  Search,
  CloudSun,
  ChevronUp,
  Wifi,
  Volume2,
  BatteryCharging,
  SlidersHorizontal,
} from 'lucide-react';
import { useWindowStore } from '@/store/windowStore';

interface DockProps {
  onOpenAppGrid?: () => void;
}

const TASKBAR_ITEMS = [
  { id: 'finder', label: 'File Explorer', accent: '#f5c542', icon: Folder },
  { id: 'about', label: 'About Me', accent: '#0078d4', icon: User },
  { id: 'projects', label: 'Projects', accent: '#00b7c3', icon: Code },
  { id: 'experience', label: 'Experience', accent: '#e74856', icon: Briefcase },
  { id: 'skills', label: 'Skills', accent: '#00cc6a', icon: Cpu },
  { id: 'achievements', label: 'Achievements', accent: '#f7630c', icon: Trophy },
  { id: 'certifications', label: 'Education', accent: '#ff8c00', icon: Award },
  { id: 'community', label: 'Community', accent: '#0078d4', icon: Users },
  { id: 'resume', label: 'Resume', accent: '#e74856', icon: FileText },
  { id: 'terminal', label: 'Windows Terminal', accent: '#0078d4', icon: Terminal },
  { id: 'askshreya', label: 'Ask Shreya', accent: '#8764ff', icon: Sparkles },
];

export default function Dock({ onOpenAppGrid }: DockProps) {
  const windows = useWindowStore((s) => s.windows);
  const openApp = useWindowStore((s) => s.openApp);
  const focusApp = useWindowStore((s) => s.focusApp);
  const minimizeApp = useWindowStore((s) => s.minimizeApp);

  const [time, setTime] = useState<Date | null>(null);
  const [showQuickSettings, setShowQuickSettings] = useState(false);
  const [volume, setVolume] = useState(80);
  const [brightness, setBrightness] = useState(100);
  const quickSettingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (quickSettingsRef.current && !quickSettingsRef.current.contains(e.target as Node)) {
        setShowQuickSettings(false);
      }
    };
    if (showQuickSettings) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showQuickSettings]);

  const handleAppClick = (id: string) => {
    const win = windows[id];
    if (win?.isOpen && win?.isFocused && !win?.isMinimized) {
      minimizeApp(id);
    } else if (win?.isOpen) {
      focusApp(id);
    } else {
      openApp(id);
    }
  };

  const formattedTime = time
    ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : '--:--';

  const formattedDate = time
    ? time.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' })
    : '--/--/----';

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-[#1c1c1c]/90 border-t border-white/10 backdrop-blur-2xl flex items-center justify-between px-3 z-50 select-none text-gray-200 shadow-[0_-2px_15px_rgba(0,0,0,0.5)]">
      {/* 🌤️ LEFT SECTION: Win11 Weather Widget */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenAppGrid}
          className="flex items-center gap-2 px-2.5 py-1 rounded-md hover:bg-white/8 transition-colors group cursor-pointer"
          title="Weather Widget"
        >
          <CloudSun className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
          <div className="hidden md:flex flex-col text-left">
            <span className="text-[11px] font-medium leading-tight text-white/90">31°C</span>
            <span className="text-[10px] text-white/60 leading-tight">Mostly cloudy</span>
          </div>
        </button>
      </div>

      {/* 🪟 CENTER SECTION: Start, Search & App Icons */}
      <div className="flex items-center gap-1">
        {/* Windows 11 Start Icon */}
        <button
          onClick={onOpenAppGrid}
          className="w-10 h-10 rounded-md hover:bg-white/10 active:bg-white/15 transition-colors flex items-center justify-center group"
          title="Start (Ctrl+K)"
        >
          <svg className="w-5 h-5 transition-transform group-hover:scale-105" viewBox="0 0 20 20" fill="none">
            <rect x="1" y="1" width="8" height="8" rx="1" fill="#0078d4" />
            <rect x="11" y="1" width="8" height="8" rx="1" fill="#0078d4" />
            <rect x="1" y="11" width="8" height="8" rx="1" fill="#0078d4" />
            <rect x="11" y="11" width="8" height="8" rx="1" fill="#0078d4" />
          </svg>
        </button>

        {/* Windows 11 Search Pill */}
        <button
          onClick={onOpenAppGrid}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 transition-colors mr-2 cursor-pointer"
          title="Search apps & skills (Ctrl+K)"
        >
          <Search className="w-3.5 h-3.5 text-[#0078d4]" />
          <span className="text-[11px] font-normal text-white/70">Search</span>
        </button>

        <div className="hidden sm:block w-px h-5 bg-white/10 mx-1" />

        {/* Taskbar App Icons */}
        {TASKBAR_ITEMS.map((item) => {
          const win = windows[item.id];
          const isOpen = win?.isOpen ?? false;
          const isFocused = win?.isFocused && !win?.isMinimized;
          const IconComp = item.icon;

          return (
            <div key={item.id} className="relative flex flex-col items-center group">
              <button
                onClick={() => handleAppClick(item.id)}
                className={`relative h-10 rounded-md flex items-center justify-center transition-all ${
                  item.id === 'askshreya' ? 'px-2.5 gap-1.5' : 'w-10'
                } ${
                  isFocused
                    ? 'bg-white/15 shadow-inner'
                    : isOpen
                    ? 'bg-white/8 hover:bg-white/12'
                    : 'hover:bg-white/8'
                }`}
                title={item.label}
              >
                <IconComp
                  className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                    item.id === 'askshreya' ? 'text-purple-400' : 'text-white/90'
                  }`}
                />
                {item.id === 'askshreya' && (
                  <span className="text-[11px] font-medium text-purple-200 hidden xs:inline sm:inline">
                    Ask Shreya
                  </span>
                )}
              </button>

              {/* Windows 11 Active App Indicator Bar */}
              <div
                className={`absolute bottom-0.5 rounded-full transition-all duration-200 ${
                  isFocused
                    ? 'w-4 h-[3px] bg-[#0078d4] shadow-[0_0_8px_#0078d4]'
                    : isOpen
                    ? 'w-2 h-[3px] bg-white/60'
                    : 'w-0 h-[3px] bg-transparent'
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* ⚙️ RIGHT SECTION: System Tray & Quick Settings */}
      <div className="flex items-center gap-1">
        <button
          className="p-1.5 rounded hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          title="Hidden icons"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        <span className="text-[11px] font-medium text-white/70 px-1 hover:bg-white/10 rounded py-1 cursor-default">
          ENG US
        </span>

        {/* System Quick Settings Button (Wi-Fi, Volume, Battery) */}
        <div ref={quickSettingsRef} className="relative">
          <button
            onClick={() => setShowQuickSettings(!showQuickSettings)}
            className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer"
            title="Internet & Sound Settings"
          >
            <Wifi className="w-4 h-4 text-white/90" />
            <Volume2 className="w-4 h-4 text-white/90" />
            <BatteryCharging className="w-4 h-4 text-green-400" />
          </button>

          {/* Quick Settings Flyout */}
          {showQuickSettings && (
            <div className="absolute right-0 bottom-14 w-80 bg-[#2c2c2c]/95 border border-white/10 rounded-xl p-4 shadow-2xl backdrop-blur-2xl z-50 text-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-150">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                <span className="text-xs font-semibold text-white">Quick Settings</span>
                <SlidersHorizontal className="w-4 h-4 text-white/60" />
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-[#0078d4] text-white shadow">
                  <Wifi className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-medium">Wi-Fi</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-[#0078d4] text-white shadow">
                  <Volume2 className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-medium">Sound</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/10 text-white/80 hover:bg-white/15">
                  <BatteryCharging className="w-5 h-5 mb-1 text-green-400" />
                  <span className="text-[10px] font-medium">Saver</span>
                </button>
              </div>

              {/* Sliders */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[11px] text-gray-400 mb-1">
                    <span>Volume</span>
                    <span>{volume}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full accent-[#0078d4] h-1 bg-white/20 rounded-lg cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-gray-400 mb-1">
                    <span>Brightness</span>
                    <span>{brightness}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full accent-[#0078d4] h-1 bg-white/20 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-400">
                <span>Shreya Windows 11 Pro</span>
                <span className="text-[#0078d4] font-medium">Connected</span>
              </div>
            </div>
          )}
        </div>

        {/* Date & Time Button */}
        <button
          className="flex flex-col items-end px-2 py-0.5 rounded-md hover:bg-white/10 transition-colors text-right cursor-pointer"
          title={time?.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        >
          <span className="text-[11px] font-medium text-white/90 leading-tight">{formattedTime}</span>
          <span className="text-[10px] text-white/60 leading-tight">{formattedDate}</span>
        </button>
      </div>
    </div>
  );
}
