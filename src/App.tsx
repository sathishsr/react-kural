import React, { FC } from 'react';

import './App.css';
import ToolBarView from './toolbar/ToolbarView';
import { AppProvider } from './context/context';
import KuralDashboard from './dashboard/KuralDashboard';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { HashRouter, Route, Switch } from "react-router-dom";



const paletteTheme = createTheme({
  palette: {
    primary: {
      light: 'red',
      main: 'orange',
      dark: 'blue',
      contrastText: 'black',
    },
    secondary: {
      light: '#f0e6e6',
      main: '#c93434',
      dark: '#3c3c3c',
      contrastText: '#000',
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
    <ThemeProvider theme={theme}>
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
