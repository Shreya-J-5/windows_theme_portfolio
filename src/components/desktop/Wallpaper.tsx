'use client';

import React from 'react';

export default function Wallpaper() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden select-none" aria-hidden="true">
      {/* Windows 11 Dark Bloom Wallpaper */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #1a1a2e 75%, #16213e 100%)'
        }}
      />

      {/* Win11 Bloom Effect — the signature centered light bloom */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[80vw] h-[60vh] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, #0078d4 0%, #005a9e 25%, #003a6c 45%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Secondary ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[40rem] h-[30rem] bg-[#6b1d9e]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0078d4]/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
