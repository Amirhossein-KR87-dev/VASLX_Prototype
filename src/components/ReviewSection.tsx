import React from 'react';
import { Star, Share2 } from 'lucide-react';
import { BUSINESS_DATA } from '../types';

interface ReviewSectionProps {
  onOpenShare: () => void;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ onOpenShare }) => {
  return (
    <>
      {/* Customer Review Card */}
      <section className="px-5 mt-5">
        <div className="bg-white rounded-2xl p-3.5 border border-stone-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center font-bold text-base shadow-sm shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-stone-400 text-[10px] mr-1">
                  (امتیاز {BUSINESS_DATA.review.rating} از ۵)
                </span>
              </div>
              <p className="text-xs font-bold text-[#1b1411] mt-0.5">
                {BUSINESS_DATA.review.text}
              </p>
              <span className="text-[10px] text-stone-400">
                {BUSINESS_DATA.review.source}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Share Card */}
      <section className="px-5 mt-6">
        <button
          type="button"
          onClick={onOpenShare}
          className="tap-effect w-full py-3 px-4 rounded-xl border border-dashed border-stone-300 hover:border-orange-400 bg-white hover:bg-stone-50 text-[#1b1411] text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-sm"
        >
          <Share2 className="w-4 h-4 text-[#f46c19]" />
          <span>اشتراک‌گذاری این کارت دیجیتال با دوستان</span>
        </button>
      </section>
    </>
  );
};
