import React, { Component } from 'react';
import LogoAnimation from './Components/LogoAnimation.js';
import Menu from './Components/Menu.js';
import {Link} from 'react-router-dom';
import SocialMedia from './Components/SocialMedia'

import { Switch, Route } from 'react-router-dom';
import About from './Components/About.js';
import Event from './Components/Event.js';
import Livestream from './Components/Livestream.js';
import Location from './Components/Location.js';



class App extends Component {
  constructor(){
    super()
    this.state = {
      logoNotOver: true
    }
    this.logoAnimationCheck = this.logoAnimationCheck.bind(this)
  }

  logoAnimationCheck = () => {
    this.setState({
      logoNotOver: false
    })
  }

  render() {

    let Main = () => {
      return(
        <Switch>
        <Route exact path='/' render={(props) => <Event />}/>
        <Route exact path='/About' render={(props) => <About/>}/>
        <Route exact path='/Event-Guide' render={(props) => <Event />}/>
        <Route exact path='/Livestream' render={(props) => <Livestream />}/>
        </Switch>
      )
    }

    return (
      <div>
      {this.state.logoNotOver ? <LogoAnimation finishedAnimation={this.logoAnimationCheck} /> : <div className="container"><div className="centerBox"><p className="logo"><p><Link to="/"><span className="logo">SISTEM</span></Link></p></p></div>
      <Location />
      <Menu />
      <Main />
      <SocialMedia />
      </div>}
      </div>
    );
  }
}

export default App;
