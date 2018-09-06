import { EMPLOYEES_FETCHED } from '../actionTypes';

const initialState = {
  items: []
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case EMPLOYEES_FETCHED:
      return { ...state, items: action.payload.employees };
    default:
      return state;
  }
}
