import React, { Component } from 'react';
import './App.css';
import logo from './Images/logo-lg.png';
import shareButton from './Images/button.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dialogOpen: false
    }
    this.shareDialogBox = this.shareDialogBox.bind(this);
  }

  shareDialogBox() {
    this.setState ({
      dialogOpen : !this.state.dialogOpen
    })
  }

  render() {
    const open = this.state.dialogOpen;
    return (
      <div className="App">
        <div className="container center">
          <div className="logo">
            <img src={logo}/>
          </div>
          <div className="overlay center">
            <button onClick={this.shareDialogBox} className="share-btn center">Share</button>
          </div>
        </div>
        <div className={open ? 'dialogBox open' : 'dialogBox'}>
          <div className="dialogBox-content">
            some stuff
          </div>
        </div>
      </div>
    );
  }
}

export default App;
