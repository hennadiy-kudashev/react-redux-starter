import React from 'react';
import { render } from 'react-dom';
import App from './App';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';
//import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//enable it on pre-release state
//registerServiceWorker();
