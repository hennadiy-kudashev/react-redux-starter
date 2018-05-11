import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import initialState from './initialState';

const configureStore = () => {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(require('redux-logger').default);
    middleware.push(require('redux-immutable-state-invariant').default());
  }

  let enhancer = applyMiddleware(...middleware);
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    enhancer = composeWithDevTools(enhancer);
  }
  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
