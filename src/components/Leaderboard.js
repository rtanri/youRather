import React, {Component} from 'react'
import {
    Header,
    Image,
    Table,
    Label,
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
                        <Table.Cell>Name 1</Table.Cell>
                        <Table.Cell>12</Table.Cell>
                        <Table.Cell>91</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>Name 2</Table.Cell>
                        <Table.Cell>34</Table.Cell>
                        <Table.Cell>81</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>Name 3</Table.Cell>
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