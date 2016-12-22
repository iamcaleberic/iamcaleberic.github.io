import React, { Component } from 'react'
import { Header, Icon, List} from 'semantic-ui-react'

export default class Stack extends Component {
  render(){
    return(
      <div>
        <Header color='blue' content='The Stack' id='big' />
        <Icon name='mobile' />
        <Icon name='desktop' />
        <div className="content">
          Software Engineering is my passion and I believe alot can accomplished using code/technology and ofcourse good scripts. So
          basically what do I do? I am a Fullstack Engineer I majorly use JavaScript, ES6, Python, Ruby, C and Node .With DevOps I encourage
          Continuous Integration with tools like Circle CI & Travis CI and Continuous Development practices .My DevOps tools include Docker, Capistrano and Chef.
          Ethical hacking, Penetration testing, Linux Systems/Kernel are part of my skills.
          <List relaxed divided >
            <List.Item>
              <List.Icon name='code' verticalAlign='middle'/>
              <List.Content>
                <List.Header content='Frontend Stack' as='a' id='big'/>
                <List.Description content='Semantic UI' as='a'/>
                <List.Description content='React' as='a'/>
                <List.Description content='Redux' as='a'/>
                <List.Description content='ES6+' as='a'/>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name='code' verticalAlign='middle'/>
              <List.Content>
                <List.Header as='a' content='DevOps & CI' id='big'/>
                <List.Description content='Capistrano' as='a'/>
                <List.Description content='Travis' as='a'/>
                <List.Description content='Docker' as='a'/>
                <List.Description content='Chef' as='a'/>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name='code' verticalAlign='middle'/>
              <List.Content>
                <List.Header content='Ruby' as='a' id='big'/>
                <List.Description content='Rails' as='a'/>
                <List.Description content='Rspec' as='a'/>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name='code' verticalAlign='middle'/>
              <List.Content>
                <List.Header content='Python' as='a' id='big' />
                <List.Description content='Django' as='a' />
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name='code' verticalAlign='middle'/>
              <List.Content>
                <List.Header content='Deployment & Cloud' as='a' id='big'/>
                <List.Description content='Digital Ocean' as='a'/>
                <List.Description content='Microsoft Azure' as='a'/>
                <List.Description content='Amazon Web Services' as='a'/>
                <List.Description content='Google Cloud' as='a'/>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name='code' verticalAlign='middle'/>
              <List.Content>
                <List.Header as='a' content='Database (SQL & NOSQL)' id='big' />
                <List.Description content='Mongo DB' as='a'/>
                <List.Description content='Postgres' as='a'/>
                <List.Description content='MYSQL' as='a'/>
              </List.Content>
            </List.Item>
          </List>
        </div>
      </div>
    )
  }
}
