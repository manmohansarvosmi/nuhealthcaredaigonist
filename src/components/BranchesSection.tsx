import React from 'react';
import { MapPin, Phone, Clock, Car, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { DIAGNOSTIC_CENTERS } from '../data/diagnosticData';

export const BranchesSection: React.FC = () => {
  return (
    <section id="centers" className="py-8 sm:py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <div className="text-[11px] font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              Network of Centers
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Nu Health Care Diagnostic Centers
            </h2>
          </div>
          <p className="text-xs text-slate-600 max-w-md">
            Visit our state-of-the-art centers in Dabra & Karera or book doorstep home sample collection.
          </p>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DIAGNOSTIC_CENTERS.map((center, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col justify-between hover:border-orange-300 shadow-2xs transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-1.5">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#E86A17] uppercase tracking-wide">
                      {center.tag}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 font-display mt-0.5">
                      {center.name}
                    </h3>
                  </div>
                  {center.emergencyAvailable && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#D32F2F] bg-red-50 px-1.5 py-0.5 rounded border border-red-200 shrink-0">
                      <ShieldAlert className="w-2.5 h-2.5 text-[#D32F2F]" />
                      24x7
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F37920] mt-0.5 shrink-0" />
                    <span className="text-[11px]">{center.address}, {center.city}</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono">
                    <Phone className="w-3.5 h-3.5 text-[#0066B2] shrink-0" />
                    <a href={`tel:${center.phone}`} className="hover:text-[#F37920] transition-colors font-medium text-[11px]">
                      {center.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-[11px]">{center.hours}</span>
                  </div>
                </div>

                {/* Facilities Available */}
                <div className="pt-1">
                  <div className="text-[11px] font-bold text-slate-900 mb-1 font-mono">Equipped With:</div>
                  <div className="flex flex-wrap gap-1">
                    {center.facilities.slice(0, 4).map((fac, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium bg-orange-50/70 text-slate-700 px-1.5 py-0.5 rounded border border-orange-100"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Footer Links */}
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <div className="text-slate-500 font-mono text-[10px]">
                  {center.parkingAvailable && 'Parking Available'}
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(center.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0066B2] hover:text-[#0b548f] inline-flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
