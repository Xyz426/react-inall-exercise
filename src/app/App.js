import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter,NavLink} from "react-router-dom";
import Home from './component/Home/Home'
import Calculator from './component/Calculator/Calculator';
import Countdown from './component/CountDown/Countdown';
import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        
        <BrowserRouter>
          <Header/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/calculator' component={Calculator}/>
          <Route exact path='/countdown' component={Countdown}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
