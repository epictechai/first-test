import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Terminal, Hexagon, Shield, Zap, Target, Share2, ChevronRight, Cpu } from 'lucide-react';

// --- PROJECT DATA ---
const PROJECTS = [
  { id: 1, title: "NEURAL_VOID", category: "AI ARCHITECTURE", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200" },
  { id: 2, title: "CYBER_CORE", category: "BLOCKCHAIN", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200" },
  { id: 3, title: "SYNTH_ETHOS", category: "DIGITAL ART", image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1200" },
  { id: 4, title: "QUANTUM_OS", category: "SYSTEM DESIGN", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200" },
];

// --- SUB-COMPONENTS ---

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div 
      animate={{ x: pos.x - 20, y: pos.y - 20 }}
      transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      className="fixed top-0 left-0 w-10 h-10 border border-white/40 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center"
    >
      <div className="w-1 h-1 bg-white rounded-full" />
    </motion.div>
  );
};

const GlitchText = ({ text }: { text: string }) => (
  <span className="relative inline-block group cursor-none">
    <span className="relative z-10">{text}</span>
    <span className="absolute top-0 left-0 -z-10 text-red-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-1 transition-all duration-75 italic">{text}</span>
    <span className="absolute top-0 left-0 -z-10 text-blue-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-1 transition-all duration-75 italic">{text}</span>
  </span>
);

// --- MAIN PAGE ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div className="bg-[#020202] text-white selection:bg-blue-500 selection:text-white">
      <CustomCursor />
      
      {/* GLOBAL SCANLINE EFFECT */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* HEADER */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-[100] mix-blend-difference">
        <div className="flex items-center gap-3 font-black text-2xl tracking-tighter italic">
          <Hexagon className="w-8 h-8 text-blue-600 fill-blue-600/10" />
          <span className="hidden sm:inline">OBSIDIAN_ARCHIVE</span>
        </div>
        <div className="flex gap-6 text-[10px] font-mono tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-opacity">
          <span className="cursor-pointer hover:text-blue-400 transition-colors">Sector_01</span>
          <span className="cursor-pointer hover:text-blue-400 transition-colors">Neural_Link</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="text-center z-10 px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <Cpu className="w-3 h-3 text-blue-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">System Intelligence: Active</span>
          </div>
          
          <h1 className="text-7xl md:text-[14rem] font-black tracking-tighter leading-[0.8] italic uppercase mb-8">
            <GlitchText text="ALPHA" /><br />
            <span className="text-outline-white text-transparent">COLLECTIVE</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-zinc-500 font-mono text-xs md:text-sm leading-relaxed uppercase tracking-[0.2em] opacity-60">
            A high-fidelity digital repository designed for <br /> 
            the next generation of technical excellence.
          </p>
        </motion.div>

        {/* BACKGROUND DECOR */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px] animate-pulse-slow" />
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative aspect-[16/10] bg-zinc-900 border border-white/5 overflow-hidden"
            >
              <img 
                src={project.image} 
                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
              />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-[10px] font-mono px-3 py-1 border border-white/20 backdrop-blur-xl">
                    DATA_STREAM_{project.id}
                  </div>
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
                
                <div className="translate-y-[20px] group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-[10px] font-mono text-blue-500 mb-2 tracking-[0.3em] uppercase">{project.category}</p>
                  <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Hover Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-40 border-t border-white/5 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.5em] text-blue-500">Contact_Inquiry</h4>
            <div className="text-3xl font-bold tracking-tighter hover:text-blue-500 transition-colors cursor-none group">
              ESTABLISH_CONNECTION <ChevronRight className="inline w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-8 items-center md:justify-center">
            {[Shield, Zap, Target, Share2].map((Icon, idx) => (
              <div key={idx} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-none">
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>

          <div className="md:text-right space-y-2">
            <p className="text-[10px] font-mono opacity-30 leading-relaxed uppercase tracking-widest">
              v1.0.4 Built for EpicTech AI<br />
              All rights reserved // 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
