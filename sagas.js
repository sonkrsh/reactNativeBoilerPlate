import {all} from 'redux-saga/effects';

import dashboardSaga from './app/containers/LoginScreen/saga';

export default function* rootContainerSaga() {
  yield all([dashboardSaga()]);
}
