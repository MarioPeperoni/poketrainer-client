import { GetPokemonById, SearchPokemonByQuery } from '@/data/pokemon';
import { useQuery } from '@tanstack/react-query';

export const POKEMON_QUERY_KEY = 'pokemon';
export const SEARCH_POKEMON_QUERY_KEY = 'search-pokemon';

export function usePokemonQuery(id: number | null) {
  return useQuery({
    queryKey: [POKEMON_QUERY_KEY, id],
    queryFn: async () => GetPokemonById(id!),
    enabled: id !== null && id > 0,
  });
}

export function useSearchPokemonQuery(query: string) {
  return useQuery({
    queryKey: [SEARCH_POKEMON_QUERY_KEY, query],
    queryFn: async () => SearchPokemonByQuery(query),
    enabled: query.length > 0,
  });
}
