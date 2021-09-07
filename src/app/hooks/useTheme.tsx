import type {Theme} from '@material-ui/core/styles';
import {useMemo} from 'react';
import {createTheme} from '@material-ui/core/styles';
import {blue, grey, pink} from '@material-ui/core/colors';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useTheme = (themeColor?: 'light' | 'dark'): Theme => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const colorMode       = themeColor || (prefersDarkMode ? 'dark' : 'light');
  const bgColor         = colorMode === 'dark' ? grey[900] : grey[50];
  const fgColor         = colorMode === 'dark' ? grey[50] : grey[900];
  const fgColor2        = colorMode === 'dark' ? grey[600] : grey[300];

  return useMemo(() =>
    createTheme({
      props: {
        MuiContainer: {},
        MuiButton: {
          color: 'primary',
          variant: 'contained',
        },
        MuiBadge: {
          color: 'secondary',
        },
        MuiTextField: {
          variant: 'outlined',
        },
        MuiCheckbox: {
          color: 'primary',
        },
        MuiRadio: {
          color: 'primary',
        },
        MuiSwitch: {
          color: 'primary',
        },
        MuiList: {
          dense: false,
        },
        MuiTable: {
          size: 'small',
        },
        MuiLink: {
          color: 'textPrimary',
          underline: 'always',
        },
      },
      palette: {
        type: colorMode,
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
      overrides: {
        MuiAppBar: {
          colorPrimary: {
            backgroundColor: bgColor,
          },
        },
        MuiPaper: {
          root: {
            backgroundColor: bgColor,
          },
        },
        MuiButton: {
          root: {
            textTransform: 'none',
            color: 'white',
          },
          label: {
            fontSize: '1rem',
          },
        },
        MuiTab: {
          textColorInherit: {
            fontSize: '1rem',
          },
        },
        MuiInputLabel: {
          root: {
            '&$focused': {
              fontWeight: 'bold',
            },
          },
        },
        MuiInput: {},
        MuiOutlinedInput: {
          input: {
            WebkitBoxShadow: '0 0 0 100px ${bgColor} inset',
          },
        },
        MuiFormLabel: {
          root: {
            '&$focused': {
              fontWeight: 'bold',
            },
          },
        },
        MuiFormControl: {
          root: {
            width: '-webkit-fill-available',
          },
        },
        MuiContainer: {
          root: {
            marginTop: 80,
          },
        },
        MuiList: {},
        MuiListItem: {},
        MuiListItemText: {
          root: {
            flex: 'none',
            minWidth: 200,
          },
        },
        MuiSwitch: {},
        MuiTypography: {},
        MuiSlider: {
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
    }), [colorMode, fgColor, bgColor],
  );
};

export default useTheme;
