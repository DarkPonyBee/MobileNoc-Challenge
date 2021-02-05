import {call, delay, put, race, take, takeLatest} from 'redux-saga/effects';
import {fetchListAsync} from 'src/actions/tasksActions';
import API from '../api';

export function* fetchListSaga(
  action: ReturnType<typeof fetchListAsync.request>,
) {
  try {
    const {response} = yield race({
      response: call(API.fetchTasks, action.payload),
      cancel: take(fetchListAsync.cancel),
      failed: take(fetchListAsync.failure),
      timeout: delay(60000),
    });
    yield put(fetchListAsync.success(response));
  } catch (error) {
    yield put(fetchListAsync.failure(error));
  }
}

export default function* root() {
  yield takeLatest(fetchListAsync.request, fetchListSaga);
}
