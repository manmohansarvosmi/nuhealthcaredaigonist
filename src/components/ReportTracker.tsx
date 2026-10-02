import React, { useState } from 'react';
import { Search, Download, Printer, CheckCircle, AlertTriangle, ArrowDown, FileText, QrCode } from 'lucide-react';
import { DEMO_REPORT_DATA } from '../data/diagnosticData';
import { DiagnosticReport } from '../types';

export const ReportTracker: React.FC = () => {
  const [searchId, setSearchId] = useState('');
  const [activeReport, setActiveReport] = useState<DiagnosticReport | null>(DEMO_REPORT_DATA);
  const [lookupMessage, setLookupMessage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) {
      setLookupMessage('Please enter a valid Patient ID, Bill Number or Barcode.');
      return;
    }

    if (
      searchId.toLowerCase().includes('rajesh') ||
      searchId.toLowerCase().includes('nu-2026') ||
      searchId.includes('94812') ||
      searchId.includes('984029184712')
    ) {
      setActiveReport(DEMO_REPORT_DATA);
      setLookupMessage(null);
    } else {
      setActiveReport({
        ...DEMO_REPORT_DATA,
        reportId: `NU-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        patientName: `Patient (${searchId.toUpperCase()})`
      });
      setLookupMessage('Found 1 verified diagnostic report matching your credentials.');
    }
  };

  const loadDemo = () => {
    setSearchId('NU-2026-94812');
    setActiveReport(DEMO_REPORT_DATA);
    setLookupMessage(null);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      window.print();
    }, 400);
  };

  return (
    <section id="reports" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold text-[#E86A17] tracking-wider uppercase mb-1 font-mono">
              Online Patient Portal
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Track & Download Reports
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Instantly view and download digital laboratory results verified with Nu Health Care NABL accreditation and QR-coded authenticity.
          </p>
        </div>

        {/* Lookup Card */}
        <div className="bg-orange-50/40 border border-orange-200/80 rounded-2xl p-6 sm:p-8 mb-8 shadow-xs">
          <form onSubmit={handleLookup} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  placeholder="Enter Patient ID (e.g. NU-2026-94812) or Registered Mobile Number..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F37920]/30 focus:border-[#F37920]"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0066B2] hover:bg-[#0b548f] text-white rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer shadow-xs"
                >
                  Find Report
                </button>
                <button
                  type="button"
                  onClick={loadDemo}
                  className="px-4 py-3 bg-white hover:bg-orange-50 border border-orange-200 text-slate-700 rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer"
                >
                  Load Sample Report
                </button>
              </div>
            </div>

            {lookupMessage && (
              <div className="text-xs text-[#0066B2] font-semibold">
                {lookupMessage}
              </div>
            )}
          </form>
        </div>

        {/* Report Viewer Container */}
        {activeReport ? (
          <div className="bg-white border border-slate-300 rounded-2xl shadow-md overflow-hidden print:border-none print:shadow-none">
            
            {/* Report Header Bar */}
            <div className="bg-[#0b1e33] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#F37920] font-bold">
                  <span>REPORT ID: {activeReport.reportId}</span>
                  <span>·</span>
                  <span>BARCODE: {activeReport.barcode}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                  {activeReport.testTitle}
                </h3>
                <div className="text-xs text-slate-300 mt-0.5">
                  Category: {activeReport.category} · Group's of Nu Health Care Diagnostic
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 print:hidden self-end sm:self-auto">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="px-4 py-2 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isDownloading ? 'Generating...' : 'Download PDF'}</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs transition-colors cursor-pointer"
                  title="Print Report"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Patient & Sample Metadata Sheet */}
            <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/60">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-mono">Patient Name</span>
                  <span className="font-bold text-slate-900 text-sm">{activeReport.patientName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono">Age / Gender</span>
                  <span className="font-semibold text-slate-900">{activeReport.patientAge} Years / {activeReport.patientGender}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono">Referred By</span>
                  <span className="font-semibold text-slate-900">{activeReport.referredBy}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono">Specimen Collected</span>
                  <span className="font-semibold text-slate-900">{activeReport.sampleCollectedAt}</span>
                </div>
              </div>
            </div>

            {/* Parameter Results Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100 text-[11px] font-bold text-slate-700 uppercase tracking-wider font-mono">
                    <th className="py-3 px-6">Investigation / Analyte</th>
                    <th className="py-3 px-4">Observed Value</th>
                    <th className="py-3 px-4">Standard Biological Range</th>
                    <th className="py-3 px-4">Reference Scale</th>
                    <th className="py-3 px-4">Clinical Status</th>
                    <th className="py-3 px-6">Analytical Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {activeReport.parameters.map((param, index) => {
                    const isNormal = param.status === 'normal';
                    const isElevated = param.status === 'elevated';

                    return (
                      <tr 
                        key={index} 
                        className={`hover:bg-orange-50/30 transition-colors ${
                          !isNormal ? 'bg-orange-50/20' : ''
                        }`}
                      >
                        <td className="py-3.5 px-6 font-medium text-slate-900">
                          {param.name}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-900 tabular-nums">
                          {param.result} <span className="font-normal text-slate-500 text-[11px]">{param.unit}</span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-slate-600 tabular-nums">
                          {param.referenceRange} {param.unit}
                        </td>
                        <td className="py-3.5 px-4 min-w-[140px]">
                          {/* Visual Range Indicator Bar with Nu Orange Point */}
                          {param.minNormal !== undefined && param.maxNormal !== undefined && typeof param.result === 'number' ? (
                            <div className="w-28 space-y-1">
                              <div className="h-2 w-full bg-slate-200 rounded-full relative overflow-hidden">
                                <div className="absolute left-1/4 right-1/4 h-full bg-blue-200 rounded-full" />
                                <div 
                                  className={`absolute top-0 bottom-0 w-2 rounded-full ${
                                    isNormal ? 'bg-[#0066B2]' : isElevated ? 'bg-[#F37920]' : 'bg-[#D32F2F]'
                                  }`}
                                  style={{
                                    left: `${Math.min(
                                      92,
                                      Math.max(
                                        4,
                                        ((param.result - param.minNormal * 0.7) /
                                          (param.maxNormal * 1.3 - param.minNormal * 0.7)) *
                                          100
                                      )
                                    )}%`
                                  }}
                                />
                              </div>
                            </div>
                          ) : (
                            <span className="text-slate-400 font-mono text-[11px]">Qualitative</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          {/* Non-Hue Status Indicator */}
                          {isNormal ? (
                            <span className="inline-flex items-center gap-1 font-mono font-bold text-teal-800 text-[11px]">
                              <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                              NORMAL
                            </span>
                          ) : isElevated ? (
                            <span className="inline-flex items-center gap-1 font-mono font-bold text-[#E86A17] text-[11px]">
                              <AlertTriangle className="w-3.5 h-3.5 text-[#F37920]" />
                              ELEVATED
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 font-mono font-bold text-[#D32F2F] text-[11px]">
                              <ArrowDown className="w-3.5 h-3.5 text-[#D32F2F]" />
                              LOW
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-6 text-slate-500 font-mono text-[11px]">
                          {param.method}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Doctor's Impression & Sign-Off Block */}
            <div className="p-6 sm:p-8 border-t border-slate-200 bg-slate-50 space-y-4">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-8 space-y-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                    Senior Pathologist Clinical Impression:
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium bg-white p-3.5 rounded-xl border border-slate-200">
                    {activeReport.overallImpression}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    <span className="font-bold text-slate-700">Remarks: </span>
                    {activeReport.clinicalRemarks}
                  </p>
                </div>

                <div className="md:col-span-4 bg-white p-4 rounded-xl border border-orange-200/80 text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-8 h-8 text-[#0066B2] shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">AUTHENTICITY VERIFIED</span>
                      <span className="font-bold text-slate-900 text-xs">Nu Health Care Central Lab</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <div className="font-bold text-slate-900">{activeReport.pathologist.name}</div>
                    <div className="text-[11px] text-slate-500">{activeReport.pathologist.designation}</div>
                    <div className="text-[10px] text-[#E86A17] font-mono mt-0.5 font-semibold">{activeReport.pathologist.regNumber}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <FileText className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <div className="text-sm font-semibold text-slate-900">No report loaded</div>
            <p className="text-xs text-slate-500 mt-1">Enter your Patient ID or click "Load Sample Report" to view diagnostic records.</p>
          </div>
        )}

      </div>
    </section>
  );
};
