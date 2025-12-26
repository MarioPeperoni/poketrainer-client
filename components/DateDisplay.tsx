'use client';

import { useTimeQuery } from '@/queries/use-time-query';

import { Typography } from '@mui/material';

export function DateDisplay() {
  const query = useTimeQuery();

  return (
    <div className="flex justify-end">
      <Typography>{query.data?.formatted}</Typography>
    </div>
  );
}
