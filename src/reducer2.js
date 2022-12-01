import { MULTIPLE } from './actions';

const initialState = {
  multinumber: 2,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MULTIPLE:
      console.log('ADD_ONE' + state.multinumber);
      return { ...state, multinumber: state.multinumber * 2 };
    default:
      console.log(state);
      return state;
  }
}
export default reducer;
