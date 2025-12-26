'use client';

import { SubmitTrainerData } from '@/data/trainer';
import { useMutation } from '@tanstack/react-query';

import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TrainerFormSchema } from '@/schemas/trainer';
import { useForm, Controller } from 'react-hook-form';

import usePokeSearch from '@/hooks/use-poke-search';
import { usePokemonQuery } from '@/queries/use-pokemon-query';

import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  InputLabel,
  Stack,
  TextField,
} from '@mui/material';
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

  const {
    inputValue,
    setInputValue,
    searchQuery,
    debouncedSearchQuery,
    selectedPokemonId,
    setSelectedPokemonId,
    reset,
  } = usePokeSearch();

  const pokeQuery = usePokemonQuery(selectedPokemonId);
  const pokemon = pokeQuery.data;

  const suggestions = searchQuery.data || [];
  const isSearching = searchQuery.isLoading || debouncedSearchQuery != inputValue;

  const errors = form.formState.errors;

  const mutation = useMutation({
    mutationFn: SubmitTrainerData,
    onSuccess: () => {
      console.log('Trainer data submitted successfully');
      handleReset();
    },
    onError: () => {
      console.error('Error submitting trainer data');
    },
  });

  const handleReset = () => {
    form.reset();
    reset();
  };

  return (
    <Box>
      <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))}>
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
                <InputLabel>Pokémon name</InputLabel>

                <Autocomplete
                  options={suggestions}
                  loading={isSearching}
                  inputValue={inputValue}
                  onInputChange={(_, value) => {
                    if (inputValue != value) setInputValue(value);
                  }}
                  value={suggestions.find((p) => p.name === field.value) ?? null}
                  onChange={(_, option) => {
                    field.onChange(option ? option.name : '');
                    setSelectedPokemonId(option ? option.id : null);
                  }}
                  getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
                  isOptionEqualToValue={(option, value) => option.name === value.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Choose"
                      error={!!errors.pokemonName}
                      helperText={errors.pokemonName?.message}
                      slotProps={{
                        input: {
                          ...params.InputProps,
                          endAdornment: (
                            <>
                              {isSearching ? <CircularProgress size={20} /> : null}
                              {params.InputProps.endAdornment}
                            </>
                          ),
                        },
                      }}
                    />
                  )}
                  noOptionsText={
                    debouncedSearchQuery ? 'No Pokémon found' : 'Start typing to search...'
                  }
                />
              </Stack>
            )}
          />

          <PokemonPreview pokemon={pokemon} />
          <Stack direction={'row'} className="justify-end gap-4">
            <Button type="button" variant="soft" onClick={handleReset}>
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
