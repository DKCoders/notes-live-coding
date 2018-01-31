import { createSelector } from 'reselect';

export const notesSelector = state =>
  state.appModule.note.notes;

export const noteIdsSelector = createSelector(
  notesSelector,
  notes => Object.keys(notes),
);
