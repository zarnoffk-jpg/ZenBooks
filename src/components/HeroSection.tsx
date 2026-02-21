import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50/40 via-white to-stone-50" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:gap-16 md:grid-cols-2 items-center">
        {/* Left: Copy */}
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium tracking-wide uppercase text-emerald-700 mb-4"
          >
            QuickBooks Bookkeeping for Small Business
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-stone-900 leading-[1.1] mb-6"
          >
            Stop Drowning in QuickBooks. <br className="hidden lg:block" />
            <span className="text-emerald-800">We Bring Calm to Your Numbers.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-stone-500 leading-relaxed mb-8 max-w-lg"
          >
            Judgment-free QuickBooks bookkeeping for <strong>Real Estate Investors</strong> and <strong>Therapists & Consultants</strong>. Based in Scranton, PA, serving clients remotely across the U.S.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            {/* Primary CTA */}
            <a 
              href="#book" 
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-emerald-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-px"
            >
              Book a QuickBooks Clarity Call
              <ArrowRight className="w-4 h-4" />
            </a>
            
            {/* Secondary CTA */}
            <a 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 border border-stone-200 text-stone-700 px-6 py-3.5 rounded-lg text-sm font-semibold hover:border-stone-300 hover:bg-stone-50 transition-all"
            >
              See Our Services
            </a>
          </motion.div>
        </div>
        
        {/* Right: Illustration placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block relative"
        >
           <div className="aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden relative shadow-2xl shadow-stone-200/50 border border-stone-200/60">
              {/* Abstract UI representation */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-white border-b border-stone-200 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/20"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400/20"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400/20"></div>
              </div>
              <div className="absolute top-20 left-8 right-8 bottom-8 bg-white rounded-lg shadow-sm border border-stone-100 p-6">
                 <div className="w-1/3 h-4 bg-stone-100 rounded mb-6"></div>
                 <div className="space-y-3">
                    <div className="flex justify-between">
                       <div className="w-1/2 h-3 bg-stone-50 rounded"></div>
                       <div className="w-1/4 h-3 bg-emerald-50 rounded"></div>
                    </div>
                    <div className="flex justify-between">
                       <div className="w-1/3 h-3 bg-stone-50 rounded"></div>
                       <div className="w-1/4 h-3 bg-emerald-50 rounded"></div>
                    </div>
                    <div className="flex justify-between">
                       <div className="w-2/3 h-3 bg-stone-50 rounded"></div>
                       <div className="w-1/4 h-3 bg-emerald-50 rounded"></div>
                    </div>
                 </div>
                 <div className="absolute bottom-6 right-6 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <ArrowRight className="w-5 h-5" />
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
