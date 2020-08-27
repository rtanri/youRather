import React, {Component, } from 'react'
import {connect} from 'react-redux'
import {
    Segment,
    Image,
    Header,
    Grid,
    Form,
    Dimmer,
    Loader
} from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'
// import Semantic1 from './Semantic1'
// import { render } from '@testing-library/react'


class Login extends Component{
    // Loading State and handleLoading()
    state = {
        loading: false
    };
    handleLoading = () => {
        this.setState({loading: true})
    }

    render() {
        return (
            <div class='contentMargin'>
                <Segment.Group className="loginMenu">        
                    <LoginHeader />
                    <LoginBody 
                        image={<CoverImage/>}
                        form={<ConnectedLoginForm onLoading={this.handleLoading} />}
                        loading={this.state.loading}
                    />
                </Segment.Group>
            </div>
        )
    }
}


const LoginHeader = () => (
    <Header as='h2' textAlign='center' padded>
        <Header.Content>Welcome to Would-You-Rather App</Header.Content>
        <Header.Subheader>Know your appetite anytime, anywhere</Header.Subheader>
    </Header>
)


const LoginBody = ({image, form, loading}) => (
    <div>
        <Grid padded textAlign="center">
            <Grid.Row className="login">
                <Grid.Column width={16}>
                {/* to set the loading animation when page is not ready */}
                    {
                        loading === true && (
                            <Dimmer active inverted >
                                <Loader inverted content="Loading" />
                            </Dimmer>
                        )
                    }
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
        src = "images/food-table.jpg" size = "big" centered
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
        const {setAuthedUser, onLoading} = this.props;
        const authedUser = this.state.value;

        new Promise((res, rej) => {
            onLoading();
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
            <Form fluid className="formLogin" onSubmit={this.handleSubmit}>
                <Header as="h3"> 
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