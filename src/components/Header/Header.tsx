import React from 'react';
import { ReactElement } from 'react';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import './header.scss';

function Header(): ReactElement {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="container">
          <Logo />
        </div>
        
      </div>
      
      <Navbar />
    </header>
  )
}

export default Header