import React, { Component } from 'react';

import MainMenu from './Menu'
import SectionOne from './SectionOne'
import S2 from './S2'

import './App.css';
import './semantic/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <MainMenu />
        <SectionOne />
        <S2 />
      </div>
    );
  }
}

export default App;
