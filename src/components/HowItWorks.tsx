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
      desc: 'Browse from 120+ diagnostic tests & full body packages, or simply upload your doctor’s prescription.',
      icon: FileText,
      accent: 'from-orange-500 to-amber-500',
      tag: 'Easy Booking',
      actionText: 'Browse Tests',
      action: onExploreTests
    },
    {
      step: '02',
      title: 'Doorstep Sample Pickup',
      desc: 'Our certified phlebotomist arrives at your preferred home or office slot with sealed sterile vacuum tubes.',
      icon: Home,
      accent: 'from-blue-600 to-indigo-600',
      tag: '100% Sterile & Safe',
      actionText: 'Book Collection',
      action: onOpenHomeBooking
    },
    {
      step: '03',
      title: 'Automated Lab Analysis',
      desc: 'Samples are processed in our fully automated clinical analyzers with dual verification by senior Pathologists.',
      icon: Microscope,
      accent: 'from-emerald-600 to-teal-600',
      tag: 'NABL Certified',
      actionText: 'Upload Rx',
      action: onOpenPrescription
    },
    {
      step: '04',
      title: 'Reports on WhatsApp',
      desc: 'Receive authenticated, QR-coded digital PDF reports directly on your WhatsApp and SMS within 4 to 6 hours.',
      icon: MessageSquare,
      accent: 'from-rose-500 to-pink-600',
      tag: 'Express Turnaround',
      actionText: 'Call 24x7 Desk',
      isCall: true
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24x7 Emergency Service',
      desc: 'Open round-the-clock near Civil Hospital, Subhash Ganj, Dabra for urgent blood tests & scans.',
      badge: '24x7 Available'
    },
    {
      icon: ShieldCheck,
      title: 'Barcoded Zero-Mixup Safety',
      desc: 'Each collection vial is laser-barcoded in front of you to eliminate sample mixup risks.',
      badge: '100% Accuracy'
    },
    {
      icon: Stethoscope,
      title: 'Free Report Consultation',
      desc: 'Complimentary guidance from our medical specialists to understand your report findings.',
      badge: 'Doctor Support'
    },
    {
      icon: BadgePercent,
      title: 'Transparent Affordable Rates',
      desc: 'Save up to 60% compared to hospital charges with high-end clinical precision.',
      badge: 'Best Value'
    }
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E86A17] tracking-wider uppercase mb-2 font-mono bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              <Sparkles className="w-3.5 h-3.5 text-[#F37920]" />
              Simple 4-Step Process
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              How Nu Health Care Diagnostic Works
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            From doorstep sample pickup in Dabra to fast, certified digital reports on WhatsApp in 4 effortless steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="relative bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-black font-mono tracking-widest text-slate-400 group-hover:text-[#F37920] transition-colors">
                    STEP {item.step}
                  </span>
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 shadow-2xs">
                    {item.tag}
                  </span>
                </div>

                {/* Icon & Details */}
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.accent} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Trigger Button */}
                <div className="pt-6 mt-4 border-t border-slate-200/70">
                  {item.isCall ? (
                    <a
                      href="tel:+919617659936"
                      className="w-full inline-flex items-center justify-between text-xs font-bold text-[#D32F2F] hover:text-[#b71c1c] transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <PhoneCall className="w-3.5 h-3.5" />
                        Call: 096176 59936
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={item.action}
                      className="w-full inline-flex items-center justify-between text-xs font-bold text-[#0066B2] hover:text-[#F37920] transition-colors cursor-pointer"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us & Trust Bento Box */}
        <div className="bg-gradient-to-br from-[#071524] to-[#0d2238] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-700/60">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#F37920] uppercase tracking-wider">
                Why Patients & Doctors Trust Us
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Uncompromising Precision & Care in Dabra
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenHomeBooking}
                className="px-5 py-2.5 bg-[#F37920] hover:bg-[#E86A17] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2 hover:shadow-orange-500/25"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Book Home Sample Collection</span>
              </button>
              <a
                href="tel:+919617659936"
                className="px-5 py-2.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs rounded-xl border border-slate-700 transition-all flex items-center gap-2 font-mono"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F37920]" />
                <span>096176 59936</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {benefits.map((b, i) => {
              const BIcon = b.icon;
              return (
                <div key={i} className="space-y-2.5 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-orange-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-[#F37920] flex items-center justify-center">
                      <BIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                      {b.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white font-display">
                    {b.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Location: In State Bank of India Building, Near Civil Hospital, Subhash Ganj, Dabra</span>
            </div>
            <div className="text-orange-400 font-semibold">
              Round-The-Clock Phlebotomy & Emergency Desk
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
