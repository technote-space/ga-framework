import React, {useMemo, FC} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    height: '150px',
  },
}));

const CircleBar: FC = () => {
  const classes = useStyles();
  return useMemo(
    () =>
      <div className={classes.root}>
        <CircularProgress size={150} thickness={5}/>
      </div>
    , [classes],
  );
};

export default CircleBar;
