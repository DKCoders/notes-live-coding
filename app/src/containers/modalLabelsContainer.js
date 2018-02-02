import { connect } from 'react-redux';
import ModalLabels from '../components/ModalLabels';
import { selectors, actions } from '../modules';

const mapStateToProps = state => ({
  labels: selectors.label.labelsArraySelector(state),
  editableLabel: state.appModule.label.editableLabel,
});

const mapDispatchToProps = dispatch => ({
  updateEditableLabel(label) {
    dispatch(actions.label.updateEditableLabel(label));
  },
  updateModalLabel(value) {
    dispatch(actions.label.updateModalLabel(value));
  },
  saveLabel(label) {
    dispatch(actions.label.saveLabel(label));
  },
});

const modalLabelsContainer = connect(mapStateToProps, mapDispatchToProps)(ModalLabels);

export default modalLabelsContainer;
