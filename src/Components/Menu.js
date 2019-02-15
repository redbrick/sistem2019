import React, { Component } from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';



const Menu = () => (
   <ul className="menu-container">
      <li className="menu-item">
         <Link to='/About'>About</Link>
      </li>
      <li className="menu-item">
         <Link to='/Livestream'>Live Stream</Link>
      </li>
      <li className="menu-item">
         <Link to='/Event-Guide'>Event Guide</Link>
      </li>
      <li className="menu-item">
         <a href='https://tickets.redbrick.dcu.ie/'>Tickets</a>
      </li>
   </ul>
);

export default Menu;

