import React, { useState } from 'react';
import { X, UploadCloud, FileCheck, Phone, CheckCircle2 } from 'lucide-react';

interface PrescriptionUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrescriptionUploadModal: React.FC<PrescriptionUploadModalProps> = ({
  isOpen,
  onClose
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile && !phone) return;

    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSelectedFile(null);
    setPatientName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-orange-200 relative">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-orange-100 text-[#E86A17] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#F37920]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#E86A17] uppercase font-mono tracking-wider">
                Prescription Received
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mt-1">
                Medical Review in Progress
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto mt-2 leading-relaxed">
                Our Nu Health Care clinical coordinator will review your doctor's handwritten tests and call you at <span className="font-bold text-slate-900">{phone}</span> within 15 minutes to schedule your visit and offer maximum package savings.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#0066B2] text-white rounded-lg text-xs font-bold hover:bg-[#0b548f] transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-bold text-[#E86A17] uppercase font-mono tracking-wider">
                Fast-Track Doctor Order
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display mt-1">
                Upload Doctor's Prescription
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Can't read doctor handwriting? Upload a photo or PDF and let our medical team itemize all tests for you.
              </p>
            </div>

            {/* Drop Zone */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="border-2 border-dashed border-orange-200 rounded-xl p-6 text-center hover:border-[#F37920] transition-colors bg-orange-50/30"
            >
              {selectedFile ? (
                <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#E86A17]">
                  <FileCheck className="w-5 h-5 text-[#F37920]" />
                  <span className="truncate max-w-xs">{selectedFile.name}</span>
                </div>
              ) : (
                <div className="space-y-2">
                  <UploadCloud className="w-8 h-8 text-orange-400 mx-auto" />
                  <div className="text-xs text-slate-600">
                    <label className="text-[#E86A17] font-bold cursor-pointer hover:underline">
                      Click to browse
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <span> or drag & drop prescription image</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">PNG, JPG, PDF up to 10MB</div>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Patient Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meena Devi"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#0066B2]" />
                  <span>Mobile Number (We will call in 15 mins) *</span>
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">100% Medical Confidentiality</span>
              <button
                type="submit"
                disabled={isUploading}
                className="px-5 py-2.5 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                {isUploading ? 'Uploading...' : 'Submit Prescription'}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
