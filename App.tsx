import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Chapters } from './components/Chapters';
import { SneakPeek } from './components/SneakPeek';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ShoppingCart } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      <Hero />
      <Problem />
      <Solution />
      <SneakPeek />
      <Chapters />
      <Testimonials />
      <Footer />
      
      {/* Sticky Mobile CTA - Optimized for high conversion */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-xl border-t border-slate-200 md:hidden z-[100] pb-6">
        <button 
          onClick={() => window.open('https://www.amazon.com/-/es/Jorge-Duarte/dp/B0G4L8YJ8V/ref=tmm_hrd_swatch_0', '_blank')}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 active:scale-95 transition-all text-lg flex items-center justify-center gap-3"
        >
          <span>Get The Book on Amazon</span>
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default App;