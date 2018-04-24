import { createStore, combineReducers } from 'redux';
import auth from '../reducers/auth';

const configureStore = () => createStore(
  combineReducers({
    auth,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default configureStore;
