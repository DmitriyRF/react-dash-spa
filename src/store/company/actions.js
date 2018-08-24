import * as types from './actionTypes';

export function fetchCompanies() {
  // eslint-disable-next-line global-require
  const companies = require('../../../database.json');
  return { type: types.COMPANIES_FETCHED, companies };
}

export function setCompany(companyID) {
  return { type: types.COMPANY_CHANGE, companyID };
}
