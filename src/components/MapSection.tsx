import React, { useEffect, useRef } from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_DATA } from '../types';

declare global {
  interface Window {
    L: any;
  }
}

export const MapSection: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Leaflet map safely if window.L is available
    if (typeof window !== 'undefined' && window.L && mapContainerRef.current && !mapInstanceRef.current) {
      try {
        const L = window.L;
        const map = L.map(mapContainerRef.current, {
          zoomControl: false,
          attributionControl: false,
          dragging: !L.Browser.mobile,
          touchZoom: true,
          scrollWheelZoom: false,
        }).setView([BUSINESS_DATA.coords.lat, BUSINESS_DATA.coords.lng], 16);

        // Warm CartoDB Voyager tiles (clean, reliable, no API key needed)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          maxZoom: 19,
          subdomains: 'abcd',
        }).addTo(map);

        // Custom Warm Orange Pin
        const customIcon = L.divIcon({
          className: 'custom-map-pin',
          html: `
            <div style="background-color: #dd4f10; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(221, 79, 16, 0.45); border: 2.5px solid white; transform: translate(-50%, -50%); cursor: pointer;">
              <svg style="width: 20px; height: 20px; color: white;" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          `,
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        });

        const marker = L.marker([BUSINESS_DATA.coords.lat, BUSINESS_DATA.coords.lng], {
          icon: customIcon,
        }).addTo(map);

        marker.bindPopup(`
          <div style="direction: rtl; text-align: center; font-family: 'Vazirmatn', sans-serif; padding: 2px;">
            <b style="color: #1b1411; font-size: 13px;">${BUSINESS_DATA.businessName}</b><br/>
            <span style="color: #666; font-size: 11px;">مشهد، بلوار سجاد، خ بهار</span>
          </div>
        `).openPopup();

        mapInstanceRef.current = map;
      } catch (err) {
        console.warn('Map initialization:', err);
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (_) {}
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const openDirectNavigation = () => {
    const lat = BUSINESS_DATA.coords.lat;
    const lng = BUSINESS_DATA.coords.lng;
    // Standard direct geo/maps intent works seamlessly on Android/iOS
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  const openGoogleMaps = () => {
    const lat = BUSINESS_DATA.coords.lat;
    const lng = BUSINESS_DATA.coords.lng;
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <section className="px-5 mt-6" id="location-section">
      {/* Title */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-4 bg-[#f46c19] rounded-full" />
        <h2 className="text-base font-bold text-[#1b1411]">ما را پیدا کنید</h2>
      </div>

      <div className="bg-white rounded-2xl p-3 border border-stone-200/80 shadow-[0_8px_25px_-5px_rgba(27,20,17,0.04)] overflow-hidden">
        {/* Map Container */}
        <div className="w-full h-48 rounded-xl overflow-hidden relative shadow-inner border border-stone-100 bg-[#f5f0ec]">
          <div ref={mapContainerRef} className="w-full h-full z-0" />
        </div>

        {/* Address Info */}
        <div className="mt-3 px-1">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#f46c19] shrink-0 mt-0.5" />
            <p className="text-xs text-stone-700 font-medium leading-relaxed">
              {BUSINESS_DATA.addressDetails}
            </p>
          </div>
        </div>

        {/* Map Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-stone-100">
          <button
            type="button"
            onClick={openDirectNavigation}
            className="tap-effect py-2.5 px-3 rounded-xl bg-[#f46c19] hover:bg-[#dd4f10] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition cursor-pointer"
          >
            <Navigation className="w-4 h-4" />
            <span>مسیریابی مستقیم</span>
          </button>

          <button
            type="button"
            onClick={openGoogleMaps}
            className="tap-effect py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-stone-500" />
            <span>باز کردن در گوگل‌مپ</span>
          </button>
        </div>
      </div>
    </section>
  );
};
