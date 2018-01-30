import React, { Component } from 'react';
import NavBar from '../NavBar';
import Menu from '../Menu';
import NewNote from '../NewNote';
import NotesWrapper from '../NotesWrapper';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <Menu />
            </div>
            <div className="column is-9">
              <NewNote />
              <NotesWrapper />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
