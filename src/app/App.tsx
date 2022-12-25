import type { FC } from 'react';
import type { AppOptions } from '$/types';
import type { StatusResult } from '@technote-space/worker-controller';
import React, { memo, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Root,
  Header,
  SidebarContent,
  Content,
  EdgeTrigger,
  EdgeSidebar,
  EdgeTriggerProps,
} from '@mui-treasury/layout';
import {
  Toolbar,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useTheme } from './hooks';
import {
  ContentEx,
  HeaderEx,
  NavContentEx,
} from './templates';
import { useDispatchContext, useStoreContext } from './Store';
import { Controller } from '@technote-space/worker-controller';
import { getProcessContext, getTitle, updateStatus } from './common';

const App: FC<{
  options: AppOptions;
}> = memo(({ options }: { options: AppOptions }) => {
  const { store: { themeColor, reloadWorker }, store } = useStoreContext();
  const { dispatch }                                   = useDispatchContext();
  const themeObject                                    = useTheme(themeColor);
  const theme                                          = responsiveFontSizes(createTheme(themeObject));

  const title       = useMemo(() => getTitle(options, store), [store]);
  const cssBaseline = useMemo(() => <CssBaseline/>, []);
  const header      = useMemo(() => <Header>
    <Toolbar>
      <EdgeTrigger target={{ anchor: 'left', field: 'open' }}>
        {((open, setOpen) => (
          <button onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'}</button>
        )) as EdgeTriggerProps['children']}
      </EdgeTrigger>
      <HeaderEx options={options}/>
    </Toolbar>
  </Header>, []);
  const sidebar     = useMemo(() => <EdgeSidebar anchor="left">
    {({ setOpen }) => (
      <SidebarContent>
        <NavContentEx options={options} setOpen={setOpen}/>
      </SidebarContent>
    )}
  </EdgeSidebar>, []);
  const content     = useMemo(() => <Content sx={{ height: '100%' }}>
    <ContentEx options={options}/>
  </Content>, []);

  useEffect(() => {
    (async(): Promise<void> => {
      dispatch({ type: 'INITIALIZE' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const worker = new Controller((result: any | StatusResult) => {
        if ('status' in result) {
          updateStatus(result.status, dispatch);
        } else {
          dispatch({ type: 'RESULT', result });
        }
      }, {
        context: await getProcessContext(options, store),
      });
      dispatch({ type: 'WORKER', worker });
      dispatch({ type: 'INITIALIZED' });
    })().then();
  }, [reloadWorker]);

  return useMemo(() => (
    <ThemeProvider theme={theme}>
      <Root scheme={{
        header: {
          config: {
            xs: {
              position: 'sticky',
              height: 56,
            },
            md: {
              position: 'relative',
              height: 64,
              clipped: true,
            },
          },
        },
        leftEdgeSidebar: {
          autoCollapse: 'sm',
          config: {
            xs: {
              variant: 'temporary',
              width: 275,
            },
            md: {
              variant: 'permanent',
              width: 275,
              collapsible: false,
            },
            lg: {
              variant: 'permanent',
              width: 275,
              collapsible: false,
            },
          },
        },
      }}>
        <Helmet title={title}/>
        {cssBaseline}
        {header}
        {sidebar}
        {content}
      </Root>
    </ThemeProvider>
  ), [title, theme]);
});

App.displayName = 'App';
export default App;
