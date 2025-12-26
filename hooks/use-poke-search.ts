import { useState } from 'react';

import useDebounce from '@/hooks/use-debounce';
import { useSearchPokemonQuery } from '@/queries/use-pokemon-query';

export default function usePokeSearch() {
  const [inputValue, setInputValue] = useState('');
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(null);

  const debouncedSearchQuery = useDebounce(inputValue);

  const searchQuery = useSearchPokemonQuery(debouncedSearchQuery);

  const reset = () => {
    setInputValue('');
    setSelectedPokemonId(null);
  };

  return {
    inputValue,
    setInputValue,
    selectedPokemonId,
    setSelectedPokemonId,
    searchQuery,
    debouncedSearchQuery,
    reset,
  };
}
