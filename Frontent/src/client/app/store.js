import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import createHistory from 'history/createBrowserHistory';

// Import root reducer
import rootReducer from './reducers/index';

// Create store
const store = compose(applyMiddleware(thunk, logger))(createStore)(rootReducer);

// Create history
export const history = syncHistoryWithStore(createHistory(), store);

export default store;