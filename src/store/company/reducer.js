import * as types from './actionTypes';

const initialState = {
  current: 1,
  companies: []
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.COMPANIES_FETCHED:
      return { ...state, companies: action.companies };
    case types.COMPANY_CHANGE:
      return { ...state, current: action.companyID };
    default:
      return state;
  }
}
// selectors
export function getCompaniesForSelect(state) {
  return state.company.companies.map(company => {
    return { id: company.id, title: company.title };
  });
}

export function getCurrentCompanyObject(state) {
  return state.company.companies.find(
    company => company.id === state.company.current
  );
}
export function getCurrentCompany(state) {
  return state.company.current;
}
export function getEmployees(state) {
  return getCurrentCompanyObject(state).employees || [];
}
