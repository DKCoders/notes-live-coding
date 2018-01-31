import { UPDATE_NOTES, SET_SEARCH_TERM } from "./types";
import update from "immutability-helper/index";

export const initialState = {
  notes: {},
  searchTerm: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NOTES: {
      return update(state, {
        notes: { $merge: action.notes },
      });
    }
    case SET_SEARCH_TERM: {
      console.log(action.searchTerm);
      return update(state, {
        searchTerm: { $set: action.searchTerm },
      });
    }
    default:
      return state;
  }
};
