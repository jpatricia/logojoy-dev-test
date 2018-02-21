import React, { Component } from 'react';
import './App.css';
import logo from './Images/logo-lg.png';
import shareButton from './Images/button.png';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container center">
          <div className="logo">
            <img src={logo}/>
          </div>
          <div className="overlay center">
            <button className="share-btn center">Share</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
