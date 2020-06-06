import React, {Component} from 'react'

class Divider extends Component {
    render() {
        return (
            <ul className='divider'>
                <li activeClassName='active'>
                    Unanswered
                </li>
                <li activeClassName='active'>
                    Answered
                </li>
            </ul>
        )
    }
}
export default Divider