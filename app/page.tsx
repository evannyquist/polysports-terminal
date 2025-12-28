"use client";

import React, { useState } from 'react';
import { 
  Trophy, 
  Twitter, 
  Activity, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  TrendingUp,
  Lock
} from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Added React.FormEvent type to fix the TypeScript build error
  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      
      {/* --- NAVBAR --- */}
      <nav className="border-b border-white/10 backdrop-blur-md fixed top-0 w-full z-50 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">PolySports</span>
          </div>
          <a href="#waitlist" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Get Early Access
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-8">
            <Zap className="w-3 h-3 fill-current" />
            <span>Public Beta Launching Q1 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Trade Sports like Stocks. <br />
            <span className="text-blue-500">With an Edge.</span>
          </h1>
          
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            The first professional terminal for Polymarket sports trading. 
            Real-time odds, live Twitter sentiment streams, and sharp wallet tracking in one view.
          </p>

          <form onSubmit={handleJoin} className="max-w-sm mx-auto flex flex-col gap-3" id="waitlist">
            <div className="relative group">
              <input 
                type="email" 
                placeholder="enter@your.email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'success'}
                className="w-full bg-zinc-900/50 border border-white/10 rounded-full px-5 py-3 pl-5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-center placeholder:text-zinc-600"
              />
              <button 
                type="submit"
                disabled={status !== 'idle'}
                className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-500 text-white rounded-full px-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </button>
            </div>
            {status === 'success' && (
              <p className="text-green-400 text-sm animate-in fade-in slide-in-from-top-2">
                You're on the list! We'll be in touch.
              </p>
            )}
            <p className="text-xs text-zinc-600">
              Join 1,200+ traders waiting for access.
            </p>
          </form>
        </div>
      </div>

      {/* --- MOCKUP SHOWCASE --- */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <div className="relative rounded-xl bg-zinc-900 border border-white/10 p-2 shadow-2xl shadow-blue-900/20 overflow-hidden group">
          
          <div className="h-8 bg-zinc-950 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>
            <div className="ml-4 px-3 py-0.5 bg-zinc-900 rounded-md text-[10px] text-zinc-500 flex-1 text-center font-mono">
              app.polysports.io/terminal
            </div>
          </div>

          <div className="flex h-[500px] bg-black text-xs md:text-sm">
            <div className="w-48 border-r border-white/10 p-3 hidden md:block">
              <div className="flex gap-2 mb-4">
                <div className="h-6 w-12 bg-white/10 rounded-full" />
                <div className="h-6 w-12 bg-white/5 rounded-full" />
                <div className="h-6 w-12 bg-white/5 rounded-full" />
              </div>
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`mb-2 p-3 rounded-lg border ${i === 1 ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/5 bg-zinc-900/50'}`}>
                  <div className="h-2 w-8 bg-blue-500/20 rounded mb-2" />
                  <div className="h-3 w-24 bg-zinc-700 rounded mb-2" />
                  <div className="flex justify-between mt-2">
                    <div className="h-2 w-8 bg-green-500/20 rounded" />
                    <div className="h-2 w-8 bg-red-500/20 rounded" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="h-4 w-64 bg-zinc-700 rounded mb-2" />
                  <div className="h-3 w-32 bg-zinc-800 rounded" />
                </div>
                <div className="h-8 w-8 bg-zinc-800 rounded-full" />
              </div>

              <div className="h-64 w-full bg-zinc-900/50 border border-white/5 rounded-lg mb-6 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full text-blue-500/20" preserveAspectRatio="none">
                  <path d="M0,100 C150,100 200,50 400,60 C600,70 800,20 1000,10 V200 H0 Z" fill="currentColor" />
                  <path d="M0,100 C150,100 200,50 400,60 C600,70 800,20 1000,10" fill="none" stroke="#3b82f6" strokeWidth="2" />
                </svg>
                <div className="absolute top-4 left-4">
                  <div className="text-2xl font-mono font-bold text-white">65.4¢</div>
                  <div className="text-green-400 text-xs">+12.5%</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-medium">Buy Yes</div>
                <div className="h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400">Buy No</div>
              </div>
            </div>

            <div className="w-64 border-l border-white/10 p-3 hidden lg:block bg-zinc-950">
               <div className="flex items-center gap-2 mb-4 text-zinc-500">
                 <Twitter className="w-3 h-3" />
                 <span>Live Feed</span>
               </div>
               {[1, 2, 3].map(i => (
                 <div key={i} className="mb-3 p-3 bg-zinc-900/50 rounded border border-white/5">
                   <div className="flex items-center gap-2 mb-2">
                     <div className="w-4 h-4 rounded-full bg-zinc-700" />
                     <div className="h-2 w-16 bg-zinc-800 rounded" />
                   </div>
                   <div className="h-2 w-full bg-zinc-800 rounded mb-1" />
                   <div className="h-2 w-2/3 bg-zinc-800 rounded" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- FEATURES GRID --- */}
      <div className="bg-zinc-950 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-2xl bg-black border border-white/10 hover:border-blue-500/50 transition-all group">
            <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Live Market Data</h3>
            <p className="text-zinc-500 leading-relaxed">
              Direct connection to Polymarket's Gamma API. See volume spikes and liquidity depth before the crowd does.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-black border border-white/10 hover:border-blue-500/50 transition-all group">
            <div className="w-12 h-12 bg-sky-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Twitter className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Contextual News</h3>
            <p className="text-zinc-500 leading-relaxed">
              Don't switch tabs. Our terminal curates relevant Twitter feeds right next to the chart for maximum alpha.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-black border border-white/10 hover:border-blue-500/50 transition-all group">
            <div className="w-12 h-12 bg-emerald-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sports Bonds</h3>
            <p className="text-zinc-500 leading-relaxed">
              Identify 98%+ probability "Sure Bets" and treat them like high-yield short-term bonds.
            </p>
          </div>

        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <Activity className="w-5 h-5" />
            <span className="font-bold">PolySports</span>
          </div>
          <div className="text-sm text-zinc-600">
            © 2025 PolySports Terminal. Not affiliated with Polymarket.
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}