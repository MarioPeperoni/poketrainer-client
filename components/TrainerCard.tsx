import { Stack, Box } from '@mui/material';

import TrainerForm from '@/components/TrainerForm';
import { DateDisplay } from '@/components/DateDisplay';

function TrainerCard() {
  return (
    <Box component={'main'} className="border-gray-300 border p-8">
      <Stack className="gap-6">
        <DateDisplay />
        <TrainerForm />
      </Stack>
    </Box>
  );
}

export default TrainerCard;
