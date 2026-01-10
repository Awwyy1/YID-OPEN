
import React from 'react';
import { Theme, Language } from '../types';
import { ACCENT_COLOR } from '../constants';

interface ShippingViewProps {
  theme: Theme;
  language: Language;
  onBack: () => void;
}

const ShippingView: React.FC<ShippingViewProps> = ({ theme, language, onBack }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';

  const content = {
    EN: {
      title: "DELIVERY",
      subtitle: "GLOBAL LOGISTICS & SERVICE",
      backLabel: "BACK",
      sections: [
        {
          label: "01 SECURITY",
          title: "INSURED CARE",
          text: "Each item is dispatched in signature protective packaging. All shipments are fully insured and require personal signature upon arrival."
        },
        {
          label: "02 REGIONS",
          title: "WORLDWIDE",
          text: "We deliver globally via premium carriers. Standard lead times: 3–7 business days depending on your location."
        },
        {
          label: "03 SERVICE",
          title: "CONCIERGE",
          text: "Customs and duties are managed by our logistics team for a seamless experience. Direct tracking is provided for every order."
        }
      ]
    },
    RU: {
      title: "ДОСТАВКА",
      subtitle: "ГЛОБАЛЬНАЯ ЛОГИСТИКА И СЕРВИС",
      backLabel: "НАЗАД",
      sections: [
        {
          label: "01 ЗАЩИТА",
          title: "СТРАХОВАНИЕ",
          text: "Каждый заказ отправляется в фирменной защитной упаковке. Все отправления полностью застрахованы и требуют личной подписи при получении."
        },
        {
          label: "02 ГЕОГРАФИЯ",
          title: "ВЕСЬ МИР",
          text: "Мы осуществляем доставку по всему миру премиальными службами. Средние сроки: 3–7 рабочих дней."
        },
        {
          label: "03 СЕРВИС",
          title: "КОНСЬЕРЖ",
          text: "Все таможенные вопросы решаются нашей командой. Вы получаете прямой доступ к отслеживанию в реальном времени."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="max-w-screen-2xl mx-auto px-6 py-10 animate-in fade-in duration-700">
      <div className="mb-20">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-[10px] font-black tracking-[0.4em] opacity-40 hover:opacity-100 transition-all uppercase"
        >
          <span className="text-lg">←</span> [ {t.backLabel} ]
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
            {t.title}
          </h2>
          <p className="text-[10px] tracking-[0.5em] font-bold opacity-30 uppercase">
            {t.subtitle}
          </p>
        </div>

        <div className="md:w-2/3 space-y-24">
          {t.sections.map((section, idx) => (
            <section key={idx} className="max-w-xl">
              <p className="text-[9px] tracking-[0.5em] mb-6 opacity-20 font-black">
                {section.label}
              </p>
              <h3 className="text-3xl font-black tracking-widest mb-6 uppercase">
                {section.title}
              </h3>
              <p className="text-sm tracking-[0.2em] leading-relaxed opacity-50 font-medium">
                {section.text}
              </p>
            </section>
          ))}

          <div className={`p-10 border ${borderColor} bg-current/5 mt-32`}>
             <p className="text-[10px] tracking-[0.3em] font-black opacity-50 uppercase mb-2">STATUS: OPERATIONAL</p>
             <p className="text-[9px] tracking-[0.2em] opacity-30 leading-relaxed uppercase">
               Global network active. All delivery nodes are currently operating within standard parameters.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingView;
