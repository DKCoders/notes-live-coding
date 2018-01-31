import { connect } from 'react-redux';
import NotesWrapper from '../components/NotesWrapper';
import { selectors } from '../modules';

const mapStateToProps = state => ({
  noteIds: selectors.note.noteIdsSelector(state),
});

const notesWrapperContainer = connect(mapStateToProps, null)(NotesWrapper);

export default notesWrapperContainer;
