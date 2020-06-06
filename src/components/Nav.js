import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/Leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/Add-New' activeClassName='active'>
            Add Question
          </NavLink>
        </li>
      </ul>
    </nav>
  )
} 