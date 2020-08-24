import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {handleAddPoll} from '../actions/shared'
import {
    Form,
    Header,
    TextArea,
    Button,
    Segment
} from 'semantic-ui-react'


class AddQuestion extends Component{
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false, 
    }

    handleOptionOne = (e) => {
        this.setState({
            optionOne: e.target.value
        })
    }

    handleOptionTwo = (e) => {
        this.setState({
            optionTwo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOne, optionTwo} = this.state
        this.props.addPoll(optionOne, optionTwo)
        this.setState(() => ({
            toHome: true
        }))
    }

    render(){

        const { text, optionOne, optionTwo, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        const disabled = this.state.optionOne === "" 
                        || this.state.optionTwo === "" 
                        || this.state.optionOne.length > 25 
                        || this.state.optionTwo.length > 25;


        return(
            <div class="contentMargin loginMenu">
            <Segment raised>
                <Header as="h2" textAlign="center">New Question Form</Header>
                <Form>
                    <Form.Field
                        id ='form-input-control-first-option'
                        control={TextArea}
                        label='Enter First Option 👇🏼'
                        placeholder='less than 25 characters'
                        onChange={this.handleOptionOne}
                        required
                    />

                    <Form.Field
                        id='form-input-control-second-option'
                        control={TextArea}
                        label='Enter Second Option 👇🏼'
                        placeholder='less than 25 characters'
                        onChange={this.handleOptionTwo}
                        required
                    />

                    <Form.Button 
                        positive 
                        size="tiny" 
                        fluid 
                        disabled={disabled}
                        onClick = {this.handleSubmit}
                    >
                        Submit
                    </Form.Button>
                </Form>
            </Segment>
            </div>
            
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addPoll: (optionOne, optionTwo) => {
            dispatch(handleAddPoll(optionOne, optionTwo))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddQuestion)