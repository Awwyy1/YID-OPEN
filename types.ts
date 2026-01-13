
export enum AccessLevel {
  CORE = 'LEVEL 01 CORE',
  LIMITED = 'LEVEL 02 LIMITED',
  ARCHIVE = 'LEVEL 03 ARCHIVE'
}

export interface LocalizedText {
  EN: string;
  RU: string;
}

export interface LocalizedArray {
  EN: string[];
  RU: string[];
}

export interface Artifact {
  id: string;
  title: LocalizedText;
  price?: string;
  priceWithLight?: string;
  priceWithoutLight?: string;
  imageUrl: string;
  isLocked: boolean;
  level: AccessLevel;
  description: LocalizedText;
  materials?: LocalizedArray;
  gallery?: string[];
  limitedQuantity?: number;
}

export interface CartItem {
  artifact: Artifact;
  quantity: number;
  withLight: boolean;
}

export type Theme = 'dark' | 'light';
export type Language = 'EN' | 'RU';
export type Page = 'home' | 'ship' | 'contact' | 'about' | 'map';
