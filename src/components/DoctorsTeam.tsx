import React from 'react';
import { Award, Clock, GraduationCap } from 'lucide-react';
import { DOCTORS_TEAM } from '../data/diagnosticData';

export const DoctorsTeam: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              Medical Leadership & Faculty
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Nu Health Care Board of Pathologists & Radiologists
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Every scan and pathology test report is audited, correlated, and signed by our senior board of medical specialists.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS_TEAM.map((doc, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-orange-300 hover:shadow-xs transition-all"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F37920] to-[#E86A17] text-white flex items-center justify-center font-bold text-lg font-display shadow-xs">
                  {doc.name.replace('Dr. ', '').charAt(0)}
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    {doc.name}
                  </h3>
                  <div className="text-xs font-bold text-[#0066B2] mt-0.5 font-mono">
                    {doc.role}
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                  <div className="flex items-start gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span>{doc.qualification}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
                    <Award className="w-3.5 h-3.5 text-[#F37920] shrink-0" />
                    <span>{doc.experience}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                  {doc.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
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
