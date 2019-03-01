import React, { Component } from 'react';
import './Menu.css';



class SocialMedia extends Component {
    
    render() {
        return (
            <div className="menu-container">
                <span className="fa-stack fa-lg icons">
                <a href="https://www.facebook.com/share.php?u=https://sistem.redbrick.dcu.ie/&title=SISTEM">
                <i className="fa fa-circle fa-stack-2x" style={{color: '#272324'}}></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
                </span>

                <span className="fa-stack fa-lg icons">
                <a href="https://twitter.com/intent/tweet?status=SISTEM+https://sistem.redbrick.dcu.ie/">
                <i className="fa fa-circle fa-stack-2x" style={{color: '#272324'}}></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
                </span>

            </div>
      );
    }
  }
  
  export default SocialMedia;
  
