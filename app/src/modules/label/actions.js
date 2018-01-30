import {
  UPDATE_LABELS,
  FETCH_LABELS,
  ERROR_FETCH_LABELS,
} from './types';

export const updateLabels = labels => ({
  type: UPDATE_LABELS,
  labels,
});
export const fetchLabels = () => ({ type: FETCH_LABELS });
export const errorFetchLabels = () => ({ type: ERROR_FETCH_LABELS });
