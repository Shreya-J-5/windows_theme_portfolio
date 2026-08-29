"use client";
import React from "react";
import { Minus, Square, X } from "lucide-react";

interface TrafficLightsProps {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export function TrafficLights({ onClose, onMinimize, onMaximize }: TrafficLightsProps) {
  return (
    <div className="flex items-center h-full ml-auto">
      {/* Windows 11: Minimize */}
      <button
        onClick={onMinimize}
        className="linux-window-control"
        title="Minimize"
        aria-label="Minimize Window"
      >
        <Minus size={16} strokeWidth={1.5} />
      </button>

      {/* Windows 11: Maximize/Restore */}
      <button
        onClick={onMaximize}
        className="linux-window-control"
        title="Maximize"
        aria-label="Maximize Window"
      >
        <Square size={12} strokeWidth={1.5} />
      </button>

      {/* Windows 11: Close (red on hover) */}
      <button
        onClick={onClose}
        className="linux-window-control linux-window-control-close rounded-tr-lg"
        title="Close"
        aria-label="Close Window"
      >
        <X size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
}
