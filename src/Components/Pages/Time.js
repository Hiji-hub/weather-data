import React, { Component } from 'react'

class Time extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleTimeString(),
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().toLocaleTimeString(),
        });
      }


    render() {
        return(
            <div className='container'>
                <div className='content-time'>
                  <h1 className='time-title' style={{fontSize: '50px'}}>ВРЕМЯ</h1>
                  <h1 className='time-value' style={{fontSize:'70px'}}>Сейчас: {this.state.time}</h1>
                </div>
            </div>
        )
    }
}

export default Time
