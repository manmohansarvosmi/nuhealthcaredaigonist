/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FacilitiesBento } from './components/FacilitiesBento';
import { TestCatalog } from './components/TestCatalog';
import { HealthPackages } from './components/HealthPackages';
import { HowItWorks } from './components/HowItWorks';
import { DoctorsTeam } from './components/DoctorsTeam';
import { BranchesSection } from './components/BranchesSection';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { Footer } from './components/Footer';
import { HomeCollectionModal } from './components/HomeCollectionModal';
import { PrescriptionUploadModal } from './components/PrescriptionUploadModal';
import { CartDrawer } from './components/CartDrawer';
import { CartItem, DiagnosticTest, HealthPackage } from './types';
import { Check, X } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHomeBookingOpen, setIsHomeBookingOpen] = useState(false);
  const [isPrescriptionOpen, setIsPrescriptionOpen] = useState(false);
  const [selectedBookingContext, setSelectedBookingContext] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (test: DiagnosticTest) => {
    if (cart.some(item => item.id === test.id)) return;
    const newItem: CartItem = {
      id: test.id,
      name: test.name,
      price: test.price,
      originalPrice: test.originalPrice,
      type: 'test',
      turnaroundTime: test.turnaroundTime,
      fastingRequired: test.fastingRequired
    };
    setCart(prev => [...prev, newItem]);
    showToast(`Added "${test.name}" to cart`);
  };

  const handleAddPackageToCart = (pkg: HealthPackage) => {
    if (cart.some(item => item.id === pkg.id)) return;
    const newItem: CartItem = {
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      originalPrice: pkg.originalPrice,
      type: 'package',
      turnaroundTime: pkg.reportTime,
      fastingRequired: true
    };
    setCart(prev => [...prev, newItem]);
    showToast(`Added "${pkg.name}" to cart`);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleBookTestDirect = (test: DiagnosticTest) => {
    setSelectedBookingContext(test.name);
    setIsHomeBookingOpen(true);
  };

  const handleBookPackageDirect = (pkg: HealthPackage) => {
    setSelectedBookingContext(pkg.name);
    setIsHomeBookingOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingSuccess = (bookingRef: string) => {
    // Empty cart upon successful booking checkout
    setCart([]);
    showToast(`Appointment confirmed! Booking Reference: ${bookingRef}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#071524] text-white text-xs px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2.5 animate-fadeIn">
          <div className="w-5 h-5 rounded-full bg-[#F37920]/20 text-[#F37920] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white ml-2"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Strict Top Bar Contract Header */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenHomeBooking={() => {
          setSelectedBookingContext(undefined);
          setIsHomeBookingOpen(true);
        }}
        onOpenPrescription={() => setIsPrescriptionOpen(true)}
        onSelectNav={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Live Search, Visual Banner, Trust Markers */}
        <Hero
          onSelectTest={handleBookTestDirect}
          onSelectPackage={handleBookPackageDirect}
          onOpenHomeBooking={() => {
            setSelectedBookingContext(undefined);
            setIsHomeBookingOpen(true);
          }}
          onOpenPrescription={() => setIsPrescriptionOpen(true)}
          onGoToReports={() => scrollToSection('process')}
          onExploreTests={() => scrollToSection('tests')}
        />

        {/* Facilities & High-Tech Diagnostic Equipment Bento */}
        <FacilitiesBento
          onOpenHomeBooking={() => {
            setSelectedBookingContext('Home Sample Collection');
            setIsHomeBookingOpen(true);
          }}
          onExploreScans={() => scrollToSection('tests')}
        />

        {/* Searchable Tests & Scans Catalog */}
        <TestCatalog
          cart={cart}
          onAddToCart={handleAddToCart}
          onBookDirect={handleBookTestDirect}
        />

        {/* Full-Body Health Packages */}
        <HealthPackages
          cart={cart}
          onAddPackageToCart={handleAddPackageToCart}
          onBookPackageDirect={handleBookPackageDirect}
        />

        {/* How It Works (4-Step Process) & Why Choose Nu Health Care */}
        <HowItWorks
          onOpenHomeBooking={() => {
            setSelectedBookingContext(undefined);
            setIsHomeBookingOpen(true);
          }}
          onOpenPrescription={() => setIsPrescriptionOpen(true)}
          onExploreTests={() => scrollToSection('tests')}
        />

        {/* Senior Medical Leadership & Pathologists */}
        <DoctorsTeam />

        {/* Diagnostic Centers & Branches */}
        <BranchesSection />

        {/* Verified Reviews, Accreditations & Clinical FAQ */}
        <TestimonialsAndFaq />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onSelectNav={scrollToSection}
        onOpenHomeBooking={() => {
          setSelectedBookingContext(undefined);
          setIsHomeBookingOpen(true);
        }}
        onOpenPrescription={() => setIsPrescriptionOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsHomeBookingOpen(true);
        }}
      />

      {/* Home Sample Collection Booking Modal */}
      <HomeCollectionModal
        isOpen={isHomeBookingOpen}
        onClose={() => setIsHomeBookingOpen(false)}
        cart={cart}
        preSelectedTestName={selectedBookingContext}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Doctor's Prescription Upload Modal */}
      <PrescriptionUploadModal
        isOpen={isPrescriptionOpen}
        onClose={() => setIsPrescriptionOpen(false)}
      />

    </div>
  );
}
