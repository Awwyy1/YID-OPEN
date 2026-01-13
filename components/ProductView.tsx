
import React, { useState, useEffect } from 'react';
import { Artifact, Theme, Language } from '../types';
import { ACCENT_COLOR } from '../constants';
import { UI_TRANSLATIONS } from '../translations';

interface ProductViewProps {
  artifact: Artifact;
  theme: Theme;
  language: Language;
  onClose: () => void;
  onAcquire: () => void;
}

const ProductView: React.FC<ProductViewProps> = ({ artifact, theme, language, onClose, onAcquire }) => {
  const [activeImage, setActiveImage] = useState(artifact.imageUrl);
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-black' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';
  const t = UI_TRANSLATIONS[language];

  const title = artifact.title?.[language] || artifact.title?.EN || '';
  const description = artifact.description?.[language] || artifact.description?.EN || '';
  const materials = artifact.materials?.[language] || artifact.materials?.EN || [];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-[200] ${bgColor} ${textColor} animate-in fade-in duration-500 flex flex-col uppercase overflow-y-auto`}>
      <header className={`sticky top-0 shrink-0 w-full h-20 border-b ${borderColor} backdrop-blur-xl flex items-center justify-between px-6 md:px-12 z-50 ${bgColor}`}>
        <button
          onClick={onClose}
          className="group flex items-center gap-4 text-[10px] font-black tracking-[0.4em] opacity-40 hover:opacity-100 transition-all"
        >
          <span className="text-lg">←</span> {t.back}
        </button>
        <h2 className="text-[10px] md:text-sm font-black tracking-[0.4em] truncate px-4">{title}</h2>
        <div className="w-20 hidden md:flex items-center justify-end gap-2 opacity-20">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </header>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-8 lg:py-6 pb-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Left: Images */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 lg:gap-4">
            <div className={`relative w-full aspect-[4/5] overflow-hidden border ${borderColor} bg-neutral-900`}>
               <img
                 key={activeImage}
                 src={activeImage}
                 alt={title}
                 className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
               />
            </div>
            
            <div className="space-y-3">
              <p className="text-[8px] tracking-[0.4em] opacity-30">{t.altAngles}</p>
              <div className="grid grid-cols-5 gap-3">
                {artifact.gallery?.slice(1, 6).map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square border transition-all duration-200 overflow-hidden bg-neutral-900 ${
                      activeImage === img ? 'opacity-100 border-current' : 'opacity-30 hover:opacity-100 border-transparent'
                    }`}
                    style={{ borderColor: activeImage === img ? ACCENT_COLOR : undefined }}
                  >
                    <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="space-y-8 lg:space-y-4 flex-1">
              <section className="pt-0">
                <p className="text-[9px] tracking-[0.5em] opacity-30 mb-2 lg:mb-3">{t.classification}</p>
                <h1 className="text-5xl md:text-6xl lg:text-5xl font-black tracking-tighter leading-none mb-4">{title}</h1>
                <p className="text-xs md:text-sm tracking-[0.3em] opacity-60 leading-relaxed max-w-lg">{description}</p>
              </section>

              {/* Grid Section for Materials and Tech Data - PERFECT Y-ALIGNMENT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-t border-white/5 py-8 lg:py-4">
                {/* Column 1: Materials */}
                <div className="space-y-6 lg:space-y-3 mb-12 sm:mb-0">
                  <p className="text-[9px] tracking-[0.4em] opacity-30 leading-none uppercase h-3">
                    {t.materials}
                  </p>
                  <ul className="space-y-3 lg:space-y-2">
                    {materials?.map((mat, i) => (
                      <li key={i} className="text-[10px] tracking-[0.2em] font-bold flex items-center gap-3">
                        <span className="w-1.5 h-1.5 shrink-0" style={{ backgroundColor: ACCENT_COLOR }}></span>
                        <span className="truncate">{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Column 2: Tech Data */}
                <div className="space-y-6 lg:space-y-3">
                  <p className="text-[9px] tracking-[0.4em] opacity-30 leading-none uppercase h-3">
                    {t.techData}
                  </p>
                  <div className="space-y-3 lg:space-y-1.5 text-[10px] tracking-[0.2em] font-medium opacity-50">
                     <div className="flex justify-between pb-2"><span>{t.mass}</span> <span>4.2 KG</span></div>
                     <div className="flex justify-between pb-2"><span>{t.scale}</span> <span>120x80 CM</span></div>
                     <div className="flex justify-between pb-2"><span>{t.node}</span> <span>YID LABS 01</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Action Block */}
            <div className={`mt-8 lg:mt-4 p-6 lg:p-6 border ${borderColor} bg-current/5 backdrop-blur-md space-y-6 lg:space-y-5`}>
              <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 lg:gap-3">
                <div>
                  <p className="text-[9px] tracking-[0.4em] opacity-30 uppercase">{t.valuation}</p>
                  <p className="text-3xl md:text-4xl lg:text-4xl font-black tracking-tight mt-1" style={{ color: ACCENT_COLOR }}>{artifact.price}</p>
                </div>
                <div className="sm:text-right space-y-1">
                  <p className="text-[8px] tracking-[0.2em] opacity-40 uppercase">{t.estimatedDelivery}</p>
                  <p className="text-[8px] tracking-[0.2em] opacity-40 uppercase">{t.secureEscrow}</p>
                </div>
              </div>
              
              <button
                onClick={onAcquire}
                className="w-full py-5 lg:py-4 text-[11px] font-black tracking-[0.6em] transition-all duration-300 shadow-xl uppercase text-white hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                {t.acquireArtifact}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
