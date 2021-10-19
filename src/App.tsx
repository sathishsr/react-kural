import React, { FC } from 'react';

import './App.css';
import ToolBarView from './toolbar/ToolbarView';
import { AppProvider } from './context/context';
import KuralDashboard from './dashboard/KuralDashboard';
import { createStyles, createTheme, makeStyles, Theme, ThemeOptions, ThemeProvider } from '@material-ui/core';
import { purple, lightBlue } from '@material-ui/core/colors';
import { HashRouter, Route, Switch } from "react-router-dom";


const paletteTheme = createTheme({
  overrides: {
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: lightBlue[300],

        },
      },
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const theme = createTheme();

theme.typography.body2 = {
  [theme.breakpoints.up('md')]: {
    fontSize: 16,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 16,
  },
};


const appTheme = createTheme(theme, paletteTheme)
function App() {

  return (
    <ThemeProvider theme={appTheme}>
      <AppProvider>
        <div>
          <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={MainContainerView} />
            </Switch>

            <div className="footer" />
          </HashRouter>
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

const MainContainerView: FC<{}> = () => {
  return (<ToolBarView>
    <KuralDashboard />

  </ToolBarView>)
}

export default App;
