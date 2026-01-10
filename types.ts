
export enum AccessLevel {
  CORE = 'LEVEL 01 CORE',
  LIMITED = 'LEVEL 02 LIMITED',
  ARCHIVE = 'LEVEL 03 ARCHIVE'
}

export interface Artifact {
  id: string;
  title: string;
  price?: string;
  imageUrl: string;
  isLocked: boolean;
  level: AccessLevel;
  description: string;
  materials?: string[];
  gallery?: string[];
}

export interface CartItem {
  artifact: Artifact;
  quantity: number;
}

export type Theme = 'dark' | 'light';
export type Language = 'EN' | 'RU';
export type Page = 'home' | 'ship' | 'contact' | 'about' | 'map';
