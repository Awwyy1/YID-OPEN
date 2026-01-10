
import React from 'react';
import { Theme, Language } from '../types';
import { ACCENT_COLOR } from '../constants';

interface ContactViewProps {
  theme: Theme;
  language: Language;
  onBack: () => void;
}

const ContactView: React.FC<ContactViewProps> = ({ theme, language, onBack }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';

  const content = {
    EN: {
      title: "CONNECT",
      subtitle: "DIRECT CHANNELS",
      backLabel: "BACK",
      sections: [
        {
          label: "INQUIRIES",
          title: "DIRECT MAIL",
          text: "For all collection inquiries and private commissions.",
          value: "OFFICE@YID.GALLERY"
        },
        {
          label: "SOCIAL",
          title: "NETWORK",
          text: "Updates and visual archives.",
          value: "@YID.OFFICIAL"
        },
        {
          label: "LOCATIONS",
          title: "NODES",
          text: "Showrooms and private viewings.",
          value: "DUBAI / LONDON / TOKYO"
        }
      ]
    },
    RU: {
      title: "СВЯЗЬ",
      subtitle: "ПРЯМЫЕ КАНАЛЫ",
      backLabel: "НАЗАД",
      sections: [
        {
          label: "ЗАПРОСЫ",
          title: "ПОЧТА",
          text: "По вопросам коллекции и индивидуальным заказам.",
          value: "OFFICE@YID.GALLERY"
        },
        {
          label: "СОЦСЕТИ",
          title: "СЕТЬ",
          text: "Новости и визуальный архив.",
          value: "@YID.OFFICIAL"
        },
        {
          label: "ЛОКАЦИИ",
          title: "УЗЛЫ",
          text: "Шоурумы и частные показы.",
          value: "ДУБАЙ / ЛОНДОН / ТОКИО"
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
              <p className="text-[9px] tracking-[0.5em] mb-4 opacity-20 font-black">
                {section.label}
              </p>
              <h3 className="text-3xl font-black tracking-widest mb-4 uppercase">
                {section.title}
              </h3>
              <p className="text-sm tracking-[0.2em] opacity-50 mb-6 font-medium">
                {section.text}
              </p>
              <p className="text-2xl font-black tracking-[0.1em] font-mono" style={{ color: ACCENT_COLOR }}>
                {section.value}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactView;
