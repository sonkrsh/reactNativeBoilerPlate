import {all} from 'redux-saga/effects';

import dashboardSaga from './app/containers/LoginScreen/saga';
// COMPONENT IMPORTS
import homeSaga from './app/containers/Home/saga';
import appSaga from './app/containers/App/saga';

export default function* rootContainerSaga() {
  yield all([
    // COMPONENT ADD
    homeSaga(),
    appSaga(),
    dashboardSaga(),
  ]);
}
