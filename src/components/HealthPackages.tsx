import React, { useState } from 'react';
import { Check, Clock, ChevronDown, ChevronUp, Plus, ArrowRight } from 'lucide-react';
import { HEALTH_PACKAGES } from '../data/diagnosticData';
import { HealthPackage, CartItem } from '../types';

interface HealthPackagesProps {
  cart: CartItem[];
  onAddPackageToCart: (pkg: HealthPackage) => void;
  onBookPackageDirect: (pkg: HealthPackage) => void;
}

export const HealthPackages: React.FC<HealthPackagesProps> = ({
  cart,
  onAddPackageToCart,
  onBookPackageDirect
}) => {
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedPackageId(expandedPackageId === id ? null : id);
  };

  const isInCart = (pkgId: string) => cart.some(item => item.id === pkgId);

  return (
    <section id="packages" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              Preventive Healthcare & Checkups
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Nu Health Care Master Health Packages
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Doctor-designed multi-organ checkup packages offering up to 60% savings compared to individual lab investigations.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HEALTH_PACKAGES.map(pkg => {
            const isExpanded = expandedPackageId === pkg.id;
            const inCart = isInCart(pkg.id);
            const discountPct = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl border transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between ${
                  pkg.featured
                    ? 'border-[#F37920] shadow-md ring-1 ring-[#F37920]/20'
                    : 'border-slate-200 hover:border-orange-200 shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Header Row with zero-pill unboxed text */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold font-mono">
                        <span className="text-[#0066B2]">{pkg.totalParameters} BIO-PARAMETERS</span>
                        <span aria-hidden="true" className="text-slate-400">·</span>
                        <span className="text-[#D32F2F]">{discountPct}% OFF RETAIL</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{pkg.tagline}</p>
                    </div>

                    {/* Price Block */}
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-black text-[#E86A17] font-mono">
                        ₹{pkg.price}
                      </div>
                      <div className="text-xs text-slate-400 line-through font-mono">
                        ₹{pkg.originalPrice}
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Note */}
                  <div className="p-3 bg-orange-50/50 rounded-xl text-xs text-slate-700 border border-orange-100/80 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900">Recommended for: </span>
                      <span>{pkg.recommendedFor}</span>
                    </div>
                  </div>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 font-mono pt-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#E86A17]" />
                      <span>{pkg.fasting}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0066B2]" />
                      <span>Report: {pkg.reportTime}</span>
                    </div>
                  </div>

                  {/* Key Organs & Profile Badges - Clean Unboxed Layout */}
                  <div className="pt-2">
                    <div className="text-xs font-bold text-slate-900 mb-2">Key Test Profiles Included:</div>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-700">
                      {pkg.keyTests.map((testName, i) => (
                        <span key={i} className="inline-flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-[#F37920] shrink-0" />
                          <span className="font-medium">{testName}</span>
                          {i < pkg.keyTests.length - 1 && <span className="text-slate-300 ml-1">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Full Test Breakdown */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600 animate-fadeIn">
                      <div className="font-bold text-slate-900">Complete Organ & Biochemical Profile:</div>
                      <ul className="space-y-1.5 list-disc list-inside text-slate-700 pl-1">
                        {pkg.categoriesCovered.map((cat, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {cat}
                          </li>
                        ))}
                      </ul>
                      <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                        Includes Free Nu Health Care Phlebotomist Home Sample Pickup + Free Digital Doctor Consultation for report analysis.
                      </div>
                    </div>
                  )}

                  {/* Expand/Collapse Toggle */}
                  <button
                    onClick={() => toggleExpand(pkg.id)}
                    className="text-xs font-bold text-[#E86A17] hover:text-[#c4530b] flex items-center gap-1 cursor-pointer pt-1"
                  >
                    <span>{isExpanded ? 'Hide All Test Parameters' : `View All ${pkg.totalParameters} Parameters`}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Card Bottom CTA Row */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onAddPackageToCart(pkg)}
                    disabled={inCart}
                    className={`px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                      inCart
                        ? 'bg-orange-100 text-[#E86A17] border border-orange-200 cursor-default'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {inCart ? <Check className="w-4 h-4 text-[#E86A17]" /> : <Plus className="w-4 h-4" />}
                    <span>{inCart ? 'In Cart' : 'Add to Cart'}</span>
                  </button>

                  <button
                    onClick={() => onBookPackageDirect(pkg)}
                    className="px-5 py-2.5 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Book Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
