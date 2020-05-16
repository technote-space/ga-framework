import React, {FC} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {useMemo} from 'react';
import {AppOptions} from '../../types';

const useStyles = makeStyles(({breakpoints}) => createStyles({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18,
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const HeaderEx: FC<{
  options: AppOptions;
}> = ({options}) => {
  const classes = useStyles();
  return useMemo(() => <div>
    {options.parts?.beforeHeaderTitle}
    <Typography noWrap color={'textSecondary'} className={classes.header}>{options.title}</Typography>
    {options.parts?.afterHeaderTitle}
  </div>, [classes]);
};

export default HeaderEx;
