import React, { Component } from 'react'
import { Segment, Grid, Card, Icon, Image, Divider } from 'semantic-ui-react'

import Stack from './Stack'

export default class S2 extends Component {
  render(){
    return(
      <Segment basic >
        <Grid stackable columns='2' >
          <Grid.Column>
            <Card centered>
              <Image src='https://iamcaleberic.github.io/assets/images/me.jpg' />
              <Card.Content >
                <Card.Header as='a' id='big'>Eric Caleb</Card.Header>
                <Card.Meta> 2017 </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <a href='https://twitter.com/eric_caleb'>
                  <Icon name='twitter' />
                  eric_caleb
                </a>
                <a className="right floated" href='https://github.com/iamcaleberic'>
                  <Icon name='github' />
                  iamcaleberic
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Divider vertical />
          <Grid.Column>
            <Stack />
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}
