import React from 'react';
import { Award, Clock, GraduationCap } from 'lucide-react';
import { DOCTORS_TEAM } from '../data/diagnosticData';

export const DoctorsTeam: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <div className="text-[11px] font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              Medical Leadership & Faculty
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Nu Health Care Board of Pathologists & Specialists
            </h2>
          </div>
          <p className="text-xs text-slate-600 max-w-md">
            Every test report is correlated and signed by senior board certified pathologists.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {DOCTORS_TEAM.map((doc, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl border border-slate-200 p-4 flex flex-col justify-between hover:border-orange-300 hover:shadow-2xs transition-all"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F37920] to-[#E86A17] text-white flex items-center justify-center font-bold text-base font-display shadow-2xs">
                  {doc.name.replace('Dr. ', '').charAt(0)}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-display">
                    {doc.name}
                  </h3>
                  <div className="text-[11px] font-bold text-[#0066B2] mt-0.5 font-mono">
                    {doc.role}
                  </div>
                </div>

                <div className="space-y-1 text-xs text-slate-600 pt-0.5">
                  <div className="flex items-start gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span className="text-[11px]">{doc.qualification}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-slate-500">
                    <Award className="w-3 h-3 text-[#F37920] shrink-0" />
                    <span>{doc.experience}</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed pt-1.5 border-t border-slate-200">
                  {doc.bio}
                </p>
              </div>

              <div className="pt-2.5 mt-2.5 border-t border-slate-200 text-[10px] text-slate-500 font-mono flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                <span>{doc.availability}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
