import React from 'react';
import { 
  FileText, 
  Home, 
  Microscope, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Stethoscope,
  BadgePercent
} from 'lucide-react';

interface HowItWorksProps {
  onOpenHomeBooking: () => void;
  onOpenPrescription: () => void;
  onExploreTests: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onOpenHomeBooking,
  onOpenPrescription,
  onExploreTests
}) => {
  const steps = [
    {
      step: '01',
      title: 'Choose Test or Upload Rx',
      desc: 'Browse from 43+ diagnostic tests or upload your doctor’s prescription.',
      icon: FileText,
      accent: 'from-orange-500 to-amber-500',
      tag: 'Easy Booking',
      actionText: 'Browse Tests',
      action: onExploreTests
    },
    {
      step: '02',
      title: 'Doorstep Sample Pickup',
      desc: 'Our certified phlebotomist arrives at your home with sealed sterile vacuum tubes.',
      icon: Home,
      accent: 'from-blue-600 to-indigo-600',
      tag: '100% Sterile',
      actionText: 'Book Pickup',
      action: onOpenHomeBooking
    },
    {
      step: '03',
      title: 'Automated Lab Analysis',
      desc: 'Processed in our fully automated clinical analyzers with dual MD Pathologist verification.',
      icon: Microscope,
      accent: 'from-emerald-600 to-teal-600',
      tag: 'NABL Certified',
      actionText: 'Upload Rx',
      action: onOpenPrescription
    },
    {
      step: '04',
      title: 'Reports on WhatsApp',
      desc: 'Receive authenticated QR-coded digital PDF reports on WhatsApp within 4 to 6 hours.',
      icon: MessageSquare,
      accent: 'from-rose-500 to-pink-600',
      tag: 'Fast WhatsApp',
      actionText: 'Call 24x7',
      isCall: true
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24x7 Emergency Service',
      desc: 'Open round-the-clock near Civil Hospital, Subhash Ganj, Dabra for blood tests & X-rays.',
      badge: '24x7'
    },
    {
      icon: ShieldCheck,
      title: 'Barcoded Zero-Mixup Safety',
      desc: 'Each collection vial is laser-barcoded in front of you to eliminate sample mixup.',
      badge: '100% Safe'
    },
    {
      icon: Stethoscope,
      title: 'Free Report Consultation',
      desc: 'Complimentary guidance from our medical specialists to understand your report findings.',
      badge: 'Doctor Call'
    },
    {
      icon: BadgePercent,
      title: 'Transparent Affordable Rates',
      desc: 'Direct affordable diagnostic rates with high-end clinical precision.',
      badge: 'Best Care'
    }
  ];

  return (
    <section id="process" className="py-8 sm:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
              <Sparkles className="w-3 h-3 text-[#F37920]" />
              Simple 4-Step Process
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              How Nu Health Care Diagnostic Works
            </h2>
          </div>
          <p className="text-xs text-slate-600 max-w-md">
            From doorstep sample pickup in Dabra to fast certified reports on WhatsApp in 4 effortless steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="relative bg-slate-50 hover:bg-white rounded-xl p-4 border border-slate-200 hover:border-orange-300 transition-all duration-200 hover:shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black font-mono tracking-widest text-slate-400 group-hover:text-[#F37920] transition-colors">
                      STEP {item.step}
                    </span>
                    <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600 shadow-2xs">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-tr ${item.accent} text-white flex items-center justify-center shadow-2xs mb-2 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 font-display">
                      {item.title}
                    </h3>

                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Action Strip */}
                <div className="pt-3 mt-3 border-t border-slate-200/70">
                  {item.isCall ? (
                    <a
                      href="tel:+919977833679"
                      className="w-full inline-flex items-center justify-between text-[11px] font-bold text-[#D32F2F] hover:text-[#b71c1c] transition-colors"
                    >
                      <span className="flex items-center gap-1">
                        <PhoneCall className="w-3 h-3" />
                        99778 33679 / 80853 67924
                      </span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={item.action}
                      className="w-full inline-flex items-center justify-between text-[11px] font-bold text-[#0066B2] hover:text-[#F37920] transition-colors cursor-pointer"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us & Trust Bento Box */}
        <div className="bg-gradient-to-br from-[#071524] to-[#0d2238] rounded-2xl p-5 sm:p-6 text-white shadow-md border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700/60">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-[#F37920] uppercase tracking-wider">
                Why Patients & Doctors Trust Us
              </span>
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                Uncompromising Precision & Care in Dabra
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenHomeBooking}
                className="px-3.5 py-1.5 bg-[#F37920] hover:bg-[#E86A17] text-white font-bold text-xs rounded-lg shadow-2xs transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Book Home Collection</span>
              </button>
              <a
                href="tel:+919977833679"
                className="px-3 py-1.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs rounded-lg border border-slate-700 transition-all flex items-center gap-1.5 font-mono"
              >
                <PhoneCall className="w-3 h-3 text-[#F37920]" />
                <span>99778 33679 / 80853 67924</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
            {benefits.map((b, i) => {
              const BIcon = b.icon;
              return (
                <div key={i} className="space-y-1.5 bg-white/5 p-3 rounded-xl border border-white/10 hover:border-orange-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-7 h-7 rounded-md bg-orange-500/20 text-[#F37920] flex items-center justify-center">
                      <BIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-1.5 py-0.5 rounded">
                      {b.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-white font-display">
                    {b.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Centers: Dabra (Beside Civil Hospital) & Karera (Opp. Kamaksha Devi Temple)</span>
            </div>
            <div className="text-orange-400 font-semibold text-[10px]">
              Round-The-Clock Phlebotomy & Emergency Desk
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
