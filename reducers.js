import {combineReducers} from 'redux';

import dashboardReducer from './app/containers/LoginScreen/reducer';
// REDUCER IMPORTS

export default combineReducers({
  // REDUCER ADD
  dashboard: dashboardReducer,
});

// Root Reducer
// export default (state, action) => {
//   return combinedReducers(state, action);
// };
