import {compose, createStore, applyMiddleware} from 'redux';

import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const configureStore = () => {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  middleware.push(logger);

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(reducers, compose(...enhancers));

  sagaMiddleware.run(sagas);
  return {store};
};

export default configureStore;
