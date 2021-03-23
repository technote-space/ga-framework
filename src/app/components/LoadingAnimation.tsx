import type {FC} from 'react';
import React, {memo} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  loading: {
    textAlign: 'center',
  },
}));

const LoadingAnimation: FC = memo(() => {
  const classes = useStyles();

  return <div className={classes.loading}>
    <img src={'images/loading.svg'} alt="Loading"/>
  </div>;
});

LoadingAnimation.displayName = 'LoadingAnimation';
export default LoadingAnimation;
