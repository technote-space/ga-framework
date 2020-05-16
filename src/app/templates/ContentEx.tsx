import React, {FC, useMemo} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Switching} from '../components';
import {AppOptions} from '../../types';

const useStyles = makeStyles(() => createStyles({
  root: {
    margin: 'auto',
    height: 'calc(100% - 50px)',
  },
}));

const ContentEx: FC<{
  options: AppOptions;
}> = ({options}) => {
  const classes = useStyles();

  return useMemo(() => <Box className={classes.root}><Switching options={options}/></Box>, [classes]);
};

export default ContentEx;
