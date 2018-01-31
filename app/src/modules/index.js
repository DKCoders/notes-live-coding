import { combineReducers } from 'redux';
import {
  reducer as label,
  actions as labelActions,
  selectors as labelSelectors,
} from './label';

export const actions = {
  label: labelActions,
};

export const selectors = {
  label: labelSelectors,
};

export default combineReducers({
  label,
});
