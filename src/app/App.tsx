import React, {useMemo, FC, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import LayoutBuilder, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarContent,
  getContent,
  getSidebarTrigger,
} from '@mui-treasury/layout';
import {
  Toolbar,
  CssBaseline,
} from '@material-ui/core';
import {createMuiTheme, responsiveFontSizes, makeStyles, createStyles} from '@material-ui/core/styles';
import {useTheme} from './hooks';
import {
  ContentEx,
  HeaderEx,
  NavContentEx,
} from './templates';
import {useDispatchContext, useStoreContext} from './Store';
import {AppOptions} from '../types';
import {Controller, StatusResult} from '@technote-space/worker-controller';
import {getProcessContext, updateStatus} from './common';

const useStyles = makeStyles(() => createStyles({
  content: {
    height: '100%',
  },
}));

const scheme = LayoutBuilder();
scheme.configureHeader(builder => {
  builder
    .registerConfig('xs', {
      position: 'sticky',
      initialHeight: 56,
    })
    .registerConfig('md', {
      position: 'sticky',
      initialHeight: 64,
      clipped: true,
    });
});
scheme.configureEdgeSidebar(builder => {
  builder
    .create('primarySidebar', {
      anchor: 'left',
    })
    .registerTemporaryConfig('xs', {
      width: 275,
    })
    .registerPermanentConfig('md', {
      width: 275,
      collapsible: false,
    })
    .registerPermanentConfig('lg', {
      width: 275,
      collapsible: false,
    });
});
const Header         = getHeader(styled);
const DrawerSidebar  = getDrawerSidebar(styled);
const SidebarContent = getSidebarContent(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const Content        = getContent(styled);

const App: FC<{
  options: AppOptions;
}> = ({options}: { options: AppOptions }) => {
  const {store: {status, themeColor, reloadWorker}, store} = useStoreContext();
  const {dispatch}                                         = useDispatchContext();
  const themeObject                                        = useTheme(themeColor);
  const theme                                              = responsiveFontSizes(createMuiTheme(themeObject));
  const classes                                            = useStyles({theme});

  useEffect(() => {
    (async(): Promise<void> => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const worker = new Controller((result: any | StatusResult) => {
        if ('status' in result) {
          if (status !== 'disabled') {
            updateStatus(result.status, dispatch);
          }
        } else {
          dispatch({type: 'RESULT', result});
        }
      }, {
        context: await getProcessContext(options, store),
      });
      dispatch({type: 'WORKER', worker});
      dispatch({type: 'INITIALIZED'});
    })().then();
  }, [reloadWorker]);

  return useMemo(() => (
    <Root scheme={scheme} theme={theme}>
      <Helmet title={options.title}/>
      <CssBaseline/>
      <Header>
        <Toolbar>
          <SidebarTrigger sidebarId="primarySidebar"/>
          <HeaderEx options={options}/>
        </Toolbar>
      </Header>
      <DrawerSidebar sidebarId="primarySidebar">
        <SidebarContent>
          <NavContentEx options={options}/>
        </SidebarContent>
      </DrawerSidebar>
      <Content className={classes.content}>
        <ContentEx options={options}/>
      </Content>
    </Root>
  ), [classes, theme]);
};

export default App;
