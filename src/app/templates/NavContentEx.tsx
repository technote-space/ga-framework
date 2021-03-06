import type {FC} from 'react';
import type {AppOptions} from '$/types';
import type {Theme} from '@material-ui/core/styles';
import React, {memo, useMemo, useState, useEffect} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {grey, orange} from '@material-ui/core/colors';
import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@material-ui/core';
import {useSidebar} from '@mui-treasury/layout/hooks';
import clsx from 'clsx';
import {useStoreContext, useDispatchContext} from '@/Store';

const useStyles = makeStyles((theme: Theme) => createStyles({
  list: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: orange[500],
      color: grey[50],
    },
  },
  active: {
    backgroundColor: theme.palette.primary.main,
  },
  wrap: {
    background: theme.palette.background.default,
    color: theme.palette.secondary.contrastText,
    marginTop: 10,
    padding: 5,
  },
  wrapButtons: {
    textAlign: 'center',
  },
  button: {
    margin: 5,
  },
}));

const NavContentEx: FC<{
  options: AppOptions;
}> = memo(({options}) => {
  const {store: {page, status, worker, control}, store} = useStoreContext();
  const {dispatch}                                      = useDispatchContext();
  const classes                                         = useStyles();
  const {setOpen}                                       = useSidebar('primarySidebar');
  const [controller, setController]                     = useState<JSX.Element | null>(null);

  const switchPerspective = next => (): void => {
    if (next !== page) {
      dispatch({type: 'PAGE', page: next});
    }

    setOpen('primarySidebar', false);
  };

  const hidePages  = useMemo(() => options.hidePages ? options.hidePages(store) : [], [store]);
  const menu       = useMemo(() => <List>
    {Object.keys(options.pages).filter(page => !hidePages.includes(page)).map(page => ({
      page,
      text: options.pages[page].text,
      icon: options.pages[page].icon,
    })).map(item =>
      <ListItem
        key={item.page}
        onClick={switchPerspective(item.page)}
        className={clsx(classes.list, page === item.page ? classes.active : '')}>
        <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
        <ListItemText primary={item.text} primaryTypographyProps={{noWrap: true}}/>
      </ListItem>,
    )}
  </List>, [page, hidePages, classes]);
  const beforeMenu = useMemo(() => options.parts?.beforeMenu ? options.parts.beforeMenu() : null, []);
  const afterMenu  = useMemo(() => options.parts?.afterMenu ? options.parts.afterMenu() : null, []);

  useEffect(() => {
    if (worker) {
      setController(<div className={classes.wrap}>
        <div className={classes.wrapButtons}>
          <Button
            className={classes.button}
            onClick={control.reset(store)}
            disabled={status === 'disabled' || (status !== 'initialized' && status !== 'finished' && status !== 'canceled')}
          >
            Reset
          </Button>
          <Button className={classes.button} onClick={control.start(store)} disabled={status === 'disabled' || (status !== 'initialized' && status !== 'canceled')}>
            Start
          </Button>
          <Button className={classes.button} onClick={control.stop(store)} disabled={status === 'disabled' || status !== 'started'}>
            Stop
          </Button>
        </div>
      </div>);
    } else {
      setController(null);
    }
  }, [worker, status, classes]);

  return <>
    {beforeMenu}
    {menu}
    {controller}
    {afterMenu}
  </>;
});

NavContentEx.displayName = 'NavContentEx';
export default NavContentEx;
