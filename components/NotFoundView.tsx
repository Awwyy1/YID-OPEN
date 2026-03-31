
import React, { useEffect, useState } from 'react';
import { Theme, Language } from '../types';
import { ACCENT_COLOR } from '../constants';

interface NotFoundViewProps {
  theme: Theme;
  language: Language;
  onBack: () => void;
}

const content = {
  EN: {
    code: '404',
    label: 'ERROR CODE',
    title: 'SIGNAL LOST',
    subtitle: 'THE REQUESTED NODE DOES NOT EXIST',
    desc: 'COORDINATES UNRESOLVED. THIS SECTOR IS OUTSIDE THE KNOWN NETWORK.',
    back: 'RETURN TO GRID',
    status: 'STATUS: OFFLINE',
    trace: 'TRACE: NULL',
  },
  RU: {
    code: '404',
    label: 'КОД ОШИБКИ',
    title: 'СИГНАЛ ПОТЕРЯН',
    subtitle: 'ЗАПРОШЕННЫЙ УЗЕЛ НЕ СУЩЕСТВУЕТ',
    desc: 'КООРДИНАТЫ НЕ ОПРЕДЕЛЕНЫ. ЭТОТ СЕКТОР ЗА ПРЕДЕЛАМИ ИЗВЕСТНОЙ СЕТИ.',
    back: 'ВЕРНУТЬСЯ В СЕТЬ',
    status: 'СТАТУС: ОФФЛАЙН',
    trace: 'СЛЕД: ПУСТО',
  },
};

const NotFoundView: React.FC<NotFoundViewProps> = ({ theme, language, onBack }) => {
  const isDark = theme === 'dark';
  const t = content[language];
  const [glitch, setGlitch] = useState(false);
  const [scanLine, setScanLine] = useState(0);

  // Periodic glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scan line animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[80vh] max-w-screen-2xl mx-auto px-6 py-10 flex flex-col animate-in fade-in duration-700">
      {/* Back button */}
      <div className="mb-16">
        <button
          onClick={onBack}
          className="group flex items-center gap-4 text-[10px] font-black tracking-[0.4em] opacity-40 hover:opacity-100 transition-all uppercase"
        >
          <span className="text-lg">←</span> [ {t.back} ]
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-8">
          <span
            className="text-[9px] font-mono tracking-[0.5em] opacity-30"
          >
            {t.label}
          </span>
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-mono tracking-[0.3em] opacity-20">{t.status}</span>
            <span className="text-[9px] font-mono tracking-[0.3em] opacity-20">{t.trace}</span>
          </div>
        </div>

        {/* 404 Large number */}
        <div className="relative overflow-hidden select-none mb-4">
          {/* Glitch layers */}
          {glitch && (
            <>
              <span
                className="absolute inset-0 text-[18vw] md:text-[20vw] font-black tracking-tighter leading-none pointer-events-none"
                style={{
                  color: '#ff0040',
                  clipPath: 'inset(20% 0 60% 0)',
                  transform: 'translateX(-6px)',
                  opacity: 0.7,
                }}
              >
                {t.code}
              </span>
              <span
                className="absolute inset-0 text-[18vw] md:text-[20vw] font-black tracking-tighter leading-none pointer-events-none"
                style={{
                  color: ACCENT_COLOR,
                  clipPath: 'inset(60% 0 10% 0)',
                  transform: 'translateX(6px)',
                  opacity: 0.5,
                }}
              >
                {t.code}
              </span>
            </>
          )}
          <span
            className="block text-[18vw] md:text-[20vw] font-black tracking-tighter leading-none transition-colors duration-100"
            style={{
              color: glitch ? 'transparent' : (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'),
              WebkitTextStroke: `1px ${glitch ? ACCENT_COLOR : (isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)')}`,
            }}
          >
            {t.code}
          </span>

          {/* Scan line overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, transparent ${scanLine}%, ${ACCENT_COLOR}18 ${scanLine + 0.5}%, transparent ${scanLine + 1}%)`,
            }}
          />
        </div>

        {/* Title */}
        <div className="mb-2">
          <h1 className="text-3xl md:text-6xl font-black tracking-[0.15em] leading-none">
            {t.title}
          </h1>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div
            className="h-px flex-1 opacity-20"
            style={{ backgroundColor: isDark ? 'white' : 'black' }}
          />
          <span
            className="text-[9px] font-mono tracking-[0.4em] font-black"
            style={{ color: ACCENT_COLOR }}
          >
            ◆
          </span>
          <div
            className="h-px flex-1 opacity-20"
            style={{ backgroundColor: isDark ? 'white' : 'black' }}
          />
        </div>

        {/* Subtitle & description */}
        <p className="text-[10px] tracking-[0.45em] font-bold opacity-40 mb-4 uppercase">
          {t.subtitle}
        </p>
        <p className="text-[11px] tracking-[0.25em] font-medium opacity-25 max-w-lg uppercase">
          {t.desc}
        </p>

        {/* Terminal block */}
        <div
          className="mt-12 border p-5 max-w-sm font-mono"
          style={{ borderColor: `${ACCENT_COLOR}30`, backgroundColor: `${ACCENT_COLOR}06` }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#ff4040' }} />
            <span className="text-[9px] tracking-[0.4em] opacity-40">SYSTEM TERMINAL</span>
          </div>
          <div className="space-y-1.5">
            {[
              '> RESOLVING PATH...',
              '> NODE NOT FOUND',
              '> REROUTING FAILED',
              `> ${language === 'EN' ? 'SUGGEST: RETURN TO BASE NODE' : 'СОВЕТ: ВЕРНИТЕСЬ В БАЗОВЫЙ УЗЕЛ'}`,
            ].map((line, i) => (
              <p
                key={i}
                className="text-[10px] tracking-[0.2em]"
                style={{ color: i === 1 ? '#ff4040' : i === 3 ? ACCENT_COLOR : undefined, opacity: i === 3 ? 1 : 0.5 }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button
            onClick={onBack}
            className="group flex items-center gap-4 text-[11px] font-black tracking-[0.45em] border px-8 py-4 transition-all duration-300 uppercase"
            style={{
              borderColor: ACCENT_COLOR,
              color: ACCENT_COLOR,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = ACCENT_COLOR;
              (e.currentTarget as HTMLButtonElement).style.color = '#000';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = ACCENT_COLOR;
            }}
          >
            <span>←</span>
            {t.back}
          </button>
        </div>
      </div>

      {/* Bottom meta */}
      <div className="mt-16 flex items-center justify-between">
        <span className="text-[8px] font-mono tracking-[0.4em] opacity-15">YID / SYSTEM</span>
        <span className="text-[8px] font-mono tracking-[0.4em] opacity-15">ERR_NODE_404</span>
      </div>
    </div>
  );
};

export default NotFoundView;
