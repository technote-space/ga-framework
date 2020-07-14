import React, {FC, useMemo} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {AppOptions} from '../../types';
import {getTitle} from '../common';
import {useStoreContext} from '../Store';

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
  const {store} = useStoreContext();
  const classes = useStyles();

  const title     = useMemo(() => getTitle(options, store), [store, options.title]);
  const titleView = useMemo(() => <Typography noWrap color={'textSecondary'} className={classes.header}>{title}</Typography>, [classes]);

  return <>
    {options.parts?.beforeHeaderTitle ? options.parts.beforeHeaderTitle() : null}
    {titleView}
    {options.parts?.afterHeaderTitle ? options.parts.afterHeaderTitle() : null}
  </>;
};

export default HeaderEx;
