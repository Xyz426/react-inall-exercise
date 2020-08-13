import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
class Calculator extends Component{
    state={
        number:'',
    }

    setNum = (num) => {
        this.setState({
          number: this.state.number + num,
        })
    }

    getResult = () => {
        let result = 0;
        let numberinput = this.state.number;

        if (numberinput.indexOf('+') != -1) {
          let numberadd = numberinput.split('+');
          result = parseInt(numberadd[0]) + parseInt(numberadd[1]);
        }
        if (numberinput.indexOf('-') != -1) {
          let numberadd = numberinput.split('-');
          result = parseInt(numberadd[0]) - parseInt(numberadd[1]);
        }
        if (numberinput.indexOf('x') != -1) {
          let numberadd = numberinput.split('x');
          result = parseInt(numberadd[0]) * parseInt(numberadd[1]);
        }
        this.setState({
          number: result + '',
        })
      }
    
      clearNum = () => {
        this.setState({
          number: '',
        })
      }
    render(){
        return(
            <div>
                <div className='calculator'>
                    <h1>在线计算机</h1>
                </div>


                <input type="text" value={this.state.number}/> 

                <div>
                    <button onClick={() => this.setNum('+')}>+</button>
                    <button onClick={() => this.setNum('-')}>-</button>
                    <button onClick={() => this.setNum('x')}>x</button>
                </div>

                <div>
                    <button  onClick={() => this.setNum('7')}>7</button>
                    <button  onClick={() => this.setNum('8')}>8</button>
                    <button  onClick={() => this.setNum('8')}>9</button>
                </div>
                
                <div>
                    <button onClick={() => this.setNum('4')}>4</button>
                    <button onClick={() => this.setNum('5')}>5</button>
                    <button onClick={() => this.setNum('6')}>6</button>
                </div>
                <div>
                    <button onClick={() => this.setNum('1')}>1</button>
                    <button onClick={() => this.setNum('2')}>2</button>
                    <button onClick={() => this.setNum('3')}>3</button>
                </div>
                <div>
                    <button  onClick={() => this.setNum('0')}>0</button>
                    <button  onClick={this.clearNum}>clear</button>
                    <button  onClick={this.getResult}>=</button>
                </div>

                <div>
                    <NavLink to="/">回到主页</NavLink>
                </div>
            </div>
        )
    }
}

export default Calculator;