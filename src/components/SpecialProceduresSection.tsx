import React from 'react';
import { Sparkles, Calendar, Clock, AlertCircle, ArrowRight, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { DIAGNOSTIC_TESTS } from '../data/diagnosticData';
import { DiagnosticTest } from '../types';

interface SpecialProceduresSectionProps {
  onBookProcedure: (test: DiagnosticTest) => void;
  onOpenHomeBooking: () => void;
}

export const SpecialProceduresSection: React.FC<SpecialProceduresSectionProps> = ({
  onBookProcedure,
  onOpenHomeBooking
}) => {
  // Filter the 5 special procedures
  const specialProcedures = DIAGNOSTIC_TESTS.filter(t => t.category === 'special');

  return (
    <section id="special-procedures" className="py-8 sm:py-12 bg-linear-to-b from-orange-50/50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-[#E86A17] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono mb-2 border border-orange-200">
              <Sparkles className="w-3 h-3 text-[#F37920]" />
              Special Contrast & Fluoroscopy Studies
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Special Procedures
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
            Conducted by senior radiologists using high-frequency digital fluoroscopy with strict sterile protocols and instant digital reporting.
          </p>
        </div>

        {/* 5 Special Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialProcedures.map((proc, idx) => (
            <div
              key={proc.id || idx}
              className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col justify-between hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                {/* Top Badge & Number */}
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold text-[#E86A17] bg-orange-50 px-2 py-0.5 rounded border border-orange-100 uppercase">
                    Procedure 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{proc.turnaroundTime}</span>
                  </div>
                </div>

                {/* Procedure Title */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0066B2] transition-colors font-display">
                    {proc.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-semibold text-[#0066B2] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {proc.sampleType}
                    </span>
                    {proc.fastingRequired && (
                      <span className="text-[10px] font-semibold text-[#D32F2F] bg-red-50 px-2 py-0.5 rounded border border-red-100">
                        {proc.fastingHours ? `${proc.fastingHours}h Fasting` : 'Fasting Required'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {proc.description}
                </p>

                {/* Clinical Parameters List */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-bold text-slate-900 font-mono flex items-center gap-1">
                    <Activity className="w-3 h-3 text-[#F37920]" />
                    <span>Evaluates:</span>
                  </div>
                  <div className="space-y-1">
                    {proc.parameters.map((param, pIdx) => (
                      <div key={pIdx} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{param}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preparation Note Box */}
                {proc.preparationNote && (
                  <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-2.5 text-[11px] text-amber-900 leading-normal flex items-start gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Preparation:</strong> {proc.preparationNote}</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onBookProcedure(proc)}
                  className="w-full py-2 px-3 bg-[#0066B2] hover:bg-[#0b548f] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book {proc.name.split(' ')[0]} Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Doctor Consultation / Inquiry Card */}
          <div className="bg-linear-to-br from-[#0b1e33] to-[#122844] text-white rounded-xl p-5 flex flex-col justify-between shadow-md border border-slate-700">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#F37920] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-base font-bold font-display text-white">
                Need Guidance for Special Procedures?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Special contrast studies require patient preparation (fasting, serum creatinine check, or cycle timing). Call our 24x7 clinical helpline for expert guidance.
              </p>
              <div className="space-y-1.5 pt-1 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#F37920]">✓</span> Available at Dabra & Karera Centers
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F37920]">✓</span> Low-Dose Digital Radiography
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F37920]">✓</span> Reports Verified by Radiologists
                </div>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-800">
              <a
                href="tel:+919617659936"
                className="w-full py-2 px-3 bg-[#E86A17] hover:bg-[#d45e12] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 block text-center"
              >
                <span>Call 24x7 Helpline: 096176 59936</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
