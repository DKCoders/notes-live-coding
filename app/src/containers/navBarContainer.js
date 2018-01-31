import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { actions } from '../modules';

const mapDispatchToProps = dispatch => ({
  setSearchTerm(searchTerm) {
    dispatch(actions.note.setSearchTerm(searchTerm));
  },
});

const navBarContainer = connect(null, mapDispatchToProps)(NavBar);

export default navBarContainer;