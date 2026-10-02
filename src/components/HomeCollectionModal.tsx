import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, CheckCircle2, Shield } from 'lucide-react';
import { BookingDetails, CartItem } from '../types';
import { DIAGNOSTIC_CENTERS } from '../data/diagnosticData';

interface HomeCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  preSelectedTestName?: string;
  onBookingSuccess: (bookingRef: string) => void;
}

export const HomeCollectionModal: React.FC<HomeCollectionModalProps> = ({
  isOpen,
  onClose,
  cart,
  preSelectedTestName,
  onBookingSuccess
}) => {
  const [formData, setFormData] = useState<BookingDetails>({
    patientName: '',
    patientAge: '',
    gender: 'Male',
    phone: '',
    email: '',
    serviceType: 'home_collection',
    selectedDate: 'Tomorrow, Morning',
    selectedTimeSlot: '07:00 AM - 08:00 AM (Recommended for Fasting)',
    address: '',
    pinCode: '',
    selectedCenter: DIAGNOSTIC_CENTERS[0].name,
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationRef, setConfirmationRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const dates = [
    'Today (Express Evening)',
    'Tomorrow, Morning',
    'Day after Tomorrow',
    'This Weekend (Saturday)',
    'This Weekend (Sunday)'
  ];

  const timeSlots = [
    '08:30 AM - 09:30 AM (Morning Fasting)',
    '09:30 AM - 10:30 AM (Morning)',
    '11:00 AM - 12:30 PM (Mid-Day)',
    '02:00 PM - 04:00 PM (Afternoon)',
    '05:00 PM - 07:00 PM (Evening)',
    '07:30 PM - 09:00 PM (Late Evening)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `NU-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationRef(generatedRef);
      onBookingSuccess(generatedRef);
    }, 600);
  };

  const handleResetAndClose = () => {
    setConfirmationRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-orange-200 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmationRef ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-orange-100 text-[#E86A17] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#F37920]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#E86A17] uppercase tracking-wider font-mono">
                Nu Health Care Booking Confirmed
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
                Appointment Scheduled
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.patientName}</span>. A confirmation SMS and WhatsApp message with sample preparation guidelines have been sent to <span className="font-bold text-slate-900">{formData.phone}</span>.
              </p>
            </div>

            <div className="bg-orange-50/60 border border-orange-200 rounded-xl p-4 text-xs text-left space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Booking Reference:</span>
                <span className="font-mono font-bold text-slate-900">{confirmationRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service Mode:</span>
                <span className="font-medium text-slate-900">
                  {formData.serviceType === 'home_collection' ? 'Free Home Sample Collection' : 'Lab Center Visit'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled Slot:</span>
                <span className="font-medium text-slate-900">{formData.selectedTimeSlot.split(' ')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Sample Safety:</span>
                <span className="text-[#0066B2] font-bold">Barcoded Sealed Kit</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 bg-[#0066B2] hover:bg-[#0b548f] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
            >
              Done & Return to Homepage
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#E86A17] uppercase font-mono tracking-wide">
                <Shield className="w-3.5 h-3.5 text-[#D32F2F]" />
                Zero-Touch Clinical Safety · Nu Health Care
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
                Book Sample Collection or Visit
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Select your convenient date and 1-hour time window. No advance payment required.
              </p>
            </div>

            {/* Service Type Segmented Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceType: 'home_collection' })}
                className={`py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  formData.serviceType === 'home_collection'
                    ? 'bg-white text-[#E86A17] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Free Home Collection
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceType: 'center_visit' })}
                className={`py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  formData.serviceType === 'center_visit'
                    ? 'bg-white text-[#0066B2] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Visit Diagnostic Center
              </button>
            </div>

            {/* Test Selection Context Note */}
            <div className="p-3 bg-orange-50/70 border border-orange-200/80 rounded-xl text-xs text-orange-950">
              <span className="font-bold">Selected Tests / Packages: </span>
              <span>
                {cart.length > 0 
                  ? cart.map(c => c.name).join(', ') 
                  : (preSelectedTestName || 'Routine General Health Assessment (Select specific tests in cart or note below)')}
              </span>
            </div>

            {/* Patient Information Form */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Age *</label>
                    <input
                      type="number"
                      required
                      min={1}
                      max={120}
                      placeholder="Age"
                      value={formData.patientAge}
                      onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Gender</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                      className="w-full px-2 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number (For WhatsApp Reports) *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                  />
                </div>
              </div>

              {/* Conditional Address or Center selection */}
              {formData.serviceType === 'home_collection' ? (
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Home Address / Landmark *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="House no, Street name, Landmark"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">PIN Code *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 475110"
                      value={formData.pinCode}
                      onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Nu Health Care Branch *
                  </label>
                  <select
                    value={formData.selectedCenter}
                    onChange={(e) => setFormData({ ...formData, selectedCenter: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                  >
                    {DIAGNOSTIC_CENTERS.map((c, i) => (
                      <option key={i} value={c.name}>{c.name} ({c.city})</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Date & Time Slot Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Preferred Date</span>
                  </label>
                  <select
                    value={formData.selectedDate}
                    onChange={(e) => setFormData({ ...formData, selectedDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                  >
                    {dates.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>1-Hour Time Window</span>
                  </label>
                  <select
                    value={formData.selectedTimeSlot}
                    onChange={(e) => setFormData({ ...formData, selectedTimeSlot: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F37920]/20 focus:border-[#F37920]"
                  >
                    {timeSlots.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">
                Pay after sample collection (UPI / Card / Cash)
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                {isSubmitting ? 'Confirming Appointment...' : 'Confirm Appointment'}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
