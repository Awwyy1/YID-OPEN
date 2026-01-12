
import { Artifact, AccessLevel } from './types';

export const ACCENT_COLOR = '#00BFFF';

export const ARTIFACTS: Artifact[] = [
  {
    id: '1',
    title: { EN: 'MUSTANG 66', RU: 'МУСТАНГ 66' },
    price: '$139',
    imageUrl: '/images/artifacts/vision-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'AMERICAN MUSCLE ICON.', RU: 'ИКОНА АМЕРИКАНСКОЙ МОЩИ.' },
    materials: {
      EN: ['CANVAS PRINT', 'MUSEUM QUALITY', 'BLACK FRAME'],
      RU: ['ПЕЧАТЬ НА ХОЛСТЕ', 'МУЗЕЙНОЕ КАЧЕСТВО', 'ЧЁРНАЯ РАМА']
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
    title: { EN: 'STINGRAY 67', RU: 'СТИНГРЕЙ 67' },
    price: '$139',
    imageUrl: '/images/artifacts/power-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'LEGENDARY CORVETTE EXCELLENCE.', RU: 'ЛЕГЕНДАРНОЕ СОВЕРШЕНСТВО КОРВЕТА.' },
    materials: {
      EN: ['FINE ART PAPER', 'ARCHIVAL INK', 'GALLERY FRAME'],
      RU: ['ХУДОЖЕСТВЕННАЯ БУМАГА', 'АРХИВНЫЕ ЧЕРНИЛА', 'ГАЛЕРЕЙНАЯ РАМА']
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
    title: { EN: 'FASTBACK 65', RU: 'ФАСТБЭК 65' },
    price: '$139',
    imageUrl: '/images/artifacts/silence-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'CLASSIC PERFORMANCE MACHINE.', RU: 'КЛАССИЧЕСКАЯ МАШИНА ПРОИЗВОДИТЕЛЬНОСТИ.' },
    materials: {
      EN: ['PREMIUM CANVAS', 'UV PROTECTION', 'WOOD FRAME'],
      RU: ['ПРЕМИУМ ХОЛСТ', 'УФ-ЗАЩИТА', 'ДЕРЕВЯННАЯ РАМА']
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
    title: { EN: 'WEALTH', RU: 'БОГАТСТВО' },
    price: '$99',
    imageUrl: '/images/artifacts/artifact-4-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'CHAMPAGNE LIFESTYLE STATEMENT.', RU: 'ЗАЯВЛЕНИЕ ШАМПАНСКОГО ОБРАЗА ЖИЗНИ.' },
    materials: {
      EN: ['STREET ART CANVAS', 'MIXED MEDIA', 'LUXURY FRAME'],
      RU: ['ХОЛСТ СТРИТ-АРТ', 'СМЕШАННАЯ ТЕХНИКА', 'ЛЮКСОВАЯ РАМА']
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
    title: { EN: 'LEGACY', RU: 'НАСЛЕДИЕ' },
    price: '$139',
    imageUrl: '/images/artifacts/artifact-5-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: '70 YEARS OF RACING GLORY.', RU: '70 ЛЕТ ГОНОЧНОЙ СЛАВЫ.' },
    materials: {
      EN: ['PREMIUM PAPER', 'LAMINATED FINISH', 'FADE RESISTANT'],
      RU: ['ПРЕМИУМ БУМАГА', 'ЛАМИНИРОВАННАЯ ОТДЕЛКА', 'УСТОЙЧИВОСТЬ К ВЫЦВЕТАНИЮ']
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
    title: { EN: 'EMPIRE', RU: 'ИМПЕРИЯ' },
    price: '$99',
    imageUrl: '/images/artifacts/artifact-6-main.JPG',
    isLocked: false,
    level: AccessLevel.CORE,
    description: { EN: 'MONEY TALKS. LUXURY ROARS.', RU: 'ДЕНЬГИ ГОВОРЯТ. РОСКОШЬ РЕВЁТ.' },
    materials: {
      EN: ['STREET ART CANVAS', 'HAND FINISHED', 'GALLERY FRAME'],
      RU: ['ХОЛСТ СТРИТ-АРТ', 'РУЧНАЯ ОТДЕЛКА', 'ГАЛЕРЕЙНАЯ РАМА']
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
    price: '$4,200',
    imageUrl: '/images/artifacts/onyx-vault-main.JPG',
    isLocked: false,
    level: AccessLevel.LIMITED,
    limitedQuantity: 50,
    description: { EN: 'EXCLUSIVE MASTERPIECE.', RU: 'ЭКСКЛЮЗИВНЫЙ ШЕДЕВР.' },
    materials: {
      EN: ['CANVAS PRINT', 'MUSEUM QUALITY', 'BLACK FRAME'],
      RU: ['ПЕЧАТЬ НА ХОЛСТЕ', 'МУЗЕЙНОЕ КАЧЕСТВО', 'ЧЁРНАЯ РАМА']
    },
    gallery: [
      '/images/artifacts/onyx-vault-main.JPG',
      '/images/gallery/onyx-vault-1.JPG',
      '/images/gallery/onyx-vault-2.JPG',
      '/images/gallery/onyx-vault-3.JPG',
      '/images/gallery/onyx-vault-4.JPG',
      '/images/gallery/onyx-vault-5.JPG'
    ]
  },
  {
    id: '8',
    title: { EN: 'GILDED ARMOR', RU: 'ЗОЛОТАЯ БРОНЯ' },
    price: '$4,500',
    imageUrl: '/images/artifacts/gilded-armor-main.JPG',
    isLocked: false,
    level: AccessLevel.LIMITED,
    limitedQuantity: 50,
    description: { EN: 'RARE COLLECTOR EDITION.', RU: 'РЕДКОЕ КОЛЛЕКЦИОННОЕ ИЗДАНИЕ.' },
    materials: {
      EN: ['PREMIUM CANVAS', 'GOLD ACCENTS', 'LUXURY FRAME'],
      RU: ['ПРЕМИУМ ХОЛСТ', 'ЗОЛОТЫЕ АКЦЕНТЫ', 'ЛЮКСОВАЯ РАМА']
    },
    gallery: [
      '/images/artifacts/gilded-armor-main.JPG',
      '/images/gallery/gilded-armor-1.JPG',
      '/images/gallery/gilded-armor-2.JPG',
      '/images/gallery/gilded-armor-3.JPG',
      '/images/gallery/gilded-armor-4.JPG',
      '/images/gallery/gilded-armor-5.JPG'
    ]
  },
  {
    id: '9',
    title: { EN: 'CITADEL 01', RU: 'ЦИТАДЕЛЬ 01' },
    price: '$3,900',
    imageUrl: '/images/artifacts/citadel-main.JPG',
    isLocked: false,
    level: AccessLevel.LIMITED,
    limitedQuantity: 50,
    description: { EN: 'LIMITED SERIES ARTWORK.', RU: 'ЛИМИТИРОВАННАЯ СЕРИЯ ИСКУССТВА.' },
    materials: {
      EN: ['FINE ART PRINT', 'ARCHIVAL QUALITY', 'MODERN FRAME'],
      RU: ['ХУДОЖЕСТВЕННАЯ ПЕЧАТЬ', 'АРХИВНОЕ КАЧЕСТВО', 'СОВРЕМЕННАЯ РАМА']
    },
    gallery: [
      '/images/artifacts/citadel-main.JPG',
      '/images/gallery/citadel-1.JPG',
      '/images/gallery/citadel-2.JPG',
      '/images/gallery/citadel-3.JPG',
      '/images/gallery/citadel-4.JPG',
      '/images/gallery/citadel-5.JPG'
    ]
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
