import { connect } from 'react-redux';
import ModalForm from '../components/ModalForm';
import { actions } from '../modules';

const mapStateToProps = () => state => ({
  note: state.appModule.note.editableNote,
});

const mapDispatchToProps = dispatch => ({
  updateEditableNote(note) {
    dispatch(actions.note.updateEditableNote(note));
  },
  saveNote(note) {
    dispatch(actions.note.saveNote(note));
  },
});
const modalFormContainer = connect(mapStateToProps, mapDispatchToProps)(ModalForm);

export default modalFormContainer;
