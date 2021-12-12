import {combineReducers} from 'redux';

import dashboardReducer from './app/containers/LoginScreen/reducer';

export default combineReducers({
  dashboard: dashboardReducer,
});

// Root Reducer
// export default (state, action) => {
//   return combinedReducers(state, action);
// };
