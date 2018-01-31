import { connect } from 'react-redux';
import NoteCard from '../components/NoteCard';
import { selectors } from '../modules';

const mapStateToProps = () => (state, { noteId }) => ({
  note: selectors.note.noteByIdSelector(state, { noteId }),
});

const noteCardContainer = connect(mapStateToProps, null)(NoteCard);

export default noteCardContainer;
