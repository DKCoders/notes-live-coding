import {
  UPDATE_NOTES,
  SET_SEARCH_TERM,
  UPDATE_EDITABLE_NOTE,
} from "./types";
import update from "immutability-helper/index";

export const initialState = {
  notes: {},
  searchTerm: '',
  editableNote: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NOTES: {
      return update(state, {
        notes: { $merge: action.notes },
      });
    }
    case SET_SEARCH_TERM: {
      return update(state, {
        searchTerm: { $set: action.searchTerm },
      });
    }
    case UPDATE_EDITABLE_NOTE: {
      return update(state, {
        editableNote: { $set: action.note },
      });
    }
    default:
      return state;
  }
};
