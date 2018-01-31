import update from 'immutability-helper';
import { UPDATE_LABELS, SELECT_LABEL } from './types';

export const initialState = {
  labels: {},
  selected: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LABELS: {
      return update(state, {
        labels: { $merge: action.labels },
      });
    }
    case SELECT_LABEL: {
      return update(state, {
        selected: { $set: action.labelId },
      });
    }
    default:
      return state;
  }
};
