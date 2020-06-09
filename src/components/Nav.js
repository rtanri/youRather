import React, {Component, Fragment} from 'react'

class Nav extends Component {
  render(){
      return (
          <Fragment>
                <ul className='nav'>
                    <li>
                        Home
                    </li>
                    <li>
                        Leaderboard
                    </li>
                    <li>
                        Add Question
                    </li>
                </ul>
          </Fragment>
      )
  }
}
export default Nav