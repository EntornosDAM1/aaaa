import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import {MenuItems} from '../data/MenuItems.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  changeClicked(){
    this.setState(clicked = !this.state.clicked);
  }

  render() {
    return (
      <nav className="header-navbar">
        <div className="navbar-logo">
          <img className="logo-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png" width="50" height="70"/>  
        </div>
        
        <h1>Mi aplicación</h1>
        
        <ul>
          {/* Forma 3: map (función flecha) */}
          {MenuItems.map((item) => {
            return (
              <li key={item.id} classNmae="navbar-link">
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>

      </nav>
    );
  }
}

export default Header;