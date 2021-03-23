import type {FC} from 'react';
import React, {memo} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Switching} from '@/components';
import {AppOptions} from '$/types';

const useStyles = makeStyles(() => createStyles({
  root: {
    margin: 'auto',
    height: 'calc(100% - 50px)',
  },
}));

const ContentEx: FC<{
  options: AppOptions;
}> = memo(({options}) => {
  const classes = useStyles();

  return <Box className={classes.root}>
    <Switching options={options}/>
  </Box>;
});

ContentEx.displayName = 'ContentEx';
export default ContentEx;
