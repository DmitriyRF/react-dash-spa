const getEmployees = state => {
  return {
    employees: state.employees.items.filter(
      employee => employee.companyId === state.company.current
    )
  };
};
const getRawEmployees = state => state.employees.items;
export { getEmployees, getRawEmployees };
