import React from 'react';
import { ShieldCheck, Cpu, ArrowUpRight, Zap, Thermometer, UserCheck } from 'lucide-react';

interface FacilitiesBentoProps {
  onOpenHomeBooking: () => void;
  onExploreScans: () => void;
}

export const FacilitiesBento: React.FC<FacilitiesBentoProps> = ({
  onOpenHomeBooking,
  onExploreScans
}) => {
  return (
    <section id="facilities" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              Diagnostic Infrastructure & Innovation
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Advanced Clinical Technology at Nu Health Care
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Engineered with high-end cross-sectional radiology scanners and robotic pathology analyzers to eliminate manual errors and deliver unmatched clinical precision.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: 3T MRI & High-End Radiology (col-span-7) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between group hover:border-blue-300 transition-all">
            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#0066B2]">01. ADVANCED RADIOLOGY</span>
                <span className="text-xs font-semibold text-slate-600 flex items-center gap-1 font-mono">
                  <Zap className="w-3.5 h-3.5 text-[#F37920]" />
                  Sub-millimeter Resolution
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                3.0 Tesla Silent MRI & 128-Slice Low-Dose CT
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ultra-wide bore 3T MRI suite designed for patient comfort and reduced acoustic noise. Delivers pristine neuro, musculoskeletal, and vascular imaging with zero motion blur.
              </p>
              <div className="pt-2">
                <button
                  onClick={onExploreScans}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0066B2] hover:text-[#0b548f] transition-colors cursor-pointer"
                >
                  <span>Explore MRI & CT Scans</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
              <img
                src="/src/assets/images/mri_scanner_facility_1790917848638.jpg"
                alt="3-Tesla Silent MRI Scanner Facility at Nu Health Care Diagnostic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-orange-200">GE Healthcare Signa 3.0T</span>
                <span className="bg-[#0066B2]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono">Zero-Acoustic Mode</span>
              </div>
            </div>
          </div>

          {/* Card 2: Automated Pathology Lab (col-span-5) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between group hover:border-orange-300 transition-all">
            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#E86A17]">02. AUTOMATED CORE LAB</span>
                <span className="text-xs font-semibold text-slate-600 flex items-center gap-1 font-mono">
                  <Cpu className="w-3.5 h-3.5 text-[#0066B2]" />
                  Robotic Pipetting
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                Roche & Abbott High-Throughput Analyzers
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bi-directional barcode interfacing guarantees sample identity tracking with zero manual pipetting, maintaining a 99.84% accuracy rate.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 mt-auto">
              <img
                src="/src/assets/images/pathology_automation_lab_1790917863037.jpg"
                alt="Automated pathology analyzers at Nu Health Care Diagnostic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-xs text-white font-mono">
                Roche Cobas Pro & Sysmex Automated Cell Counters
              </div>
            </div>
          </div>

          {/* Card 3: Home Phlebotomy Fleet (col-span-6) */}
          <div className="md:col-span-6 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between group hover:border-orange-300 transition-all">
            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#E86A17]">03. HOME PHLEBOTOMY</span>
                <span className="text-xs font-semibold text-teal-700 flex items-center gap-1 font-mono">
                  <Thermometer className="w-3.5 h-3.5 text-[#F37920]" />
                  2°C - 8°C Cold Chain
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                Certified Phlebotomists with Caring Hands
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Single-use sterile butterfly needles, instant barcoding at your doorstep, and insulated temperature carriers safeguard your sample integrity for delicate enzyme and hormone assays.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenHomeBooking}
                  className="px-4 py-2 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Book Free Home Collection</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 mt-auto">
              <img
                src="/src/assets/images/home_sample_collection_1790917877576.jpg"
                alt="Nu Health Care certified home sample collection specialist"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-xs text-white">
                Available 06:30 AM to 07:00 PM Across All Branches
              </div>
            </div>
          </div>

          {/* Card 4: Quality Standard & Dual Doctor Review (col-span-6) */}
          <div className="md:col-span-6 bg-slate-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F37920] font-bold">04. CLINICAL PROTOCOL</span>
                <span className="text-slate-400">100% AUDIT TRAIL</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Dual MD Pathologist & Radiologist Verification
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Critical results and borderline abnormal markers undergo compulsory re-testing and cross-verification by senior consultants before electronic report release.
              </p>

              {/* Protocol Spec Rows */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#F37920] font-bold font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#F37920]" />
                    <span>NABL ISO 15189</span>
                  </div>
                  <div className="text-xs text-slate-400">Daily 3-level Westgard quality control runs</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#0066B2] font-bold font-mono">
                    <UserCheck className="w-4 h-4 text-[#0066B2]" />
                    <span>CAP Proficiency</span>
                  </div>
                  <div className="text-xs text-slate-400">International College of American Pathologists benchmark</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[#D32F2F] font-bold">Panic Value Alert: Doctor Call in 15 Mins</span>
              <span className="text-[#F37920] font-bold">Zero-Report Lag</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
