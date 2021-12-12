/* eslint-disable complexity */
/*
 *
 * Dashboard reducer
 *
 */
import {CHECK} from './constant';
import produce from 'immer';

export const initialState = {
  loginData: null,
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHECK:
        draft.loginData = 'Dummy Data';
        break;
    }
  });

export default dashboardReducer;
