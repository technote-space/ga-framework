import React, {FC, useMemo} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  loading: {
    textAlign: 'center',
  },
}));

const LoadingAnimation: FC = () => {
  const classes = useStyles();

  return useMemo(() =>
    <div className={classes.loading}>
      <img src={'images/loading.svg'} alt="Loading"/>
    </div>, [classes]);
};

export default LoadingAnimation;
