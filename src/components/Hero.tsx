import React, { useState } from 'react';
import { Search, ArrowRight, Shield, Clock, Home, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
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

  // Search filtering
  const filteredTests = searchQuery.trim() === '' ? [] : DIAGNOSTIC_TESTS.filter(test => 
    test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    test.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    test.parameters.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()))
  ).slice(0, 5);

  const filteredPackages = searchQuery.trim() === '' ? [] : HEALTH_PACKAGES.filter(pkg =>
    pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.recommendedFor.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 3);

  const hasResults = filteredTests.length > 0 || filteredPackages.length > 0;

  return (
    <section id="hero" className="relative bg-gradient-to-b from-orange-50/50 via-white to-white pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Proposition, Value, Search, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Zero-Pill Quiet Editorial Trust Marker with Nu Theme Colors */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#E86A17] tracking-wider uppercase font-mono">
              <span className="text-[#D32F2F]">GROUP'S OF</span>
              <span>NU HEALTH CARE DIAGNOSTIC</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-[#0066B2]">NABL (ISO 15189) ACCREDITED</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600">ICMR APPROVED</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14] text-balance font-display">
              Precision Diagnostics. Caring Hands. Faster Answers.
            </h1>

            {/* Editorial Value Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Equipped with advanced 3.0-Tesla Silent MRI, 128-Slice Low-Dose CT, and fully automated robotic pathology. Every diagnostic report is audited and verified with double MD sign-off within 6 hours.
            </p>

            {/* Interactive Live Search Box */}
            <div className="relative max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search 600+ tests (e.g. CBC, Vitamin D, MRI Brain, Thyroid)..."
                  className="w-full pl-12 pr-28 py-3.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F37920]/30 focus:border-[#F37920] transition-all"
                />
                <button
                  onClick={onExploreTests}
                  className="absolute right-2 px-4 py-2 bg-[#0066B2] hover:bg-[#0b548f] text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Autocomplete Dropdown */}
              {isSearchFocused && searchQuery.trim() !== '' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-orange-200 z-50 overflow-hidden divide-y divide-slate-100 max-h-96 overflow-y-auto">
                  {hasResults ? (
                    <>
                      {filteredTests.length > 0 && (
                        <div className="p-3">
                          <div className="text-[11px] font-bold text-[#E86A17] uppercase tracking-wider mb-2 px-2">
                            Nu Health Care Diagnostic Tests & Scans
                          </div>
                          <div className="space-y-1">
                            {filteredTests.map(test => (
                              <button
                                key={test.id}
                                onClick={() => {
                                  onSelectTest(test);
                                  setIsSearchFocused(false);
                                  setSearchQuery('');
                                }}
                                className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50/70 flex items-center justify-between group transition-colors cursor-pointer"
                              >
                                <div>
                                  <div className="text-xs font-semibold text-slate-900 group-hover:text-[#F37920]">
                                    {test.name}
                                  </div>
                                  <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
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
                                <div className="text-right">
                                  <div className="text-xs font-bold text-slate-900 font-mono">₹{test.price}</div>
                                  <div className="text-[10px] text-slate-400 line-through font-mono">₹{test.originalPrice}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {filteredPackages.length > 0 && (
                        <div className="p-3 bg-orange-50/40">
                          <div className="text-[11px] font-bold text-[#0066B2] uppercase tracking-wider mb-2 px-2">
                            Curated Master Health Check Packages
                          </div>
                          <div className="space-y-1">
                            {filteredPackages.map(pkg => (
                              <button
                                key={pkg.id}
                                onClick={() => {
                                  onSelectPackage(pkg);
                                  setIsSearchFocused(false);
                                  setSearchQuery('');
                                }}
                                className="w-full text-left px-3 py-2 rounded-lg hover:bg-white flex items-center justify-between group transition-colors border border-transparent hover:border-orange-200 cursor-pointer"
                              >
                                <div>
                                  <div className="text-xs font-semibold text-slate-900 group-hover:text-[#F37920]">
                                    {pkg.name}
                                  </div>
                                  <div className="text-[11px] text-slate-500 mt-0.5">
                                    {pkg.totalParameters} Parameters · {pkg.fasting}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-xs font-bold text-[#E86A17] font-mono">₹{pkg.price}</div>
                                  <div className="text-[10px] text-slate-400 line-through font-mono">₹{pkg.originalPrice}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-6 text-center text-xs text-slate-500">
                      No exact match for "{searchQuery}". Call our 24x7 helpline (080) 4920-8800 or browse catalog below.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick-Action Decision Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <button
                onClick={onExploreTests}
                className="p-3.5 bg-white hover:bg-orange-50/50 border border-slate-200 rounded-xl text-left transition-all hover:border-[#F37920]/60 hover:shadow-xs group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#E86A17] flex items-center justify-center mb-2 group-hover:bg-[#F37920] group-hover:text-white transition-colors">
                  <Search className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">Book Test</div>
                <div className="text-[11px] text-slate-500 mt-0.5">600+ Path & Scans</div>
              </button>

              <button
                onClick={onOpenHomeBooking}
                className="p-3.5 bg-white hover:bg-orange-50/50 border border-slate-200 rounded-xl text-left transition-all hover:border-[#F37920]/60 hover:shadow-xs group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#E86A17] flex items-center justify-center mb-2 group-hover:bg-[#F37920] group-hover:text-white transition-colors">
                  <Home className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">Home Visit</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Free sample pickup</div>
              </button>

              <button
                onClick={onGoToReports}
                className="p-3.5 bg-white hover:bg-blue-50/50 border border-slate-200 rounded-xl text-left transition-all hover:border-[#0066B2]/60 hover:shadow-xs group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0066B2] flex items-center justify-center mb-2 group-hover:bg-[#0066B2] group-hover:text-white transition-colors">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">View Reports</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Instant online PDF</div>
              </button>

              <button
                onClick={onOpenPrescription}
                className="p-3.5 bg-white hover:bg-red-50/50 border border-slate-200 rounded-xl text-left transition-all hover:border-[#D32F2F]/60 hover:shadow-xs group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center mb-2 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">Upload Rx</div>
                <div className="text-[11px] text-slate-500 mt-0.5">15-min callback</div>
              </button>
            </div>

            {/* Zero-Pill Quantitative Rigor Strip */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F37920] shrink-0" />
                <span className="font-bold text-slate-900">1.2M+</span> Samples Tested
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F37920] shrink-0" />
                <span className="font-bold text-slate-900">6-Hour</span> Routine Turnaround
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0066B2] shrink-0" />
                <span className="font-bold text-slate-900">99.84%</span> Analytical Accuracy
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Fidelity Visual Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-orange-200/80 aspect-[16/10] bg-slate-950">
              <img
                src="/src/assets/images/hero_diagnostic_lab_1790917833738.jpg"
                alt="Nu Health Care Diagnostic modern laboratory center"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Subtle Scrim for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

              {/* In-Frame Clinical Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-white/40 shadow-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F37920] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Nu Health Care Express Reporting</div>
                    <div className="text-[11px] text-slate-500 font-mono">Results on SMS, WhatsApp & Secure Portal</div>
                  </div>
                </div>
                <button
                  onClick={onGoToReports}
                  className="px-3 py-1.5 bg-[#0066B2] hover:bg-[#0b548f] text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-colors shrink-0 cursor-pointer"
                >
                  <span>Portal</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Secondary Floating Trust Text */}
            <div className="hidden sm:flex items-center justify-between mt-3 px-2 text-xs text-slate-500 font-medium">
              <span>Automated Roche & Abbott Analyzers</span>
              <span>·</span>
              <span>Barcoded Zero-Touch Safety</span>
              <span>·</span>
              <span>Cold-Chain Phlebotomy</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
