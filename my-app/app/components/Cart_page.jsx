'use client';
import React, { useState } from "react";
import { 
  ChevronLeft, ChevronRight, Minus, Plus, 
  X, Instagram, Facebook, Youtube 
} from "lucide-react";
import Image from "next/image";

const Cart_page = () => {
  const [quantity, setQuantity] = useState(1);
  const imgUrl = "https://fashiondoctorz.com/wp-content/uploads/2023/10/velvet-suits-for-women-black-suit-1.jpg";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-6 font-sans text-[#333]">
      
      {/* Container */}
      <div className="bg-white w-full max-w-4xl shadow-md flex flex-col md:flex-row p-4 md:p-8 gap-8 relative rounded-sm">
        
        {/* 1. TOP-RIGHT CLOSE ICON */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-black transition z-20">
          <X size={20} />
        </button>

        {/* Thumbnails */}
        <div className="flex flex-row md:flex-col gap-3 order-2 md:order-1 mt-6 md:mt-0">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-16 h-20 border border-gray-100 cursor-pointer overflow-hidden hover:border-black transition relative bg-gray-50">
              <Image src={imgUrl} alt={`thumb-${i}`} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 relative order-1 md:order-2 group">
          <div className="bg-[#f8f8f8] w-full h-[400px] relative overflow-hidden flex items-center justify-center rounded-sm">
            <Image src={imgUrl} alt="Velvet Suit" fill priority className="object-cover mix-blend-multiply" />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition z-10 text-gray-600">
              <ChevronLeft size={18} />
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition z-10 text-gray-600">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-[320px] flex flex-col order-3 self-center">
          <h1 className="text-2xl font-semibold italic tracking-wide uppercase leading-tight">
            Premium Velvet Suit
          </h1>
          <p className="text-lg font-semibold mt-1 text-gray-900">$58.79</p>

          <p className="text-gray-500 text-[11px] mt-3 leading-relaxed line-clamp-2">
            Luxury pure velvet collection. Perfect for evening wear and formal gatherings.
          </p>

          {/* Size & Color Selection */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 text-[11px]">
              <span className="w-10 text-gray-400 font-bold uppercase tracking-tighter">Size</span>
              <select className="flex-1 border border-gray-200 p-2 outline-none focus:border-indigo-400 bg-white cursor-pointer transition text-gray-600 rounded-sm">
                <option>Select Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <span className="w-10 text-gray-400 font-bold uppercase tracking-tighter">Color</span>
              <select className="flex-1 border border-gray-200 p-2 outline-none focus:border-indigo-400 bg-white cursor-pointer transition text-gray-600 rounded-sm">
                <option>Select Color</option>
                <option>Black</option>
                <option>Blue</option>
                <option>Maroon</option>
              </select>
            </div>
          </div>

          {/* Action Row: Quantity + Add to Cart */}
          <div className="mt-8 flex flex-col gap-3">
            <div className="flex border border-gray-200 h-8 items-center bg-white min-w-[110px] rounded-sm">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="flex-1 h-8 flex items-center justify-center hover:text-black text-gray-400 transition border-r border-gray-100">
                <Minus size={14} />
              </button>
              <span className="flex-1 text-center font-medium text-sm text-gray-700">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="flex-1 h-8 flex items-center justify-center hover:text-black text-gray-400 transition border-l border-gray-100">
                <Plus size={14} />
              </button>
            </div>

            <button className="w-full bg-[#717fe0] hover:bg-black text-white font-bold h-10 rounded-full transition-all uppercase text-[11px] tracking-widest shadow-sm active:scale-95">
              Add to Cart
            </button>
          </div>

          {/* Footer Social Icons */}
          <div className="mt-8 flex items-center justify-between text-gray-400 border-t pt-4">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-pink-600 transition"><Instagram size={16} /></a>
              <a href="#" className="hover:text-blue-600 transition"><Facebook size={16} /></a>
              <a href="#" className="hover:text-red-600 transition"><Youtube size={16} /></a>
              <a href="#" className="hover:text-black transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
            <span className="text-[9px] text-[#c5a059] uppercase tracking-widest font-bold">Thorfin Store</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart_page;
