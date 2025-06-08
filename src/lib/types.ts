export interface Class {
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

export interface ApiResponse<T> {
  success: boolean;
  count: number;
  data: T[];
}

export type ClassesResponse = ApiResponse<Class>;

export interface Weapon {
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

export type WeaponsResponse = ApiResponse<Weapon>;

export interface Item {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  effect: string;
}

export interface Talisman {
  id: string;
  name: string;
  image: string;
  description: string;
  effect: string;
}

export type TalismansResponse = ApiResponse<Talisman>;

export interface Armor {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  dmgNegation: Array<{
    name: string;
    amount: number;
  }>;
  resistance: Array<{
    name: string;
    amount: number;
  }>;
  weight: number;
}

export type ArmorsResponse = ApiResponse<Armor>;

export interface Creature {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  drops: string[];
}

export type CreaturesResponse = ApiResponse<Creature>;

export interface Incantation {
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

export type IncantationsResponse = ApiResponse<Incantation>;

export interface Sorcery {
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

export type SorceriesResponse = ApiResponse<Sorcery>;

export interface Location {
  id: string;
  name: string;
  image: string;
  region: string;
  description: string;
}

export type LocationsResponse = ApiResponse<Location>;

export interface Ammo {
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

export type AmmoResponse = ApiResponse<Ammo>;

export interface Ash {
  id: string;
  name: string;
  image: string;
  description: string;
  affinity: string;
  skill: string;
}

export type AshesResponse = ApiResponse<Ash>;

export interface Boss {
  id: string;
  name: string;
  image: string | null;
  region: string;
  description: string;
  location: string;
  drops: string[];
  healthPoints: string;
}

export type BossesResponse = ApiResponse<Boss>;

export interface NPC {
  id: string;
  name: string;
  image: string;
  quote: string | null;
  location: string;
  role: string;
}

export type NPCsResponse = ApiResponse<NPC>;

export interface PaginationInfo {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
}