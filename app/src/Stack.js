import React, { Component } from 'react'
import { Header, Icon, List} from 'semantic-ui-react'

export default class Stack extends Component {
  render(){
    return(
      <div>
        <Header content='The Stack' />
        <Icon name='mobile' />
        <Icon name='desktop' />
      </div>
    )
  }
}
