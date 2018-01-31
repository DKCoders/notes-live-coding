import {
  UPDATE_LABELS,
  FETCH_LABELS,
  ERROR_FETCH_LABELS,
  SELECT_LABEL,
} from './types';

export const updateLabels = labels => ({
  type: UPDATE_LABELS,
  labels,
});
export const fetchLabels = () => ({ type: FETCH_LABELS });
export const errorFetchLabels = () => ({ type: ERROR_FETCH_LABELS });
export const selectLabel = labelId => ({
  type: SELECT_LABEL,
  labelId
});
