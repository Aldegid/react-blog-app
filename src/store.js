import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

// import reducer from './reducers';
import rootReducer from './redux';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // reducer,
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
