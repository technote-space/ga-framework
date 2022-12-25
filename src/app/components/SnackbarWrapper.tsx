import type { FC } from 'react';
import React, { memo, useCallback } from 'react';
import { Snackbar } from '@mui/material';
import SnackbarContentWrapper from './SnackbarContentWrapper';
import { useDispatchContext, useStoreContext } from '@/Store';
import { closeNotice } from '@/common';

const SnackbarWrapper: FC = memo(() => {
  const { store: { notice } } = useStoreContext();
  const { dispatch }          = useDispatchContext();

  const handleClose = useCallback((): void => {
    closeNotice(dispatch);
  }, []);

  return <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    open={notice.open}
    autoHideDuration={6000}
    onClose={handleClose}
  >
    <SnackbarContentWrapper
      message={notice.message}
      onClose={handleClose}
      variant={notice.variant}
    />
  </Snackbar>;
});

SnackbarWrapper.displayName = 'SnackbarWrapper';
export default SnackbarWrapper;
