import React from 'react';
import { MapPin, Phone, Clock, Car, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { DIAGNOSTIC_CENTERS } from '../data/diagnosticData';

export const BranchesSection: React.FC = () => {
  return (
    <section id="centers" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              Network of Centers
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Nu Health Care Diagnostic Centers & Express Hubs
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Visit our 24/7 flagship hospital hub or your nearest express collection center equipped with parking and wheelchair accessibility.
          </p>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIAGNOSTIC_CENTERS.map((center, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-orange-300 shadow-xs transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#E86A17] uppercase tracking-wide">
                      {center.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mt-0.5">
                      {center.name}
                    </h3>
                  </div>
                  {center.emergencyAvailable && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#D32F2F] bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      <ShieldAlert className="w-3 h-3 text-[#D32F2F]" />
                      24x7 RADIOLOGY
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#F37920] mt-0.5 shrink-0" />
                    <span>{center.address}, {center.city}</span>
                  </div>

                  <div className="flex items-center gap-2 font-mono">
                    <Phone className="w-4 h-4 text-[#0066B2] shrink-0" />
                    <a href={`tel:${center.phone}`} className="hover:text-[#F37920] transition-colors font-medium">
                      {center.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 font-mono">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{center.hours}</span>
                  </div>
                </div>

                {/* Facilities Available */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-900 mb-1.5 font-mono">Equipped With:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {center.facilities.map((fac, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-orange-50/70 text-slate-700 px-2 py-0.5 rounded border border-orange-100"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Footer Links */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
                  {center.parkingAvailable && (
                    <span className="flex items-center gap-1">
                      <Car className="w-3.5 h-3.5" />
                      Valet Parking
                    </span>
                  )}
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(center.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0066B2] hover:text-[#0b548f] inline-flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
