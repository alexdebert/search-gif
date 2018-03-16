import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './app/reducers';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import { verifyAuth } from './app/actions/authActions';

export const history = createHistory();

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(reduxThunk, routerMiddleware(history)),
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('app/reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

	store.dispatch(verifyAuth());

  return store;
}