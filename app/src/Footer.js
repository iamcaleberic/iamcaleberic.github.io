import React, { Component } from 'react'
import { Segment, List, Icon } from 'semantic-ui-react'

export default class Footer extends Component {
  render(){
    return (
      <Segment inverted basic>
      <center>
        <List relaxed centered>
          <List.Item>
            <List.Icon name='marker' verticalAlign='left'/>
            <List.Description content='Global' as='a'/>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' verticalAlign='middle'/>
            <List.Description content='iamcaleberic@tuta.io' as='a'/>
          </List.Item>
        </List>
        </center>
      </Segment>
    )
  }
}
