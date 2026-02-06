'use client'
import React, { useState } from 'react';
import { ShieldCheck, Truck, CreditCard, Banknote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Customer_info = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod'); 

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center p-4 md:p-10 font-sans text-[#222]">
      <div className="max-w-[1100px] w-full bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-sm border border-gray-100">
        
        {/* --- LEFT SIDE: IMAGES --- */}
        <div className="w-full md:w-[50%] bg-[#fafafa] p-6 flex gap-4">
          <div className="flex-1 flex flex-row gap-4">
            
            {/* Image 1 */}
            <div className="relative h-[260px] rounded-sm overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80" 
                alt="Product" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute top-10 right-4 bg-white/90 p-3 rounded-full shadow-lg flex flex-col items-center min-w-[70px] z-10">
                 <Truck size={24} className="text-black" />
                 <span className="text-[7px] font-bold uppercase mt-1 tracking-tighter text-center leading-none">
                   Expedited<br/>Shipping
                 </span>
              </div>
            </div>
            
            {/* Image 2 */}
            <div className="relative h-[120px] bg-gray-200 rounded-sm overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1614676466613-51d2b91bb68a?auto=format&fit=crop&q=80" 
                alt="Detail" 
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="w-full md:w-[50%] p-8 md:p-12">
          <div className="flex justify-end items-baseline mb-8">
            <h1 className="text-lg font-black tracking-tighter uppercase">
              Thorfin <span className="text-gray-400">Store</span> 
              <span className="text-gray-300 font-light mx-2">/</span> 
              <span className="text-gray-400 font-bold text-sm tracking-widest">Checkout</span>
            </h1>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3">
              <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-4">
                Shipping Address
              </h3>
              <input type="text" placeholder="Full Name" className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none rounded-sm bg-gray-50/30" />
              <input type="email" placeholder="Email" className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none rounded-sm bg-gray-50/30" />
              <input type="text" placeholder="Address Line 1" className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none rounded-sm bg-gray-50/30" />
              <input type="text" placeholder="City" className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none rounded-sm bg-gray-50/30" />
            </div>

            <div className="pt-4">
              <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-4">
                Payment Method
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <button 
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`flex items-center justify-center gap-2 p-3 border text-[10px] font-bold uppercase tracking-widest transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 text-gray-400 hover:border-black'
                  }`}
                >
                  <Banknote size={14} /> Cash on Delivery
                </button>

                <button 
                  type="button"
                  onClick={() => setPaymentMethod('advance')}
                  className={`flex items-center justify-center gap-2 p-3 border text-[10px] font-bold uppercase tracking-widest transition-all ${
                    paymentMethod === 'advance'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 text-gray-400 hover:border-black'
                  }`}
                >
                  <CreditCard size={14} /> Advance Payment
                </button>
              </div>

              <AnimatePresence mode="wait">
                {paymentMethod === 'advance' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3 overflow-hidden"
                  >
                    <input type="text" placeholder="Credit Card Number" className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none rounded-sm" />
                    <div className="flex gap-3">
                      <input type="text" placeholder="Expiry Date" className="flex-1 border border-gray-200 p-3 text-xs focus:border-black outline-none rounded-sm" />
                      <input type="text" placeholder="CVV" className="w-24 border border-gray-200 p-3 text-xs focus:border-black outline-none rounded-sm" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-6">
              <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-4">
                Order Summary
              </h3>
              <div className="border border-gray-100 p-5 rounded-sm bg-gray-50/50">
                <div className="flex justify-between text-[11px] text-gray-500 mb-2">
                  <span>Subtotal: Rs. 15,000</span>
                  <span>Shipping: Rs. 500</span>
                </div>
                <div className="flex justify-between text-[13px] font-black border-t border-gray-200 pt-3 mt-2">
                  <span>TOTAL</span>
                  <span>Rs. 15,500</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 text-[11px] font-black uppercase tracking-[4px] hover:bg-[#222] transition-all shadow-lg active:scale-[0.98]">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Customer_info;
