import companies from 'Data/companies';
import { COMPANIES_FETCHED, COMPANY_CHANGE } from '../actionTypes';

const fetchCompanies = () => {
  return { type: COMPANIES_FETCHED, payload: { companies } };
};
const setCompany = companyID => {
  return { type: COMPANY_CHANGE, payload: { companyID } };
};
export { fetchCompanies, setCompany };
