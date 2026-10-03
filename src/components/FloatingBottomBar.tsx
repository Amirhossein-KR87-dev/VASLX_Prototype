import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../types';

interface FloatingBottomBarProps {
  onOpenDirections: () => void;
}

export const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({ onOpenDirections }) => {
  const logoImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDNhFu1PyskTMu7V15zcyw_BHjtkBuFF0aeC932D_9xxcVPd5Tl59xq5cWY3Y2XhO7yJgNcjho0UkyH3ELD-y2YjRUFm_bGwKnVsCk7ncPgfqOpN9d9fDrGWEyIwJILoPzTTGjusyLpFbU48aASoLe7g3uC1BbfXhlVmhVram49Dy5v44gT_l845xMfrb5TfA0EwSf3gDio8CkwfFI--HZ-CDZ3ADvWYvnEyjONmdnILM5RWSv9jdUN";

  return (
    <div className="fixed bottom-3 inset-x-0 max-w-md mx-auto px-4 z-40 pointer-events-auto">
      <div className="bg-[#1b1411]/92 backdrop-blur-md rounded-2xl p-2 px-3 shadow-[0_12px_32px_rgba(27,20,17,0.35)] border border-white/10 flex items-center justify-between text-white">
        {/* Business Avatar & Title */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20 p-0.5 shrink-0 ring-1 ring-white/30">
            <img
              src={logoImageUrl}
              alt="کافه نارنج"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <div className="text-xs font-bold leading-tight">{BUSINESS_DATA.businessName}</div>
            <div className="text-[10px] text-stone-300">آماده میزبانی از شما</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Call Button */}
          <a
            href={`tel:${BUSINESS_DATA.phone}`}
            className="tap-effect bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm"
            title="تماس فوری"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>تماس</span>
          </a>

          {/* Directions Button */}
          <button
            type="button"
            onClick={onOpenDirections}
            className="tap-effect bg-[#f46c19] hover:bg-[#dd4f10] text-white py-2 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>مسیریابی</span>
          </button>
        </div>
      </div>
    </div>
  );
};
