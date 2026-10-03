import React, { useState } from 'react';
import { Phone, MapPin, Instagram, Share2, UserPlus, Check } from 'lucide-react';
import { BUSINESS_DATA } from '../types';
import { downloadVCardFile } from '../utils/vcard';

interface QuickActionsProps {
  onOpenShare: () => void;
  onOpenDirections: () => void;
  showToast: (msg: string) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  onOpenShare,
  onOpenDirections,
  showToast
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveContact = () => {
    const success = downloadVCardFile();
    if (success) {
      setIsSaved(true);
      showToast(`مخاطب ${BUSINESS_DATA.ownerName} با شماره ${BUSINESS_DATA.phone} ذخیره شد`);
      setTimeout(() => setIsSaved(false), 3000);
    } else {
      showToast('خطا در ایجاد مخاطب');
    }
  };

  return (
    <section className="px-5 mt-5">
      {/* 4 Primary Action Buttons Grid */}
      <div className="grid grid-cols-4 gap-2.5">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_DATA.phone}`}
          className="tap-effect flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-emerald-300 hover:shadow-md transition-all duration-200 group text-center"
        >
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition duration-200 shadow-sm">
            <Phone className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
          </div>
          <span className="text-xs font-semibold text-stone-800 mt-2">تماس</span>
        </a>

        {/* Directions Button */}
        <button
          onClick={onOpenDirections}
          type="button"
          className="tap-effect flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-orange-300 hover:shadow-md transition-all duration-200 group text-center cursor-pointer"
        >
          <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#f46c19] flex items-center justify-center group-hover:bg-[#f46c19] group-hover:text-white transition duration-200 shadow-sm">
            <MapPin className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
          </div>
          <span className="text-xs font-semibold text-stone-800 mt-2">مسیریابی</span>
        </button>

        {/* Instagram Button */}
        <a
          href={`https://instagram.com/${BUSINESS_DATA.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-effect flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-pink-300 hover:shadow-md transition-all duration-200 group text-center"
        >
          <div className="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-pink-500 group-hover:to-purple-600 group-hover:text-white transition duration-200 shadow-sm">
            <Instagram className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
          </div>
          <span className="text-xs font-semibold text-stone-800 mt-2">اینستاگرام</span>
        </a>

        {/* Share Button */}
        <button
          onClick={onOpenShare}
          type="button"
          className="tap-effect flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-amber-300 hover:shadow-md transition-all duration-200 group text-center cursor-pointer"
        >
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition duration-200 shadow-sm">
            <Share2 className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
          </div>
          <span className="text-xs font-semibold text-stone-800 mt-2">اشتراک</span>
        </button>
      </div>

      {/* Save Contact vCard CTA with smooth gentle hover effect requested */}
      <button
        type="button"
        onClick={handleSaveContact}
        className="tap-effect group relative w-full mt-3 py-3.5 px-4 rounded-xl bg-[#1b1411] hover:bg-[#2b211d] text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-[0_8px_20px_rgba(27,20,17,0.18)] hover:shadow-[0_12px_28px_rgba(221,79,16,0.22)] transition-all duration-300 ease-out border border-white/10 hover:border-orange-500/40 cursor-pointer overflow-hidden"
      >
        {/* Subtle hover gradient sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

        {isSaved ? (
          <>
            <Check className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
            <span className="text-emerald-300">مخاطب ذخیره شد</span>
          </>
        ) : (
          <>
            <UserPlus className="w-4 h-4 text-[#fb9247] group-hover:scale-110 group-hover:text-orange-400 transition-transform duration-200" />
            <span className="tracking-wide">ذخیره در مخاطبین (vCard)</span>
          </>
        )}
      </button>
    </section>
  );
};
