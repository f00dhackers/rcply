import { MOCK_ACTION } from '../actions/mockAction';

// NOTE: Initial application state is an empty object.
// i.e., no predefined state.
const initialState = {};

export default function mock(state = initialState, action) {
  switch (action.type) {
  case MOCK_ACTION:
    return {
      ...state,
      mockData: action.data
    };
  default:
    return state;
  }
}
