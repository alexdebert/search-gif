import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './app/reducers';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

export const history = createHistory();

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(ReduxPromise, routerMiddleware(history)),
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('app/reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}