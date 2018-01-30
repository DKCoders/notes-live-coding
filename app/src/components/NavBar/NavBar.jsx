import React from 'react';

const NavBar = () => (
  <div className="navbar is-fixed-top is-black">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item brand-text">
          Notes App
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <input className="input" type="text" placeholder="Search notes..." />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;