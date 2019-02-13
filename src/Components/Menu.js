import React, { Component } from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';



class LogoAnimation extends Component {
    
    render() {
        return (
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
        {/*LINK TO THE TICKET SALES SITE GOES BELOW*/}
        <a href='#'>Tickets</a>
        </li>
        </ul>
      );
    }
  }
  
  export default LogoAnimation;
  