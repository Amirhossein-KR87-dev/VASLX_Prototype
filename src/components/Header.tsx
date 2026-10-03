import React from 'react';
import { Share2 } from 'lucide-react';

interface HeaderProps {
  onOpenShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenShare }) => {
  return (
    <header className="pt-3 pb-2.5 px-5 flex items-center justify-between text-xs text-stone-500 border-b border-stone-200/70 bg-white/80 backdrop-blur-md sticky top-0 z-30 transition-all">
      {/* Brand & NFC Indicator */}
      <div className="flex items-center gap-1.5 font-medium tracking-tight">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-stone-800 font-extrabold tracking-wider text-xs">VASLX</span>
        <span className="text-stone-300">|</span>
        <span className="text-[11px] text-stone-500 font-medium">کارت دیجیتال هوشمند</span>
      </div>

      {/* Share Trigger */}
      <button
        onClick={onOpenShare}
        type="button"
        className="tap-effect flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200/90 text-stone-600 px-2.5 py-1 rounded-full transition-colors cursor-pointer border border-stone-200/50"
        title="اشتراک‌گذاری کارت هوشمند"
      >
        <Share2 className="w-3.5 h-3.5 text-stone-600" />
        <span className="text-[11px] font-semibold text-stone-700">اشتراک</span>
      </button>
    </header>
  );
};
