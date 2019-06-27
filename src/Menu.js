import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (   
      <ul className="menu">       
        <li><NavLink activeClassName="active" to='/intro'>Intro</NavLink></li>
        <li><NavLink activeClassName="active" to='/houses'>Houses</NavLink></li>
      </ul>
  )
}

export default Menu 