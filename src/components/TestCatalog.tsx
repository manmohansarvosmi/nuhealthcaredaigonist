import React, { useState } from 'react';
import { Search, Clock, AlertCircle, Plus, Check, Info, X } from 'lucide-react';
import { DIAGNOSTIC_TESTS } from '../data/diagnosticData';
import { DiagnosticTest, TestCategory, CartItem } from '../types';

interface TestCatalogProps {
  cart: CartItem[];
  onAddToCart: (test: DiagnosticTest) => void;
  onBookDirect: (test: DiagnosticTest) => void;
}

export const TestCatalog: React.FC<TestCatalogProps> = ({
  cart,
  onAddToCart,
  onBookDirect
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TestCategory>('all');
  const [searchFilter, setSearchFilter] = useState('');
  const [fastingFilter, setFastingFilter] = useState<'all' | 'fasting' | 'non-fasting'>('all');
  const [activeModalTest, setActiveModalTest] = useState<DiagnosticTest | null>(null);

  const categories: { id: TestCategory; label: string }[] = [
    { id: 'all', label: 'All Tests' },
    { id: 'popular', label: 'Popular' },
    { id: 'pathology', label: 'Blood & Pathology' },
    { id: 'radiology', label: 'MRI, CT & Scans' },
    { id: 'cardiology', label: 'Heart & Echo' },
    { id: 'diabetes', label: 'Diabetes & HbA1c' },
    { id: 'vitamins', label: 'Vitamins & Minerals' },
    { id: 'women', label: 'Women & Hormones' }
  ];

  // Filtering logic
  const filteredTests = DIAGNOSTIC_TESTS.filter(test => {
    if (selectedCategory === 'popular' && !test.isPopular) return false;
    if (selectedCategory !== 'all' && selectedCategory !== 'popular' && test.category !== selectedCategory) return false;

    if (fastingFilter === 'fasting' && !test.fastingRequired) return false;
    if (fastingFilter === 'non-fasting' && test.fastingRequired) return false;

    if (searchFilter.trim() !== '') {
      const q = searchFilter.toLowerCase();
      const matchName = test.name.toLowerCase().includes(q);
      const matchDesc = test.description.toLowerCase().includes(q);
      const matchParams = test.parameters.some(p => p.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchParams) return false;
    }

    return true;
  });

  const isInCart = (testId: string) => cart.some(item => item.id === testId);

  return (
    <section id="tests" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              Diagnostic Directory & Investigations
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Nu Health Care Tests & Scan Catalog
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Direct online booking for single blood tests, specialized endocrine assays, ultrasound scans, and 3T MRI neuro & spine imaging.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="space-y-4 mb-8">
          
          {/* Category Tabs: Functional Segmented Control */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0066B2] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search + Fasting Sub-filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter by test name, analyte or organ..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
              />
            </div>

            {/* Fasting Segmented Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg self-start sm:self-auto">
              <button
                onClick={() => setFastingFilter('all')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  fastingFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Requirements
              </button>
              <button
                onClick={() => setFastingFilter('fasting')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  fastingFilter === 'fasting' ? 'bg-white text-[#D32F2F] shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Fasting Required
              </button>
              <button
                onClick={() => setFastingFilter('non-fasting')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  fastingFilter === 'non-fasting' ? 'bg-white text-teal-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Non-Fasting
              </button>
            </div>
          </div>

        </div>

        {/* Test Cards Grid */}
        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTests.map(test => {
              const inCart = isInCart(test.id);

              return (
                <div
                  key={test.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-orange-300 hover:shadow-xs transition-all"
                >
                  <div className="space-y-3">
                    {/* Unboxed Metadata (Zero-Pill Discipline) */}
                    <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span className="font-semibold text-[#0066B2]">{test.sampleType}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {test.turnaroundTime}
                      </span>
                    </div>

                    {/* Test Title */}
                    <h3 className="text-base font-bold text-slate-900 leading-snug font-display">
                      {test.name}
                    </h3>

                    {/* Test Description */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {test.description}
                    </p>

                    {/* Fasting Requirement Note */}
                    <div className="text-[11px] text-slate-500 flex items-start gap-1.5 pt-1">
                      <AlertCircle className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${test.fastingRequired ? 'text-[#D32F2F]' : 'text-slate-400'}`} />
                      <span className={test.fastingRequired ? 'font-semibold text-red-900' : ''}>
                        {test.fastingRequired ? `${test.fastingHours} hrs overnight fasting needed` : 'No fasting required'}
                      </span>
                    </div>
                  </div>

                  {/* Pricing and Action Strip */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-slate-900 font-mono">₹{test.price}</span>
                        <span className="text-xs text-slate-400 line-through font-mono">₹{test.originalPrice}</span>
                      </div>
                      <button
                        onClick={() => setActiveModalTest(test)}
                        className="text-[11px] font-bold text-[#E86A17] hover:text-[#c4530b] flex items-center gap-0.5 mt-0.5 cursor-pointer"
                      >
                        <Info className="w-3 h-3" />
                        <span>Prep & Parameters</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onAddToCart(test)}
                        disabled={inCart}
                        className={`p-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                          inCart
                            ? 'bg-orange-100 text-[#E86A17] border border-orange-200 cursor-default'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                        title={inCart ? 'Added to cart' : 'Add to cart'}
                      >
                        {inCart ? <Check className="w-4 h-4 text-[#E86A17]" /> : <Plus className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={() => onBookDirect(test)}
                        className="px-3.5 py-2 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer shadow-xs"
                      >
                        Book Test
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h4 className="text-sm font-semibold text-slate-900 mb-1">No tests match your selected criteria</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Try adjusting your search terms or clearing the fasting filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchFilter('');
                setFastingFilter('all');
              }}
              className="px-4 py-2 bg-[#0066B2] text-white rounded-lg text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Test Detail & Prep Instructions Modal */}
      {activeModalTest && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-orange-200 max-h-[90vh] overflow-y-auto space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#0066B2] uppercase">{activeModalTest.sampleType}</span>
                <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">{activeModalTest.name}</h3>
              </div>
              <button
                onClick={() => setActiveModalTest(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-orange-50/60 p-4 rounded-xl space-y-2 text-xs text-slate-700 border border-orange-100">
              <div className="font-bold text-orange-950">Patient Preparation Instructions:</div>
              <p className="leading-relaxed">{activeModalTest.preparationNote}</p>
              <div className="flex items-center gap-4 pt-2 font-mono text-[11px] text-slate-600">
                <span>Turnaround: {activeModalTest.turnaroundTime}</span>
                <span>·</span>
                <span>Fasting: {activeModalTest.fastingRequired ? `${activeModalTest.fastingHours} hrs` : 'None'}</span>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-mono">
                Parameters & Analytes Included ({activeModalTest.parameters.length})
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 divide-y divide-slate-100">
                {activeModalTest.parameters.map((param, i) => (
                  <li key={i} className="pt-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F37920] shrink-0" />
                    <span>{param}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500">Test Fee: </span>
                <span className="text-base font-bold text-slate-900 font-mono">₹{activeModalTest.price}</span>
              </div>
              <button
                onClick={() => {
                  onBookDirect(activeModalTest);
                  setActiveModalTest(null);
                }}
                className="px-4 py-2 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                Proceed to Book Test
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
