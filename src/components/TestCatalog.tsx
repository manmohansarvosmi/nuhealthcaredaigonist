import React, { useState } from 'react';
import { Search, Clock, AlertCircle, Plus, Check, Info, X, Sparkles, Home, ShieldCheck } from 'lucide-react';
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
    { id: 'popular', label: 'Popular Tests' },
    { id: 'special', label: 'Special Procedures' },
    { id: 'pathology', label: 'Pathology & Blood' },
    { id: 'xray', label: 'Digital X-Ray' },
    { id: 'gynae', label: 'Gynae & Fertility' },
    { id: 'cardiology', label: 'ECG & Heart' },
    { id: 'vitamins', label: 'Vitamins' },
    { id: 'culture', label: 'Urine & Cultures' }
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
    <section id="tests" className="py-8 sm:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              <Sparkles className="w-3 h-3 text-[#F37920]" />
              Diagnostic Directory (43+ Tests)
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Nu Health Care Tests & Investigation Catalog
            </h2>
          </div>
          
          {/* Prominent Callout */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-3.5 py-1.5 rounded-lg shadow-2xs flex items-center gap-2 border border-orange-400 shrink-0">
            <Home className="w-4 h-4 shrink-0 text-white" />
            <div className="text-xs font-bold font-sans">
              Home & Hospital Sample Collection Available
            </div>
          </div>
        </div>

        {/* Compact Search & Filter Toolbar */}
        <div className="space-y-3 mb-5">
          
          {/* Category Tabs: Compact Segmented Control */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1.5 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0066B2] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search + Fasting Sub-filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search tests (e.g. CBC, Widal, LFT, X-Ray, Thyroid)..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920] transition-colors"
              />
              {searchFilter && (
                <button
                  onClick={() => setSearchFilter('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-[11px]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Fasting Quick Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-xs font-semibold self-start sm:self-auto">
              <button
                onClick={() => setFastingFilter('all')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] ${
                  fastingFilter === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFastingFilter('fasting')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] ${
                  fastingFilter === 'fasting' ? 'bg-white text-red-700 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Fasting
              </button>
              <button
                onClick={() => setFastingFilter('non-fasting')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] ${
                  fastingFilter === 'non-fasting' ? 'bg-white text-emerald-700 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Non-Fasting
              </button>
            </div>
          </div>

        </div>

        {/* Results Count & Notice */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3 font-mono">
          <span>{filteredTests.length} tests available</span>
          <span className="text-emerald-700 font-bold">✓ Doorstep Pickup Active</span>
        </div>

        {/* Dense 4-Column Tests Grid */}
        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredTests.map((test) => {
              const inCart = isInCart(test.id);

              return (
                <div
                  key={test.id}
                  className="bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between hover:border-orange-300 hover:shadow-xs transition-all duration-150 group"
                >
                  <div className="space-y-1.5">
                    
                    {/* Top Metadata Strip */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span className="font-bold text-[#0066B2] bg-blue-50 px-1.5 py-0.5 rounded text-[10px]">
                        {test.sampleType}
                      </span>
                      <span className="flex items-center gap-0.5 text-[10px] text-slate-500">
                        <Clock className="w-2.5 h-2.5 text-slate-400" />
                        {test.turnaroundTime}
                      </span>
                    </div>

                    {/* Test Title */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug font-display group-hover:text-[#E86A17] transition-colors line-clamp-2">
                        {test.name}
                      </h3>
                    </div>

                    {/* Fasting Requirement Note */}
                    <div className="text-[10px] text-slate-500 flex items-center gap-1 pt-0.5">
                      <AlertCircle className={`w-3 h-3 shrink-0 ${test.fastingRequired ? 'text-[#D32F2F]' : 'text-slate-400'}`} />
                      <span className={test.fastingRequired ? 'font-semibold text-red-800' : ''}>
                        {test.fastingRequired ? `${test.fastingHours || 8}h Fasting` : 'No Fasting'}
                      </span>
                    </div>
                  </div>

                  {/* Clean Action Strip Without Price */}
                  <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between gap-1.5">
                    <button
                      onClick={() => setActiveModalTest(test)}
                      className="text-[10px] font-bold text-[#E86A17] hover:text-[#c4530b] flex items-center gap-0.5 cursor-pointer bg-orange-50 hover:bg-orange-100 px-2 py-1 rounded border border-orange-200/60 transition-colors"
                    >
                      <Info className="w-3 h-3" />
                      <span>Details</span>
                    </button>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onAddToCart(test)}
                        disabled={inCart}
                        className={`p-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                          inCart
                            ? 'bg-orange-100 text-[#E86A17] border border-orange-200 cursor-default'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                        title={inCart ? 'Added to list' : 'Add to list'}
                      >
                        {inCart ? <Check className="w-3.5 h-3.5 text-[#E86A17]" /> : <Plus className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={() => onBookDirect(test)}
                        className="px-2.5 py-1 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-md text-[11px] font-bold transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
                      >
                        Book
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-10 bg-slate-50 rounded-xl border border-slate-200 p-6">
            <Info className="w-6 h-6 text-slate-400 mx-auto mb-2" />
            <h4 className="text-xs font-semibold text-slate-900 mb-1">No tests match your selected criteria</h4>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchFilter('');
                setFastingFilter('all');
              }}
              className="px-3 py-1.5 bg-[#0066B2] text-white rounded-lg text-xs font-bold cursor-pointer mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Test Detail Modal */}
      {activeModalTest && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl border border-orange-200 max-h-[85vh] overflow-y-auto space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0066B2] uppercase bg-blue-50 px-2 py-0.5 rounded">{activeModalTest.sampleType}</span>
                <h3 className="text-base font-bold text-slate-900 font-display mt-1">{activeModalTest.name}</h3>
              </div>
              <button
                onClick={() => setActiveModalTest(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-orange-50/60 p-3 rounded-xl space-y-1.5 text-xs text-slate-700 border border-orange-100">
              <div className="font-bold text-orange-950 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F37920]" />
                <span>Patient Preparation Instructions:</span>
              </div>
              <p className="leading-relaxed text-[11px]">{activeModalTest.preparationNote}</p>
              <div className="flex items-center gap-3 pt-1 font-mono text-[10px] text-slate-600">
                <span>Turnaround: {activeModalTest.turnaroundTime}</span>
                <span>·</span>
                <span>Fasting: {activeModalTest.fastingRequired ? `${activeModalTest.fastingHours || 8} hrs` : 'None'}</span>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5 font-mono">
                Parameters & Analytes Included ({activeModalTest.parameters.length})
              </div>
              <ul className="text-xs text-slate-600 space-y-1 divide-y divide-slate-100">
                {activeModalTest.parameters.map((param, i) => (
                  <li key={i} className="pt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F37920] shrink-0" />
                    <span className="text-[11px]">{param}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <div className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                <Home className="w-3 h-3" />
                <span>Doorstep Sample Pickup in Dabra</span>
              </div>
              <button
                onClick={() => {
                  onBookDirect(activeModalTest);
                  setActiveModalTest(null);
                }}
                className="px-3.5 py-1.5 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-2xs"
              >
                Book Test
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
