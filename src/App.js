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

const Main = () => {
   return(
      <Switch>
         <Route exact path='/' render={(props) => <Event />}/>
         <Route exact path='/About' render={(props) => <About/>}/>
         <Route exact path='/Event-Guide' render={(props) => <Event />}/>
         <Route exact path='/Livestream' render={(props) => <Livestream />}/>
      </Switch>
   )
}

const Home = () => (
   <div className="container fade-in-fast">
      <div className="centerBox">
         <div className="logo">
            <Link to="/">
               <span className="logo">SISTEM</span>
            </Link>
         </div>
         <Location />
         <Menu />
         <Main />
         <SocialMedia />
      </div>
   </div>
);

class App extends Component {
  constructor(){
    super()
    this.state = {
         logoOver: localStorage.getItem('seenLogo') !== "false"
      }
      this.logoAnimationCheck = this.logoAnimationCheck.bind(this)
   }

   logoAnimationCheck = () => {
      this.setState({
         logoOver: true
      }, () => {
         localStorage.setItem('seenLogo', true);
      });
   }

   render() {
      const Loader = () => (
         <LogoAnimation 
            finishedAnimation={this.logoAnimationCheck}
         />
      );

      return (
         <div>
            {
               !this.state.logoOver 
                  ? <Loader />
                  : <Home /> 
            }
         </div>
      );
   }
}

export default App;
