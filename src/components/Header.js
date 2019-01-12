import React from 'react'

import logo from '../logo.svg';
import './Header.css'

function Header() {
  return (
        <header className="component-header">
          <img src={logo} className="header-logo" alt="logo" />
          <h1>Customers</h1>
        </header>
  )
}



export default Header