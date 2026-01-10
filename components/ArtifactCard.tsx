
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
          className="w-full h-full object-cover grayscale blur-xl opacity-50 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className={`border border-white/20 px-6 py-4 backdrop-blur-lg bg-black/40 text-center`}>
            <p className="text-white text-xs tracking-[0.3em] font-bold mb-2">{t.accessDenied}</p>
            <p className="text-white/50 text-[10px] tracking-widest">{t.exclusiveHolders}</p>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-white text-lg font-bold tracking-widest opacity-30">{title}</h3>
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

      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 border border-white/10">
        <span className="text-[8px] tracking-widest text-white/80 uppercase">
          {language === 'EN' ? 'AVAILABLE ARTIFACT' : 'ДОСТУПНЫЙ АРТЕФАКТ'}
        </span>
      </div>
    </div>
  );
};

export default ArtifactCard;
