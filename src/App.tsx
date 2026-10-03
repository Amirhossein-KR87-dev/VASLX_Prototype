/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProfileHero } from './components/ProfileHero';
import { QuickActions } from './components/QuickActions';
import { ContactCard } from './components/ContactCard';
import { SocialSection } from './components/SocialSection';
import { MapSection } from './components/MapSection';
import { AboutSection } from './components/AboutSection';
import { ReviewSection } from './components/ReviewSection';
import { Footer } from './components/Footer';
import { FloatingBottomBar } from './components/FloatingBottomBar';
import { ShareModal } from './components/ShareModal';
import { NavigationModal } from './components/NavigationModal';
import { Toast } from './components/Toast';

export default function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <div className="bg-[#FAF7F4] text-[#1b1411] min-h-screen selection:bg-orange-100 selection:text-orange-900 pb-20">
      {/* Mobile-First Frame Wrapper */}
      <main className="max-w-md mx-auto relative bg-[#FAF7F4] min-h-screen shadow-2xl overflow-x-hidden">
        {/* Top Header */}
        <Header onOpenShare={() => setIsShareOpen(true)} />

        {/* Profile Hero with Cover & Avatar */}
        <ProfileHero />

        {/* Quick Actions (Call, Route, IG, Share) & vCard CTA with Amir Hossein (+9809015149861) */}
        <QuickActions
          onOpenShare={() => setIsShareOpen(true)}
          onOpenDirections={() => setIsNavOpen(true)}
          showToast={showToast}
        />

        {/* Contact Information Details */}
        <ContactCard />

        {/* Social Media & Channels (Instagram, Telegram, WhatsApp) */}
        <SocialSection />

        {/* Interactive Map & Direct Directions */}
        <MapSection />

        {/* About Business Section */}
        <AboutSection />

        {/* Customer Review & Secondary Share Button */}
        <ReviewSection onOpenShare={() => setIsShareOpen(true)} />

        {/* Footer */}
        <Footer />

        {/* Floating Quick Action Bottom Bar for Mobile Phones */}
        <FloatingBottomBar onOpenDirections={() => setIsNavOpen(true)} />

        {/* Modals & Overlays */}
        <ShareModal
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          showToast={showToast}
        />

        <NavigationModal
          isOpen={isNavOpen}
          onClose={() => setIsNavOpen(false)}
        />

        {/* Floating Toast Notification */}
        <Toast message={toastMessage} />
      </main>
    </div>
  );
}
