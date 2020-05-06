import { combineReducers, applyMiddleware  } from 'redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducers from 'reducers';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const AppReducers = combineReducers({
  ...reducers
})

const store = createStore(AppReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;