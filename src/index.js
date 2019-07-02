import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'smartmenus/dist/jquery.smartmenus';
import 'smartmenus/dist/css/sm-blue/sm-blue.css';
import 'smartmenus/dist/css/sm-core-css.css';
import locale_en from 'react-intl/locale-data/en';
import locale_ne from 'react-intl/locale-data/ne';
import { addLocaleData } from 'react-intl';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducer/index';
import thunk from 'redux-thunk';
// import { IntlProvider } from 'react-intl';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer /* 9preloadedState, */,
  composeEnhancer(applyMiddleware(thunk))
);

// let state = store.getState();

addLocaleData(locale_en);
addLocaleData(locale_ne);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
