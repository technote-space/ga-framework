import type {FC} from 'react';
import type {AppOptions} from '$/types';
import React, {memo, useMemo} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {getTitle} from '@/common';
import {useStoreContext} from '@/Store';

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
}> = memo(({options}) => {
  const {store} = useStoreContext();
  const classes = useStyles();

  const title             = useMemo(() => getTitle(options, store), [store, options.title]);
  const titleView         = useMemo(() => <Typography noWrap color={'textSecondary'} className={classes.header}>{title}</Typography>, [classes]);
  const beforeHeaderTitle = useMemo(() => options.parts?.beforeHeaderTitle ? options.parts.beforeHeaderTitle() : null, []);
  const afterHeaderTitle  = useMemo(() => options.parts?.afterHeaderTitle ? options.parts.afterHeaderTitle() : null, []);

  return <>
    {beforeHeaderTitle}
    {titleView}
    {afterHeaderTitle}
  </>;
});

HeaderEx.displayName = 'HeaderEx';
export default HeaderEx;
