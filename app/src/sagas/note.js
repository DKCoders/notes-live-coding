import { all, takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_NOTES } from '../modules/note/types';
import { actions } from '../modules';
import api from '../services/api';

function* fetchNotes() {
  try {
    const data = yield call(api.fetchNotes);
    const notes = {};
    data.forEach((note) => { notes[note._id] = note; });
    yield put(actions.note.updateNotes(notes));
  } catch (error) {
    yield put(actions.note.errorFetchNotes());
    throw (error)
  }
}

function* watchFetchNotes() {
  yield takeEvery(FETCH_NOTES, fetchNotes);
}

export default function* noteSaga() {
  yield all([
    watchFetchNotes(),
  ]);
};