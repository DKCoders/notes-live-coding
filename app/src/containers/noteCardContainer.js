import { connect } from 'react-redux';
import NoteCard from '../components/NoteCard';
import { actions, selectors } from '../modules';

const mapStateToProps = () => (state, { noteId }) => ({
  note: selectors.note.noteByIdSelector(state, { noteId }),
});

const mapDispatchToProps = dispatch => ({
  updateEditableNote(note) {
    dispatch(actions.note.updateEditableNote(note));
  },
  deleteNote(note) {
    dispatch(actions.note.deleteNote(note));
  },
});
const noteCardContainer = connect(mapStateToProps, mapDispatchToProps)(NoteCard);

export default noteCardContainer;
