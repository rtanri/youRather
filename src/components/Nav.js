import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() { 
      return (
        <nav>
            <ul className='nav'>
                <li className='nav-li'>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink to='/leaderboard' exact activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink to='/add' exact activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
            </ul>
        </nav>
      )
}
