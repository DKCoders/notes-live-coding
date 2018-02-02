import {
  UPDATE_LABELS,
  FETCH_LABELS,
  ERROR_FETCH_LABELS,
  SELECT_LABEL,
  UPDATE_EDITABLE_LABEL,
  UPDATE_MODAL_LABEL,
  SAVE_LABEL,
  ERROR_SAVE_LABEL,
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
export const updateEditableLabel = label => ({
  type: UPDATE_EDITABLE_LABEL,
  label,
});
export const updateModalLabel = value => ({
  type: UPDATE_MODAL_LABEL,
  value,
});
export const saveLabel = label => ({
  type: SAVE_LABEL,
  label,
});
export const errorSaveLabel = () => ({ type: ERROR_SAVE_LABEL });
