import React from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Home, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onProceedToCheckout
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between">
        
        {/* Cart Top Bar */}
        <div className="p-5 border-b border-orange-100 flex items-center justify-between bg-orange-50/30">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 font-display">Selected Tests & Bookings</h3>
            <span className="text-xs bg-[#F37920]/15 text-[#E86A17] font-bold px-2 py-0.5 rounded-full font-mono">
              {cart.length} {cart.length === 1 ? 'test' : 'tests'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="p-5 flex-1 overflow-y-auto space-y-3">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start justify-between gap-3 hover:border-orange-200 transition-colors"
              >
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-900 leading-snug">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    Report Turnaround: {item.turnaroundTime}
                  </div>
                  <div className="flex items-center gap-1.5 pt-1 text-[11px] text-emerald-700 font-semibold font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Home & Lab Collection Available</span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  aria-label="Remove item"
                  className="p-1.5 text-slate-400 hover:text-[#D32F2F] rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-16 space-y-2 text-slate-500">
              <Home className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-xs font-bold text-slate-700">No tests selected yet</p>
              <p className="text-[11px] text-slate-400">
                Explore our diagnostic catalog or full-body master health packages.
              </p>
            </div>
          )}
        </div>

        {/* Cart Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-4">
            <div className="bg-orange-50/70 p-3 rounded-xl border border-orange-100 text-xs text-slate-700 space-y-1">
              <div className="font-bold text-orange-950 flex items-center gap-1.5">
                <Home className="w-4 h-4 text-[#F37920]" />
                <span>Doorstep Sample Collection in Dabra</span>
              </div>
              <p className="text-[11px] text-slate-600">
                Our phlebotomist visits with sterile vacutainers. Reports are delivered directly on WhatsApp.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F37920]" />
              <span>NABL Accredited · Doctor Verified Turnaround</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full py-3 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Schedule Sample Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
