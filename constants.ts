
import { Artifact, AccessLevel } from './types';

export const ACCENT_COLOR = '#00BFFF';

export const ARTIFACTS: Artifact[] = [
  {
    id: '1',
    title: { EN: 'VISION', RU: 'ВИДЕНИЕ' },
    price: '$2,400',
    imageUrl: '/images/artifacts/vision-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'THE BLUEPRINT OF DOMINANCE.', RU: 'ЧЕРТЕЖ ДОМИНИРОВАНИЯ.' },
    materials: {
      EN: ['AIRCRAFT GRADE ALUMINUM', 'TEMPERED CRYSTAL', 'LIQUID SILICON'],
      RU: ['АВИАЦИОННЫЙ АЛЮМИНИЙ', 'ЗАКАЛЕННЫЙ КРИСТАЛЛ', 'ЖИДКИЙ КРЕМНИЙ']
    },
    gallery: [
      '/images/artifacts/vision-main.JPG',
      '/images/gallery/vision-1.JPG',
      '/images/gallery/vision-2.JPG',
      '/images/gallery/vision-3.JPG',
      '/images/gallery/vision-4.JPG',
      '/images/gallery/vision-5.JPG'
    ]
  },
  {
    id: '2',
    title: { EN: 'POWER', RU: 'СИЛА' },
    price: '$3,800',
    imageUrl: '/images/artifacts/power-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'RESERVE CURRENCY OF THE ELITE.', RU: 'РЕЗЕРВНАЯ ВАЛЮТА ЭЛИТЫ.' },
    materials: {
      EN: ['CARBON FIBER WEAVE', 'TITANIUM COMPOSITE', 'NEODYMIUM MAGNETS'],
      RU: ['УГЛЕРОДНОЕ ВОЛОКНО', 'ТИТАНОВЫЙ КОМПОЗИТ', 'НЕОДИМОВЫЕ МАГНИТЫ']
    },
    gallery: [
      '/images/artifacts/power-main.JPG',
      '/images/gallery/power-1.JPG',
      '/images/gallery/power-2.JPG',
      '/images/gallery/power-3.JPG',
      '/images/gallery/power-4.JPG',
      '/images/gallery/power-5.JPG'
    ]
  },
  {
    id: '3',
    title: { EN: 'SILENCE', RU: 'ТИШИНА' },
    price: '$1,950',
    imageUrl: '/images/artifacts/silence-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'THE ULTIMATE DEFENSIVE POSTURE.', RU: 'СОВЕРШЕННАЯ ЗАЩИТНАЯ ПОЗИЦИЯ.' },
    materials: {
      EN: ['POLISHED OBSIDIAN', 'SYNTHETIC QUARTZ', 'IONIZED STEEL'],
      RU: ['ПОЛИРОВАННЫЙ ОБСИДИАН', 'СИНТЕТИЧЕСКИЙ КВАРЦ', 'ИОНИЗИРОВАННАЯ СТАЛЬ']
    },
    gallery: [
      '/images/artifacts/silence-main.JPG',
      '/images/gallery/silence-1.JPG',
      '/images/gallery/silence-2.JPG',
      '/images/gallery/silence-3.JPG',
      '/images/gallery/silence-4.JPG',
      '/images/gallery/silence-5.JPG'
    ]
  },
  {
    id: '4',
    title: { EN: 'ARTIFACT-4', RU: 'АРТЕФАКТ-4' },
    price: '$2,800',
    imageUrl: '/images/artifacts/artifact-4-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'PRECISION ENGINEERED EXCELLENCE.', RU: 'ТОЧНОСТЬ ИНЖЕНЕРНОГО СОВЕРШЕНСТВА.' },
    materials: {
      EN: ['BRUSHED STEEL', 'CARBON MATRIX', 'OPTICAL GLASS'],
      RU: ['БРАШИРОВАННАЯ СТАЛЬ', 'УГЛЕРОДНАЯ МАТРИЦА', 'ОПТИЧЕСКОЕ СТЕКЛО']
    },
    gallery: [
      '/images/artifacts/artifact-4-main.JPG',
      '/images/gallery/artifact-4-1.JPG',
      '/images/gallery/artifact-4-2.JPG',
      '/images/gallery/artifact-4-3.JPG',
      '/images/gallery/artifact-4-4.JPG',
      '/images/gallery/artifact-4-5.JPG'
    ]
  },
  {
    id: '5',
    title: { EN: 'ARTIFACT-5', RU: 'АРТЕФАКТ-5' },
    price: '$3,200',
    imageUrl: '/images/artifacts/artifact-5-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'ARCHITECTURAL STATEMENT PIECE.', RU: 'АРХИТЕКТУРНОЕ ЗАЯВЛЕНИЕ.' },
    materials: {
      EN: ['MACHINED ALUMINUM', 'POLYMER COMPOSITE', 'ANODIZED FINISH'],
      RU: ['ОБРАБОТАННЫЙ АЛЮМИНИЙ', 'ПОЛИМЕРНЫЙ КОМПОЗИТ', 'АНОДИРОВАННАЯ ОТДЕЛКА']
    },
    gallery: [
      '/images/artifacts/artifact-5-main.JPG',
      '/images/gallery/artifact-5-1.JPG',
      '/images/gallery/artifact-5-2.JPG',
      '/images/gallery/artifact-5-3.JPG',
      '/images/gallery/artifact-5-4.JPG',
      '/images/gallery/artifact-5-5.JPG'
    ]
  },
  {
    id: '6',
    title: { EN: 'ARTIFACT-6', RU: 'АРТЕФАКТ-6' },
    price: '$2,600',
    imageUrl: '/images/artifacts/artifact-6-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'MINIMALIST POWER DISPLAY.', RU: 'МИНИМАЛИСТИЧНАЯ ДЕМОНСТРАЦИЯ СИЛЫ.' },
    materials: {
      EN: ['STAINLESS STEEL', 'TEMPERED GLASS', 'RUBBER DAMPING'],
      RU: ['НЕРЖАВЕЮЩАЯ СТАЛЬ', 'ЗАКАЛЁННОЕ СТЕКЛО', 'РЕЗИНОВОЕ ДЕМПФИРОВАНИЕ']
    },
    gallery: [
      '/images/artifacts/artifact-6-main.JPG',
      '/images/gallery/artifact-6-1.JPG',
      '/images/gallery/artifact-6-2.JPG',
      '/images/gallery/artifact-6-3.JPG',
      '/images/gallery/artifact-6-4.JPG',
      '/images/gallery/artifact-6-5.JPG'
    ]
  },
  {
    id: '7',
    title: { EN: 'ONYX VAULT', RU: 'ОНИКСОВЫЙ СЕЙФ' },
    imageUrl: '/images/artifacts/onyx-vault-main.JPG',
    isLocked: true,
    level: AccessLevel.LIMITED,
    description: { EN: 'HIDDEN ARCHIVE ACCESS.', RU: 'ДОСТУП К СКРЫТОМУ АРХИВУ.' }
  },
  {
    id: '8',
    title: { EN: 'GILDED ARMOR', RU: 'ЗОЛОТАЯ БРОНЯ' },
    imageUrl: '/images/artifacts/gilded-armor-main.JPG',
    isLocked: true,
    level: AccessLevel.LIMITED,
    description: { EN: 'BIOMETRIC PROTECTION SUIT.', RU: 'БИОМЕТРИЧЕСКИЙ КОСТЮМ ЗАЩИТЫ.' }
  },
  {
    id: '9',
    title: { EN: 'CITADEL 01', RU: 'ЦИТАДЕЛЬ 01' },
    imageUrl: '/images/artifacts/citadel-main.JPG',
    isLocked: true,
    level: AccessLevel.LIMITED,
    description: { EN: 'TERRITORIAL CONTROL HUB.', RU: 'УЗЕЛ КОНТРОЛЯ ТЕРРИТОРИИ.' }
  },
  {
    id: '10',
    title: { EN: 'MONOLITH', RU: 'МОНОЛИТ' },
    imageUrl: '/images/artifacts/monolith-main.JPG',
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'LIMITED 01/50. SCULPTED CORE.', RU: 'ЛИМИТ 01/50. СКУЛЬПТУРНОЕ ЯДРО.' }
  },
  {
    id: '11',
    title: { EN: 'VOID', RU: 'ПУСТОТА' },
    imageUrl: '/images/artifacts/void-main.JPG',
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'LIMITED 01/50. TOTAL ABSORPTION.', RU: 'ЛИМИТ 01/50. ПОЛНОЕ ПОГЛОЩЕНИЕ.' }
  },
  {
    id: '12',
    title: { EN: 'ECHO', RU: 'ЭХО' },
    imageUrl: '/images/artifacts/echo-main.JPG',
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'LIMITED 01/50. RESONANCE CHAMBER.', RU: 'ЛИМИТ 01/50. РЕЗОНАНСНАЯ КАМЕРА.' }
  }
];
