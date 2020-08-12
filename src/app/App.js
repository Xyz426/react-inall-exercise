import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter,NavLink} from "react-router-dom";
import Home from "./Home";
import Calculator from './Calculator';
import Countdown from './Countdown';

class App extends Component {
  render() {
    return (
      <div className="app">
        
        <BrowserRouter>

          <Route exact path='/' component={Home}/>
          <Route exact path='/calculator' component={Calculator}/>
          <Route exact path='/countdown' component={Countdown}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
