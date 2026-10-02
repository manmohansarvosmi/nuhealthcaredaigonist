import React from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Home } from 'lucide-react';
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

  const totalOriginalPrice = cart.reduce((sum, item) => sum + item.originalPrice, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const totalSavings = totalOriginalPrice - totalPrice;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between">
        
        {/* Cart Top Bar */}
        <div className="p-5 border-b border-orange-100 flex items-center justify-between bg-orange-50/30">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 font-display">Diagnostic Cart</h3>
            <span className="text-xs bg-[#F37920]/15 text-[#E86A17] font-bold px-2 py-0.5 rounded-full font-mono">
              {cart.length} {cart.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
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
                    Turnaround: {item.turnaroundTime}
                  </div>
                  <div className="flex items-baseline gap-2 pt-1 font-mono">
                    <span className="text-sm font-black text-slate-900">₹{item.price}</span>
                    <span className="text-xs text-slate-400 line-through">₹{item.originalPrice}</span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  aria-label="Remove item"
                  className="p-1.5 text-slate-400 hover:text-[#D32F2F] rounded-lg hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-16 space-y-2 text-slate-500">
              <Home className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-xs font-bold text-slate-700">Your diagnostic cart is empty</p>
              <p className="text-[11px] text-slate-400">
                Explore our 600+ lab tests or curated Nu Health Care packages.
              </p>
            </div>
          )}
        </div>

        {/* Cart Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-4">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Total Lab Fee (MRP)</span>
                <span className="font-mono line-through">₹{totalOriginalPrice}</span>
              </div>
              <div className="flex justify-between text-[#D32F2F] font-bold">
                <span>Nu Health Care Special Discount</span>
                <span className="font-mono">- ₹{totalSavings}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Home Sample Collection Fee</span>
                <span className="font-mono text-[#0066B2] font-bold">FREE (₹0)</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline text-slate-900">
                <span className="font-bold text-sm">Net Payable Amount</span>
                <span className="font-mono font-black text-2xl text-[#E86A17]">₹{totalPrice}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F37920]" />
              <span>Zero cancellation fee · Pay after sample collection</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full py-3 bg-[#F37920] hover:bg-[#D9620E] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Schedule Collection & Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
