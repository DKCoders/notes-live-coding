import update from 'immutability-helper';
import { UPDATE_LABELS, SELECT_LABEL, UPDATE_EDITABLE_LABEL, UPDATE_MODAL_LABEL } from './types';

export const newLabelTemplate = { label: '' };

export const initialState = {
  labels: {},
  selected: null,
  editableLabel: { ...newLabelTemplate },
  modalLabel: false,
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
    case UPDATE_EDITABLE_LABEL: {
      return update(state, {
        editableLabel: { $set: action.label },
      });
    }
    case UPDATE_MODAL_LABEL: {
      return update(state, {
        modalLabel: { $set: action.value },
      });
    }
    default:
      return state;
  }
};
