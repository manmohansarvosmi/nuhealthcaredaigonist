import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';
import { PATIENT_FAQS, ACCREDITATIONS } from '../data/diagnosticData';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const reviews = [
    {
      name: 'Nandini Sharma',
      location: 'Subhash Ganj, Dabra',
      test: 'Nu Complete Master Health Checkup',
      comment: 'Booked home sample collection for my elderly parents in Dabra. The Nu Health Care phlebotomist arrived right on time at 7:00 AM with sterile equipment. The reports arrived by evening on WhatsApp with clear reference charts.',
      rating: 5,
      date: 'Tested September 2026'
    },
    {
      name: 'Dr. Vikramaditya Rao',
      location: 'Consulting Physician, Civil Hospital Road',
      test: 'Ultrasound & Advanced Pathology',
      comment: 'Diagnostic accuracy is critical for clinical decisions. Group\'s of Nu Health Care Diagnostic in Dabra provides immaculate lab precision and digital imaging. Their report turnaround time is exceptionally fast and reliable.',
      rating: 5,
      date: 'Verified Clinician Review'
    },
    {
      name: 'Pooja Gupta',
      location: 'Dabra, Gwalior',
      test: 'Nu Women Hormone Panel & Vitamin Profile',
      comment: 'The online portal and WhatsApp updates are seamless. I got my test done right near Civil Hospital and could immediately download the verified PDF report.',
      rating: 5,
      date: 'Tested August 2026'
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Accreditations Banner */}
        <div className="bg-[#0b1e33] text-white rounded-2xl p-6 sm:p-8 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold text-[#F37920] font-mono tracking-wider uppercase">
              Certifications & Regulatory Compliance
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Group's of Nu Health Care Diagnostic Accreditations
            </h3>
            <p className="text-xs text-slate-300">
              Meeting rigorous international standards for analytical accuracy, radiation protection, and biological specimen safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACCREDITATIONS.map((acc, i) => (
              <div
                key={i}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-orange-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#F37920] mb-2">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <span className="font-bold text-sm text-white">{acc.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {acc.subtitle}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800 text-[10px] font-mono text-orange-300/80">
                  {acc.certNo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Testimonials Grid */}
        <div>
          <div className="mb-8">
            <div className="text-xs font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              Patient Experiences
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Trusted by Over 50,000 Families & Clinicians
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-orange-200 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#F37920]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F37920]" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <div className="font-bold text-xs text-slate-900">{rev.name}</div>
                  <div className="text-[11px] text-slate-500">{rev.location}</div>
                  <div className="text-[10px] font-mono text-[#0066B2] mt-1 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-[#F37920] shrink-0" />
                    <span>{rev.test}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical FAQ Accordion */}
        <div className="pt-6">
          <div className="mb-8 max-w-2xl">
            <div className="text-xs font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              Patient Guidance & Queries
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Essential instructions on test fasting, turnaround times, and Nu Health Care home sample collection protocols.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl">
            {PATIENT_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-orange-50/40 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-900 font-display">
                      {faq.q}
                    </span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#F37920]" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
