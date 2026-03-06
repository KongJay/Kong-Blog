import React from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Globe, ArrowUpRight, Twitter, Linkedin, MapPin } from 'lucide-react';

export default function BusinessCard() {
  return (
    <div className="min-h-screen w-full bg-[#e5e5e5] flex items-center justify-center p-4 font-sans">
      <Card className="w-full max-w-[320px] bg-black text-white border-0 shadow-2xl rounded-[16px] overflow-hidden relative">
        {/* Decorative subtle gradient/noise */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800/30 to-transparent pointer-events-none"></div>
        
        <div className="p-6 flex flex-col items-center pt-8 relative z-10">
           <div className="w-20 h-20 rounded-full border-2 border-white/10 p-1 mb-4">
             <img 
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" 
               alt="Profile" 
               className="w-full h-full rounded-full object-cover grayscale contrast-125"
             />
           </div>
           
           <h2 className="text-xl font-bold tracking-tight text-white">Alex Morgan</h2>
           <p className="text-xs font-medium text-gray-400 mt-1 uppercase tracking-widest">Product Designer</p>
           
           <div className="flex gap-5 mt-6 border-b border-white/10 pb-6 w-full justify-center">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe size={18} /></a>
           </div>
        </div>

        <div className="px-6 pb-6 relative z-10">
           <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <Mail size={14} />
                </div>
                <span className="font-light">alex@design.co</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer group">
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <MapPin size={14} />
                 </div>
                <span className="font-light">San Francisco</span>
              </div>
           </div>
           
           <button className="w-full py-3 bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            <span>CONTACT ME</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </Card>
    </div>
  );
}
