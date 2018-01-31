import { createSelector } from 'reselect';
import { selectedSelector } from '../label/selectors';

export const notesSelector = state =>
  state.appModule.note.notes;
export const noteByIdSelector = (state, { noteId }) =>
  state.appModule.note.notes[noteId];

export const notesArraySelector = createSelector(
  notesSelector,
  notes => Object.values(notes),
);

export const byLabelSelector = createSelector(
  notesArraySelector,
  selectedSelector,
  (notes, selectedLabelId) => {
    if (!selectedLabelId) {
      return notes;
    }
    return notes.filter(note => note.labels.includes(selectedLabelId));
  },
);

export const noteIdsSelector = createSelector(
  byLabelSelector,
  notes => notes.map(note => note._id),
);