'use client';

import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TrainerFormSchema } from '@/schemas/trainer';
import { useForm, Controller } from 'react-hook-form';

import { Autocomplete, Box, Button, InputLabel, Stack, TextField } from '@mui/material';
import PokemonPreview from '@/components/PokemonPreview';

function TrainerForm() {
  const form = useForm<z.infer<typeof TrainerFormSchema>>({
    resolver: zodResolver(TrainerFormSchema),
    defaultValues: {
      trainerName: '',
      trainerAge: undefined,
      pokemonName: '',
    },
  });

  const errors = form.formState.errors;

  const pokemon = {
    id: 1,
    name: 'Pikachu',
    type: ['Electric'],
    experience: 112,
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  };

  const onSubmit = () => {};

  return (
    <Box>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Stack className="gap-6">
          <Stack direction={'row'} className="gap-6">
            <Controller
              name="trainerName"
              control={form.control}
              render={({ field }) => (
                <Stack className="grow">
                  <InputLabel {...field}>Trainer&apos;s name</InputLabel>
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Trainer's name"
                    error={!!errors.trainerName}
                    helperText={errors.trainerName?.message}
                  />
                </Stack>
              )}
            />
            <Controller
              name="trainerAge"
              control={form.control}
              render={({ field }) => (
                <Stack className="grow">
                  <InputLabel {...field}>Trainer&apos;s age</InputLabel>
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Trainer's age"
                    slotProps={{
                      htmlInput: { maxLength: 2, inputMode: 'numeric', pattern: '[0-9]*' },
                    }}
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                      const value = e.target.value;
                      field.onChange(value ? Number(value) : '');
                    }}
                    error={!!errors.trainerAge}
                    helperText={errors.trainerAge?.message}
                  />
                </Stack>
              )}
            />
          </Stack>
          <Controller
            name="pokemonName"
            control={form.control}
            render={({ field }) => (
              <Stack>
                <InputLabel {...field}>Pokémon name</InputLabel>
                <Autocomplete
                  {...field}
                  options={[]}
                  renderInput={(params) => <TextField {...params} placeholder="Choose" />}
                />
              </Stack>
            )}
          />

          <PokemonPreview pokemon={pokemon} />
          <Stack direction={'row'} className="justify-end gap-4">
            <Button type="button" variant="soft">
              Reset
            </Button>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}

export default TrainerForm;
