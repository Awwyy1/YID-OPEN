
import React from 'react';
import { Theme, Language } from '../types';
import { ACCENT_COLOR } from '../constants';
import { UI_TRANSLATIONS } from '../translations';

interface FooterProps {
  theme: Theme;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ theme, language }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';
  const mutedColor = isDark ? 'text-white/40' : 'text-black/40';
  const t = UI_TRANSLATIONS[language];

  return (
    <footer className={`mt-24 border-t ${borderColor} pb-12 pt-16`}>
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h4 className={`text-[10px] font-black tracking-[0.3em] ${mutedColor}`}>{t.logistics}</h4>
          <p className={`text-sm tracking-widest ${textColor}`}>{t.worldwide}</p>
        </div>

        <div className="space-y-4 md:text-center">
          <h4 className={`text-[10px] font-black tracking-[0.3em] ${mutedColor}`}>{t.connect}</h4>
          <div className="flex flex-col md:flex-row md:justify-center gap-6">
            <a href="#" className="text-xs font-bold tracking-[0.3em] hover:opacity-70 transition-opacity" style={{ color: ACCENT_COLOR }}>INSTAGRAM</a>
            <a href="#" className="text-xs font-bold tracking-[0.3em] hover:opacity-70 transition-opacity" style={{ color: ACCENT_COLOR }}>TWITTER / X</a>
          </div>
        </div>

        <div className="space-y-4 md:text-right">
          <h4 className={`text-[10px] font-black tracking-[0.3em] ${mutedColor}`}>{t.status}</h4>
          <p className={`text-sm tracking-widest ${textColor}`}>© 2026 YID. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
