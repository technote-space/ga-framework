import type { FC, MouseEventHandler } from 'react';
import React, { memo } from 'react';
import {
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  Close as CloseIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { amber, green } from '@mui/material/colors';
import SnackbarContent from '@mui/material/SnackbarContent';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const SnackbarContentWrapper: FC<{
  className?: string;
  message: string;
  onClose: MouseEventHandler;
  variant: 'error' | 'info' | 'success' | 'warning';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  other?: any;
}> = memo(({ className, message, onClose, variant, ...other }) => {
  const Icon    = variantIcon[variant];
  const colors = {
    success: green[600],
    error: 'error.dark',
    info: 'primary.main',
    warning: amber[700],
  };

  return (
    <SnackbarContent
      className={className}
      sx={{ backgroundColor: colors[variant] }}
      aria-describedby="client-snackbar"
      message={
        <Box id="client-snackbar" sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon sx={{ fontSize: 20, opacity: 0.9, marginRight: 1 }}/>
          {message}
        </Box>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon sx={{ fontSize: 20 }}/>
        </IconButton>,
      ]}
      {...other}
    />
  );
});

SnackbarContentWrapper.displayName = 'SnackbarContentWrapper';
export default SnackbarContentWrapper;
