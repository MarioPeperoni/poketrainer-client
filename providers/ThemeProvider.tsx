'use client';

import { createTheme, ThemeProvider } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    soft: true;
  }
}

const themeOptions: ThemeOptions = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#9747FF',
      dark: '#7135BF',
      light: '#9747FF40',
    },
    secondary: {
      main: '#5F656B',
    },
    grey: {
      100: '#2A2A2A',
      200: '#7F7F7F',
      300: '#E4E4E4',
      400: '#EEEEEE',
    },
    error: {
      main: '#FF4E4E',
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            backgroundColor: 'var(--mui-palette-primary-main)',
            padding: '10px 24px',
            color: 'var(--mui-palette-primary-contrastText)',
            ':hover': {
              backgroundColor: 'var(--mui-palette-primary-dark)',
            },
            ':focus': {
              boxShadow: '0 0 0 4px var(--mui-palette-primary-light)',
            },
          },
        },
        {
          props: { variant: 'soft' },
          style: {
            backgroundColor: 'var(--mui-palette-grey-400)',
            padding: '10px 24px',
            ':hover': {
              backgroundColor: 'var(--mui-palette-grey-300)',
            },
            ':focus': {
              boxShadow: '0 0 0 4px var(--mui-palette-primary-light)',
            },
          },
        },
      ],
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // Primary color for text
          color: 'var(--mui-palette-text-primary)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--mui-palette-grey-400)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--mui-palette-primary-main)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            boxShadow: '0 0 0 4px var(--mui-palette-primary-light)',
            borderColor: 'var(--mui-palette-primary-main) !important',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--mui-palette-grey-400)',
          },
          '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--mui-palette-primary-main)',
          },
          '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--mui-palette-primary-main) !important',
            boxShadow: '0 0 0 4px var(--mui-palette-primary-light)',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          '&:hover': {
            backgroundColor: 'var(--mui-palette-primary-light)',
          },
          '&.Mui-focused': {
            backgroundColor: 'transparetn',
          },
        },
        option: {
          '&:hover': {
            backgroundColor: 'var(--mui-palette-primary-light)',
          },
          '&.Mui-focused': {
            backgroundColor: 'var(--mui-palette-primary-light)',
          },
          '&[aria-selected="true"]': {
            color: 'var(--mui-palette-primary-main)',
            backgroundColor: 'transparent',
          },
          '&[aria-selected="true"]:hover': {
            backgroundColor: 'transparent',
          },
          '&[aria-selected="true"].Mui-focused': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: 'var(--font-ibm-vga), Arial, sans-serif',
    allVariants: {
      letterSpacing: '0%',
    },
  },
});

function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={themeOptions}>{children}</ThemeProvider>;
}

export default MuiThemeProvider;
