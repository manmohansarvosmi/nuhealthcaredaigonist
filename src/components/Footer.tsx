import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { NuHealthcareLogo } from './NuHealthcareLogo';

interface FooterProps {
  onSelectNav: (sectionId: string) => void;
  onOpenHomeBooking: () => void;
  onOpenPrescription: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectNav,
  onOpenHomeBooking,
  onOpenPrescription
}) => {
  return (
    <footer className="bg-[#071524] text-slate-400 text-xs border-t border-slate-800">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <NuHealthcareLogo className="h-12 w-auto" isDarkBackground={true} />
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Group's of Nu Health Care Diagnostic is a premier clinical facility offering 3.0 Tesla Silent MRI, 128-Slice Low-Dose CT, 4D Ultrasound, and automated robotic pathology with prompt 6-hour verified turnaround.
            </p>

            <div className="flex items-center gap-2 text-[#F37920] text-xs font-mono font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#F37920]" />
              <span>NABL (ISO 15189:2022) Certified · ICMR Registered</span>
            </div>

            <div className="space-y-1.5 pt-2 font-mono text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D32F2F]" />
                <a href="tel:+918049208800" className="hover:text-white transition-colors font-bold">
                  24x7 Helpline: +91 (080) 4920-8800
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F37920]" />
                <span>care@nuhealthcarediagnostic.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0066B2]" />
                <span>Nu Health Care Tower, Koramangala, Bengaluru 560034</span>
              </div>
            </div>
          </div>

          {/* Column 2: Diagnostic Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase font-mono">
              Investigations & Scans
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => onSelectNav('tests')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Complete Blood Count (CBC)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('tests')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  3.0 Tesla Silent MRI Brain & Spine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('tests')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  128-Slice HRCT Chest
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('tests')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  4D Ultrasound & Color Doppler
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('tests')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Lipid & Cardiac Risk Panels
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('tests')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  HbA1c & Fasting Glucose
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('tests')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Thyroid (T3, T4, TSH) & Vitamins
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Health Packages */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase font-mono">
              Preventive Packages
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => onSelectNav('packages')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Nu Vital Full Body Check
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('packages')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Nu Executive Platinum Master Health
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('packages')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Nu Senior Citizen Comprehensive
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('packages')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Nu Women Wellness & Hormones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('packages')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Cardiac Risk & Vascular Assessment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Patient Help & Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase font-mono">
              Patient Care
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={onOpenHomeBooking}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Book Free Home Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenPrescription}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Upload Doctor Prescription
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('reports')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Track & Download Report
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('centers')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Find Diagnostic Center Near Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectNav('faq')}
                  className="hover:text-[#F37920] transition-colors text-left"
                >
                  Fasting & Prep Guidelines
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Medical & Legal Disclaimer Strip */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-300">Clinical Disclaimer:</strong> Diagnostic laboratory and radiological reports provide analytical data for clinical correlation. All interpretations and therapeutic decisions must be evaluated by a registered medical practitioner in conjunction with clinical symptoms and history.
          </p>
          <p>
            Group's of Nu Health Care Diagnostic is accredited by the National Accreditation Board for Testing and Calibration Laboratories (NABL), Department of Science & Technology, India (ISO 15189:2022). Registered under the Clinical Establishments Act.
          </p>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Group's of Nu Health Care Diagnostic Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">NABL Certificate Verification</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-slate-300">
              Caring for Your Health <Heart className="w-3 h-3 text-[#D32F2F] inline fill-[#D32F2F]" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
