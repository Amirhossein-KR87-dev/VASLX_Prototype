import React from 'react';
import { Info, User, Clock, Phone, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../types';

export const ContactCard: React.FC = () => {
  return (
    <section className="px-5 mt-6">
      <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-[0_8px_25px_-5px_rgba(27,20,17,0.04)]">
        {/* Header */}
        <h2 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#f46c19]" />
          <span>مشخصات و اطلاعات تماس</span>
        </h2>

        {/* Info Rows */}
        <div className="space-y-3 divide-y divide-stone-100 text-sm">
          {/* Manager */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-stone-500 text-xs flex items-center gap-2">
              <User className="w-4 h-4 text-stone-400" />
              <span>مدیریت:</span>
            </span>
            <span className="font-bold text-[#1b1411] text-xs">
              {BUSINESS_DATA.ownerName}
            </span>
          </div>

          {/* Working Hours */}
          <div className="flex items-center justify-between pt-2.5">
            <span className="text-stone-500 text-xs flex items-center gap-2">
              <Clock className="w-4 h-4 text-stone-400" />
              <span>ساعت کاری:</span>
            </span>
            <span className="font-bold text-emerald-700 text-xs bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100/60">
              {BUSINESS_DATA.workingHours}
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between pt-2.5">
            <span className="text-stone-500 text-xs flex items-center gap-2">
              <Phone className="w-4 h-4 text-stone-400" />
              <span>شماره تلفن:</span>
            </span>
            <a
              href={`tel:${BUSINESS_DATA.phone}`}
              dir="ltr"
              className="font-mono font-bold text-[#dd4f10] hover:underline text-xs tracking-wider"
            >
              {BUSINESS_DATA.displayPhone}
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start justify-between pt-2.5">
            <span className="text-stone-500 text-xs flex items-center gap-2 shrink-0">
              <MapPin className="w-4 h-4 text-stone-400" />
              <span>آدرس کافه:</span>
            </span>
            <span className="text-xs text-right font-medium text-stone-800 pr-2 leading-relaxed">
              {BUSINESS_DATA.address}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
