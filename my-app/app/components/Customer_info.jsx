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
        <div className="w-full md:w-[50%] bg-[#fafafa] p-6 flex gap-2">
          
          <div className="relative h-[550px] flex-1 rounded-sm overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60"
              alt="Product" 
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute top-10 right-4 bg-white/90 p-3 rounded-full shadow-lg flex flex-col items-center min-w-[70px] z-10">
              <Truck size={24} />
              <span className="text-[7px] font-bold uppercase mt-1 text-center leading-none">
                Expedited<br/>Shipping
              </span>
            </div>
          </div>

          <div className="relative h-[550px] flex-1 rounded-sm overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60"
              alt="Detail" 
              fill
              className="object-cover"
            />
            <div className="absolute bottom-10 left-4 bg-white/90 p-3 rounded-full shadow-lg flex flex-col items-center min-w-[70px]">
              <ShieldCheck size={24} />
              <span className="text-[7px] font-bold uppercase mt-1 text-center leading-none">
                Secure<br/>Payment
              </span>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="w-full md:w-[50%] p-8 md:p-12">

          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-3">
              <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-4">
                Shipping Address
              </h3>
              <input type="text" placeholder="Full Name" className="w-full border border-gray-200 p-3 text-xs rounded-sm" />
              <input type="email" placeholder="Email" className="w-full border border-gray-200 p-3 text-xs rounded-sm" />
              <input type="text" placeholder="Address Line 1" className="w-full border border-gray-200 p-3 text-xs rounded-sm" />
              <input type="text" placeholder="City" className="w-full border border-gray-200 p-3 text-xs rounded-sm" />
            </div>

            <div className="">
              <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-4">
                Payment Method
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-2 border  text-[10px] font-bold uppercase ${
                    paymentMethod === 'cod'
                      ? 'bg-black text-white border-black'
                      : 'border-gray-200 text-gray-400'
                  }`}
                >
                  <Banknote size={14} /> Cash on Delivery
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('advance')}
                  className={`p-2 border text-[10px] font-bold uppercase ${
                    paymentMethod === 'advance'
                      ? 'bg-black text-white border-black'
                      : 'border-gray-200 text-gray-400'
                  }`}
                >
                  <CreditCard size={14} /> Advance Payment
                </button>
              </div>

              <AnimatePresence>
                {paymentMethod === 'advance' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3"
                  >
                    <input type="text" placeholder="Credit Card Number" className="w-full border p-2 text-xs" />
                    <div className="flex gap-3">
                      <input type="text" placeholder="Expiry Date" className="flex-1 border p-3 text-xs" />
                      <input type="text" placeholder="CVV" className="w-24 border p-3 text-xs" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/*  ORDER SUMMARY RESTORED */}
            <div className="">
              <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-4">
                Order Summary
              </h3>
              <div className="border border-gray-100 p-3 bg-gray-50/50">
                <div className="flex justify-between text-[11px] text-gray-500 mb-2">
                  <span>Subtotal: Rs. 15,000</span>
                  <span>Shipping: Rs. 500</span>
                </div>
                <div className="flex justify-between text-[13px] font-black border-t pt-3">
                  <span>TOTAL</span>
                  <span>Rs. 15,500</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 text-[11px] font-black uppercase tracking-[4px]">
              Place Order
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Customer_info;
