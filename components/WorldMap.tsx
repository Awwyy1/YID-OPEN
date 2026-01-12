
import React, { useState } from 'react';
import { ACCENT_COLOR } from '../constants';
import { Theme, Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';

interface WorldMapProps {
  theme: Theme;
  language: Language;
  onBack: () => void;
}

const WorldMap: React.FC<WorldMapProps> = ({ theme, language, onBack }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const isDark = theme === 'dark';
  const nodeColor = ACCENT_COLOR;
  const t = UI_TRANSLATIONS[language];
  
  const nodes = [
    { name: 'DUBAI', x: 620, y: 240, active: 124, status: 'SECURE', tz: 'GMT+4' },
    { name: 'LONDON', x: 480, y: 160, active: 89, status: 'SECURE', tz: 'GMT+0' },
    { name: 'TOKYO', x: 880, y: 210, active: 56, status: 'SECURE', tz: 'GMT+9' },
    { name: 'NEW YORK', x: 250, y: 190, active: 212, status: 'SECURE', tz: 'GMT-5' },
    { name: 'PARIS', x: 500, y: 175, active: 77, status: 'SECURE', tz: 'GMT+1' },
    { name: 'HONG KONG', x: 820, y: 260, active: 43, status: 'SECURE', tz: 'GMT+8' },
    { name: 'ZURICH', x: 520, y: 180, active: 31, status: 'SECURE', tz: 'GMT+1' },
    { name: 'SINGAPORE', x: 800, y: 340, active: 19, status: 'SECURE', tz: 'GMT+8' },
    { name: 'MOSCOW', x: 580, y: 150, active: 67, status: 'SECURE', tz: 'GMT+3' },
    { name: 'SYDNEY', x: 920, y: 410, active: 38, status: 'SECURE', tz: 'GMT+10' },
    { name: 'MIAMI', x: 280, y: 280, active: 94, status: 'SECURE', tz: 'GMT-5' },
    { name: 'BERLIN', x: 510, y: 165, active: 52, status: 'SECURE', tz: 'GMT+1' },
    { name: 'SEOUL', x: 850, y: 220, active: 71, status: 'SECURE', tz: 'GMT+9' },
    { name: 'LOS ANGELES', x: 180, y: 240, active: 156, status: 'SECURE', tz: 'GMT-8' },
    { name: 'TORONTO', x: 270, y: 180, active: 83, status: 'SECURE', tz: 'GMT-5' },
    { name: 'SAO PAULO', x: 340, y: 380, active: 48, status: 'SECURE', tz: 'GMT-3' },
    { name: 'MUMBAI', x: 680, y: 270, active: 62, status: 'SECURE', tz: 'GMT+5:30' },
    { name: 'AMSTERDAM', x: 495, y: 165, active: 45, status: 'SECURE', tz: 'GMT+1' },
  ];

  return (
    <div className="fixed inset-0 z-[150] bg-black text-white animate-in fade-in duration-1000 overflow-hidden flex flex-col uppercase font-mono">
      {/* HUD OVERLAY: Top */}
      <header className="p-6 md:p-8 flex justify-between items-start relative z-20">
        <div>
          <button 
            onClick={onBack}
            className="group flex items-center gap-4 text-[10px] font-black tracking-[0.4em] opacity-40 hover:opacity-100 transition-all mb-4"
          >
            <span className="text-lg">←</span> [ {t.back} ]
          </button>
          <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-none">{t.mapTitle}</h1>
          <p className="text-[8px] md:text-[10px] tracking-[0.6em] opacity-30 mt-2">{t.mapSub}</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-[10px] tracking-[0.4em] opacity-30 mb-1">{t.mapIntegrity}</p>
          <div className="flex items-center gap-3 justify-end">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-black tracking-widest text-[#00BFFF]">100% OPERATIONAL</span>
          </div>
        </div>
      </header>

      {/* MAP CONTAINER */}
      <div className="flex-1 relative flex items-center justify-center px-0 overflow-hidden">
        {/* Decorative Grid Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
        
        {/* Responsive map wrapper */}
        <div className="w-full h-full md:h-auto md:max-w-6xl md:aspect-[2/1] relative flex items-center justify-center overflow-x-auto md:overflow-visible">
          <svg 
            viewBox="0 0 1000 500" 
            className="h-[80%] md:h-full w-auto md:w-full opacity-60 min-w-[800px] md:min-w-0"
          >
            {/* Dots Background (The World) */}
            <defs>
              <pattern id="worldDots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.8" fill="white" className="opacity-10" />
              </pattern>
            </defs>
            
            {/* Simulated Continents using large paths with dot pattern */}
            <g fill="url(#worldDots)">
               <path d="M100,100 L300,100 L350,200 L320,350 L150,400 Z" /> {/* NA */}
               <path d="M450,80 L900,80 L950,250 L850,450 L600,450 L500,300 Z" /> {/* Eurasia */}
               <path d="M480,300 L650,300 L680,480 L550,550 L450,450 Z" /> {/* Africa */}
               <path d="M250,320 L380,320 L420,550 L300,600 Z" /> {/* SA */}
               <path d="M820,450 L950,450 L920,550 L840,550 Z" /> {/* AUS */}
            </g>

            {/* Grid Lines */}
            <g className="opacity-10">
              {[...Array(11)].map((_, i) => <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="500" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />)}
              {[...Array(6)].map((_, i) => <line key={i} x1="0" y1={i * 100} x2="1000" y2={i * 100} stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />)}
            </g>

            {/* Client Nodes */}
            {nodes.map((node, i) => (
              <g 
                key={node.name} 
                transform={`translate(${node.x}, ${node.y})`}
                className="cursor-pointer group"
                onClick={() => setSelectedNode(node.name === selectedNode ? null : node.name)}
              >
                <circle r="4" fill={nodeColor} className="group-hover:scale-150 transition-transform duration-300" />
                <circle r="12" fill="transparent" stroke={nodeColor} strokeWidth="1" className="animate-ping opacity-20" />
                
                <text 
                  y="20" 
                  textAnchor="middle" 
                  className="text-[10px] font-black tracking-[0.2em] fill-white opacity-60 group-hover:opacity-100 transition-opacity"
                >
                  {node.name}
                </text>
              </g>
            ))}
          </svg>

          {/* Node Details Panel */}
          {selectedNode && (
            <div className="fixed md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-xs p-6 border border-[#00BFFF] bg-black/95 backdrop-blur-xl shadow-[0_0_50px_rgba(0,191,255,0.3)] animate-in zoom-in-95 duration-300 z-[160]">
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-xl font-black text-[#00BFFF]">{selectedNode}</h3>
                   <p className="text-[8px] opacity-40 tracking-widest">{nodes.find(n => n.name === selectedNode)?.tz}</p>
                 </div>
                 <button onClick={() => setSelectedNode(null)} className="text-[10px] opacity-30 w-8 h-8 flex items-center justify-center border border-white/10">X</button>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between pb-2">
                    <span className="text-[9px] opacity-40">HOLDER COUNT</span>
                    <span className="text-xs font-black">{nodes.find(n => n.name === selectedNode)?.active}</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-[9px] opacity-40">ENCRYPTION</span>
                    <span className="text-xs font-black">ACTIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[9px] opacity-40">STATUS</span>
                    <span className="text-xs font-black text-green-500">OPTIMAL</span>
                  </div>
               </div>
               <div className="mt-8">
                 <div className="h-0.5 w-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#00BFFF] w-1/3 animate-progress"></div>
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>

      {/* HUD OVERLAY: Bottom */}
      <footer className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-end gap-6 relative z-20">
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-[8px] md:text-[10px] tracking-[0.4em] opacity-40 font-black w-full md:w-auto">
          <div>
            <p className="mb-1">{t.mapUptime}</p>
            <p>{t.mapSecurity}</p>
          </div>
          <div className="sm:block">
            <p className="mb-1 uppercase">GLOBAL LOAD: 14.2%</p>
            <p className="uppercase">LATENCY: 12ms</p>
          </div>
        </div>

        <div className="w-full md:w-64">
           <p className="text-[8px] tracking-[0.6em] opacity-30 mb-2 font-black">SYSTEM LOG</p>
           <div className="text-[8px] space-y-1 opacity-20 overflow-hidden h-10 leading-tight">
             <p>[OK] NEW NODE AUTHENTICATED: DUBAI_SEC_04</p>
             <p>[OK] HANDSHAKE COMPLETE: LONDON_HUB</p>
             <p>[OK] ENCRYPTING ASSETS FOR GLOBAL_DISTRIBUTION</p>
           </div>
        </div>
      </footer>

      {/* SCANIMATION */}
      <div className="absolute inset-0 pointer-events-none border border-white/5 m-4">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5"></div>
         <div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-progress {
          animation: progress 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default WorldMap;
