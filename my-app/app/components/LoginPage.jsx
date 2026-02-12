'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { UserCircle2 } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F6F6F6] relative overflow-hidden">
      {/* Background Image with subtle overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105 blur-[2px]" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Compact Login Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-[380px] bg-white rounded-[32px] p-8 shadow-2xl mx-4 flex flex-col items-center"
      >
        {/* Professional Logo Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-[1000] tracking-tighter text-black leading-none">
            THORFIN <span className="text-gray-400">STORE</span>
          </h1>
          <p className="text-[13px] font-bold text-gray-500 mt-2 tracking-wide">Log in or sign up</p>
        </div>

        {/* Professional Input Fields */}
        <div className="w-full space-y-3 mb-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full border border-gray-200 bg-gray-50/50 p-3 rounded-xl text-sm font-semibold focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-gray-400"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full border border-gray-200 bg-gray-50/50 p-3 rounded-xl text-sm font-semibold focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Primary Action */}
        <button className="w-full bg-black text-white py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-lg mb-4">
          Continue
        </button>

        <p className="text-[11px] font-bold text-gray-400">
          Dont have an account? <span className="text-black underline cursor-pointer hover:text-zinc-600">Sign up now</span>
        </p>

        {/* Minimalist Divider */}
        <div className="w-full flex items-center gap-3 my-6">
            <div className="h-[1px] bg-gray-100 flex-1"></div>
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Join Thorfin</span>
            <div className="h-[1px] bg-gray-100 flex-1"></div>
        </div>

        {/* Social Options - More Professional */}
        <div className="w-full space-y-2.5">
          <button className="w-full border border-gray-200 flex items-center justify-center gap-3 py-2.5 rounded-xl hover:bg-gray-50 transition-all active:scale-[0.98] group">
            <Image 
              src="https://www.svgrepo.com/show/355037/google.svg" 
              width={18} 
              height={18} 
              alt="Google"
            />
            <span className="font-bold text-[13px] text-zinc-800">Continue with Google</span>
          </button>

          <button className="w-full border border-gray-200 flex items-center justify-center gap-3 py-2.5 rounded-xl hover:bg-gray-50 transition-all active:scale-[0.98] group">
            <UserCircle2 size={20} className="text-gray-400 group-hover:text-black transition-colors" />
            <span className="font-bold text-[13px] text-zinc-800">Continue as a Guest</span>
          </button>
        </div>

        {/* Minimal Footer */}
        <button className="mt-8 text-[10px] font-bold text-gray-300 uppercase tracking-widest hover:text-black transition-colors">
          Terms of Service
        </button>
      </motion.div>
    </div>
  );
};

export default LoginPage;