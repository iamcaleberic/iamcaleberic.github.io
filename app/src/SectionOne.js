import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import Typist from 'react-typist';


class SectionOne extends Component {

  state = {
    renderSkills: false,
  }

  skillsTyped = () => {
   this.setState({ renderSkills: true });
 }


  render() {
    const contentStyle = {
      'paddingTop':'50px'
    }

    return (
        <Segment className='first' inverted>
          <div className="inline field">
            <center>
              <div className="content" style={contentStyle}>
                <div className="ui header " id="big">
                  <p> def DevOps & Fullstack & Linux Systems Engineer</p>
                </div>
                <br/>

                <Typist
                  startDelay={2000}
                  onTypingDone={this.skillsTyped}
                  cursor={{ hideWhenDone: true }}
                 >
                  <p><b>puts 'Eric Caleb'</b></p>
                  <div>
                    <p><b>return [ DevOps Engineering  ,</b></p>
                    <p><b>Fullstack Engineering ,</b></p>
                    <p><b>Linux Systems Engineering ]</b></p>
                  </div>
                </Typist>
                {this.state.renderSkills ? (
                  <Typist
                    cursor={{ hideWhenDone: true }}

                  >
                    <br/>
                    <b>puts 'Ruby'</b>
                    <br/>
                    <b>puts 'Python'</b>
                    <br/>
                    <b>puts 'Node'</b>
                    <br/>
                    <b>puts 'C'</b>
                    <span id="typed"></span>
                    <br/>
                    <div className="ui header " id="big"> end <span className="typed-cursor"> | </span> </div>
                  </Typist>) : null }
              </div>
            </center>
          </div>
        </Segment>
    );
  }
}

export default SectionOne;
