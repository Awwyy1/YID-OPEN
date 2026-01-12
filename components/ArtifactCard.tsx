
import React, { useState } from 'react';
import { Artifact, Theme, Language } from '../types';
import { ACCENT_COLOR } from '../constants';
import { UI_TRANSLATIONS } from '../translations';

interface ArtifactCardProps {
  artifact: Artifact;
  theme: Theme;
  language: Language;
  onLockedClick: () => void;
  onAcquire: () => void;
  onClick: () => void;
}

const ArtifactCard: React.FC<ArtifactCardProps> = ({ artifact, theme, language, onLockedClick, onAcquire, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const t = UI_TRANSLATIONS[language];

  const title = artifact.title?.[language] || artifact.title?.EN || '';
  const description = artifact.description?.[language] || artifact.description?.EN || '';

  if (artifact.isLocked) {
    return (
      <div
        className="relative aspect-[4/5] overflow-hidden group cursor-not-allowed"
        onClick={onLockedClick}
      >
        <img
          src={artifact.imageUrl}
          alt={title}
          className="w-full h-full object-cover grayscale blur-2xl opacity-20 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="w-3 h-3 rounded-full mx-auto animate-pulse" style={{ backgroundColor: ACCENT_COLOR }}></div>
              <h3 className="text-2xl font-black tracking-[0.4em] uppercase" style={{ color: ACCENT_COLOR }}>
                ENCRYPTED
              </h3>
            </div>

            <div className="space-y-3">
              <p className="text-white/40 text-[9px] tracking-[0.3em] font-medium uppercase">
                {t.exclusiveHolders}
              </p>
              <div className="h-px w-32 mx-auto bg-white/10"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-6 left-6 text-[8px] tracking-[0.3em] text-white/20 uppercase font-mono">
          SEC_PROTOCOL_V.4.0
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <h3 className="text-white/30 text-lg font-bold tracking-[0.3em] uppercase">{title}</h3>
          <p className="text-white/20 text-[8px] font-mono tracking-wider">0x{artifact.id.toUpperCase()}CE59E4</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-neutral-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        src={artifact.imageUrl}
        alt={title}
        className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />

      {artifact.limitedQuantity && (
        <div className="absolute top-6 right-6 z-10">
          <div className="border border-white/30 backdrop-blur-md bg-black/50 px-4 py-2">
            <p className="text-[9px] tracking-[0.4em] text-white font-bold">
              LIMITED {artifact.limitedQuantity}
            </p>
          </div>
        </div>
      )}
      
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute bottom-0 left-0 w-full p-8 space-y-4">
          <div className="flex justify-between items-end border-b border-white/20 pb-4">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-white/60 mb-1 uppercase line-clamp-1">{description}</p>
              <h3 className="text-white text-2xl font-black tracking-widest uppercase">{title}</h3>
            </div>
            <p className="text-white text-lg font-mono tracking-widest" style={{ color: ACCENT_COLOR }}>{artifact.price}</p>
          </div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); onAcquire(); }}
            className="w-full py-4 text-xs font-bold tracking-[0.4em] text-black bg-white hover:bg-[#00BFFF] transition-colors duration-300 uppercase"
          >
            {t.acquireArtifact}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
