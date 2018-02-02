import { all, takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_LABELS, SAVE_LABEL } from '../modules/label/types';
import { actions } from '../modules';
import api from '../services/api';
import { newLabelTemplate } from '../modules/label/reducer';

function* fetchLabels() {
  try {
    const data = yield call(api.fetchLabels);
    const labels = {};
    data.forEach(label => { labels[label._id] = label; });
    yield put(actions.label.updateLabels(labels));
  } catch (error) {
    yield put(actions.label.errorFetchLabels());
    throw (error);
  }
}

function * watchFetchLabels() {
  yield takeEvery(FETCH_LABELS, fetchLabels);
}

function* saveLabel({ label }) {
  try {
    const data = yield call(api.saveLabel, label);
    const labels = {
      [data._id]: data,
    };
    yield put(actions.label.updateLabels(labels));
    yield put(actions.label.updateEditableLabel({...newLabelTemplate}));
  } catch (error) {
    yield put(actions.label.errorSaveLabel());
    throw (error)
  }
}

function* watchSaveLabel() {
  yield takeEvery(SAVE_LABEL, saveLabel);
}

export default function* labelSaga() {
  yield all([
    watchFetchLabels(),
    watchSaveLabel(),
  ]);
}
