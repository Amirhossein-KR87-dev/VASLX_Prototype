import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-top-4">
      <div className="bg-[#1b1411]/95 backdrop-blur-md text-white text-xs font-medium py-2.5 px-4 rounded-full shadow-2xl flex items-center gap-2 border border-white/10 max-w-xs text-center">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="leading-tight">{message}</span>
      </div>
    </div>
  );
};
