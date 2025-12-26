export type Pokemon = {
  id: number;
  name: string;
  type: string[];
  experience: number;
  spriteUrl: string;
};

export type PokemonSearchResult = {
  id: number;
  name: string;
};
