import React, {useMemo, FC} from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarContent,
  getContent,
  getSidebarTrigger,
} from '@mui-treasury/layout';
import {getMuiTreasuryScheme} from '@mui-treasury/layout/presets';
import {
  Toolbar,
  CssBaseline,
} from '@material-ui/core';
import {createMuiTheme, ThemeProvider, responsiveFontSizes, makeStyles, createStyles} from '@material-ui/core/styles';
import {useTheme} from './hooks';
import {
  ContentEx,
  HeaderEx,
  NavContentEx,
} from './templates';
import {useStoreContext} from './Store';
import {AppOptions} from '../types';

const useStyles = makeStyles(() => createStyles({
  content: {
    height: '100%',
  },
}));

const muiTreasuryPreset = getMuiTreasuryScheme();
const Header            = getHeader(styled);
const DrawerSidebar     = getDrawerSidebar(styled);
const SidebarContent    = getSidebarContent(styled);
const SidebarTrigger    = getSidebarTrigger(styled);
const Content           = getContent(styled);

const App: FC<{
  options: AppOptions;
}> = ({options}: { options: AppOptions }) => {
  const {store: {themeColor}} = useStoreContext();
  const themeObject           = useTheme(themeColor);
  const theme                 = responsiveFontSizes(createMuiTheme(themeObject));
  const classes               = useStyles({theme});

  return useMemo(() => (
    <Root scheme={muiTreasuryPreset}>
      <Helmet title={options.title}/>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Root>
  ), [classes, theme]);
};

export default App;
