import React from 'react';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar(): ReactElement {
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/#aboutAs" className="navbar__link" activeClassName="navbar--active">О нас</NavLink>
          </li>
          <li>
            <NavLink to="/#aboutWorks" className="navbar__link" activeClassName="navbar--active">Как это работает</NavLink>
          </li>
          <li>
            <NavLink to="/#feedback" className="navbar__link" activeClassName="navbar--active">Отзывы</NavLink>
          </li>
          <li>
            <NavLink to="/#contacts" className="navbar__link" activeClassName="navbar--active">Контакты</NavLink>
          </li>  
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar