'use client';

import React, { useState } from 'react';

interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  isShortcut?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

export default function DesktopIcon({
  icon,
  label,
  isShortcut = true,
  isOpen = false,
  onClick,
  onDoubleClick,
}: DesktopIconProps) {
  const [selected, setSelected] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected(true);
    onClick?.();
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDoubleClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onDoubleClick?.();
    }
  };

  React.useEffect(() => {
    const handleGlobalClick = () => setSelected(false);
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Open ${label}`}
      className={`relative flex flex-col items-center justify-start w-[84px] h-[92px] p-1.5 rounded-md cursor-pointer select-none transition-all group ${
        selected
          ? 'bg-white/15 border border-white/20 shadow-md backdrop-blur-sm'
          : 'hover:bg-white/10 hover:border hover:border-white/10'
      }`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
    >
      {/* Icon Graphic Container */}
      <div className="relative w-11 h-11 flex items-center justify-center mb-1">
        {icon}
        
        {/* Authentic Windows 11 Shortcut Arrow Badge */}
        {isShortcut && (
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 bg-white rounded-[2px] border border-gray-400/60 shadow flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-[#0078d4]" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 12V6.5L8.5 11L10 9.5L5.5 5H11V3H4v9z" />
            </svg>
          </div>
        )}

        {/* Active open window dot */}
        {isOpen && (
          <div className="absolute -bottom-1 w-1.5 h-1.5 bg-[#0078d4] rounded-full shadow-[0_0_8px_#0078d4]" />
        )}
      </div>

      {/* Label Text */}
      <span className="text-[11px] font-normal text-white text-center leading-tight line-clamp-2 px-1 text-shadow-sm select-none" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,0.8)' }}>
        {label}
      </span>
    </div>
  );
}
