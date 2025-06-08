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

export interface EldenRingAmmo {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  attackPower: Array<{
    name: string;
    amount: number;
  }>;
  passive: string;
}

export type EldenRingAmmoResponse = EldenRingApiResponse<EldenRingAmmo>;

export interface EldenRingAsh {
  id: string;
  name: string;
  image: string;
  description: string;
  affinity: string;
  skill: string;
}

export type EldenRingAshesResponse = EldenRingApiResponse<EldenRingAsh>;

export interface EldenRingBoss {
  id: string;
  name: string;
  image: string | null;
  region: string;
  description: string;
  location: string;
  drops: string[];
  healthPoints: string;
}

export type EldenRingBossesResponse = EldenRingApiResponse<EldenRingBoss>;

export interface EldenRingAmmo {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  attackPower: Array<{
    name: string;
    amount: number;
  }>;
  passive: string;
}

export type EldenRingAmmoResponse = EldenRingApiResponse<EldenRingAmmo>;

export interface EldenRingSorcery {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  cost: number;
  slots: number;
  effects: string;
  requires: Array<{
    name: string;
    amount: number;
  }>;
}

export type EldenRingSorceriesResponse = EldenRingApiResponse<EldenRingSorcery>;

export interface PaginationInfo {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
} 