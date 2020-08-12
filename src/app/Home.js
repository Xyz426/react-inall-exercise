import React from 'react';
import './home.less';
import {NavLink} from "react-router-dom";
import backGroundURL from '../images/hero-image.png'
import calculatorURL from '../images/calculator.png'
import timerURL from '../images/timer.png'

const Home = () => {
  return (
  <div className="home">
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to='/calculator'>在线计算机</NavLink>
        <NavLink to='/countdown'>在线倒计时</NavLink>
    </nav>
    <div>
    <h1>在线实用工具</h1>
    <img src={backGroundURL} tabIndex='在线实用工具'></img>
    </div>
    <NavLink to='/calculator' >进入计算页面</NavLink>

    <NavLink to='/countdown' > 进入倒计时页面</NavLink>            
  </div>);
};

export default Home;