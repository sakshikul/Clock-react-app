import React from "react";
import "./Clock.css";


class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = { date : new Date()}
    }

    render(){
        return(
            <div className ="clock">
               
                <h2 className = "clock__display">The current time is {this.state.date.toLocaleTimeString()}</h2>
                <div className = "clock__image">
                <img src ="./images/clock.png" alt ="clock" />
                </div>
            </div>
        )
    }
}

export default Clock;