import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/reducer';

const configureStore = () => createStore(combineReducers({
  reducer,
}));

export default configureStore;
