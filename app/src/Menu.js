import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import './App.css'

class MainMenu extends Component {
  render() {
    return (
        <Menu inverted fixed='top' color='black'>
          <Container>
            <Menu.Item name='Eric Caleb'/>
          </Container>
        </Menu>
    );
  }
}

export default MainMenu
