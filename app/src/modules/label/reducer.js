import update from 'immutability-helper';
import { UPDATE_LABELS } from './types';

export const initialState = {
  labels: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LABELS: {
      return update(state, {
        labels: { $merge: action.labels }
      });
    }
    default:
      return state;
  }
};
