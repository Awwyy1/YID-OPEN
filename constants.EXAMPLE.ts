
import { Artifact, AccessLevel } from './types';

export const ACCENT_COLOR = '#00BFFF';

// ПРИМЕР: Как будет выглядеть constants.ts после добавления ваших фото
// Скопируйте этот файл в constants.ts после загрузки изображений

export const ARTIFACTS: Artifact[] = [
  {
    id: '1',
    title: { EN: 'VISION', RU: 'ВИДЕНИЕ' },
    price: '$2,400',
    imageUrl: '/images/artifacts/vision-main.jpg',  // ← ВАШЕ ФОТО
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'THE BLUEPRINT OF DOMINANCE.', RU: 'ЧЕРТЕЖ ДОМИНИРОВАНИЯ.' },
    materials: {
      EN: ['AIRCRAFT GRADE ALUMINUM', 'TEMPERED CRYSTAL', 'LIQUID SILICON'],
      RU: ['АВИАЦИОННЫЙ АЛЮМИНИЙ', 'ЗАКАЛЕННЫЙ КРИСТАЛЛ', 'ЖИДКИЙ КРЕМНИЙ']
    },
    gallery: [
      '/images/artifacts/vision-main.jpg',  // ← ВАШИ ФОТО
      '/images/gallery/vision-1.jpg',
      '/images/gallery/vision-2.jpg',
      '/images/gallery/vision-3.jpg',
      '/images/gallery/vision-4.jpg',
      '/images/gallery/vision-5.jpg'
    ]
  },
  {
    id: '2',
    title: { EN: 'POWER', RU: 'СИЛА' },
    price: '$3,800',
    imageUrl: '/images/artifacts/power-main.jpg',  // ← ВАШЕ ФОТО
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'RESERVE CURRENCY OF THE ELITE.', RU: 'РЕЗЕРВНАЯ ВАЛЮТА ЭЛИТЫ.' },
    materials: {
      EN: ['CARBON FIBER WEAVE', 'TITANIUM COMPOSITE', 'NEODYMIUM MAGNETS'],
      RU: ['УГЛЕРОДНОЕ ВОЛОКНО', 'ТИТАНОВЫЙ КОМПОЗИТ', 'НЕОДИМОВЫЕ МАГНИТЫ']
    },
    gallery: [
      '/images/artifacts/power-main.jpg',  // ← ВАШИ ФОТО
      '/images/gallery/power-1.jpg',
      '/images/gallery/power-2.jpg',
      '/images/gallery/power-3.jpg',
      '/images/gallery/power-4.jpg',
      '/images/gallery/power-5.jpg'
    ]
  },
  {
    id: '3',
    title: { EN: 'SILENCE', RU: 'ТИШИНА' },
    price: '$1,950',
    imageUrl: '/images/artifacts/silence-main.jpg',  // ← ВАШЕ ФОТО
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'THE ULTIMATE DEFENSIVE POSTURE.', RU: 'СОВЕРШЕННАЯ ЗАЩИТНАЯ ПОЗИЦИЯ.' },
    materials: {
      EN: ['POLISHED OBSIDIAN', 'SYNTHETIC QUARTZ', 'IONIZED STEEL'],
      RU: ['ПОЛИРОВАННЫЙ ОБСИДИАН', 'СИНТЕТИЧЕСКИЙ КВАРЦ', 'ИОНИЗИРОВАННАЯ СТАЛЬ']
    },
    gallery: [
      '/images/artifacts/silence-main.jpg',  // ← ВАШИ ФОТО
      '/images/gallery/silence-1.jpg',
      '/images/gallery/silence-2.jpg',
      '/images/gallery/silence-3.jpg',
      '/images/gallery/silence-4.jpg',
      '/images/gallery/silence-5.jpg'
    ]
  },
  {
    id: '4',
    title: { EN: 'ONYX VAULT', RU: 'ОНИКСОВЫЙ СЕЙФ' },
    imageUrl: '/images/artifacts/onyx-vault-main.jpg',  // ← ВАШЕ ФОТО
    isLocked: true,
    level: AccessLevel.LIMITED,
    description: { EN: 'HIDDEN ARCHIVE ACCESS.', RU: 'ДОСТУП К СКРЫТОМУ АРХИВУ.' }
  },
  {
    id: '5',
    title: { EN: 'GILDED ARMOR', RU: 'ЗОЛОТАЯ БРОНЯ' },
    imageUrl: '/images/artifacts/gilded-armor-main.jpg',  // ← ВАШЕ ФОТО
    isLocked: true,
    level: AccessLevel.LIMITED,
    description: { EN: 'BIOMETRIC PROTECTION SUIT.', RU: 'БИОМЕТРИЧЕСКИЙ КОСТЮМ ЗАЩИТЫ.' }
  },
  {
    id: '6',
    title: { EN: 'CITADEL 01', RU: 'ЦИТАДЕЛЬ 01' },
    imageUrl: '/images/artifacts/citadel-main.jpg',  // ← ВАШЕ ФОТО
    isLocked: true,
    level: AccessLevel.LIMITED,
    description: { EN: 'TERRITORIAL CONTROL HUB.', RU: 'УЗЕЛ КОНТРОЛЯ ТЕРРИТОРИИ.' }
  },
  {
    id: '7',
    title: { EN: 'MONOLITH', RU: 'МОНОЛИТ' },
    imageUrl: '/images/artifacts/monolith-main.jpg',  // ← ВАШЕ ФОТО
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'LIMITED 01/50. SCULPTED CORE.', RU: 'ЛИМИТ 01/50. СКУЛЬПТУРНОЕ ЯДРО.' }
  },
  {
    id: '8',
    title: { EN: 'VOID', RU: 'ПУСТОТА' },
    imageUrl: '/images/artifacts/void-main.jpg',  // ← ВАШЕ ФОТО
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'LIMITED 01/50. TOTAL ABSORPTION.', RU: 'ЛИМИТ 01/50. ПОЛНОЕ ПОГЛОЩЕНИЕ.' }
  },
  {
    id: '9',
    title: { EN: 'ECHO', RU: 'ЭХО' },
    imageUrl: '/images/artifacts/echo-main.jpg',  // ← ВАШЕ ФОТО
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'LIMITED 01/50. RESONANCE CHAMBER.', RU: 'ЛИМИТ 01/50. РЕЗОНАНСНАЯ КАМЕРА.' }
  }
];
