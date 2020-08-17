import React, {Component} from 'react'
import {
    Form,
    Header,
    TextArea,
    Button,
    Segment
} from 'semantic-ui-react'


class AddQuestion extends Component{
    render(){
        return(
            <div class="contentMargin loginMenu">
            <Segment raised>
                <Header as="h2" textAlign="center">New Question Form</Header>
                <Form>
                    <Form.Field
                        id ='form-input-control-first-option'
                        control={TextArea}
                        label='Enter First Option 👇🏼'
                        placeholder='less than 50 characters'
                        
                    />

                    <Form.Field
                        id='form-input-control-second-option'
                        control={TextArea}
                        label='Enter Second Option 👇🏼'
                        placeholder='less than 50 characters'
                    />

                    <Form.Field 
                        id='form-submit-button'
                        control={Button}
                        content=' Submit'
                    />
                </Form>
            </Segment>
            </div>
            
        )
    }
}

export default AddQuestion