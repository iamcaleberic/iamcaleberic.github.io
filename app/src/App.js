import React, { Component } from 'react';

import MainMenu from './Menu'
import SectionOne from './SectionOne'

import './App.css';
import './semantic/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <MainMenu />
        <SectionOne />
      </div>
    );
  }
}

export default App;
