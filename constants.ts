
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
    title: { EN: 'BMW M3 E30', RU: 'BMW M3 E30' },
    price: '$199',
    imageUrl: '/images/artifacts/bmw-m3-main.JPG',
    isLocked: false,
    level: AccessLevel.LIMITED,
    limitedQuantity: 50,
    description: { EN: 'GERMAN ENGINEERING ICON.', RU: 'ИКОНА НЕМЕЦКОЙ ИНЖЕНЕРИИ.' },
    materials: {
      EN: ['PREMIUM PRINT', 'GLOSSY FINISH', 'WHITE FRAME'],
      RU: ['ПРЕМИУМ ПЕЧАТЬ', 'ГЛЯНЦЕВОЕ ПОКРЫТИЕ', 'БЕЛАЯ РАМА']
    },
    gallery: [
      '/images/artifacts/bmw-m3-main.JPG',
      '/images/gallery/bmw-m3-1.JPG',
      '/images/gallery/bmw-m3-2.JPG',
      '/images/gallery/bmw-m3-3.JPG',
      '/images/gallery/bmw-m3-4.JPG',
      '/images/gallery/bmw-m3-5.JPG'
    ]
  },
  {
    id: '8',
    title: { EN: 'FIGHT CLUB', RU: 'БОЙЦОВСКИЙ КЛУБ' },
    price: '$199',
    imageUrl: '/images/artifacts/fight-club-main.JPG',
    isLocked: false,
    level: AccessLevel.LIMITED,
    limitedQuantity: 50,
    description: { EN: 'CULT CLASSIC STATEMENT.', RU: 'КУЛЬТОВАЯ КЛАССИКА.' },
    materials: {
      EN: ['VINTAGE PAPER', 'DISTRESSED FINISH', 'BLACK FRAME'],
      RU: ['ВИНТАЖНАЯ БУМАГА', 'СОСТАРЕННАЯ ОТДЕЛКА', 'ЧЁРНАЯ РАМА']
    },
    gallery: [
      '/images/artifacts/fight-club-main.JPG',
      '/images/gallery/fight-club-1.JPG',
      '/images/gallery/fight-club-2.JPG',
      '/images/gallery/fight-club-3.JPG',
      '/images/gallery/fight-club-4.JPG',
      '/images/gallery/fight-club-5.JPG'
    ]
  },
  {
    id: '9',
    title: { EN: 'LAMBORGHINI', RU: 'ЛАМБОРГИНИ' },
    price: '$199',
    imageUrl: '/images/artifacts/lamborghini-main.JPG',
    isLocked: false,
    level: AccessLevel.LIMITED,
    limitedQuantity: 50,
    description: { EN: 'ITALIAN SUPERCAR LEGEND.', RU: 'ЛЕГЕНДА ИТАЛЬЯНСКИХ СУПЕРКАРОВ.' },
    materials: {
      EN: ['CANVAS PRINT', 'SATIN FINISH', 'MODERN FRAME'],
      RU: ['ПЕЧАТЬ НА ХОЛСТЕ', 'САТИНОВОЕ ПОКРЫТИЕ', 'СОВРЕМЕННАЯ РАМА']
    },
    gallery: [
      '/images/artifacts/lamborghini-main.JPG',
      '/images/gallery/lamborghini-1.JPG',
      '/images/gallery/lamborghini-2.JPG',
      '/images/gallery/lamborghini-3.JPG',
      '/images/gallery/lamborghini-4.JPG',
      '/images/gallery/lamborghini-5.JPG'
    ]
  },
  {
    id: '10',
    title: { EN: '1% BETTER', RU: '1% ЛУЧШЕ' },
    price: '$199',
    imageUrl: '/images/artifacts/better-main.JPG',
    isLocked: false,
    level: AccessLevel.LIMITED,
    limitedQuantity: 50,
    description: { EN: 'EXPONENTIAL GROWTH MINDSET.', RU: 'ЭКСПОНЕНЦИАЛЬНЫЙ РОСТ МЫШЛЕНИЯ.' },
    materials: {
      EN: ['CANVAS PRINT', 'MATTE FINISH', 'WOOD FRAME'],
      RU: ['ПЕЧАТЬ НА ХОЛСТЕ', 'МАТОВОЕ ПОКРЫТИЕ', 'ДЕРЕВЯННАЯ РАМА']
    },
    gallery: [
      '/images/artifacts/better-main.JPG',
      '/images/gallery/better-1.JPG',
      '/images/gallery/better-2.JPG',
      '/images/gallery/better-3.JPG',
      '/images/gallery/better-4.JPG',
      '/images/gallery/better-5.JPG'
    ]
  },
  {
    id: '11',
    title: { EN: 'OKAME MASK', RU: 'МАСКА ОКАМЕ' },
    price: '$199',
    imageUrl: '/images/artifacts/okame-main.JPG',
    isLocked: false,
    level: AccessLevel.LIMITED,
    limitedQuantity: 50,
    description: { EN: 'JAPANESE SYMBOL OF JOY.', RU: 'ЯПОНСКИЙ СИМВОЛ РАДОСТИ.' },
    materials: {
      EN: ['FINE ART PRINT', 'TEXTURED PAPER', 'GOLD FRAME'],
      RU: ['ХУДОЖЕСТВЕННАЯ ПЕЧАТЬ', 'ТЕКСТУРИРОВАННАЯ БУМАГА', 'ЗОЛОТАЯ РАМА']
    },
    gallery: [
      '/images/artifacts/okame-main.JPG',
      '/images/gallery/okame-1.JPG',
      '/images/gallery/okame-2.JPG',
      '/images/gallery/okame-3.JPG',
      '/images/gallery/okame-4.JPG',
      '/images/gallery/okame-5.JPG'
    ]
  },
  {
    id: '12',
    title: { EN: 'YOU VS YOU', RU: 'ТЫ ПРОТИВ СЕБЯ' },
    price: '$199',
    imageUrl: '/images/artifacts/youvsyou-main.JPG',
    isLocked: false,
    level: AccessLevel.LIMITED,
    limitedQuantity: 50,
    description: { EN: 'INNER BATTLE REFLECTION.', RU: 'ОТРАЖЕНИЕ ВНУТРЕННЕЙ БОРЬБЫ.' },
    materials: {
      EN: ['MUSEUM CANVAS', 'PREMIUM QUALITY', 'BLACK FRAME'],
      RU: ['МУЗЕЙНЫЙ ХОЛСТ', 'ПРЕМИУМ КАЧЕСТВО', 'ЧЁРНАЯ РАМА']
    },
    gallery: [
      '/images/artifacts/youvsyou-main.JPG',
      '/images/gallery/youvsyou-1.JPG',
      '/images/gallery/youvsyou-2.JPG',
      '/images/gallery/youvsyou-3.JPG',
      '/images/gallery/youvsyou-4.JPG',
      '/images/gallery/youvsyou-5.JPG'
    ]
  },
  {
    id: '13',
    title: { EN: 'MONOLITH', RU: 'МОНОЛИТ' },
    imageUrl: '/images/artifacts/monolith-main.JPG',
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'ARCHIVE ACCESS REQUIRED.', RU: 'ТРЕБУЕТСЯ ДОСТУП К АРХИВУ.' }
  },
  {
    id: '14',
    title: { EN: 'VOID', RU: 'ПУСТОТА' },
    imageUrl: '/images/artifacts/void-main.JPG',
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'ARCHIVE ACCESS REQUIRED.', RU: 'ТРЕБУЕТСЯ ДОСТУП К АРХИВУ.' }
  },
  {
    id: '15',
    title: { EN: 'ECHO', RU: 'ЭХО' },
    imageUrl: '/images/artifacts/echo-main.JPG',
    isLocked: true,
    level: AccessLevel.ARCHIVE,
    description: { EN: 'ARCHIVE ACCESS REQUIRED.', RU: 'ТРЕБУЕТСЯ ДОСТУП К АРХИВУ.' }
  }
];
