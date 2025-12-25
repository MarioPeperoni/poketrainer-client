import { Typography, Stack, Box } from '@mui/material';
import TrainerForm from '@/components/TrainerForm';

function TrainerCard() {
  return (
    <Box component={'section'} className="border-gray-300 border p-8">
      <Stack className="gap-6">
        <div className="flex justify-end">
          <Typography>Wednesday, 06.03.2024</Typography>
        </div>
        <TrainerForm />
      </Stack>
    </Box>
  );
}

export default TrainerCard;
