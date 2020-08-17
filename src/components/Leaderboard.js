import React, {Component} from 'react'
import {
    Header,
    Image,
    Table,
} from 'semantic-ui-react'


class Leaderboard extends Component{
    render(){
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

                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                                <Header.Content>
                                    Name 1
                                    <Header.Subheader>Human Resources</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>

                        <Table.Cell>12</Table.Cell>
                        <Table.Cell>91</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                                <Header.Content>
                                    Name 2
                                    <Header.Subheader>Sales Engineer</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>34</Table.Cell>
                        <Table.Cell>81</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
                                <Header.Content>
                                    Name 3
                                    <Header.Subheader>Product Manager</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>56</Table.Cell>
                        <Table.Cell>71</Table.Cell>
                    </Table.Row>

                </Table.Body>

            </Table>
            </div>
        )
    }
}

export default Leaderboard