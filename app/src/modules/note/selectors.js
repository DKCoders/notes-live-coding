import { createSelector } from 'reselect';

export const notesSelector = state =>
  state.appModule.note.notes;
export const noteByIdSelector = (state, { noteId }) =>
  state.appModule.note.notes[noteId];

export const noteIdsSelector = createSelector(
  notesSelector,
  notes => Object.keys(notes),
);
