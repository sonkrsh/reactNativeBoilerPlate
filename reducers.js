import {combineReducers} from 'redux';

import dashboardReducer from './app/containers/LoginScreen/reducer';
// REDUCER IMPORTS
import homeReducer from './app/containers/Home/reducer';
import appReducer from './app/containers/App/reducer';

export default combineReducers({
  // REDUCER ADD
home: homeReducer,
  app: appReducer,
  dashboard: dashboardReducer,
});

// Root Reducer
// export default (state, action) => {
//   return combinedReducers(state, action);
// };
