import React from 'react'
import { NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/super-heroes">Traditional Super Heroes</NavLink>
                </li>
                <li>
                    <NavLink to="/rq-super-heroes">RQ Super Heroes</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Layout