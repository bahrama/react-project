import React, { useContext } from 'react'
import './Header.css'
import NavBar from './../NavBar/Navbar'

const Header = () => {
return (
    <div className="Header">
      <div className="TopBar">
        <NavBar />
        <div className="Cart">
          <h4>header</h4>
        </div>
      </div>
      <h3>title</h3>
    </div>
  );
};

export default Header