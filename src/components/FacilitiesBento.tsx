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
    <section id="facilities" className="py-8 sm:py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <div className="text-[11px] font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              Diagnostic Infrastructure
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Advanced Clinical Technology at Nu Health Care
            </h2>
          </div>
          <p className="text-xs text-slate-600 max-w-md">
            Equipped with fully automated NABL pathology analyzers, high-frequency digital X-ray, and certified home sample collection fleet.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Card 1: High-Frequency Digital X-Ray & Special Studies (col-span-7) */}
          <div className="md:col-span-7 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between group hover:border-blue-300 transition-all">
            <div className="p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#0066B2]">01. DIGITAL RADIOLOGY</span>
                <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1 font-mono">
                  <Zap className="w-3 h-3 text-[#F37920]" />
                  Low-Dose Ultra Clarity
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                High-Frequency Digital X-Ray & Special Studies
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                State-of-the-art digital radiography delivering instant bone and organ clarity with minimal radiation. Fully equipped for Chest, Spine, Joints, KUB, and Special Procedures including IVP, Barium Swallow, Barium Enema, RGU/MCU, and HSG.
              </p>
              <div className="pt-1">
                <button
                  onClick={onExploreScans}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0066B2] hover:text-[#0b548f] transition-colors cursor-pointer"
                >
                  <span>Explore X-Ray Studies</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full overflow-hidden bg-slate-950">
              <img
                src="/src/assets/images/hero_diagnostic_lab_1790917833738.jpg"
                alt="Digital X-Ray and Diagnostics at Nu Health Care Diagnostic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[11px] text-white">
                <span className="font-mono text-orange-200">High-Frequency Digital Radiography</span>
                <span className="bg-[#0066B2]/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono">Instant Film</span>
              </div>
            </div>
          </div>

          {/* Card 2: Automated Pathology Lab (col-span-5) */}
          <div className="md:col-span-5 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between group hover:border-orange-300 transition-all">
            <div className="p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#E86A17]">02. AUTOMATED CORE LAB</span>
                <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1 font-mono">
                  <Cpu className="w-3 h-3 text-[#0066B2]" />
                  Robotic Pipetting
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                Automated Clinical Analyzers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bi-directional barcode interfacing guarantees sample identity tracking with zero manual pipetting, maintaining clinical precision.
              </p>
            </div>

            <div className="relative aspect-[16/8] w-full overflow-hidden bg-slate-950 mt-auto">
              <img
                src="/src/assets/images/pathology_automation_lab_1790917863037.jpg"
                alt="Automated pathology analyzers at Nu Health Care Diagnostic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-4 text-[11px] text-white font-mono">
                Automated 5-Part Cell Counters & Biochemistry
              </div>
            </div>
          </div>

          {/* Card 3: Home Phlebotomy Fleet (col-span-6) */}
          <div className="md:col-span-6 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between group hover:border-orange-300 transition-all">
            <div className="p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#E86A17]">03. HOME / HOSPITAL COLLECTION</span>
                <span className="text-[11px] font-semibold text-teal-700 flex items-center gap-1 font-mono">
                  <Thermometer className="w-3 h-3 text-[#F37920]" />
                  Cold-Chain Carrier
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                Certified Phlebotomists with Caring Hands
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Single-use sterile vacuum tubes, instant barcoding at your doorstep, and temperature carriers safeguard your sample integrity.
              </p>
              <div className="pt-1">
                <button
                  onClick={onOpenHomeBooking}
                  className="px-3 py-1.5 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-lg text-xs font-bold inline-flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
                >
                  <span>Book Free Home Collection</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="relative aspect-[16/7] w-full overflow-hidden bg-slate-950 mt-auto">
              <img
                src="/src/assets/images/home_sample_collection_1790917877576.jpg"
                alt="Nu Health Care certified home sample collection specialist"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-4 text-[11px] text-white">
                Available 06:30 AM to 07:00 PM Across Dabra
              </div>
            </div>
          </div>

          {/* Card 4: Quality Standard & Dual Doctor Review (col-span-6) */}
          <div className="md:col-span-6 bg-slate-950 text-white rounded-xl p-4 sm:p-5 flex flex-col justify-between shadow-2xs border border-slate-800">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#F37920] font-bold">04. CLINICAL PROTOCOL</span>
                <span className="text-slate-400">100% AUDIT TRAIL</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Dual MD Pathologist Verification
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Critical results and borderline abnormal markers undergo compulsory re-testing and cross-verification by senior consultants before electronic report release.
              </p>

              {/* Protocol Spec Rows */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-xs text-[#F37920] font-bold font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F37920]" />
                    <span>NABL ISO 15189</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Daily quality control runs</div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-xs text-[#0066B2] font-bold font-mono">
                    <UserCheck className="w-3.5 h-3.5 text-[#0066B2]" />
                    <span>AERB Certified</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Certified radiation protection</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-mono text-[#D32F2F] font-bold">Panic Value Alert: Doctor Call</span>
              <span className="text-[#F37920] font-bold">Fast WhatsApp Report</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
