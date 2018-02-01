import { connect } from 'react-redux';
import LabelSelect from '../components/LabelSelect';
import { selectors } from '../modules';

const mapStateToProps = state => ({
  labels: selectors.label.labelsArraySelector(state),
});

const labelSelectContainer = connect(mapStateToProps, null)(LabelSelect);

export default labelSelectContainer;
