import { all, takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_NOTES, SAVE_NOTE, DELETE_NOTE } from '../modules/note/types';
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

function* saveNote({ note }) {
  try {
    const data = yield call(api.saveNote, note);
    const notes = {
      [data._id]: data,
    };
    yield put(actions.note.updateNotes(notes));
    yield put(actions.note.updateEditableNote(null));
  } catch (error) {
    yield put(actions.note.errorSaveNote());
    throw (error)
  }
}

function* watchSaveNote() {
  yield takeEvery(SAVE_NOTE, saveNote);
}

function* deleteNote({ note }) {
  try {
    yield call(api.deleteNote, note._id);
    yield put(actions.note.successDeleteNote(note._id));
  } catch (error) {
    yield put(actions.note.errorDeleteNote());
    throw (error)
  }
}

function* watchDeleteNote() {
  yield takeEvery(DELETE_NOTE, deleteNote);
}

export default function* noteSaga() {
  yield all([
    watchFetchNotes(),
    watchSaveNote(),
    watchDeleteNote(),
  ]);
};