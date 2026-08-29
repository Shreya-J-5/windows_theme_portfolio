'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { searchIndex } from '@/data/portfolioData';
import { useWindowStore } from '@/store/windowStore';
import { motion } from 'framer-motion';

interface GlobalSearchProps {
  onClose: () => void;
}

export default function GlobalSearch({ onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const openApp = useWindowStore((state) => state.openApp);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const lowerQ = query.toLowerCase().trim();
  const results = lowerQ
    ? searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQ) ||
          item.keywords.some((k) => k.includes(lowerQ))
      ).slice(0, 20)
    : [];

  const groupedResults = results.reduce((acc, item) => {
    const cat = item.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {} as Record<string, typeof results>);

  const handleSelect = (appId: string, subRoute?: string) => {
    openApp(appId, subRoute);
    onClose();
  };

  return (
    <motion.div
      initial={{ scale: 0.96, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.96, opacity: 0, y: 20 }}
      transition={{ duration: 0.15 }}
      className="w-[620px] max-w-[92vw] flex flex-col max-h-[65vh] bg-[#2d2d2d]/98 border border-white/8 rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.7)] text-gray-200 backdrop-blur-2xl"
    >
      <div className="flex items-center px-4 py-3.5 border-b border-white/8">
        <Search className="w-5 h-5 text-[#0078d4] mr-3 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Type here to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-base text-white outline-none placeholder-gray-400 font-medium"
        />
        <kbd className="px-2 py-0.5 text-[10px] font-mono text-gray-400 bg-white/5 border border-white/10 rounded">
          ESC
        </kbd>
      </div>

      <div className="overflow-y-auto flex-1 p-3">
        {!lowerQ ? (
          <div className="p-8 text-center text-gray-400 text-xs">
            <svg className="w-8 h-8 mx-auto mb-3 text-[#0078d4] opacity-50" viewBox="0 0 20 20" fill="currentColor">
              <rect x="1" y="1" width="8" height="8" rx="1" />
              <rect x="11" y="1" width="8" height="8" rx="1" />
              <rect x="1" y="11" width="8" height="8" rx="1" />
              <rect x="11" y="11" width="8" height="8" rx="1" />
            </svg>
            Search projects, skills, experience, and more...
          </div>
        ) : Object.keys(groupedResults).length > 0 ? (
          Object.entries(groupedResults).map(([category, items]) => (
            <div key={category} className="mb-3">
              <div className="px-3 py-1 text-[10px] font-bold text-[#0078d4] uppercase tracking-widest">
                {category}
              </div>
              {items.map((item, idx) => (
                <button
                  key={`${item.appId}-${idx}`}
                  onClick={() => handleSelect(item.appId, item.subRoute)}
                  className="w-full text-left px-3.5 py-2.5 rounded hover:bg-white/8 text-gray-200 transition-colors flex items-center justify-between group"
                >
                  <span className="text-xs font-semibold">{item.title}</span>
                  <span className="text-[10px] px-2 py-0.5 bg-white/5 rounded text-gray-400 group-hover:text-white group-hover:bg-[#0078d4]">
                    Open
                  </span>
                </button>
              ))}
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-400 text-xs">
            No results for &ldquo;{query}&rdquo;
          </div>
        )}
      </div>

      {lowerQ && (
        <div className="p-2 border-t border-white/8 bg-white/3 rounded-b-lg">
          <button
            onClick={() => { openApp('askraksha'); onClose(); }}
            className="w-full text-left px-3.5 py-2.5 rounded hover:bg-[#0078d4]/20 text-[#0078d4] transition-colors flex items-center gap-3 text-xs font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ask Shreya about &ldquo;{query}&rdquo;</span>
          </button>
        </div>
      )}
    </motion.div>
  );
}
