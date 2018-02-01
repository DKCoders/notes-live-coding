import { connect } from 'react-redux';
import App from '../components/App';
import { actions } from '../modules';

const mapDispatchToProps = dispatch => ({
  fetchLabels() {
    dispatch(actions.label.fetchLabels());
  },
  fetchNotes() {
    dispatch(actions.note.fetchNotes());
  },
  updateEditableNote(note) {
    dispatch(actions.note.updateEditableNote(note));
  },
});

const appContainer = connect(null, mapDispatchToProps)(App);

export default appContainer;
