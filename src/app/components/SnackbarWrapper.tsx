import type {FC} from 'react';
import React, {memo, useCallback} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import SnackbarContentWrapper from './SnackbarContentWrapper';
import {useDispatchContext, useStoreContext} from '../Store';
import {closeNotice} from '../common';

const useStyles = makeStyles(() => createStyles({
  snackbar: {},
  content: {},
}));

const SnackbarWrapper: FC = memo(() => {
  const {store: {notice}} = useStoreContext();
  const {dispatch}        = useDispatchContext();
  const classes           = useStyles();

  const handleClose = useCallback((): void => {
    closeNotice(dispatch);
  }, []);

  return <Snackbar
    className={classes.content}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    open={notice.open}
    autoHideDuration={6000}
    onClose={handleClose}
  >
    <SnackbarContentWrapper
      className={classes.content}
      message={notice.message}
      onClose={handleClose}
      variant={notice.variant}
    />
  </Snackbar>;
});

SnackbarWrapper.displayName = 'SnackbarWrapper';
export default SnackbarWrapper;
