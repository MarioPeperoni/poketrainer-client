import { z } from 'zod';

export const TrainerFormSchema = z.object({
  trainerName: z
    .string()
    .min(2, 'Required from 2 to 20 symbols')
    .max(20, 'Required from 2 to 20 symbols'),
  trainerAge: z
    .number('Required range from 16-99')
    .min(16, 'Required range from 16-99')
    .max(99, 'Required range from 16-99'),
  pokemonName: z.string().min(1, 'Choose something'),
});
