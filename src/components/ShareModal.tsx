import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { X, Copy, Check, Share2, QrCode } from 'lucide-react';
import { BUSINESS_DATA } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  showToast: (msg: string) => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, showToast }) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      QRCode.toDataURL(currentUrl, {
        width: 260,
        margin: 2,
        color: {
          dark: '#1b1411',
          light: '#ffffff'
        }
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error('QR generation error:', err));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      showToast('لینک کارت با موفقیت کپی شد');
      setTimeout(() => setCopied(false), 2500);
    } catch (_) {
      showToast('خطا در کپی لینک');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${BUSINESS_DATA.businessName} | کارت هوشمند NFC`,
          text: `${BUSINESS_DATA.businessName} - مدیریت ${BUSINESS_DATA.ownerName}\n${BUSINESS_DATA.address}\nتماس: ${BUSINESS_DATA.phone}`,
          url: currentUrl,
        });
        showToast('کارت با موفقیت اشتراک گذاشته شد');
      } catch (e) {
        // User cancelled share
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-stone-100 flex flex-col items-center text-center animate-in fade-in zoom-in duration-200"
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

        {/* Title */}
        <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#f46c19] flex items-center justify-center mb-3 shadow-inner">
          <QrCode className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-[#1b1411]">
          اشتراک‌گذاری کارت هوشمند
        </h3>
        <p className="text-xs text-stone-500 mt-1 max-w-[260px]">
          مشتریان می‌توانند این کد QR را با دوربین گوشی اسکن کنند
        </p>

        {/* QR Code Container */}
        <div className="mt-4 p-3 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-center">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt="کد QR کارت هوشمند"
              className="w-44 h-44 rounded-xl"
            />
          ) : (
            <div className="w-44 h-44 flex items-center justify-center text-stone-400 text-xs">
              در حال تولید کد...
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="w-full space-y-2 mt-5">
          <button
            type="button"
            onClick={handleNativeShare}
            className="tap-effect w-full py-3 px-4 rounded-xl bg-[#1b1411] hover:bg-[#2b211d] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-[#fb9247]" />
            <span>ارسال از طریق پیام‌رسان‌ها (Share)</span>
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="tap-effect w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">لینک کپی شد!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-stone-500" />
                <span>کپی آدرس کارت</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
