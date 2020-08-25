import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Header,
    Image,
    Table,
} from 'semantic-ui-react'


class Leaderboard extends Component{
    render(){
        const {users, data} = this.props
        return(
            <div class="contentMargin">
                <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Rank</Table.HeaderCell>
                        <Table.HeaderCell>User</Table.HeaderCell>
                        <Table.HeaderCell>Polls Created</Table.HeaderCell>
                        <Table.HeaderCell>Polls Answered</Table.HeaderCell>
                    </Table.Row>                    
                </Table.Header>

                <Table.Body>
                    {
                        data.map((user, index) => (
                            <Table.Row key={user.uid}>
                                <Table.Cell>{index+1}</Table.Cell>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src={users[user.uid].avatarURL} rounded size='tiny' />
                                        <Header.Content>
                                            {users[user.uid].name}
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>

                                <Table.Cell>{user.pollsCreated}</Table.Cell>
                                <Table.Cell>{user.pollsAnswered}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                
                </Table.Body>

            </Table>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    const data = Object.keys(users).map((uid) => {
      return {
        uid,
        pollsCreated: users[uid].questions.length,
        pollsAnswered: Object.keys(users[uid].answers).length
      }  
    }).sort((a, b) => (b.pollsCreated + b.pollsAnswered) - (a.pollsCreated + a.pollsAnswered))

    return {
        users,
        data
    }
}

export default connect(mapStateToProps)(Leaderboard)




// <Table.Row>
// <Table.Cell>2</Table.Cell>
// <Table.Cell>
//     <Header as='h4' image>
//         <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
//         <Header.Content>
//             Name 2
//             <Header.Subheader>Sales Engineer</Header.Subheader>
//         </Header.Content>
//     </Header>
// </Table.Cell>
// <Table.Cell>34</Table.Cell>
// <Table.Cell>81</Table.Cell>
// </Table.Row>

// <Table.Row>
// <Table.Cell>3</Table.Cell>
// <Table.Cell>
//     <Header as='h4' image>
//         <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
//         <Header.Content>
//             Name 3
//             <Header.Subheader>Product Manager</Header.Subheader>
//         </Header.Content>
//     </Header>
// </Table.Cell>
// <Table.Cell>56</Table.Cell>
// <Table.Cell>71</Table.Cell>
// </Table.Row>
