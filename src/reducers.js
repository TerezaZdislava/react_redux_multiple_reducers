//how the application’s state should change in response to each action
//record our initial state, which is an object just like what you’d expect in a regular React state.

import { ADD_ONE, MINUS_ONE } from './actions';

const initialState = {
  number: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ONE:
      console.log('ADD_ONE' + state.number);
      return { ...state, number: state.number + 1 };
    case MINUS_ONE:
      console.log('MINUS_ONE' + state.number);
      return { ...state, number: state.number - 1 };
    default:
      console.log(state);
      return state;
  }
}
export default reducer;
