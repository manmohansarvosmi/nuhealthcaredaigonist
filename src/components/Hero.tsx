import React, { useState } from 'react';
import { 
  Search, 
  Home, 
  Clock, 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import { DIAGNOSTIC_TESTS, HEALTH_PACKAGES } from '../data/diagnosticData';
import { DiagnosticTest, HealthPackage } from '../types';

interface HeroProps {
  onSelectTest: (test: DiagnosticTest) => void;
  onSelectPackage: (pkg: HealthPackage) => void;
  onOpenHomeBooking: () => void;
  onOpenPrescription: () => void;
  onGoToReports: () => void;
  onExploreTests: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectTest,
  onSelectPackage,
  onOpenHomeBooking,
  onOpenPrescription,
  onGoToReports,
  onExploreTests
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Autocomplete filtering
  const filteredTests = searchQuery.trim() === '' 
    ? [] 
    : DIAGNOSTIC_TESTS.filter(t => 
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.parameters.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5);

  const filteredPackages = searchQuery.trim() === ''
    ? []
    : HEALTH_PACKAGES.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.keyTests.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 3);

  const hasResults = filteredTests.length > 0 || filteredPackages.length > 0;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-slate-50 border-b border-slate-200">
      
      {/* Background Architectural Grid Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-7 pb-8 sm:pb-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Search Hub */}
          <div className="lg:col-span-7 space-y-3.5">
            
            {/* Trust Marker */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#E86A17] tracking-wider uppercase font-mono">
              <span className="text-[#D32F2F]">GROUP'S OF</span>
              <span>NU HEALTH CARE DIAGNOSTIC</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-[#0066B2]">NABL ACCREDITED</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600">DABRA (GWALIOR)</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance font-display">
              Precision Diagnostics. Caring Hands. Faster Answers.
            </h1>

            {/* Notice Callout from Prescription Image */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-2xs">
              <Home className="w-3.5 h-3.5" />
              <span>Home & Hospital Sample Collection Available</span>
            </div>

            {/* Editorial Value Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Equipped with fully automated NABL pathology, digital X-ray, special contrast procedures (IVP, Barium, HSG, RGU/MCU), 12-lead ECG, and trained phlebotomists. Verified reports delivered on WhatsApp within 4 to 6 hours.
            </p>

            {/* Interactive Live Search Box */}
            <div className="relative max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search tests (e.g. CBC, Widal, LFT, KFT, X-Ray, Thyroid)..."
                  className="w-full pl-10 pr-24 py-2.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#F37920]/30 focus:border-[#F37920] transition-all"
                />
                <button
                  onClick={onExploreTests}
                  className="absolute right-1.5 px-3 py-1.5 bg-[#0066B2] hover:bg-[#0b548f] text-white rounded-md text-[11px] font-bold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Autocomplete Dropdown Without Prices */}
              {isSearchFocused && searchQuery.trim() !== '' && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-orange-200 z-50 overflow-hidden divide-y divide-slate-100 max-h-80 overflow-y-auto">
                  {hasResults ? (
                    <>
                      {filteredTests.length > 0 && (
                        <div className="p-2.5">
                          <div className="text-[10px] font-bold text-[#E86A17] uppercase tracking-wider mb-1 px-2">
                            Diagnostic Tests & Digital X-Ray
                          </div>
                          <div className="space-y-0.5">
                            {filteredTests.map(test => (
                              <button
                                key={test.id}
                                onClick={() => {
                                  onSelectTest(test);
                                  setIsSearchFocused(false);
                                  setSearchQuery('');
                                }}
                                className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-orange-50/70 flex items-center justify-between group transition-colors cursor-pointer"
                              >
                                <div>
                                  <div className="text-xs font-semibold text-slate-900 group-hover:text-[#F37920]">
                                    {test.name}
                                  </div>
                                  <div className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                                    <span>{test.sampleType}</span>
                                    <span>·</span>
                                    <span>{test.turnaroundTime}</span>
                                    {test.fastingRequired && (
                                      <>
                                        <span>·</span>
                                        <span className="text-[#D32F2F] font-semibold">Fasting Req.</span>
                                      </>
                                    )}
                                  </div>
                                </div>
                                <span className="text-[11px] font-bold text-[#0066B2] group-hover:text-[#F37920]">
                                  Select & Book →
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {filteredPackages.length > 0 && (
                        <div className="p-2.5 bg-orange-50/40">
                          <div className="text-[10px] font-bold text-[#0066B2] uppercase tracking-wider mb-1 px-2">
                            Master Health Packages
                          </div>
                          <div className="space-y-0.5">
                            {filteredPackages.map(pkg => (
                              <button
                                key={pkg.id}
                                onClick={() => {
                                  onSelectPackage(pkg);
                                  setIsSearchFocused(false);
                                  setSearchQuery('');
                                }}
                                className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-white flex items-center justify-between group transition-colors border border-transparent hover:border-orange-200 cursor-pointer"
                              >
                                <div>
                                  <div className="text-xs font-semibold text-slate-900 group-hover:text-[#F37920]">
                                    {pkg.name}
                                  </div>
                                  <div className="text-[10px] text-slate-500 mt-0.5">
                                    {pkg.totalParameters} Parameters · {pkg.fasting}
                                  </div>
                                </div>
                                <span className="text-[11px] font-bold text-[#E86A17]">
                                  View Package →
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-500">
                      No exact match for "{searchQuery}". Call our 24x7 helpline 096176 59936 or browse catalog below.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick-Action Decision Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <button
                onClick={onExploreTests}
                className="p-2.5 sm:p-3 bg-white hover:bg-orange-50/50 border border-slate-200 rounded-xl text-left transition-all hover:border-[#F37920]/60 hover:shadow-2xs group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-100 text-[#E86A17] flex items-center justify-center mb-1.5 group-hover:bg-[#F37920] group-hover:text-white transition-colors">
                  <Search className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-slate-900">Book Test</div>
                <div className="text-[10px] text-slate-500 mt-0.5">48+ Path, X-Ray & Specials</div>
              </button>

              <button
                onClick={onOpenHomeBooking}
                className="p-2.5 sm:p-3 bg-white hover:bg-orange-50/50 border border-slate-200 rounded-xl text-left transition-all hover:border-[#F37920]/60 hover:shadow-2xs group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-100 text-[#E86A17] flex items-center justify-center mb-1.5 group-hover:bg-[#F37920] group-hover:text-white transition-colors">
                  <Home className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-slate-900">Home Visit</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Free sample pickup</div>
              </button>

              <button
                onClick={onGoToReports}
                className="p-2.5 sm:p-3 bg-white hover:bg-emerald-50/50 border border-slate-200 rounded-xl text-left transition-all hover:border-emerald-500/60 hover:shadow-2xs group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-slate-900">How It Works</div>
                <div className="text-[10px] text-slate-500 mt-0.5">4-step process</div>
              </button>

              <button
                onClick={onOpenPrescription}
                className="p-2.5 sm:p-3 bg-white hover:bg-red-50/50 border border-slate-200 rounded-xl text-left transition-all hover:border-[#D32F2F]/60 hover:shadow-2xs group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center mb-1.5 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-slate-900">Upload Rx</div>
                <div className="text-[10px] text-slate-500 mt-0.5">15-min callback</div>
              </button>
            </div>

            {/* Quantitative Rigor Strip */}
            <div className="pt-2.5 border-t border-slate-200 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11px] text-slate-600 font-mono">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F37920] shrink-0" />
                <span className="font-bold text-slate-900">24x7</span> Emergency
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F37920] shrink-0" />
                <span className="font-bold text-slate-900">4-Hour</span> Reports
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066B2] shrink-0" />
                <span className="font-bold text-slate-900">100%</span> Sterile Collection
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Fidelity Visual Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-orange-200/80 aspect-[16/10] bg-slate-950">
              <img
                src="/src/assets/images/hero_diagnostic_lab_1790917833738.jpg"
                alt="Nu Health Care Diagnostic modern laboratory center"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Subtle Scrim for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

              {/* In-Frame Clinical Badge Overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/40 shadow-md flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F37920] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Nu Health Care Express Reports</div>
                    <div className="text-[10px] text-slate-500 font-mono">Results on WhatsApp & SMS</div>
                  </div>
                </div>
                <a
                  href="tel:+919617659936"
                  className="px-2.5 py-1 bg-[#0066B2] hover:bg-[#0b548f] text-white rounded-md text-[11px] font-bold flex items-center gap-1 transition-colors shrink-0 font-mono"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>Call 24x7</span>
                </a>
              </div>
            </div>

            {/* Secondary Floating Trust Text */}
            <div className="hidden sm:flex items-center justify-between mt-2 px-1 text-[11px] text-slate-500 font-medium">
              <span>Automated Pathology</span>
              <span>·</span>
              <span>Digital Direct X-Ray</span>
              <span>·</span>
              <span>Doorstep Blood Collection</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
