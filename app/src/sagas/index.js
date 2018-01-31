import { all } from 'redux-saga/effects';
import labelSaga from './label';
import noteSaga from './note';

export default function* rootSaga() {
  yield all([
    labelSaga(),
    noteSaga(),
  ]);
}
