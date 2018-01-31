import React from 'react';

const NavBar = ({ setSearchTerm }) => (
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
            <input
              className="input"
              type="text"
              placeholder="Search notes..."
              onChange={event => setSearchTerm(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;