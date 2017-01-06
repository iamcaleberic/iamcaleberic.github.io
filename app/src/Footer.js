import React, { Component } from 'react'
import { Segment, List } from 'semantic-ui-react'

export default class Footer extends Component {
  render(){
    return (
      <Segment inverted basic>
      <center>
        <List relaxed>
          <List.Item>
            <List.Icon name='marker' verticalAlign='top'/>
            <List.Description content='Global' as='a' id='footer-link'/>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' verticalAlign='top'/>
            <List.Description content='iamcaleberic@tuta.io' as='a' id='footer-link'/>
          </List.Item>
        </List>
        </center>
      </Segment>
    )
  }
}
