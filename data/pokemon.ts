'use server';

import axios from 'axios';

import type { Pokemon, PokemonSearchResult } from '@/types/pokemon';

const apiUrl = process.env.BACKEND_URL;

export async function SearchPokemonByQuery(query: string): Promise<PokemonSearchResult[]> {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const response = await axios.get(`${apiUrl}/api/search`, {
    params: { q: query },
  });

  return response.data as PokemonSearchResult[];
}

export async function GetPokemonById(id: number) {
  const response = await axios.get(`${apiUrl}/api/pokemon`, {
    params: { id },
  });

  return response.data as Pokemon;
}
