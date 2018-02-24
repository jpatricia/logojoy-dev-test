import React, { Component } from 'react';
import './App.css';
import logo from './Images/logo-lg.png';
import close from './Images/close.png';
import twitter from './Images/twitter.png';
import facebook from './Images/facebook.png';
import email from './Images/email.png';
import group from './Images/Group.png';
import shirt from './Images/t-shirt-lg.png';
import sm from './Images/sm-lg.png';
import bc from './Images/bc-lg.png';
import logoThmb from './Images/logo-thmb.png';
import shirtThmb from './Images/t-shirt-thmb.png';
import smThmb from './Images/sm-thmb.png';
import bcThmb from './Images/bc-thmb.png';

const socialMedia = [
  {name: 'twitter', img: twitter, link: 'https://twitter.com'},
  {name: 'facebook', img: facebook, link: 'https://facebook.com'},
  {name: 'email', img: email, link: 'mailto:mailto:?body='},
  {name: 'group', img: group, link: 'https://logojoy.com/'}
];

const images = [
  {name: 'logo', thmb: logoThmb, img: logo},
  {name: 'shirt', thmb: shirtThmb, img: shirt},
  {name: 'bc', thmb: bcThmb, img: bc},
  {name: 'sm', thmb: smThmb, img: sm}
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      dialogOpen: false,
      imageActive: 'logo'
    };
    this.shareDialogBox = this.shareDialogBox.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  shareDialogBox() {
    this.setState ({
      dialogOpen : !this.state.dialogOpen
    });
  }

  onHover(imgName) {
    this.setState ({
      imageActive: imgName
    });
  }

  onMouseOut() {
    this.setState ({
      imageActive: 'logo'
    });
  }

  render() {
    const open = this.state.dialogOpen;
    const {imageActive} = this.state;
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
                <span>Share with:</span>
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
                  {images.map(i => {
                    return(
                      <img src={i.thmb} onMouseOver={() => this.onHover(i.name)} onMouseOut={this.onMouseOut}/>
                    )
                    })
                  }
                </div>
                <div className="right-col">
                  <div className="big-img">
                    {images.map(i => {
                      return(
                        <img src={i.img} className={imageActive === i.name ? 'active' : 'none' }/>
                      )
                      })
                    }
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
