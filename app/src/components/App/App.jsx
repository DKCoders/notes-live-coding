import React, { Component } from 'react';
import NavBar from '../../containers/navBarContainer';
import Menu from '../../containers/menuContainer';
import NewNote from '../NewNote';
import NotesWrapper from '../../containers/notesWrapperContainer';
import ModalForm from "../../containers/modalFormContainer";
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  componentDidMount() {
    this.props.fetchLabels();
    this.props.fetchNotes();
  }

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
              <NewNote onClick={this.props.updateEditableNote} />
              <NotesWrapper />
            </div>
          </div>
        </div>
        <ModalForm />
      </React.Fragment>
    );
  }
}

export default App;
