import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div className = 'navbar'>
                <div>
                    <NavLink to='/'>Landing Page </NavLink>
                </div>
                <div>
                    <NavLink to='/dashboard'>Dashboard Page </NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar