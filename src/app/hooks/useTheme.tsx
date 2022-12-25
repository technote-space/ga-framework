import type { Theme } from '@mui/material/styles';
import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { blue, grey, pink } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';

const useTheme = (themeColor?: 'light' | 'dark'): Theme => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const colorMode       = themeColor || (prefersDarkMode ? 'dark' : 'light');
  const bgColor         = colorMode === 'dark' ? grey[900] : grey[50];
  const fgColor         = colorMode === 'dark' ? grey[50] : grey[900];
  const fgColor2        = colorMode === 'dark' ? grey[600] : grey[300];

  return useMemo(() =>
    createTheme({
      components: {
        MuiContainer: {
          styleOverrides: {
            root: {
              marginTop: 80,
            },
          },
        },
        MuiButton: {
          defaultProps: {
            color: 'primary',
            variant: 'contained',
          },
          styleOverrides: {
            root: {
              textTransform: 'none',
              color: 'white',
            },
            text: {
              fontSize: '1rem',
            },
          },
        },
        MuiBadge: {
          defaultProps: {
            color: 'secondary',
          },
        },
        MuiTextField: {
          defaultProps: {
            variant: 'outlined',
          },
        },
        MuiCheckbox: {
          defaultProps: {
            color: 'primary',
          },
        },
        MuiRadio: {
          defaultProps: {
            color: 'primary',
          },
        },
        MuiSwitch: {
          defaultProps: {
            color: 'primary',
          },
        },
        MuiList: {
          defaultProps: {
            dense: false,
          },
        },
        MuiTable: {
          defaultProps: {
            size: 'small',
          },
        },
        MuiLink: {
          defaultProps: {
            color: 'textPrimary',
            underline: 'always',
          },
        },
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              backgroundColor: bgColor,
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundColor: bgColor,
            },
          },
        },
        MuiTab: {
          styleOverrides: {
            textColorInherit: {
              fontSize: '1rem',
            },
          },
        },
        MuiInputLabel: {
          styleOverrides: {
            root: {
              '&$focused': {
                fontWeight: 'bold',
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            input: {
              WebkitBoxShadow: '0 0 0 100px ${bgColor} inset',
            },
          },
        },
        MuiFormLabel: {
          styleOverrides: {
            root: {
              '&$focused': {
                fontWeight: 'bold',
              },
            },
          },
        },
        MuiFormControl: {
          styleOverrides: {
            root: {
              width: '-webkit-fill-available',
            },
          },
        },
        MuiListItemText: {
          styleOverrides: {
            root: {
              flex: 'none',
              minWidth: 200,
            },
          },
        },
        MuiSlider: {
          styleOverrides: {
            valueLabel: {
              top: -22,
              '& *': {
                background: 'transparent',
                color: fgColor,
              },
            },
            thumb: {
              height: 24,
              width: 24,
              marginTop: -11,
            },
          },
        },
      },
      palette: {
        mode: colorMode,
        background: {
          default: bgColor,
          paper: blue.A700,
        },
        primary: {
          main: blue.A700,
          contrastText: fgColor,
        },
        secondary: {
          main: pink.A400,
          contrastText: fgColor2,
        },
      },
      typography: {
        h1: {
          fontSize: '3rem',
        },
        h2: {
          fontSize: '2.5rem',
        },
        h3: {
          fontSize: '2rem',
        },
        h4: {
          fontSize: '1.75rem',
        },
        h5: {
          fontSize: '1.5rem',
        },
        h6: {
          fontSize: '1.25rem',
        },
        subtitle1: {
          fontSize: '1rem',
        },
        subtitle2: {
          fontSize: '1rem',
        },
        body1: {
          fontSize: '1rem',
        },
        body2: {
          fontSize: '1rem',
        },
        button: {
          fontSize: '1rem',
          textTransform: 'none',
        },
        caption: {
          fontSize: '1rem',
        },
        overline: {
          fontSize: '1rem',
        },
      },
      mixins: {
        toolbar: {
          minHeight: 50,
        },
      },
      breakpoints: {
        keys: [
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
        ],
        values: {
          xs: 460, // mobile
          sm: 768, // tablet
          md: 1024, // pc
          lg: 1000000000,
          xl: 1000000000,
        },
      },
    }), [colorMode, fgColor, bgColor],
  );
};

export default useTheme;
