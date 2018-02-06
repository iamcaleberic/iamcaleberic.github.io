import React, { Component } from 'react'
import { Segment, Grid, Card, Icon, Image, Divider } from 'semantic-ui-react'
import myself from './me.jpg'

import Stack from './Stack'

export default class S2 extends Component {
  render(){
    return(
      <Segment basic >
        <Grid stackable columns='2' >
          <Grid.Column>
            <Card centered>
              <Image src={myself} />
              <Card.Content >
                <Card.Header as='a' id='big'>Eric Caleb</Card.Header>
                <Card.Meta> 2018 </Card.Meta>
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
              <Card.Content extra>
                <a href="https://stackoverflow.com/users/6360989/iamcaleberic">
                <Image src="https://stackoverflow.com/users/flair/6360989.png?theme=dark" width="208" height="58" alt="profile for iamcaleberic at Stack Overflow,
                Q&amp;A for professional and enthusiast programmers" title="profile for iamcaleberic at Stack Overflow, Q&amp;A for professional and
                enthusiast programmers"/>
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
