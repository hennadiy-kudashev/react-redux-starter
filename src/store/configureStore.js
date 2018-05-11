import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';
import initialState from './initialState';

const configureStore = () => {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').default;
    middleware.push(logger);
    const reduxImmutableStateInvariant = require('redux-immutable-state-invariant')
      .default;
    middleware.push(reduxImmutableStateInvariant());
  }

  let enhancer = applyMiddleware(...middleware);
  if (process.env.NODE_ENV !== 'production') {
    enhancer = composeWithDevTools(enhancer);
  }
  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
