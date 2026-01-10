
import React from 'react';
import { Theme, Language } from '../types';
import { ACCENT_COLOR } from '../constants';

interface AboutViewProps {
  theme: Theme;
  language: Language;
  onBack: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ theme, language, onBack }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';

  const content = {
    EN: {
      title: "IDENTITY",
      subtitle: "VALUES & VISION",
      backLabel: "BACK",
      sections: [
        {
          label: "HERITAGE",
          title: "ORIGIN",
          text: "YID was founded on the principles of absolute quality and distinct character. We focus on creating objects that define personal space through exceptional design and materiality."
        },
        {
          label: "CRAFT",
          title: "PRECISION",
          text: "Our process is defined by high-grade engineering. By utilizing advanced materials and hand-finished details, we ensure that every piece meets the highest standards of the contemporary elite."
        },
        {
          label: "PURPOSE",
          title: "VISION",
          text: "We believe in the power of silent luxury. YID is an ecosystem for individuals who value security, permanence, and the quiet confidence of superior craft."
        }
      ]
    },
    RU: {
      title: "ИДЕЯ",
      subtitle: "ЦЕННОСТИ И ВИДЕНИЕ",
      backLabel: "НАЗАД",
      sections: [
        {
          label: "НАСЛЕДИЕ",
          title: "ИСТОКИ",
          text: "YID основан на принципах абсолютного качества и уникального характера. Мы создаем объекты, которые формируют личное пространство через исключительный дизайн и выбор материалов."
        },
        {
          label: "МАСТЕРСТВО",
          title: "ТОЧНОСТЬ",
          text: "Наш процесс основан на высокотехнологичном проектировании. Использование передовых материалов и ручная отделка гарантируют соответствие каждого изделия высшим стандартам."
        },
        {
          label: "ЦЕЛЬ",
          title: "ВИДЕНИЕ",
          text: "Мы верим в силу «тихой роскоши». YID — это экосистема для тех, кто ценит безопасность, долговечность и спокойную уверенность в превосходном качестве."
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
              <h3 className="text-3xl font-black tracking-widest mb-6 uppercase">
                {section.title}
              </h3>
              <p className="text-sm tracking-[0.2em] leading-relaxed opacity-50 font-medium">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutView;
