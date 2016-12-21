import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

class SectionOne extends Component {
  render() {
    return (
        <Segment className='first' inverted>
          <p>Yes</p>
        </Segment>
    );
  }
}

export default SectionOne;
