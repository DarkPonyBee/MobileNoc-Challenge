import {all} from 'redux-saga/effects';
import tasks from './tasksSagas';

export default function* root() {
  yield all([tasks()]);
}
