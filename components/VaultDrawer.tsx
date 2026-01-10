
import React from 'react';
import { CartItem, Theme, Language } from '../types';
import { ACCENT_COLOR } from '../constants';
import { UI_TRANSLATIONS } from '../translations';

interface VaultDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  theme: Theme;
  language: Language;
}

const VaultDrawer: React.FC<VaultDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity, theme, language }) => {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-black/95' : 'bg-white/95';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';
  const t = UI_TRANSLATIONS[language];

  const parsePrice = (priceStr?: string): number => {
    if (!priceStr) return 0;
    const numStr = priceStr.replace(/[^0-9]/g, '');
    const parsed = parseInt(numStr, 10);
    return isNaN(parsed) ? 0 : parsed;
  };

  const totalPrice = items.reduce((sum, item) => {
    const price = parsePrice(item.artifact.price);
    return sum + (price * item.quantity);
  }, 0);

  const buttonBg = isDark ? 'bg-white text-black' : 'bg-black text-white';

  return (
    <>
      <div 
        className={`fixed inset-0 z-[120] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-black/40"></div>
      </div>

      <aside 
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[130] transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${bgColor} border-l ${borderColor} shadow-2xl backdrop-blur-2xl flex flex-col uppercase`}
      >
        <div className={`p-8 border-b ${borderColor} flex items-center justify-between`}>
          <div>
            <h2 className="text-xl font-black tracking-[0.3em]">{t.secureVault}</h2>
            <p className="text-[9px] tracking-[0.5em] opacity-30 mt-1 uppercase">{t.vaultSession}</p>
          </div>
          <button 
            onClick={onClose}
            className="group w-10 h-10 border border-current opacity-20 hover:opacity-100 flex items-center justify-center transition-all"
          >
            <span className="text-xs font-bold">ESC</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-10 space-y-6">
              <p className="text-[10px] tracking-[0.4em] font-black text-center">{t.vaultEmpty}</p>
              <div className="w-px h-12 bg-current"></div>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => {
                const title = item.artifact.title?.[language] || item.artifact.title?.EN || '';
                return (
                <div key={item.artifact.id} className="group relative flex gap-6 pb-8 border-b border-white/5 last:border-0">
                  <div className="w-24 aspect-square overflow-hidden border border-white/5 bg-neutral-900/50">
                    <img src={item.artifact.imageUrl} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-black tracking-widest">{title}</h3>
                        <p className="text-[9px] opacity-30 tracking-[0.2em] mt-1">REF: {item.artifact.id.padStart(4, '0')}</p>
                      </div>
                      <p className="text-sm font-mono tracking-tighter" style={{ color: ACCENT_COLOR }}>{item.artifact.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4 border border-current/5 px-3 py-1 bg-current/5">
                        <button onClick={() => onUpdateQuantity(item.artifact.id, -1)} className="text-xs opacity-30 hover:opacity-100 px-1">-</button>
                        <span className="text-[9px] font-black tracking-widest min-w-[3ch] text-center">
                          {item.quantity.toString().padStart(2, '0')}
                        </span>
                        <button onClick={() => onUpdateQuantity(item.artifact.id, 1)} className="text-xs opacity-30 hover:opacity-100 px-1">+</button>
                      </div>
                      
                      <button 
                        onClick={() => onRemove(item.artifact.id)}
                        className="text-[8px] font-black tracking-[0.4em] opacity-20 hover:opacity-100 transition-all"
                      >
                        [ {language === 'EN' ? 'REMOVE' : 'УДАЛИТЬ'} ]
                      </button>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className={`p-8 bg-current/5 border-t ${borderColor} space-y-8`}>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] tracking-[0.4em] opacity-30 uppercase mb-2">{t.totalValuation}</p>
                <p className="text-4xl font-black tracking-tighter">
                  ${totalPrice.toLocaleString()}
                </p>
              </div>
              <div className="text-right pb-1">
                <p className="text-[8px] tracking-[0.3em] opacity-20 font-mono">USD / GLOBAL</p>
              </div>
            </div>

            <button 
              className={`w-full py-6 text-xs font-black tracking-[0.8em] transition-all duration-500 ${buttonBg} hover:opacity-80 border border-transparent shadow-xl`}
            >
              {t.initiateTransfer}
            </button>
            <p className="text-[9px] text-center opacity-30 tracking-[0.4em] font-medium leading-relaxed">
              {t.thankYou}
            </p>
          </div>
        )}
      </aside>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(128, 128, 128, 0.1); }
      `}</style>
    </>
  );
};

export default VaultDrawer;
