import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import MuiThemeProvider from '@/providers/ThemeProvider';

import TrainerCard from '@/components/TrainerCard';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <MuiThemeProvider>
            <TrainerCard />
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </main>
    </div>
  );
}
