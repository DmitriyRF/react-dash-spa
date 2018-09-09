import employees from 'Data/employees';
import { EMPLOYEES_FETCHED } from '../actionTypes';

export function fetchEmployees() {
  return { type: EMPLOYEES_FETCHED, payload: { employees } };
}
export default { fetchEmployees };
