import React from 'react';
import { Send, MessageCircle, Instagram } from 'lucide-react';
import { BUSINESS_DATA } from '../types';

export const SocialSection: React.FC = () => {
  return (
    <section className="px-5 mt-6">
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-4 bg-[#f46c19] rounded-full" />
        <h2 className="text-base font-bold text-[#1b1411]">ما را دنبال کنید</h2>
      </div>

      <div className="space-y-2.5">
        {/* Instagram Card */}
        <a
          href={`https://instagram.com/${BUSINESS_DATA.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-effect flex items-center justify-between p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-pink-300 transition duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-sm">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs text-[#1b1411]">اینستاگرام کافه</div>
              <div className="text-[11px] text-stone-500 font-mono" dir="ltr">
                @{BUSINESS_DATA.instagram}
              </div>
            </div>
          </div>
          <span className="text-xs font-semibold text-[#dd4f10] bg-orange-50 px-3 py-1 rounded-lg border border-orange-100/60">
            مشاهده پیج
          </span>
        </a>

        {/* Telegram Card */}
        <a
          href={`https://t.me/${BUSINESS_DATA.telegram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-effect flex items-center justify-between p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-sky-300 transition duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-sm">
              <Send className="w-5 h-5 -translate-x-0.5" />
            </div>
            <div>
              <div className="font-bold text-xs text-[#1b1411]">کانال تلگرام</div>
              <div className="text-[11px] text-stone-500 font-mono" dir="ltr">
                @{BUSINESS_DATA.telegram}
              </div>
            </div>
          </div>
          <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-lg border border-sky-100/60">
            عضویت
          </span>
        </a>

        {/* WhatsApp Card */}
        <a
          href={`https://wa.me/${BUSINESS_DATA.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-effect flex items-center justify-between p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-emerald-300 transition duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs text-[#1b1411]">پشتیبانی واتساپ</div>
              <div className="text-[11px] text-stone-500 font-mono" dir="ltr">
                {BUSINESS_DATA.displayPhone}
              </div>
            </div>
          </div>
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100/60">
            ارسال پیام
          </span>
        </a>
      </div>
    </section>
  );
};
