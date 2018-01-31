import { createSelector } from 'reselect';

export const labelsSelector = state =>
  state.appModule.label.labels;
export const selectedSelector = state =>
  state.appModule.label.selected;

export const labelsArraySelector = createSelector(
  labelsSelector,
  labels => Object.values(labels),
);
