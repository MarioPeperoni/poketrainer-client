import TrainerCard from '@/components/TrainerCard';
import { getQueryClient } from '@/lib/query';
import { TIME_QUERY_FN, TIME_QUERY_KEY } from '@/queries/use-time-query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [TIME_QUERY_KEY],
    queryFn: TIME_QUERY_FN,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="min-h-screen flex items-center justify-center">
        <TrainerCard />
      </div>
    </HydrationBoundary>
  );
}
