import React, {FC, useMemo, useEffect, useState} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
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
import {Controller, IController} from '@technote-space/worker-controller';
import {useStoreContext, useDispatchContext} from '../Store';
import {AppOptions} from '../../types';

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
    background: '#555',
    marginTop: 10,
    padding: 5,
  },
  wrapButtons: {
    textAlign: 'center',
  },
  button: {
    margin: 5,
  },
  param: {
    margin: 5,
  },
}));

const NavContentEx: FC<{
  options: AppOptions;
}> = ({options}) => {
  const {store: {page}}     = useStoreContext();
  const {dispatch}          = useDispatchContext();
  const classes             = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [worker, setWorker] = useState<IController<any> | null>(null);
  const {setOpen}           = useSidebar('primarySidebar');

  const switchPerspective = next => (): void => {
    if (next !== page) {
      dispatch({type: 'PAGE', page: next});
    }

    setOpen('primarySidebar', false);
  };

  const menu = useMemo(() => <List>
    {Object.keys(options.pages).map(page => ({
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
  </List>, [classes, page]);

  const controller = useMemo(() => !worker ? null : <div className={classes.wrap}>
    <div className={classes.wrapButtons}>
      <Button className={classes.button} onClick={(): void => worker.reset()} disabled={status !== 'initialized' && status !== 'finished' && status !== 'canceled'}
      >
        Reset
      </Button>
      <Button className={classes.button} onClick={(): void => worker.start()} disabled={status !== 'initialized' && status !== 'canceled'}
      >
        Start
      </Button>
      <Button className={classes.button} onClick={(): void => worker.stop()} disabled={status !== 'started'}
      >
        Stop
      </Button>
    </div>
  </div>, [worker, status, classes]);

  useEffect(() => {
    const worker = new Controller(result => {
      if (options.controllerListener) {
        options.controllerListener(dispatch, result);
      }
    });
    setWorker(worker);
    worker.reset();
  }, []);

  return <>
    {options.parts?.beforeMenu}
    {menu}
    {controller}
    {options.parts?.afterMenu}
  </>;
};

export default NavContentEx;
