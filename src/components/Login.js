import React, {Component, Fragment} from 'react'
import {
    Segment,
    Select,
    Image,
    Icon,
    Button,
    Tab,
} from 'semantic-ui-react'
import Semantic1 from './Semantic1'


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
    handleClick = () => {
        // console.log("Helo")
        return <Semantic1/>
    }


    render() {
        return (
            <Fragment>
                <Segment.Group>
                    Test
                    {/* <LoginHeader />
                    <LoginGridLayout /> */}
                </Segment.Group>
            </Fragment>
        )
    }
}

export default Login;