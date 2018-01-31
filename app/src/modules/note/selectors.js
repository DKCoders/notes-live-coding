import { createSelector } from 'reselect';
import { selectedSelector } from '../label/selectors';

const filter = query => (value) => {
  if (typeof value === 'string') {
    return value.toLowerCase().includes(query.toLowerCase());
  } else if (typeof value === 'number') {
    return value.toString().toLowerCase().includes(query.toLowerCase());
  } else if (Array.isArray(value)) {
    return value.filter(filter(query)).length > 0;
  } else if (value !== null && typeof value === 'object') {
    for (const [key, val] of Object.entries(value)) {
      if (key.indexOf('_id') === -1 && filter(query)(val)) {
        return true;
      }
    }
  }
  return false;
};

export const notesSelector = state =>
  state.appModule.note.notes;
export const noteByIdSelector = (state, { noteId }) =>
  state.appModule.note.notes[noteId];
export const searchTermSelector = state =>
  state.appModule.note.searchTerm;

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

export const bySearchTermSelector = createSelector(
  byLabelSelector,
  searchTermSelector,
  (notes, searchTerm) => {
    if(!searchTerm) {
      return notes;
    }
    return notes.filter(filter(searchTerm));
  },
);

export const noteIdsSelector = createSelector(
  bySearchTermSelector,
  notes => notes.map(note => note._id),
);