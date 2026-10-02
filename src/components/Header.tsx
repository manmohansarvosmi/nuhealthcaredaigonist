import React, { useState } from 'react';
import { Phone, Clock, ShieldCheck, ShoppingBag, Menu, X, FileText, Home } from 'lucide-react';
import { CartItem } from '../types';
import { NuHealthcareLogo } from './NuHealthcareLogo';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenHomeBooking: () => void;
  onOpenPrescription: () => void;
  onSelectNav: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cart,
  onOpenCart,
  onOpenHomeBooking,
  onOpenPrescription,
  onSelectNav
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onSelectNav(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-xs">
      {/* Top Ribbon - Clinical Navy & Warm Accents */}
      <div className="bg-[#0b1e33] text-slate-300 text-xs px-4 sm:px-6 py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#F37920] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F37920]" />
              NABL & ISO 15189:2022 Accredited Diagnostic Center
            </span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span className="hidden md:inline text-slate-300">
              Zero-Touch Barcoded Vacuum Blood Collection
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a 
              href="tel:+918049208800" 
              className="flex items-center gap-1.5 text-white hover:text-[#F37920] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D32F2F]" />
              <span className="font-semibold">24x7 Helpline: (080) 4920-8800</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div className="hidden sm:flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-[#F37920]" />
              <span>Express Reports in 6 Hrs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Logo & Brand) - Zone 2 (4-6 Nav Links) - Zone 3 (Primary Actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Wordmark with Exact Uploaded Logo */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="text-left group flex items-center gap-2 focus:outline-none cursor-pointer"
          aria-label="Nu Health Care Diagnostic Homepage"
        >
          <NuHealthcareLogo className="h-10 sm:h-12 w-auto" />
        </button>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
          <button 
            onClick={() => handleNavClick('tests')}
            className="hover:text-[#F37920] transition-colors py-1 cursor-pointer"
          >
            Tests & Scans
          </button>
          <button 
            onClick={() => handleNavClick('packages')}
            className="hover:text-[#F37920] transition-colors py-1 cursor-pointer"
          >
            Health Packages
          </button>
          <button 
            onClick={() => handleNavClick('facilities')}
            className="hover:text-[#F37920] transition-colors py-1 cursor-pointer"
          >
            Facilities & 3T MRI
          </button>
          <button 
            onClick={() => handleNavClick('reports')}
            className="hover:text-[#F37920] transition-colors py-1 cursor-pointer flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-[#0066B2]" />
            <span>Download Report</span>
          </button>
          <button 
            onClick={() => handleNavClick('centers')}
            className="hover:text-[#F37920] transition-colors py-1 cursor-pointer"
          >
            Centers & Doctors
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5">
          {/* Prescription Upload Button */}
          <button
            onClick={onOpenPrescription}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-orange-50/80 hover:bg-orange-100/90 text-orange-900 border border-orange-200/80 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            title="Upload handwritten prescription"
          >
            <FileText className="w-3.5 h-3.5 text-[#D32F2F]" />
            <span>Upload Rx</span>
          </button>

          {/* Book Home Visit Action in Nu Orange */}
          <button
            onClick={onOpenHomeBooking}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-bold text-white bg-[#F37920] hover:bg-[#D9620E] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Book Home Visit</span>
          </button>

          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            aria-label="View diagnostic cart"
            className="relative p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-slate-700" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D32F2F] text-white rounded-full text-[11px] font-bold flex items-center justify-center font-mono shadow-xs">
                {cart.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-xl">
          <button
            onClick={() => handleNavClick('tests')}
            className="block w-full text-left px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#F37920]"
          >
            Diagnostic Tests & Scans
          </button>
          <button
            onClick={() => handleNavClick('packages')}
            className="block w-full text-left px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#F37920]"
          >
            Full Body Health Packages
          </button>
          <button
            onClick={() => handleNavClick('facilities')}
            className="block w-full text-left px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#F37920]"
          >
            3T MRI & Laboratory Technology
          </button>
          <button
            onClick={() => handleNavClick('reports')}
            className="block w-full text-left px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#F37920]"
          >
            Track & Download Report
          </button>
          <button
            onClick={() => handleNavClick('centers')}
            className="block w-full text-left px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#F37920]"
          >
            Centers & Specialist Doctors
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="block w-full text-left px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#F37920]"
          >
            Fasting Guidelines & FAQs
          </button>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrescription();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-orange-900 bg-orange-50 hover:bg-orange-100 rounded-lg text-center"
            >
              Upload Doctor's Prescription
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHomeBooking();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#F37920] hover:bg-[#D9620E] rounded-lg text-center shadow-sm"
            >
              Book Home Sample Collection
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
