import React, { Component } from 'react';


class LogoAnimation extends Component {
    
    render() {
    
      setTimeout(() => {this.props.finishedAnimation()}, 7500)
      return (
        <div className="container">
        <div className="centerBox">
          <p className="logo">
            <p><span className='logoS'>S</span><span className='logo-rest'>Students</span></p>
            <p><span className='logoI'>I</span><span className='logo-rest'>Inter</span></p>
            <p><span className='logoS2'>S</span><span className='logo-rest'>Society</span></p>
            <p><span className='logoT'>T</span><span className='logo-rest'>Tech</span></p>
            <p><span className='logoE'>E</span><span className='logo-rest'>Enterprise</span></p>
            <p><span className='logoM'>M</span><span className='logo-rest'>Meetup</span></p>
          </p>
          </div>
          </div>
      );
    }
  }
  
  export default LogoAnimation;
  