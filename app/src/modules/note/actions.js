import {
  UPDATE_NOTES,
  FETCH_NOTES,
  ERROR_FETCH_NOTES,
  SET_SEARCH_TERM,
  UPDATE_EDITABLE_NOTE,
  SAVE_NOTE,
  ERROR_SAVE_NOTE,
  DELETE_NOTE,
  SUCCESS_DELETE_NOTE,
  ERROR_DELETE_NOTE,
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
export const saveNote = note => ({
  type: SAVE_NOTE,
  note,
});
export const errorSaveNote = () => ({ type: ERROR_SAVE_NOTE });
export const deleteNote = note => ({
  type: DELETE_NOTE,
  note,
});
export const successDeleteNote = noteId => ({
  type: SUCCESS_DELETE_NOTE,
  noteId,
});
export const errorDeleteNote = () => ({ type: ERROR_DELETE_NOTE });
