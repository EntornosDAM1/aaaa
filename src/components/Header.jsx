import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="header-navbar">
        <div className="navbar-logo">
          <img className="logo-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png" width="50" height="70"/>  
        </div>
        <h1>Mi aplicación</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listas">Listas de tareas</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;