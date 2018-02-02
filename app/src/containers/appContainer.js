import { connect } from 'react-redux';
import App from '../components/App';
import { actions } from '../modules';

const mapStateToProps = state => ({
  modalLabel: state.appModule.label.modalLabel,
});

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

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;
