import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { actions, selectors } from '../modules';

const mapStateToProps = state => ({
  labels: selectors.label.labelsArraySelector(state),
  selectedLabelId: selectors.label.selectedSelector(state),
});

const mapDispatchToProps = dispatch => ({
  selectLabel(labelId) {
    dispatch(actions.label.selectLabel(labelId));
  },
});

const menuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default menuContainer;
