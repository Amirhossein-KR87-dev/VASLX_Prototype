import React from 'react';
import { CreditCard } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-10 mb-20 text-center text-stone-400">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100/90 border border-stone-200/50 text-[11px] font-medium text-stone-600">
        <CreditCard className="w-3.5 h-3.5 text-stone-400" />
        <span>پلتفرم کارت ویزیت هوشمند VASLX NFC</span>
      </div>
      <p className="text-[10px] text-stone-400 mt-2 font-mono">
        Powered by VASLX Smart Touch Card
      </p>
    </footer>
  );
};
