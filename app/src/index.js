import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'bulma/css/bulma.css';
import './index.css';
import App from './containers/appContainer';
import appModule from './modules';
import rootSaga from './sagas';
import registerServiceWorker from './registerServiceWorker';

const mainReducer = combineReducers({
  appModule,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga, store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
