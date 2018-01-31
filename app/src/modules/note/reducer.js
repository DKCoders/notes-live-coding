import {UPDATE_NOTES} from "../types";
import update from "immutability-helper/index";

export const initialState = {
  notes: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NOTES: {
      return update(state, {
        notes: { $merge: action.notes },
      });
    }
    default:
      return state;
  }
};
