'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Wifi, Volume2, BatteryCharging, ChevronUp } from 'lucide-react';

interface MenuBarProps {
  onOpenSearch: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function MenuBar({ onOpenSearch: _onOpenSearch }: MenuBarProps) {
  const [time, setTime] = useState<Date | null>(null);
  const [showQuickSettings, setShowQuickSettings] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowQuickSettings(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatWinTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  const formatWinDate = (date: Date) =>
    date.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: 'numeric' });

  // Win11: This component is now rendered as a system tray on the RIGHT side of the taskbar
  // The taskbar itself is rendered by Dock. MenuBar just contributes the system tray.
  return (
    <div ref={menuRef} className="fixed bottom-0 right-0 z-50 flex items-center h-12 px-2 select-none">
      {/* System Tray Icons */}
      <button className="p-1.5 rounded hover:bg-white/10 text-white/70 transition-colors">
        <ChevronUp size={14} />
      </button>

      {/* Quick Settings Pill */}
      <button
        onClick={() => setShowQuickSettings(!showQuickSettings)}
        className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 transition-colors text-white/80"
      >
        <Wifi size={14} />
        <Volume2 size={14} />
        <BatteryCharging size={14} />
      </button>

      {/* Clock & Date */}
      <button
        onClick={() => setShowQuickSettings(!showQuickSettings)}
        className="px-2 py-1 rounded hover:bg-white/10 transition-colors text-right"
      >
        <div className="text-[12px] text-white/90 leading-tight font-medium">
          {time ? formatWinTime(time) : ''}
        </div>
        <div className="text-[11px] text-white/60 leading-tight">
          {time ? formatWinDate(time) : ''}
        </div>
      </button>

      {/* Quick Settings Flyout */}
      {showQuickSettings && (
        <div className="absolute bottom-14 right-2 w-[360px] p-4 rounded-lg border border-white/10 bg-[#2d2d2d]/98 backdrop-blur-2xl shadow-2xl z-50 text-gray-200">
          {/* Quick Actions Grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <button className="flex flex-col items-center gap-1 p-3 rounded-md bg-[#0078d4] text-white text-xs font-medium">
              <Wifi size={18} />
              <span>Wi-Fi</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-3 rounded-md bg-white/5 hover:bg-white/10 text-white/80 text-xs font-medium transition-colors">
              <Volume2 size={18} />
              <span>Sound</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-3 rounded-md bg-white/5 hover:bg-white/10 text-white/80 text-xs font-medium transition-colors">
              <BatteryCharging size={18} />
              <span>Battery</span>
            </button>
          </div>

          {/* Volume slider */}
          <div className="flex items-center gap-3 p-2 rounded-md bg-white/5">
            <Volume2 size={16} className="text-white/60" />
            <div className="flex-1 bg-white/10 h-1 rounded-full overflow-hidden">
              <div className="bg-[#0078d4] h-full w-[75%]" />
            </div>
            <span className="text-[11px] text-white/50 w-6 text-right">75</span>
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 text-center">
            <div className="text-xs text-white/40">Shreya&apos;s PC • Windows 11</div>
          </div>
        </div>
      )}
    </div>
  );
}
