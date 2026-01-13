
import React, { useState } from 'react';
import { Theme, Language, Page } from '../types';
import { ACCENT_COLOR } from '../constants';
import { UI_TRANSLATIONS } from '../translations';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  cartCount: number;
  onVaultClick: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ 
  theme, 
  toggleTheme, 
  cartCount, 
  onVaultClick, 
  language, 
  setLanguage,
  onNavigate,
  currentPage
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';
  const bgColor = isDark ? 'bg-black' : 'bg-white';

  const t = UI_TRANSLATIONS[language];

  const menuLinks: { label: string; id: Page }[] = [
    { label: t.menuNetwork, id: 'map' },
    { label: t.menuContact, id: 'contact' },
    { label: t.menuAbout, id: 'about' },
    { label: t.menuShip, id: 'ship' }
  ];

  const handleLinkClick = (pageId: Page) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[110] border-b ${borderColor} backdrop-blur-md bg-transparent`}>
        <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group flex flex-col gap-1.5 focus:outline-none relative z-[120]"
            aria-label="Menu"
          >
            <span className={`h-px transition-all duration-300 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} style={{ backgroundColor: ACCENT_COLOR }}></span>
            <span className={`h-px transition-all duration-300 ${isMenuOpen ? 'w-8 -rotate-45' : 'w-5 group-hover:w-8'}`} style={{ backgroundColor: ACCENT_COLOR }}></span>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 text-center flex items-center justify-center h-full">
            <button
              onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
              className="text-4xl font-black tracking-tight leading-none pointer-events-auto transition-transform active:scale-95"
              style={{ color: ACCENT_COLOR }}
            >
              YID
            </button>
          </div>

          <div className="flex items-center gap-1 md:gap-4 relative z-[120]">
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 group focus:outline-none transition-transform active:scale-90 flex items-center justify-center"
              style={{ color: ACCENT_COLOR }}
              aria-label="Toggle Mode"
            >
              <div className={`w-5 h-5 border border-current rounded-full flex items-center justify-center transition-all duration-500`}>
                <div className={`w-2.5 h-2.5 rounded-full bg-current transition-all duration-500 ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
                <div className={`absolute inset-0 rounded-full border-r-[2px] border-current transition-opacity duration-500 ${!isDark ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </button>

            <button
              onClick={onVaultClick}
              className="group relative flex items-center justify-center w-10 h-10 focus:outline-none transition-all active:scale-95"
              style={{ color: ACCENT_COLOR }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 8V7c0-2.2 1.8-4 4-4s4 1.8 4 4v1" />
                <path d="M5 8h14l.8 11.2c.1 1.5-1.1 2.8-2.6 2.8H6.8c-1.5 0-2.7-1.3-2.6-2.8L5 8z" />
              </svg>
              {cartCount > 0 && (
                <div className="absolute bottom-[6px] right-[4px] md:bottom-[8px] md:right-[6px] flex items-center justify-center pointer-events-none z-10">
                  <span className={`text-[7px] md:text-[8px] font-black leading-none px-1 py-0.5 rounded-full animate-in fade-in zoom-in duration-300 shadow-sm transition-all ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                    {cartCount}
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY MENU */}
      <div className={`fixed inset-0 z-[100] transition-all duration-700 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'} ${bgColor}`}>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
        
        <div className="h-full flex flex-col max-w-screen-2xl mx-auto pt-32 md:pt-48 px-6 md:px-24">
          <nav className={`flex flex-col gap-4 md:gap-10 ${textColor}`}>
            {menuLinks.map((link, idx) => (
              <div key={link.label} className="group relative">
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-5xl md:text-6xl font-black tracking-tighter inline-block transition-all duration-500 ease-out hover:italic hover:text-[#00BFFF] text-left uppercase ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${currentPage === link.id ? 'italic text-[#00BFFF]' : ''}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {link.label}
                </button>
                <div className={`h-1 w-12 md:w-24 mt-1 md:mt-2 transition-transform duration-700 origin-left ${isMenuOpen ? 'scale-x-100' : 'scale-x-0'}`} style={{ backgroundColor: ACCENT_COLOR, transitionDelay: `${idx * 150}ms` }}></div>
              </div>
            ))}
          </nav>
          
          <div className={`mt-12 md:mt-20 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`flex items-center gap-6 ${textColor}`}>
               <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] font-black">
                  <button onClick={() => setLanguage('EN')} className={`transition-all duration-300 ${language === 'EN' ? 'opacity-100' : 'opacity-20 hover:opacity-100 hover:text-[#00BFFF]'}`} style={{ color: language === 'EN' ? ACCENT_COLOR : 'inherit' }}>EN</button>
                  <span className="opacity-10">/</span>
                  <button onClick={() => setLanguage('RU')} className={`transition-all duration-300 ${language === 'RU' ? 'opacity-100' : 'opacity-20 hover:opacity-100 hover:text-[#00BFFF]'}`} style={{ color: language === 'RU' ? ACCENT_COLOR : 'inherit' }}>RU</button>
               </div>
               <div className="h-px w-12 bg-current opacity-10"></div>
               <p className="text-[10px] tracking-[0.5em] opacity-30 uppercase font-black">{t.globalAccess}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
