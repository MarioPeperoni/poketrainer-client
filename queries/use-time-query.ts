import { useQuery } from '@tanstack/react-query';

import { GetNTPTime } from '@/data/time';

export const TIME_QUERY_KEY = 'time';
export const TIME_QUERY_FN = async () => GetNTPTime();

export function useTimeQuery() {
  const query = useQuery({
    queryKey: [TIME_QUERY_KEY],
    queryFn: TIME_QUERY_FN,
  });

  return { ...query };
}
