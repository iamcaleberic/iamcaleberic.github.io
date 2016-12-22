import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import cx from 'classnames'
import Typist from 'react-typist';


class SectionOne extends Component {
  render() {
    const contentStyle = {
      'paddingTop':'50px'
    }

    return (
        <Segment className='first' inverted>
          <div className="inline field">
            <center>
              <p className="content" style={contentStyle}>
                <div className="ui header " id="big">
                  <p> def Fullstack & DevOps Engineer</p>
                </div>
                <br/>
                <Typist>
                  <span>puts "Eric Caleb"</span>
                  <div>
                    <p><b>Fullstack Engineering</b></p>
                    <p><b>and</b></p>
                    <p><b>DevOps Engineering</b></p>
                    <p><b>and</b></p>
                    <p><b>Security Architecture</b></p>
                  </div>
                </Typist>
                <Typist>
                  <br/>
                  <b>puts Ruby</b>
                  <br/>
                  <b>puts Python</b>
                  <br/>
                  <b>puts Node.js</b>
                  <br/>
                  <b>puts C</b>
                  <span id="typed"></span>
                  <br/>
                  <div className="ui header " id="big"> end <span className="typed-cursor"> | </span> </div>
                </Typist>
              </p>
            </center>
          </div>
        </Segment>
    );
  }
}

export default SectionOne;
