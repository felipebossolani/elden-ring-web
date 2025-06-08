export interface EldenRingClass {
  id: string;
  name: string;
  image: string;
  description: string;
  stats: {
    level: string;
    vigor: string;
    mind: string;
    endurance: string;
    strength: string;
    dexterity: string;
    intelligence: string;
    faith: string;
    arcane: string;
  };
}

export interface EldenRingApiResponse<T> {
  success: boolean;
  count: number;
  data: T[];
}

export type EldenRingClassesResponse = EldenRingApiResponse<EldenRingClass>;

export interface EldenRingWeapon {
  id: string;
  name: string;
  image: string;
  description: string;
  attack: Array<{
    name: string;
    amount: number;
  }>;
  defence: Array<{
    name: string;
    amount: number;
  }>;
  scalesWith: Array<{
    name: string;
    scaling: string;
  }>;
  requiredAttributes: Array<{
    name: string;
    amount: number;
  }>;
  category: string;
  weight: number;
}

export type EldenRingWeaponsResponse = EldenRingApiResponse<EldenRingWeapon>;

export interface EldenRingCreature {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  drops: string[];
}

export type EldenRingCreaturesResponse = EldenRingApiResponse<EldenRingCreature>;

export interface PaginationInfo {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
} 