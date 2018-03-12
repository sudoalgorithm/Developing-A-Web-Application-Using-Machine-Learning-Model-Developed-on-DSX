import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import jokesReducer from './jokesReducer';

const rootReducer = combineReducers({
  jokes: jokesReducer,
  routing: routerReducer
});

export default rootReducer;