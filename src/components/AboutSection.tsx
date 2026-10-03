import React from 'react';
import { Info } from 'lucide-react';
import { BUSINESS_DATA } from '../types';

export const AboutSection: React.FC = () => {
  return (
    <section className="px-5 mt-6">
      <div className="bg-stone-50/90 rounded-2xl p-4 border border-stone-200/70 shadow-sm">
        <h2 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#f46c19]" />
          <span>درباره {BUSINESS_DATA.businessName}</span>
        </h2>
        <p className="text-xs text-stone-700 leading-relaxed font-normal text-justify">
          کافه نارنج با هدف ایجاد فضایی آرام و صمیمی برای علاقه‌مندان به قهوه تخصصی و لحظات خوب شکل گرفته است. تلاش ما این است که با بهره‌گیری از تازه‌ترین دانه‌های قهوه و دسرهای دست‌ساز، هر بار تجربه‌ای دلنشین و ماندگار را برای شما رقم بزنیم.
        </p>
      </div>
    </section>
  );
};
