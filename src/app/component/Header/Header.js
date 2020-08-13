import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
        <div className="header">
        
                <nav className='links'>         
                        <NavLink to='/count' className='link'>在线倒计时</NavLink>
                        <NavLink to='/caculate' className='link'>在线计算器</NavLink>
                        <NavLink to='/' className='link'>Home</NavLink>   
                </nav>

        </div>);
};

export default Header;