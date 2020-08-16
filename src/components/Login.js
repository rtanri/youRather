import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {
    Segment,
    Select,
    Image,
    Icon,
    Button,
    Header,
    Tab,
    Grid,
    Form,
} from 'semantic-ui-react'
import Semantic1 from './Semantic1'
// import { render } from '@testing-library/react'
import { setAuthedUser } from '../actions/authedUser'


export class Login extends Component{
    render(){
        const panes = [
            { menuItem: 'Login', render: () => <Tab.Pane><Tab1/></Tab.Pane> },
            { menuItem: 'Dashboard', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
            { menuItem: 'Semantic UI', render: () => <Tab.Pane><Semantic1/></Tab.Pane> },
          ]
        return(
            <Tab panes={panes} />
        )
    }
}



class Tab1 extends Component{
    // Loading State and handleLoading()
    state = {
        loading: false
    };
    handleLoading = () => {
        console.log("Handle Loading")
    }

    render() {
        return (
            <div 
                class='contentMargin'
            >
                <Segment.Group className="loginMenu">        
                    <LoginHeader />
                    <LoginBody 
                        image={<CoverImage/>}
                        form={<ConnectedLoginForm />}
                    />
                </Segment.Group>
            </div>
        )
    }
}

const LoginHeader = () => (
    <Header as='h2' textAlign='center' padded>
        <Header.Content>Welcome to Would You Rather App</Header.Content>
        <Header.Subheader>Select your user to enter the app</Header.Subheader>
    </Header>
)


const LoginBody = ({image, form}) => (
    <div>
        <Grid padded textAlign="center">
            <Grid.Row className="login">
                <Grid.Column width={16}>
                    {image}
                    <br />
                    {form}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);


const CoverImage = () => (
    <Image 
        src = "images/ice-cream.jpeg" size = "medium" centered
    />
)

class LoginForm extends Component {
    state = {
        value: ''
    };

    onChange = (e, {value}) => {
        this.setState({value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const {setAuthedUser} = this.props;
        const authedUser = this.state.value;

        new Promise((res, rej) => {
            setTimeout(() => res(), 500);
        }).then(() => setAuthedUser(authedUser));
    };

    generateDropdownData = () => {
        const {users} = this.props;

        return users.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id,
            image : { avatar: true, src: user.avatarURL}
        }))
    }

    render() {
        const {value} = this.state;
        const disabled = value === '' ? true : false;

        return (
           <Segment inverted secondary >
            <Form fluid className="formLogin">
                <Header as="h3" inverted> 
                    Sign-in here 
                </Header>
                <Form.Dropdown
                    placeholder="Select a user"
                    fluid
                    selection
                    scrolling
                    options={this.generateDropdownData()}
                    value={value}
                    onChange={this.onChange}
                    required
                />
                <Form.Button content="Login" positive disabled={disabled} fluid />
            </Form>
           </Segment>

        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.values(users)
    };
}

const ConnectedLoginForm = connect(
    mapStateToProps,
    {setAuthedUser}
)(LoginForm);


export default Login;