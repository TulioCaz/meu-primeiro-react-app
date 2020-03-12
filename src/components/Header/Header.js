import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src="https://i.imgur.com/KDIDiSE.png" alt="facebook-logo"/>
          <div>
            <a href="/">Meu perfil</a>
            <i className="material-icons" >account_circle</i>
          </div>
        </nav>
      </header>
    );
  };
};

export default Header;
