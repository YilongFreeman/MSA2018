import { AppBar } from '@material-ui/core';

import * as React from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: {
      main: '#F57C00',
    },
  },
});

export default class Header extends React.Component<{}> {


  public render() {
    return (

      <MuiThemeProvider theme={theme}>
        <AppBar style={{opacity: 0.7}}position="static" color="primary">
          <h1>Weather Finder</h1>
          <p>
            Find out weather forcast and more...
        </p>
        </AppBar>
        </MuiThemeProvider>

    )
  }
};
