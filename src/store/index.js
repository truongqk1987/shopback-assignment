import reducers from 'reducers';
import { combineReducers } from 'redux';
import { createStore } from 'redux';


const AppReducers = combineReducers({
  ...reducers
})

export default createStore(AppReducers);