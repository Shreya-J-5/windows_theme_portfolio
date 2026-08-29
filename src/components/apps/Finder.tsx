"use client";
import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useWindowStore } from "@/store/windowStore";

const SIDEBAR_ITEMS = [
  { id: "about", label: "About Me", icon: "User" },
  { id: "projects", label: "Projects", icon: "Briefcase" },
  { id: "experience", label: "Experience", icon: "FileText" },
  { id: "skills", label: "Skills", icon: "Code" },
  { id: "achievements", label: "Achievements", icon: "Trophy" },
  { id: "certifications", label: "Education", icon: "Award" },
  { id: "community", label: "Community", icon: "Users" },
  { id: "photos", label: "Photos", icon: "Image" },
  { id: "resume", label: "Resume", icon: "File" },
  { id: "contact", label: "Contact", icon: "Mail" },
];

export function Finder() {
  const { openApp } = useWindowStore();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleFolderDoubleClick = (id: string) => {
    openApp(id);
  };

  const handleSidebarClick = (id: string) => {
    setActiveSection(id);
  };

  const renderIcon = (iconName: string, size = 18) => {
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    const Icon = icons[iconName] || LucideIcons.Folder;
    return <Icon size={size} />;
  };

  return (
    <div className="flex h-full w-full bg-[#202020] text-gray-200 font-sans">
      {/* Win11 File Explorer Sidebar */}
      <div className="w-[210px] bg-[#2d2d2d] border-r border-white/8 flex flex-col select-none">
        {/* Quick Access */}
        <div className="px-4 py-3 text-[11px] font-semibold text-white/40 uppercase tracking-wider flex items-center gap-2">
          <LucideIcons.Pin size={12} />
          Quick Access
        </div>
        <div className="flex-1 overflow-y-auto space-y-0.5 px-2">
          <div
            onClick={() => setActiveSection(null)}
            className={`flex items-center gap-2.5 px-3 py-1.5 rounded cursor-pointer text-xs font-medium transition-colors ${
              !activeSection ? "bg-white/10 text-white" : "hover:bg-white/5 text-gray-300"
            }`}
          >
            <LucideIcons.Home size={15} className="text-[#0078d4]" />
            <span>Home</span>
          </div>

          {SIDEBAR_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSidebarClick(item.id)}
              onDoubleClick={() => handleFolderDoubleClick(item.id)}
              className={`flex items-center gap-2.5 px-3 py-1.5 rounded cursor-pointer text-xs font-medium transition-colors ${
                activeSection === item.id ? "bg-white/10 text-white" : "hover:bg-white/5 text-gray-300"
              }`}
            >
              <div className="text-[#0078d4]">{renderIcon(item.icon, 15)}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Files Area */}
      <div className="flex-1 flex flex-col bg-[#1e1e1e]">
        {/* Win11 Address bar */}
        <div className="h-10 border-b border-white/8 flex items-center px-3 gap-2 bg-[#2d2d2d] text-xs">
          <button 
            onClick={() => setActiveSection(null)}
            className="p-1 rounded hover:bg-white/10 text-gray-300"
            disabled={!activeSection}
          >
            <LucideIcons.ChevronLeft size={16} className={!activeSection ? "opacity-30" : ""} />
          </button>
          
          <div className="flex items-center gap-1 bg-[#383838] border border-white/6 px-3 py-1.5 rounded text-gray-300 text-[11px] flex-1">
            <LucideIcons.Folder size={12} className="text-yellow-400" />
            <span className="text-white/50">This PC &gt; </span>
            <span className="text-white font-medium">Shreya&apos;s Portfolio</span>
            {activeSection && (
              <>
                <span className="text-white/50"> &gt; </span>
                <span className="text-white font-medium">{activeSection}</span>
              </>
            )}
          </div>
        </div>

        {/* Content View */}
        <div className="flex-1 overflow-y-auto p-6">
          {!activeSection ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {SIDEBAR_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center gap-2 cursor-pointer p-3 rounded hover:bg-white/5 transition-all group"
                  onClick={() => handleSidebarClick(item.id)}
                  onDoubleClick={() => handleFolderDoubleClick(item.id)}
                >
                  <div className="w-12 h-12 rounded flex items-center justify-center text-[#0078d4] group-hover:scale-105 transition-transform">
                    {renderIcon(item.icon, 32)}
                  </div>
                  <span className="text-[11px] text-center font-medium text-gray-300 group-hover:text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
              <div className="w-16 h-16 rounded flex items-center justify-center text-[#0078d4] mb-4">
                {renderIcon(SIDEBAR_ITEMS.find((i) => i.id === activeSection)?.icon || "Folder", 48)}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {SIDEBAR_ITEMS.find((i) => i.id === activeSection)?.label}
              </h3>
              <p className="text-xs text-gray-400 mb-4">Double click to open application.</p>
              <button 
                className="px-4 py-2 bg-[#0078d4] hover:bg-[#1a86d9] text-white rounded text-xs font-medium transition-colors"
                onClick={() => handleFolderDoubleClick(activeSection)}
              >
                Open
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
