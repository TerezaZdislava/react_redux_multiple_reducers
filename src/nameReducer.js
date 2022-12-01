import { CHANGE_NAME } from './actions';

const initialState = {
  name: 'terka',
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CHANGE_NAME:
      console.log('CHANGE_NAME' + state.name);
      return {
        ...state,
        name: action.terezka,
      };
    default:
      console.log(state);
      return state;
  }
}
export default reducer;
