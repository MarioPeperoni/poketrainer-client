import Image from 'next/image';

import { Box, Stack, Typography } from '@mui/material';
import TypeBadge from '@/components/PokemonTypeBadge';

import type { Pokemon } from '@/types/pokemon';

interface PokemonPreviewProps {
  pokemon: Pokemon | undefined;
}

function PokemonPreview({ pokemon }: PokemonPreviewProps) {
  return (
    <Box component={'div'} className="border border-gray-400 h-63.5 w-full">
      {pokemon ? (
        <div className="flex h-full justify-center items-center">
          <Stack direction={'row'} className="items-center gap-6">
            <Image
              src={pokemon.spriteUrl}
              alt={`${pokemon.name} sprite`}
              width={194}
              height={194}
            />
            <Stack className="gap-2">
              <Typography>Name: {pokemon.name}</Typography>
              <Stack direction={'row'} className="items-center gap-2">
                <Typography>Type:</Typography>
                {pokemon.type.map((type) => (
                  <TypeBadge key={type} type={type} />
                ))}
              </Stack>

              <Typography>Base experience: {pokemon.experience}</Typography>
              <Typography>Id: {pokemon.id}</Typography>
            </Stack>
          </Stack>
        </div>
      ) : (
        <div className="flex h-full justify-center items-center ">
          <Typography className="text-gray-200">Your pokémon</Typography>
        </div>
      )}
    </Box>
  );
}

export default PokemonPreview;
