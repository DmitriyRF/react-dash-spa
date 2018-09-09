import * as types from '../actionTypes';

const initialState = {
  current: 1,
  items: []
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.COMPANIES_FETCHED:
      return { ...state, items: action.payload.companies };
    case types.COMPANY_CHANGE:
      return { ...state, current: action.payload.companyID };
    default:
      return state;
  }
}
