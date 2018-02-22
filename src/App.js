import React, { Component } from 'react';
import './App.css';
import logo from './Images/logo-lg.png';
import close from './Images/close.png';
import twitter from './Images/twitter.png';
import facebook from './Images/facebook.png';
import email from './Images/email.png';
import group from './Images/Group.png';

const socialMedia = [
  {name: 'twitter', img: twitter, link: 'https://twitter.com'},
  {name: 'facebook', img: facebook, link: 'https://facebook.com'},
  {name: 'email', img: email, link: 'mailto:mailto:?body='},
  {name: 'group', img: group, link: 'https://logojoy.com/'}
];

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
          <div className="dialogBox-content center">
            <button onClick={this.shareDialogBox} className="close-btn">
              <img src={close} />
            </button>
            <div className="content-container">
              <div className="social-medias">
                Share with:
                {socialMedia.map(e => {
                  return (
                    <a href={e.link}>
                      <img src={e.img} />
                    </a>
                  )
                  })
                }
              </div>
              <div className="main-content">
                <div className="left-col">
                  stuff
                </div>
                <div className="right-col">
                  <div className="big-img">

                  </div>
                  <div className="info">
                    <h2>The #1 Free Logo Maker - Logojoy</h2>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in diam a enim ullamcorper aliquet.
                    </div>
                    <a href="https://logojoy.com/"> www.logojoy.com </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
