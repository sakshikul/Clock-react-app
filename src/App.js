import React from 'react';
import Clock from './Clock';
import "./App.css";

class App extends React.Component{
  render(){
    return(
      <div className = "app">
        <h1>Hello world!</h1>
        <Clock/>
      </div>
    )
  }
}

export default App;
