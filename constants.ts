
import { Artifact, AccessLevel } from './types';

export const ACCENT_COLOR = '#00BFFF';

const MOCK_GALLERY = [
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800'
];

export const ARTIFACTS: any[] = [
  {
    id: '1',
    title: { EN: 'VISION', RU: 'ВИДЕНИЕ' },
    price: '$2,400',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'THE BLUEPRINT OF DOMINANCE.', RU: 'ЧЕРТЕЖ ДОМИНИРОВАНИЯ.' },
    materials: { 
      EN: ['AIRCRAFT GRADE ALUMINUM', 'TEMPERED CRYSTAL', 'LIQUID SILICON'],
      RU: ['АВИАЦИОННЫЙ АЛЮМИНИЙ', 'ЗАКАЛЕННЫЙ КРИСТАЛЛ', 'ЖИДКИЙ КРЕМНИЙ']
    },
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      ...MOCK_GALLERY
    ]
  },
  {
    id: '2',
    title: { EN: 'POWER', RU: 'СИЛА' },
    price: '$3,800',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'RESERVE CURRENCY OF THE ELITE.', RU: 'РЕЗЕРВНАЯ ВАЛЮТА ЭЛИТЫ.' },
    materials: {
      EN: ['CARBON FIBER WEAVE', 'TITANIUM COMPOSITE', 'NEODYMIUM MAGNETS'],
      RU: ['УГЛЕРОДНОЕ ВОЛОКНО', 'ТИТАНОВЫЙ КОМПОЗИТ', 'НЕОДИМОВЫЕ МАГНИТЫ']
    },
    gallery: [
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
      ...MOCK_GALLERY
    ]
  },
  {
    id: '3',
    title: { EN: 'SILENCE', RU: 'ТИШИНА' },
    price: '$1,950',
    imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=800',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'THE ULTIMATE DEFENSIVE POSTURE.', RU: 'СОВЕРШЕННАЯ ЗАЩИТНАЯ ПОЗИЦИЯ.' },
    materials: {
      EN: ['POLISHED OBSIDIAN', 'SYNTHETIC QUARTZ', 'IONIZED STEEL'],
      RU: ['ПОЛИРОВАННЫЙ ОБСИДИАН', 'СИНТЕТИЧЕСКИЙ КВАРЦ', 'ИОНИЗИРОВАННАЯ СТАЛЬ']
    },
    gallery: [
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=800',
      ...MOCK_GALLERY
    ]
  },
  {
    id: '4',
    title: { EN: 'ONYX VAULT', RU: 'ОНИКСОВЫЙ СЕЙФ' },
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    isLocked: true,
    level: AccessLevel.LIMITED,
    description: { EN: 'HIDDEN ARCHIVE ACCESS.', RU: 'ДОСТУП К СКРЫТОМУ АРХИВУ.' }
  },
  {
    id: '5',
    title: { EN: 'GILDED ARMOR', RU: 'ЗОЛОТАЯ БРОНЯ' },
    imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=800',
    isLocked: true,
    level: AccessLevel.LIMITED,
    description: { EN: 'BIOMETRIC PROTECTION SUIT.', RU: 'БИОМЕТРИЧЕСКИЙ КОСТЮМ ЗАЩИТЫ.' }
  },
  {
    id: '6',
    title: { EN: 'CITADEL 01', RU: 'ЦИТАДЕЛЬ 01' },
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    isLocked: true,
    level: AccessLevel.LIMITED,
    description: { EN: 'TERRITORIAL CONTROL HUB.', RU: 'УЗЕЛ КОНТРОЛЯ ТЕРРИТОРИИ.' }
  },
  {
    id: '7',
    title: { EN: 'MONOLITH', RU: 'МОНОЛИТ' },
    imageUrl: 'https://images.unsplash.com/photo-1518005020250-675f04029212?auto=format&fit=crop&q=80&w=800',
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'LIMITED 01/50. SCULPTED CORE.', RU: 'ЛИМИТ 01/50. СКУЛЬПТУРНОЕ ЯДРО.' }
  },
  {
    id: '8',
    title: { EN: 'VOID', RU: 'ПУСТОТА' },
    imageUrl: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80&w=800',
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'LIMITED 01/50. TOTAL ABSORPTION.', RU: 'ЛИМИТ 01/50. ПОЛНОЕ ПОГЛОЩЕНИЕ.' }
  },
  {
    id: '9',
    title: { EN: 'ECHO', RU: 'ЭХО' },
    imageUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?auto=format&fit=crop&q=80&w=800',
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'LIMITED 01/50. RESONANCE CHAMBER.', RU: 'ЛИМИТ 01/50. РЕЗОНАНСНАЯ КАМЕРА.' }
  }
];
