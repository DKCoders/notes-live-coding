import {
  UPDATE_NOTES,
  FETCH_NOTES,
  ERROR_FETCH_NOTES,
  SET_SEARCH_TERM,
  UPDATE_EDITABLE_NOTE,
} from './types';

export const updateNotes = notes => ({
  type: UPDATE_NOTES,
  notes,
});
export const fetchNotes = () => ({ type: FETCH_NOTES });
export const errorFetchNotes = () => ({ type: ERROR_FETCH_NOTES });
export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm,
});
export const updateEditableNote = note => ({
  type: UPDATE_EDITABLE_NOTE,
  note,
});
