import { all, takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_LABELS } from '../modules/label/types';
import { actions } from '../modules';
import api from '../services/api';

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

export default function* labelSaga() {
  yield all([
    watchFetchLabels(),
  ]);
}
