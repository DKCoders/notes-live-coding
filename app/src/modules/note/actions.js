import {
  UPDATE_NOTES,
  FETCH_NOTES,
  ERROR_FETCH_NOTES,
} from './types';

export const updateNotes = notes => ({
  type: UPDATE_NOTES,
  notes,
});
export const fetchNotes = () => ({ type: FETCH_NOTES });
export const errorFetchNotes = () => ({ type: ERROR_FETCH_NOTES });