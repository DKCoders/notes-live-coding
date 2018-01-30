import { combineReducers } from 'redux';
import { reducer as label, actions as labelActions } from './label';

export const actions = {
  label: labelActions,
};

export default combineReducers({
  label,
});