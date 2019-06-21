import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Home from './Home';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#393E59', contrastText: '#9FB0BF' },
    secondary: { main: '#401D26', contrastText: '#A68C8A' },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <AppBar color="primary">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              <Link to="/">NASA:IOD</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={Home} />
        <Route path="/page/:page" component={Home} />
        <Route path="/image/:id" component={Home} />
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
