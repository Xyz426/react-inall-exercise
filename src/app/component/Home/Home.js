import React from 'react';
import './home.less';
import {NavLink} from "react-router-dom";
import calculatorURL from '../../../images/calculator.png'
import timerURL from '../../../images/timer.png'

const Home = () => {
  return (
  <div className="home">
    <div className='desc'><h1>在线实用工具</h1></div>

    <div className='content'>
      <div> 
        <img src={calculatorURL} className='content1'></img>
        <img src={timerURL} className='content2'></img>

        <div className='text'>
          <NavLink to='/calculator'>计算机</NavLink>
          <NavLink to='/calculator'>倒计时</NavLink>
        </div>        
      </div>
    </div>
  </div>   
  )      
};

export default Home;