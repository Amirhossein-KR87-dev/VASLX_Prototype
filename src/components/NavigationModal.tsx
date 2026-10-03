import React from 'react';
import { X, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_DATA } from '../types';

interface NavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationModal: React.FC<NavigationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const lat = BUSINESS_DATA.coords.lat;
  const lng = BUSINESS_DATA.coords.lng;

  const navApps = [
    {
      name: 'گوگل‌مپ (Google Maps)',
      url: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      badge: 'بین‌المللی',
      bgColor: 'hover:bg-blue-50 hover:border-blue-300'
    },
    {
      name: 'مسیریاب نشان (Neshan)',
      url: `https://nshn.ir/?lat=${lat}&lng=${lng}`,
      badge: 'پیشنهادی ایران',
      bgColor: 'hover:bg-blue-50 hover:border-blue-300'
    },
    {
      name: 'مسیریاب بلد (Balad)',
      url: `https://balad.ir/location?latitude=${lat}&longitude=${lng}`,
      badge: 'ایران',
      bgColor: 'hover:bg-emerald-50 hover:border-emerald-300'
    },
    {
      name: 'ویز (Waze)',
      url: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
      badge: 'ترافیک زنده',
      bgColor: 'hover:bg-cyan-50 hover:border-cyan-300'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div
        className="relative w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl border border-stone-100 animate-in slide-in-from-bottom sm:zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 left-4 p-1.5 rounded-full text-stone-400 hover:text-stone-700 bg-stone-100 hover:bg-stone-200 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#f46c19] flex items-center justify-center">
            <Navigation className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#1b1411]">انتخاب مسیریاب</h3>
            <p className="text-[11px] text-stone-500">مسیریابی به سمت {BUSINESS_DATA.businessName}</p>
          </div>
        </div>

        <div className="space-y-2 mt-4">
          {navApps.map((app, idx) => (
            <a
              key={idx}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className={`tap-effect flex items-center justify-between p-3 rounded-xl border border-stone-200 bg-stone-50/70 transition-all ${app.bgColor}`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-semibold text-[#1b1411]">{app.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-stone-500 bg-white px-2 py-0.5 rounded-full border border-stone-200">
                  {app.badge}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
