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
      test: 'Complete Master Health Checkup',
      comment: 'Booked home sample collection for my elderly parents in Dabra. The Nu Health Care phlebotomist arrived right on time at 7:00 AM with sterile equipment. The reports arrived by evening on WhatsApp.',
      rating: 5,
      date: 'Tested September 2026'
    },
    {
      name: 'Ramesh Chandra Verma',
      location: 'Civil Hospital Road, Dabra',
      test: 'Digital X-Ray & Routine Pathology',
      comment: 'The digital X-ray and blood tests were done quickly with zero wait time. Technicians are polite and the reports are very clear and authentic.',
      rating: 5,
      date: 'Tested September 2026'
    },
    {
      name: 'Pooja Gupta',
      location: 'Dabra, Gwalior',
      test: 'Nu Women Hormone Panel & Vitamin Profile',
      comment: 'The online booking and WhatsApp report updates are seamless. I got my test done right near Civil Hospital and could immediately download the verified PDF report.',
      rating: 5,
      date: 'Tested August 2026'
    }
  ];

  return (
    <section id="faq" className="py-8 sm:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Accreditations Banner */}
        <div className="bg-[#0b1e33] text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-4 space-y-1">
            <span className="text-[10px] font-bold text-[#F37920] font-mono tracking-wider uppercase">
              Certifications & Quality Adherence
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              Group's of Nu Health Care Diagnostic Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ACCREDITATIONS.map((acc, i) => (
              <div
                key={i}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between hover:border-orange-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-[#F37920] mb-1">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span className="font-bold text-xs text-white">{acc.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {acc.subtitle}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] font-mono text-orange-300/80">
                  {acc.certNo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Testimonials Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-5 space-y-1">
            <span className="text-[10px] font-bold text-[#E86A17] font-mono tracking-wider uppercase">
              Verified Patient Experiences
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              Trusted by Thousands in Dabra & Gwalior
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {reviews.map((rev, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-orange-200 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>

                  <div className="pt-2 border-t border-slate-200 text-[11px] font-semibold text-[#0066B2]">
                    {rev.test}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
                  <div>
                    <div className="font-bold text-slate-900">{rev.name}</div>
                    <div className="text-slate-500 text-[10px]">{rev.location}</div>
                  </div>
                  <span className="text-slate-400 font-mono text-[10px]">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4 pt-2">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-bold text-[#E86A17] font-mono tracking-wider uppercase">
              Frequently Asked Questions
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              Patient Guidance & Fasting Protocols
            </h3>
          </div>

          <div className="space-y-2">
            {PATIENT_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-3.5 flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#F37920] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#F37920] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-3.5 pb-3.5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-2.5">
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
