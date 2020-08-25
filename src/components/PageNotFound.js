import React, {Component} from 'react'
import {
    Header,
    Segment,
    Button,
    Icon,
} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

class PageNotFound extends Component{
    state = {
        toHome: false,
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(() => ({
            toHome: true
        }))
    }

    render(){

        const { toHome } = this.state

        if (toHome === true){
            return <Redirect to='/' />
        }

        return (
            <div class='contentMargin'>
                <Segment placeholder className='loginMenu'>
                    <Header icon as='h1' textAlign='center' >
                        <Icon name='ban' />
                        Error 404 - Page Not Found
                    <Header.Subheader>
                        We can't seem to find the page or question that you are looking for
                    </Header.Subheader>    
                    </Header>
              
                    <Button 
                        onClick = {this.handleSubmit}
                        content = "Back to home"
                        centered
                    />
                </Segment>
            </div>
        )
    }
}


export default PageNotFound