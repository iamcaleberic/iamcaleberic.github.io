import React, { Component } from 'react'
import { Segment, Card, Icon, Header } from 'semantic-ui-react'

import { Portfolio } from './Portfolio'

export default class S3 extends Component {
  render(){
    const portfolio = Portfolio
    return(
      <Segment basic>
        <Header as='div' color='blue' id='big' content='Portfolio' />
        <Card.Group stackable itemsPerRow={4} >
          { portfolio.map((project, i) => <Project {...this.props} i={i} key={i} project={project} />) }
        </Card.Group>
      </Segment>
    )
  }
}

class Project extends Component {
  render(){
    const {project} = this.props
    return(
        <Card >
          <Card.Content>
            <Card.Header content={project.name} id='big' />
            <Card.Meta content={project.stack} as='b'/>
            <Card.Description content={project.description} />
          </Card.Content>
          <Card.Content extra>
            <a href={project.link} target="_blank">
              <Icon name='browser' />
              Web
            </a>
            <a className="right floated" href={project.github} target="_blank">
              <Icon name='code' />
              Code
            </a>
          </Card.Content>
        </Card>
    )
  }
}
