import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div className = 'navbar'>
                <div>
                    <NavLink className = "navLink" to='/'>Landing Page </NavLink>
                </div>
                <div>
                    <NavLink className = "navLink"to='/dashboard'>Dashboard Page </NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar