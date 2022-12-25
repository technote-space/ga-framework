import type { FC } from 'react';
import type { AppOptions } from '$/types';
import type { EDGE_SIDEBAR_ID } from '@mui-treasury/layout/utils/constant';
import React, { memo, useMemo, useState, useEffect } from 'react';
import { grey, orange } from '@mui/material/colors';
import {
  Box,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { useStoreContext, useDispatchContext } from '@/Store';

const NavContentEx: FC<{
  options: AppOptions;
  setOpen: (id: EDGE_SIDEBAR_ID, value: boolean) => void;
}> = memo(({ options, setOpen }) => {
  const { store: { page, status, worker, control }, store } = useStoreContext();
  const { dispatch }                                        = useDispatchContext();
  const [controller, setController]                         = useState<JSX.Element | null>(null);

  const switchPerspective = next => (): void => {
    if (next !== page) {
      dispatch({ type: 'PAGE', page: next });
    }

    setOpen('leftEdgeSidebar', false);
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
        sx={{
          cursor: 'pointer',
          '&:hover': { backgroundColor: orange[500], color: grey[50] },
          ...page === item.page ? { backgroundColor: 'primary.main' } : {},
        }}
      >
        <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
        <ListItemText primary={item.text} primaryTypographyProps={{ noWrap: true }}/>
      </ListItem>,
    )}
  </List>, [page, hidePages]);
  const beforeMenu = useMemo(() => options.parts?.beforeMenu ? options.parts.beforeMenu() : null, []);
  const afterMenu  = useMemo(() => options.parts?.afterMenu ? options.parts.afterMenu() : null, []);

  useEffect(() => {
    if (worker) {
      setController(<Box sx={{
        background: 'background.default',
        color: 'secondary.contrastText',
        marginTop: 10,
        padding: 5,
      }}>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            sx={{ margin: 5 }}
            onClick={control.reset(store)}
            disabled={status === 'disabled' || (status !== 'initialized' && status !== 'finished' && status !== 'canceled')}
          >
            Reset
          </Button>
          <Button sx={{ margin: 5 }} onClick={control.start(store)} disabled={status === 'disabled' || (status !== 'initialized' && status !== 'canceled')}>
            Start
          </Button>
          <Button sx={{ margin: 5 }} onClick={control.stop(store)} disabled={status === 'disabled' || status !== 'started'}>
            Stop
          </Button>
        </Box>
      </Box>);
    } else {
      setController(null);
    }
  }, [worker, status]);

  return <>
    {beforeMenu}
    {menu}
    {controller}
    {afterMenu}
  </>;
});

NavContentEx.displayName = 'NavContentEx';
export default NavContentEx;
