/* eslint-disable complexity */
import {takeLatest} from 'redux-saga/effects';

import {CHECK} from './constant';

function* todaysShowHandler(props) {
  console.log('saga callled');
  //   const options = {
  //     method: 'POST',
  //     url,
  //     data: payload,
  //   };

  //   try {
  //     const res = yield call(request, options);
  //     yield put(todaysShowSuccess(res.data));
  //   } catch (e) {
  //     yield put(todaysShowFail(e));
  //   }
}

export default function* dashboardSaga() {
  yield takeLatest(CHECK, todaysShowHandler);
}
