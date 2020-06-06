import React, {Component} from 'react'
import Nav from './Nav'
import AccountSetting from './AccountSetting'

class MenuBar extends Component {
    render () {
        return (
            <div className="menu-bar">
                <Nav />
                <AccountSetting />
            </div>
        )
    }
}

export default MenuBar