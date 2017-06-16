import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridListExampleSimple from "./env"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <GridListExampleSimple />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
