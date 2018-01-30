import { all } from 'redux-saga/effects';
import labelSaga from './label';

export default function* rootSaga() {
  yield all([
    labelSaga(),
  ]);
}
