import React, { Component ,NavLink} from 'react'
import {Link} from 'react-router-dom';

class Countdown extends Component{
        state={
            count: 0,
            start: false,
        }
 

  
      handleInputChange = (event) => {
          this.setState({
              count: parseInt(event.target.value)
          })
      }
  
      setCount = () => {
          this.setState({
              start: true,
          })
          this.timer = setInterval(() => {
              if(this.state.count >= 1) {
                this.setState({ 
                count: this.state.count - 1,
                })
              } else {
                this.setState({
                  start: false,
              })
              }
          }, 1000)
      }

      render() { return (
      <div className="countdown">
        <div className="countdes">在线倒计时器</div>
            
            <label htmlFor="inputTime">设置时间</label>
            <input type="text" name="inputTime" onChange={this.handleInputChange}/> 


            <div>
                <button disabled={this.state.start} onClick={this.setCount}>Start</button>
            </div>

             <div>{`${this.state.count}Seconds`}</div>

        <div>
            <Link to="/">回到主页</Link>
        </div>

      </div>);
      }
}

export default Countdown;