import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { BUSINESS_DATA } from '../types';

export const ProfileHero: React.FC = () => {
  const [coverLoaded, setCoverLoaded] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(true);

  const coverImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuAHAAFkGt7Wi-KPHMWrizu1tDHabGv_lLVs1PbU_8CbZf4bzQCTQM9tsmoypTKpm_LntwpVPg5qJevSFq9KfoZftWZNH0hjMt9U06WDNdQYS3QeuYGpEOBnoBDWPzDYjID2b5wRj6_fuqbcsv_1uP5q73jzRrWgLaa8TZX4oJqN_XdVnRrWJy7TVafpDG_oiHO-XXEpAMjcQbFuSQRjXelkFJyZOQgMNSlDdNWmog4GgUskV1HtJl6K";
  const logoImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDNhFu1PyskTMu7V15zcyw_BHjtkBuFF0aeC932D_9xxcVPd5Tl59xq5cWY3Y2XhO7yJgNcjho0UkyH3ELD-y2YjRUFm_bGwKnVsCk7ncPgfqOpN9d9fDrGWEyIwJILoPzTTGjusyLpFbU48aASoLe7g3uC1BbfXhlVmhVram49Dy5v44gT_l845xMfrb5TfA0EwSf3gDio8CkwfFI--HZ-CDZ3ADvWYvnEyjONmdnILM5RWSv9jdUN";

  return (
    <section className="relative">
      {/* Cover Image with Warm Atmospheric Gradient */}
      <div className="h-44 w-full relative overflow-hidden bg-[#2b211d]">
        {coverLoaded ? (
          <img
            src={coverImageUrl}
            alt="فضای داخلی کافه نارنج مشهد"
            className="w-full h-full object-cover object-center filter brightness-[0.88]"
            onError={() => setCoverLoaded(false)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-[#2b211d] via-[#43281c] to-[#6f1d1b] flex items-center justify-center">
            <span className="text-white/40 font-mono text-sm">Narenj Persian Cafe</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F4] via-transparent to-black/35 pointer-events-none" />

        {/* Status Badge: اکنون باز است */}
        <div className="absolute top-3 left-4 bg-black/50 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/15 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>اکنون باز است</span>
        </div>
      </div>

      {/* Profile Avatar & Identity Details */}
      <div className="px-5 -mt-16 relative z-10 flex flex-col items-center text-center">
        {/* Logo Emblem */}
        <div className="relative group">
          <div className="w-28 h-28 rounded-full p-1 bg-white shadow-xl ring-4 ring-orange-100/90 flex items-center justify-center overflow-hidden">
            {logoLoaded ? (
              <img
                src={logoImageUrl}
                alt="لوگوی کافه نارنج"
                className="w-full h-full rounded-full object-cover"
                onError={() => setLogoLoaded(false)}
              />
            ) : (
              <div className="w-full h-full rounded-full bg-orange-50 flex flex-col items-center justify-center text-orange-600 p-2">
                <span className="text-xs font-black">NARENJ</span>
                <span className="text-[9px] text-stone-500">CAFE</span>
              </div>
            )}
          </div>

          {/* NFC Verified Badge */}
          <div
            className="absolute bottom-1 left-1 bg-[#ea580c] text-white p-1 rounded-full ring-2 ring-white shadow-md flex items-center justify-center"
            title="کارت احراز هویت شده NFC"
          >
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </div>

        {/* Business Titles */}
        <div className="mt-3">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl font-black text-[#1b1411] tracking-tight">
              {BUSINESS_DATA.businessName}
            </h1>
            <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full border border-amber-200">
              مشهد
            </span>
          </div>

          <p className="text-xs font-bold text-[#dd4f10] mt-1 uppercase tracking-wider">
            {BUSINESS_DATA.englishName}
          </p>

          <span className="inline-block text-xs text-stone-500 font-medium bg-stone-100/90 px-3 py-0.5 rounded-full mt-1.5 border border-stone-200/50">
            {BUSINESS_DATA.category}
          </span>

          <p className="text-stone-600 text-sm mt-2 max-w-xs font-normal leading-relaxed">
            {BUSINESS_DATA.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};
