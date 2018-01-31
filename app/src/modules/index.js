import { combineReducers } from 'redux';
import {
  reducer as label,
  actions as labelActions,
  selectors as labelSelectors,
} from './label';
import {
  reducer as note,
  actions as noteActions,
  selectors as noteSelectors,
} from './note';

export const actions = {
  label: labelActions,
  note: noteActions,
};

export const selectors = {
  label: labelSelectors,
  note: noteSelectors,
};

export default combineReducers({
  label,
  note,
});
