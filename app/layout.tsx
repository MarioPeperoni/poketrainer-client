import localFont from 'next/font/local';
import type { Metadata, Viewport } from 'next';
import './globals.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import MuiThemeProvider from '@/providers/ThemeProvider';
import QueryProvider from '@/providers/QueryProvider';

const ibmVga = localFont({
  src: '../public/fonts/Web437_IBM_VGA_9x16.woff',
  variable: '--font-ibm-vga',
});

export const metadata: Metadata = {
  title: 'PokéTrainer',
  description: 'Pokémon trainer registration app',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmVga.className} antialiased`}>
        <QueryProvider>
          <AppRouterCacheProvider>
            <MuiThemeProvider>{children}</MuiThemeProvider>
          </AppRouterCacheProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
