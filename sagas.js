import {all} from 'redux-saga/effects';

import dashboardSaga from './app/containers/LoginScreen/saga';
// COMPONENT IMPORTS

export default function* rootContainerSaga() {
  yield all([
    // COMPONENT ADD
    dashboardSaga(),
  ]);
}
