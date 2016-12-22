import React, { Component } from 'react'
import { Segment, Header, Card } from 'semantic-ui-react'

import { Portfolio } from './Portfolio'

export default class S3 extends Component {
  render(){
    const portfolio = Portfolio
    return(
      <Segment>
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
          <Card.Header content={project.name} />
        </Card>
    )
  }
}
