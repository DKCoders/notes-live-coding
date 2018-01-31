import { connect } from 'react-redux';
import LabelTag from '../components/LabelTag';
import { selectors } from '../modules';

const mapStateToProps = () => (state, { labelId }) => ({
  label: selectors.label.labelByIdSelector(state, { labelId }),
});

const labelTagContainer = connect(mapStateToProps, null)(LabelTag);

export default labelTagContainer;
