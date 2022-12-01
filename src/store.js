import { combineReducers, createStore } from 'redux';
import reducer from './reducers';
import reducer2 from './reducer2';
import reducer3 from './nameReducer';

const store = createStore(
  combineReducers({
    number: reducer,
    multinumber: reducer2,
    name: reducer3,
  }),
);
// const store = createStore(reducer);
export default store;
